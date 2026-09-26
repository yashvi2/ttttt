// Narrative rules: phases, clues, deductions, phone messages and objectives.
import { SISTERS } from '../data/common.js';

export const PHASES = {
  1: 'Arrival & Adjustment',
  2: 'City Integration',
  3: 'Investigation Intensifies',
  4: 'Pursuit',
  5: 'Reunion',
  6: 'Epilogue',
};

export class Story {
  constructor(game) {
    this.g = game;
  }
  get s() { return this.g.state; }
  get r() { return this.g.route; }
  get sisterName() { return SISTERS[this.r.sister].name; }

  npc(id) { return this.r.npcs.find((n) => n.id === id); }
  rel(id) { return (this.s.npcs[id] && this.s.npcs[id].rel) || 0; }

  // ---------- clues ----------
  hasClue(id) { return !!this.s.clues[id]; }
  clueCountFor(dId) {
    const d = this.r.deductions.find((x) => x.id === dId);
    return d.clues.filter((c) => this.hasClue(c)).length;
  }
  deductionOpen(d) {
    if (this.s.deductions[d.id]) return false;
    if (this.s.phase < d.phase) return false;
    if (d.requires && !d.requires.every((x) => this.s.deductions[x])) return false;
    if (d.id !== 'where' && !this.s.deductions.where) return false;
    return true;
  }
  clueAllowed(id) {
    const c = this.r.clues[id];
    if (!c) return false;
    const d = this.r.deductions.find((x) => x.id === c.d);
    if (this.s.deductions[d.id]) return false; // already solved; no need
    if (d.id === 'where') return this.s.phase >= 2;
    if (!this.s.deductions.where) return false;
    if (d.requires && !d.requires.every((x) => this.s.deductions[x])) return false;
    return this.s.phase >= 3;
  }

  addClue(id, { silent = false } = {}) {
    if (this.hasClue(id) || !this.r.clues[id]) return false;
    this.s.clues[id] = this.s.day;
    const c = this.r.clues[id];
    this.g.audio.clue();
    if (!silent) this.g.ui.toast(`New clue pinned to your board: “${c.title}”`, '📌', 4200);
    this.s.dayLog.push({ kind: 'clue', text: c.title });
    const d = this.r.deductions.find((x) => x.id === c.d);
    if (this.clueCountFor(d.id) === d.need && this.deductionOpen(d)) {
      setTimeout(() => this.g.ui.toast('You have enough to make a deduction — open your Mystery Board (B)', '🧩', 5200), 900);
    }
    return true;
  }

  /** Clue this NPC can share now, or a locked one (needs more relationship). */
  npcClue(npcId) {
    const n = this.npc(npcId);
    let locked = null;
    for (const c of n.clues || []) {
      if (this.hasClue(c.id) || !this.clueAllowed(c.id)) continue;
      if (c.requires && !c.requires.every((x) => this.s.deductions[x])) continue;
      if (this.s.phase < c.minPhase) continue;
      if (this.rel(npcId) >= c.minRel) return { clue: c };
      locked = locked || c;
    }
    return locked ? { locked } : null;
  }

  // ---------- deductions ----------
  solve(dId) {
    const d = this.r.deductions.find((x) => x.id === dId);
    this.s.deductions[dId] = this.s.day;
    this.s.dayLog.push({ kind: 'deduction', text: d.q });
    this.g.audio.chime();
    if (dId === 'where' && this.s.phase < 3) this.setPhase(3);
    if (dId === 'meet') this.g.startPursuit();
    this.checkMessages();
    return d;
  }

  setPhase(p) {
    if (this.s.phase >= p) return;
    this.s.phase = p;
    this.g.onPhase(p);
  }

  tutorialDone(id) {
    if (this.s.phase !== 1 || this.s.tutorial[id]) return;
    this.s.tutorial[id] = true;
    const t = this.r.tutorial.find((x) => x.id === id);
    if (t) this.g.ui.toast(`✓ ${t.text}`, '🗺️', 3000);
    if (this.r.tutorial.every((x) => this.s.tutorial[x.id])) {
      setTimeout(() => this.setPhase(2), 1200);
    }
  }

  // ---------- messages ----------
  checkMessages() {
    const s = this.s;
    for (const m of this.r.messages) {
      if (s.firedMessages[m.id]) continue;
      const w = m.when;
      if (w.day != null && s.day < w.day) continue;
      if (w.day != null && s.day === w.day && w.hour != null && s.time < w.hour) continue;
      if (w.phase != null && s.phase < w.phase) continue;
      if (w.deduction && !s.deductions[w.deduction]) continue;
      if (w.deductions && !w.deductions.every((x) => s.deductions[x])) continue;
      s.firedMessages[m.id] = true;
      s.messages.push({ id: m.id, from: m.from, text: m.text, day: s.day, time: s.time, read: false });
      this.g.audio.buzz();
      this.g.ui.toast(`${m.from}: ${m.text.length > 70 ? m.text.slice(0, 68) + '…' : m.text}`, '💬', 5000);
      if (m.clue) this.addClue(m.clue);
      if (m.perk) this.g.grantPerk(m.perk, true);
    }
  }
  unread() { return this.s.messages.filter((m) => !m.read).length; }

  // ---------- objectives ----------
  objective() {
    const s = this.s, r = this.r, sis = this.sisterName;
    if (s.phase === 1) {
      const next = r.tutorial.find((t) => !s.tutorial[t.id]);
      return { label: `Phase 1 · ${PHASES[1]}`, html: next ? next.text : 'Settle in.', sub: `${Object.keys(s.tutorial).length}/${r.tutorial.length} done` };
    }
    if (s.phase === 2) {
      const d = r.deductions[0];
      const n = this.clueCountFor('where');
      const txt = n >= d.need ? '<b>Open your Mystery Board (B)</b> — you can make a deduction.' : `Live your life: eat, work, explore, make friends. Something about ${sis} doesn't add up… <span style="color:#b8b2a6">(${n}/${d.need} clues)</span>`;
      return { label: `Phase 2 · ${PHASES[2]}`, html: txt };
    }
    if (s.phase === 3) {
      const open = r.deductions.filter((d) => this.deductionOpen(d));
      const ready = open.find((d) => this.clueCountFor(d.id) >= d.need);
      if (ready) return { label: `Phase 3 · ${PHASES[3]}`, html: `<b>Open your Mystery Board (B)</b> — “${ready.q}” is ready.` };
      const parts = open.map((d) => `${d.q} <span style="color:#b8b2a6">(${this.clueCountFor(d.id)}/${d.need})</span>`);
      return { label: `Phase 3 · ${PHASES[3]}`, html: `${sis} is in the city. Ask around.<br>${parts.join('<br>')}` };
    }
    if (s.phase === 4 && s.pursuit) {
      const st = r.pursuit.steps[s.pursuit.step];
      const dn = this.g.districtName(st.district);
      const left = Math.max(0, s.pursuit.left);
      const t = `${Math.floor(left / 60)}:${String(Math.floor(left % 60)).padStart(2, '0')}`;
      return { label: `Phase 4 · ${PHASES[4]}`, html: `Follow the lanterns → <b>${st.name}</b> (${dn})`, timer: left > 0 ? t : 'She\'s moved on — follow the lantern trail' };
    }
    if (s.phase === 6 && s.epilogue) {
      const poi = this.g.findPoi(r.epilogue.goal);
      return { label: `Epilogue · ${SISTERS[r.epilogue.as].name}`, html: `Go to <b>${poi ? poi.name : 'the café'}</b>` };
    }
    return null;
  }

  // Hints for the People app.
  hintFor(npcId) {
    const x = this.npcClue(npcId);
    if (!x) return null;
    if (x.clue) return 'Might know something about ' + this.sisterName;
    return 'Seems to know something — get closer';
  }
}
