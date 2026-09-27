// LAST SEEN — game loop. Builds on the London-Newyork engine (city, traffic,
// player, UI) and replaces its story, daily loop and endings.
import * as THREE from 'three';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { Game } from '../game/game.js';
import { newState, saveGame, loadGame, loadMeta, saveMeta } from '../game/state.js';
import { resolvePos } from '../world/city.js';
import { makeFigure } from '../world/characters.js';
import { fmtTime, esc } from '../ui/ui.js';
import { openMap } from '../ui/phone.js';
import {
  ROUTE, MAYA, LILY, NPCS, CLUES, DEDUCTIONS, LEADS, TIP_TEMPLATES, FALSE_RESULTS, EVENTS, ENDINGS,
  INTRO, HOW_TO, WEEKDAYS, CASE_DAYS, MISSING_BEFORE, isTherapyDay, isShiftNight,
} from './data.js';
import { Mind, DistortShader, freshMind, clamp } from './mind.js';
import { Visions } from './visions.js';
import { Apartment, HOTSPOTS } from './apartment.js';
import { renderPortrait, flyerTexture } from './poster.js';
import { TALK, therapySession, momCall, bellevueCall } from './talk.js';
import { titleScreen, playIntro, openAltPhone, openWall, callPrompt, endingScreen } from './panels.js';

const SAVE = 'lastSeen.save.v1';
const META = 'lastSeen.meta.v1';
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const inHours = (t, [a, b]) => t >= a && t <= b;

function newAltState() {
  const s = newState(ROUTE);
  s.mind = freshMind();
  s.leads = [];
  s.job = { strikes: 0, current: null, done: {}, fired: false, leaveUntil: 0, nextIssue: 0 };
  s.sightDone = {};
  s.plan = [];
  s.time = 7.75;
  s.inside = true;
  return s;
}

export class AltGame extends Game {
  constructor() {
    super();
    this.route = ROUTE;
    this.timeScale = 2.2;
    this.story = {
      objective: () => null, npcClue: () => null, tutorialDone: () => {}, hintFor: () => null,
      unread: () => this.unread(), checkMessages: () => this.checkEvents(), addClue: (id) => this.clue(id),
    };
    this.distortPass = new ShaderPass(DistortShader);
    this.composer.insertPass(this.distortPass, this.composer.passes.length - 1);
    this.mind = new Mind(this);
    this.visions = new Visions(this);
    this.inside = false;
    this.flyerGroup = new THREE.Group();
    this.scene.add(this.flyerGroup);
    this.scanEl = document.createElement('div');
    this.scanEl.className = 'scan-layer';
    document.getElementById('ui').appendChild(this.scanEl);
    this.resize();
  }

  // ---------------------------------------------------------------- rendering
  renderFrame() {
    if (!this.distortPass) { super.renderFrame(); return; }
    const view = this.inside && this.apartment ? this.apartment : this;
    this.renderPass.scene = view.scene;
    this.renderPass.camera = view.camera;
    this.composer.render();
    this.labels.render(view.scene, view.camera);
  }
  resize() {
    super.resize();
    if (this.distortPass) this.distortPass.uniforms.uRes.value.set(window.innerWidth, window.innerHeight);
    if (this.apartment) this.apartment.setAspect(window.innerWidth / window.innerHeight);
  }
  hideAllLabels() { for (const el of this.labels.domElement.children) el.style.display = 'none'; }

  portrait() {
    if (!this._portrait) this._portrait = renderPortrait(this.renderer, () => this.renderFrame());
    if (!this._flyerTex) this._flyerTex = flyerTexture(this._portrait);
    return this._portrait;
  }

  // ---------------------------------------------------------------- title & start
  async boot() {
    for (;;) {
      const a = await this.title();
      if (a === 'continue') await this.continueGame(); else await this.newGame();
      await new Promise((r) => { this._toTitle = r; });
    }
  }

  async title() {
    this.mode = 'title';
    this.inside = false;
    this.ui.showHud(false);
    this.route = ROUTE;
    this.state = newAltState();
    this.state.time = 22.6;
    this.state.weather = 'rain';
    this.enterDistrict('brooklyn', [-20, 4], { quiet: true });
    this.titleT = 0;
    const portrait = this.portrait();
    this.placeFlyers();
    return titleScreen(this, { portrait, save: loadGame(SAVE), meta: loadMeta(META) });
  }

  updateTitle(dt) {
    this.titleT += dt * 0.04;
    const a = this.titleT;
    this.camera.position.set(-24 + Math.sin(a) * 6, 2.2 + Math.sin(a * 0.8) * 0.3, -2 + a * 3 % 30);
    this.camera.lookAt(-30, 2.4, 20 + (a * 3 % 30));
    if (this.player) this.player.fig.visible = false;
    this.mind.frame(dt, this.distortPass);
    this.distortPass.uniforms.uBreak.value = 0.35;
  }

  async newGame() {
    this.mode = 'intro';
    this._ending = null;
    this.state = newAltState();
    this.state.journal = [];
    this.rollWeather();
    this.state.weather = 'cloudy';
    this._setupPlayer(MAYA.look);
    this.enterDistrict('brooklyn', null, { quiet: true });
    await playIntro(this.ui, INTRO, this.portrait());
    this.planDay();
    this.startPlay();
    this.enterApartment(true);
    this.run(() => this.ui.cards(HOW_TO, { title: 'Last Seen' }));
  }

  async continueGame() {
    const saved = loadGame(SAVE);
    this.mode = 'intro';
    this._ending = null;
    this.state = { ...newAltState(), ...saved, mind: { ...freshMind(), ...saved.mind } };
    this._setupPlayer(MAYA.look);
    this.enterDistrict(this.state.district, this.state.pos, { quiet: true });
    this.startPlay();
    if (this.state.inside) this.enterApartment(true);
    this.ui.toast(`Day ${this.state.day}, ${fmtTime(this.state.time % 24)}`, '📔');
  }

  saveNow() {
    if (!this.state || this.state.ended || this.mode !== 'play') return;
    this.state.inside = this.inside;
    saveGame(this.state, SAVE);
  }

  quitToTitle() {
    this.saveNow();
    if (this.inside) { this.inside = false; this.hideAllLabels(); }
    this.clearScan();
    super.quitToTitle();
  }

  // ---------------------------------------------------------------- districts
  enterDistrict(id, spawn, opts) {
    super.enterDistrict(id, spawn, opts);
    this.placeFlyers();
    this.visions?.reset();
  }

  onEnterDistrict(id) {
    if (!this.state.visited[id]) this.state.visited[id] = this.state.day;
  }

  npcSlot(n) {
    const s = this.state;
    if (n.fromDay && s.day < n.fromDay) return null;
    if ((n.id === 'sam' && s.flags.samGone) || (n.id === 'dev' && s.flags.devGone)) return null;
    return super.npcSlot(n);
  }

  placeFlyers() {
    for (const c of [...this.flyerGroup.children]) { this.flyerGroup.remove(c); c.geometry.dispose(); }
    if (!this.district?.lamps || !this._flyerTex) return;
    const n = Math.min(40, (this.state.mind.flyers[this.state.district] || 0) * 2);
    const mat = new THREE.MeshStandardMaterial({ map: this._flyerTex, roughness: 0.9, side: THREE.DoubleSide });
    const lamps = this.district.lamps;
    for (let i = 0; i < n; i++) {
      const [x, z] = lamps[(i * 7 + 3) % lamps.length];
      const cx = Math.round(x / 50) * 50, cz = Math.round(z / 50) * 50;
      const dx = x - cx, dz = z - cz;
      const nx = Math.abs(dx) > Math.abs(dz) ? Math.sign(dx) : 0, nz = nx ? 0 : Math.sign(dz);
      const f = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.56), mat);
      f.position.set(x + nx * 0.11, 1.75 + ((i * 13) % 5) * 0.08, z + nz * 0.11);
      f.rotation.y = Math.atan2(nx, nz);
      f.rotation.z = ((i * 17) % 7 - 3) * 0.02;
      this.flyerGroup.add(f);
    }
  }

  // ---------------------------------------------------------------- loop
  update(dt) {
    this.mind.frame(dt, this.distortPass);
    if (this.inside) { this.updateInside(dt); return; }
    super.update(dt);
    const blocked = this.ui.busy > 0 || this.pending > 0;
    this.visions.update(dt);
    this.leadTimer = (this.leadTimer || 0) - dt;
    if (this.leadTimer <= 0 && !blocked) { this.leadTimer = 0.5; this.updateLeads(); }
    if (this.player.photoMode) this.updateScan(); else this.clearScan();
    this.groundCool = Math.max(0, (this.groundCool || 0) - dt);
  }

  updateInside(dt) {
    const s = this.state;
    const blocked = this.ui.busy > 0 || this.pending > 0;
    s.playMs += dt * 1000;
    if (!blocked) this.advanceTime((dt / 60) * this.timeScale);
    this.apartment.update(dt);
    this.ui.prompt(null);
    this.msgTimer -= dt;
    if (this.msgTimer <= 0) { this.msgTimer = 3; if (!blocked) this.checkEvents(); }
    this.saveTimer -= dt;
    if (this.saveTimer <= 0) { this.saveTimer = 60; if (!blocked) this.saveNow(); }
    this.hudTimer -= dt;
    if (this.hudTimer <= 0) {
      this.hudTimer = 0.25;
      this.updateHud();
      this.refreshApartment();
      this.audio.setEnv({ style: this.route.id, night: 0.5, rain: s.weather === 'rain', inside: false, transit: false, park: true });
    }
  }

  advanceTime(hours, exert = 1) {
    const s = this.state, n = s.needs;
    const before = n.hunger;
    s.time += hours;
    n.hunger = clamp(n.hunger - hours * 5.2, 0, 100);
    n.energy = clamp(n.energy - hours * 3.4 * exert, 0, 100);
    if (before >= 15 && n.hunger < 15 && s.mind.obsession <= 60) this.ui.toast('You haven\'t eaten. You should eat something.', '🍞');
    this.mind.hours(hours);
    if (this.player) this.player.sprintMul = n.hunger < 10 || n.energy < 10 ? 0.75 : 1;
    if (s.time >= 28.5 && this.mode === 'play' && !this._ending) this.run(() => this.passOut());
  }

  // ---------------------------------------------------------------- HUD
  updateHud() {
    const s = this.state, m = s.mind;
    const def = this.inside ? { name: 'Home', sub: 'The apartment' } : this.district.def;
    const t = s.time % 24;
    const wd = WEEKDAYS[(s.day - 1) % 7];
    this.ui.clock.innerHTML = `<div class="time">${fmtTime(t)}</div><div class="meta">${esc(wd)} · Day ${s.day} · Lily missing ${s.day + MISSING_BEFORE} days</div><div class="place">${esc(def.name)} <small>${esc(def.sub)}</small></div>`;
    const obj = this.objective();
    this.ui.setObjective(obj.label, obj.html);
    const bar = (v, c) => `<div class="bar"><i style="width:${clamp(v, 0, 100)}%;background:${c}"></i></div>`;
    const forgetting = m.obsession > 60;
    this.ui.needs.innerHTML = `
      <div class="bd-row"><span>BREAKDOWN</span><b>${Math.round(m.breakdown)}</b></div>
      <div class="bd-bar"><i style="width:${m.breakdown}%"></i>${[25, 50, 75].map((x) => `<s style="left:${x}%"></s>`).join('')}</div>
      <div class="need">Obsession ${bar(m.obsession, '#e8b04e')}</div>
      <div class="need">Isolation ${bar(m.isolation, '#8cc6f2')}</div>
      <div class="need">Hunger ${forgetting ? '<span class="forgot">not noticing</span>' : bar(s.needs.hunger, '#d8a870')}</div>
      <div class="need">Energy ${bar(s.needs.energy, '#9ab0c8')}</div>
      <div class="money"><span>Meds today</span><span>${this.mind.onMeds() ? 'taken' : '—'}</span></div>
      <div class="money"><span>Case inactive in</span><span>${Math.max(0, CASE_DAYS - s.day)} days</span></div>
      <div class="money"><span>Wallet</span><span>$${Math.floor(s.money)}</span></div>`;
    const hud = document.getElementById('hud');
    hud.classList.toggle('shaky', m.breakdown >= 80);
    hud.classList.toggle('ls-hud', true);
    const unread = this.unread();
    this.ui.setKeys(this.inside
      ? [['1–9', 'rooms'], ['Tab', `phone${unread ? ` (${unread})` : ''}`], ['B', 'the wall']]
      : [['E', 'interact'], ['Tab', `phone${unread ? ` (${unread})` : ''}`], ['B', 'the wall'], ['M', 'map'], ['C', 'camera'], ['R', 'ground yourself'], ['Shift', 'run']]);
    this.ui.minimap.style.display = this.inside ? 'none' : '';
  }

  objective() {
    const s = this.state, m = s.mind;
    if (s.flags.lilyComing) return { label: 'Tonight', html: '<b>Be home tonight.</b> She\'s coming.' };
    if (s.deductions.reach && !s.flags.found) {
      const burned = (m.burned.diner || 0) > s.day;
      return { label: 'Lily', html: burned ? 'She swapped her shifts. <b>Give it a few days.</b> Get steady.' : '<b>Mercer Diner</b>, Midtown · 11pm–6am, Tuesday–Saturday nights.<br><span class="s">Go calm. If you frighten her, she\'ll run.</span>' };
    }
    const lead = s.leads.find((l) => l.status === 'active');
    if (lead) return { label: `Following · ${lead.from}`, html: `${esc(lead.text)}<br><span class="s">${esc(this.districtName(lead.district))} · ${fmtTime(lead.hours[0] % 24)}–${fmtTime(lead.hours[1] % 24)}${lead.days[0] > s.day ? ` · from day ${lead.days[0]}` : ''}</span>` };
    if (isTherapyDay(s.day) && m.lastSession !== s.day && s.time < 18.5) return { label: 'Today', html: 'Therapy with Dr. Rao, <b>4–6pm</b> · Upper West Side' };
    const j = s.job;
    if (j.current && !j.fired && j.leaveUntil <= s.day) return { label: `Work · due day ${j.current.due}`, html: esc(j.current.brief) };
    const newTips = s.leads.filter((l) => l.status === 'new').length;
    return { label: 'Keep going', html: newTips ? `${newTips} new tip${newTips > 1 ? 's' : ''} on your phone.` : 'Look after yourself. Keep looking. Both.' };
  }

  drawMap(cv, big) {
    super.drawMap(cv, big);
    if (!this.visions.showHunches() || !this.player) return;
    const g = cv.getContext('2d');
    const W = cv.width, range = big ? 140 : 62, p = this.player.pos;
    const cx = big ? 0 : p.x, cz = big ? 0 : p.z, sc = W / (range * 2);
    g.save();
    if (!big) { g.beginPath(); g.arc(W / 2, W / 2, W / 2, 0, Math.PI * 2); g.clip(); }
    g.font = `700 ${big ? 26 : 22}px Barlow, Arial, sans-serif`;
    g.textAlign = 'center';
    const pulse = 0.55 + Math.sin(performance.now() / 300) * 0.35;
    for (const h of this.visions.hunches) {
      g.fillStyle = `rgba(226,70,60,${pulse})`;
      g.fillText('?', (h.x - cx) * sc + W / 2, (h.z - cz) * sc + W / 2 + 8);
    }
    g.restore();
  }

  unread() { return this.state.messages.filter((m) => !m.read).length; }
  glitchText(a, b) { return this.state.mind.breakdown > 75 && Math.random() < 0.3 ? a : b; }

  // ---------------------------------------------------------------- input
  onKey(e) {
    if (this.mode !== 'play') return false;
    if (this.player?.photoMode) return super.onKey(e);
    const k = e.key.toLowerCase();
    if (this.ui.busy > 0 || this.pending > 0) return false;
    if (k === 'tab' || k === 'p' || k === 'escape') { openAltPhone(this, k === 'escape' ? 'settings' : null); return true; }
    if (k === 'b') { openWall(this); return true; }
    if (this.inside) {
      if (/^[1-9]$/.test(k)) { this.aptAction(HOTSPOTS[+k - 1].id); return true; }
      return ['e', 'enter', 'c', 'm', 'r'].includes(k);
    }
    if (k === 'e' || k === 'enter') { this.interact(); return true; }
    if (k === 'j') { openAltPhone(this, 'photos'); return true; }
    if (k === 'm') { openMap(this); return true; }
    if (k === 'c') { this.togglePhoto(true); return true; }
    if (k === 'r') { this.ground(); return true; }
    return false;
  }

  findTarget() {
    const base = super.findTarget();
    const d = this.visions.itemTarget();
    if (d != null) return { kind: 'item', label: 'Pick it up', sub: 'something she dropped' };
    return base;
  }

  interact() {
    if (this.inside) return;
    const t = this.findTarget();
    if (!t) return;
    this.run(async () => {
      if (t.kind === 'item') await this.pickItem();
      else if (t.kind === 'npc') await this.talkTo(t.npc);
      else if (t.kind === 'poi') await this.usePoi(t.poi);
    });
  }

  ground() {
    if (this.groundCool > 0) { this.ui.toast('Breathe. Again in a moment.', '🫧', 1600); return; }
    const m = this.state.mind;
    this.groundCool = 20;
    this.mind.calm = 1;
    const gone = this.visions.ground();
    if (m.groundUses < 6) { m.groundUses++; this.mind.add('breakdown', m.groundBoost ? -2 : -1, { quiet: true }); this.mind.add('obsession', -1, { quiet: true }); }
    this.ui.toast(gone ? '…and she\'s gone. She was never there.' : 'Five things you can see. Four you can hear. Three you can touch.', '🫧', 3200);
  }

  // ---------------------------------------------------------------- people
  say(n, lines) {
    const st = this.npcState(n.id);
    return this.ui.dialogue({ name: n.name, role: n.role, color: '#' + new THREE.Color(n.look.top).lerp(new THREE.Color(0xffffff), 0.45).getHexString(), rel: Math.max(0, Math.round(st.rel)), lines });
  }
  async ask(n, lines, opts) {
    const st = this.npcState(n.id);
    const k = await this.ui.dialogue({ name: n.name, role: n.role, color: '#' + new THREE.Color(n.look.top).lerp(new THREE.Color(0xffffff), 0.45).getHexString(), rel: Math.max(0, Math.round(st.rel)), lines, choices: opts.map((text) => ({ text })) });
    return Math.max(0, k === -1 ? opts.length - 1 : k);
  }

  async talkTo(n) {
    const st = this.npcState(n.id);
    const fn = TALK[n.id];
    if (fn) await fn(this, n, st);
    if (!st.met) { st.met = true; st.rel = Math.max(st.rel, 1); }
    st.seen = this.state.day;
    if (['dev', 'rosa', 'jess', 'sam', 'priya'].includes(n.id)) this.social(3);
  }

  trust(id, d) {
    const st = this.npcState(id);
    st.rel = clamp(st.rel + d, -2, 5);
    const n = NPCS.find((x) => x.id === id);
    this.ui.toast(`${n.name.split(' ')[0]} ${d > 0 ? 'trusts you a little more' : 'pulls back'}`, d > 0 ? '🤍' : '🥀', 2200);
  }
  social(amount) {
    this.state.mind.socialToday = true;
    this.mind.add('isolation', -amount, { quiet: amount < 10 });
  }
  async eatWith(n, hunger, cost = 0) {
    const s = this.state;
    s.money -= cost;
    s.needs.hunger = clamp(s.needs.hunger + hunger, 0, 100);
    this.social(12);
    this.mind.add('breakdown', -3);
    this.advanceTime(1);
  }
  async fadeTime(hours, sub, text) {
    this.advanceTime(hours);
    const done = await this.ui.fade(text || '', 1500, sub);
    done();
  }
  samLeaves() {
    const s = this.state;
    s.flags.samGone = true;
    this.pushMsg('Sam', 'I love you. I can\'t watch this anymore. Call me when you want help, not a search party.');
    this.mind.add('isolation', 15);
  }

  // ---------------------------------------------------------------- case
  clue(id) {
    const s = this.state;
    if (s.clues[id]) return;
    s.clues[id] = s.day;
    this.audio.clue();
    this.ui.toast(`Pinned to the wall: “${CLUES[id].title}”`, '🧷', 4200);
    const d = DEDUCTIONS.find((x) => x.id === CLUES[id].d);
    if (d.clues.filter((c) => s.clues[c]).length === d.need) setTimeout(() => this.ui.toast('Something on the wall is starting to add up. (B)', '🧩', 4200), 900);
  }
  solve(id) {
    const s = this.state;
    s.deductions[id] = s.day;
    this.audio.chime();
    if (id === 'left') this.mind.apply({ acceptance: 8, breakdown: 4 });
    else if (id === 'reach') this.mind.apply({ obsession: 6 });
    else this.mind.add('obsession', 3);
    this._updateBeacon();
    this.saveNow();
  }

  pushMsg(from, text, extra = {}) {
    const s = this.state;
    s.messages.push({ from, text, day: s.day, time: s.time, read: false, ...extra });
    this.audio.buzz();
    this.ui.toast(`${from}: ${text.length > 72 ? text.slice(0, 70) + '…' : text}`, extra.voicemail ? '🔊' : '💬', 5000);
  }

  checkEvents() {
    const s = this.state;
    if (!s || this._ending) return;
    const due = (e) => s.day > e.day || (s.day === e.day && s.time >= e.hour);
    for (const e of [...EVENTS, ...s.plan]) {
      if (s.firedMessages[e.id] || !due(e)) continue;
      s.firedMessages[e.id] = true;
      if (e.kind === 'text') {
        this.pushMsg(e.from, e.text);
        if (e.clue) this.clue(e.clue);
        if (e.mind) this.mind.apply(e.mind);
      } else if (e.kind === 'lead') this.addLead(LEADS[e.lead], e.lead);
      else if (e.kind === 'tip') this.randomTip(e.from);
      else if (e.kind === 'call') this.run(() => this.incomingCall(e.call));
      else if (e.kind === 'event') this[e.fn](e);
    }
  }

  planDay() {
    const s = this.state, m = s.mind, d = s.day;
    s.plan = s.plan.filter((e) => e.day >= d - 1);
    const add = (e) => s.plan.push({ id: `p${d}_${e.kind}_${s.plan.length}`, day: d, ...e });
    if (d !== 6 && Math.random() < 0.35 + m.isolation / 300) add({ kind: 'call', call: 'mom', hour: 18 + Math.random() * 3 });
    const recent = d - m.flyersDay <= 3 || Object.values(m.flyers).reduce((a, b) => a + b, 0) >= 12;
    if (recent && Math.random() < 0.65) add({ kind: 'tip', from: 'Tip line', hour: 9 + Math.random() * 8 });
    if (!s.flags.jessQuiet && Math.random() < 0.4) add({ kind: 'text', from: 'Jess', text: pick(['anything?? the group is asking. I posted your update', 'someone on the forum wants to do a psychic reading. hear me out', 'going to post more flyers in midtown tomorrow, you in?']), hour: 11 + Math.random() * 6 });
    if (!s.flags.samGone && Math.random() < 0.3) add({ kind: 'text', from: 'Sam', text: pick(['Walking at Domino Park after work. Come if you want. No questions.', 'Did you eat? Real food. A photo or it didn\'t happen.', 'I\'m around. That\'s the whole message.']), hour: 15 + Math.random() * 3 });
    if (isTherapyDay(d)) add({ kind: 'text', from: 'Dr. Rao', text: 'Session today at 4pm. I\'ll be there either way.', hour: 9 });
    if (d === CASE_DAYS) add({ kind: 'event', fn: 'caseClosed', hour: 10 });
  }

  // ---------------------------------------------------------------- leads
  addLead(def, id = null) {
    const s = this.state;
    const l = { id: id || `t${s.leads.length}`, ...def, status: 'new', read: false };
    s.leads.push(l);
    this.pushMsg(def.from, def.text);
    return l;
  }
  randomTip(from = 'Tip line') {
    const s = this.state;
    const tpl = pick(TIP_TEMPLATES);
    const today = s.time % 24 < tpl.hours[0] - 1;
    const day = today ? s.day : s.day + 1;
    return this.addLead({ ...tpl, from, days: [day, day], real: false, result: pick(FALSE_RESULTS) });
  }
  followLead(l) {
    for (const x of this.state.leads) if (x.status === 'active') x.status = 'new';
    l.status = 'active';
    this.mind.add('obsession', 2, { quiet: true });
    this._updateBeacon();
    this.ui.toast(`Following: ${this.districtName(l.district)}`, '📍');
  }
  dismissLead(l) {
    l.status = 'dismissed';
    this.mind.apply({ obsession: -2, acceptance: 1 });
    this._updateBeacon();
  }
  leadPos(l) {
    if (l.poi) { const q = this.route.districts.find((d) => d.id === l.district).pois.find((p) => p.id === l.poi); const p = resolvePos(q); return [p.x, p.z]; }
    return l.at;
  }

  updateLeads() {
    const s = this.state, t = s.time;
    for (const l of s.leads) {
      if (l.status !== 'new' && l.status !== 'active') continue;
      const over = s.day > l.days[1] || (s.day === l.days[1] && t > l.hours[1]);
      if (over) {
        l.status = 'missed';
        this.mind.add('breakdown', l.real ? 4 : 2, { quiet: true });
        this.ui.toast(`Missed: ${l.text.slice(0, 48)}… What if that was her?`, '⏳', 3800);
        this._updateBeacon();
        continue;
      }
      if (l.status !== 'active' || l.district !== s.district) continue;
      const [x, z] = this.leadPos(l);
      if (Math.hypot(x - this.player.pos.x, z - this.player.pos.z) > 9) continue;
      if (s.day < l.days[0] || !inHours(t, l.hours)) continue;
      this.run(() => this.resolveLead(l));
    }
  }

  async resolveLead(l) {
    const s = this.state;
    if (l.status !== 'active') return;
    this._updateBeacon();
    if (!l.real) {
      l.status = 'false';
      await this.ui.cards(l.result, { title: l.from });
      this.mind.apply({ breakdown: 8, obsession: 3 });
      this.mind.spike(1);
      this._updateBeacon();
      return;
    }
    l.status = 'done';
    this._updateBeacon();
    if (l.sighting && this.visions.r) { this.ui.toast('There. Is that…?', '👁️', 3000); return; }
    await this.ui.cards(l.result, { title: l.from });
    if (l.talk === 'gus') this.ui.toast('Talk to the cook.', '🍳');
    else this.mind.add('breakdown', 3);
    void s;
  }

  _updateBeacon() {
    if (this.beacon) { this.scene.remove(this.beacon); this.beacon = null; }
    this.goal = null;
    const s = this.state;
    if (!s?.leads || !this.district) return;
    let spec = null;
    const l = s.leads.find((x) => x.status === 'active');
    if (l) spec = { district: l.district, pos: this.leadPos(l) };
    else if (s.deductions.reach && !s.flags.found) {
      const q = this.route.districts.find((d) => d.id === 'midtown').pois.find((p) => p.id === 'diner');
      const p = resolvePos(q); spec = { district: 'midtown', pos: [p.x, p.z] };
    }
    if (!spec || spec.district !== s.district) return;
    const [x, z] = spec.pos;
    this.goal = { district: spec.district, x, z };
    const m = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 90, 20, 1, true), new THREE.MeshBasicMaterial({ color: 0xe2463c, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    m.position.set(x, 45, z);
    this.beacon = m;
    this.scene.add(m);
  }

  postFlyers(district, n) {
    const s = this.state, m = s.mind;
    m.flyers[district] = (m.flyers[district] || 0) + n;
    m.flyersDay = s.day;
    this.mind.apply({ obsession: 4, pressure: 8 });
    this.placeFlyers();
    this.ui.toast(`Flyers up in ${this.districtName(district)}. The tip line will ring more.`, '📄');
  }

  // ---------------------------------------------------------------- places
  async usePoi(q) {
    const s = this.state;
    if (q.type === 'station') return this.stationMenu(q);
    if (q.type === 'home') { this.enterApartment(); return; }
    if (!this.isOpen(q)) { await this.ui.dialogue({ name: q.name, role: 'Closed', lines: [`Open ${fmtTime(q.hours[0] % 24)}–${fmtTime(q.hours[1] % 24)}.`] }); return; }
    const here = (id) => this.presentNpcs().find((n) => n.id === id);
    if (q.type === 'police') { const r = here('russo'); if (r) await this.talkTo(r); return; }
    if (q.type === 'therapy') {
      if (this.isSessionTime() && s.mind.lastSession !== s.day) { await therapySession(this); return; }
      const k = await this.ui.menu({ title: q.name, subtitle: `Next session: day ${this.nextSession()}, 4–6pm.`, items: [{ label: 'Sit in the waiting room for a while', sub: 'Quiet. A fish tank. 30 min.', value: 1 }, { label: 'Leave', value: 0 }] });
      if (k) { await this.fadeTime(0.5, 'Thirty minutes', 'The fish don\'t know anything about anything. It helps.'); this.mind.add('breakdown', -2); }
      return;
    }
    if (q.type === 'shelter') { const c = here('carol'); if (c) await this.talkTo(c); else await this.ui.dialogue({ name: q.name, lines: ['The door is locked. A small sign: Staff available 9am–9pm. Please be patient.'] }); return; }
    if (q.type === 'work') return this.workMenu(q);
    if (q.id === 'diner' && s.deductions.reach && !s.flags.found && s.time >= 23 && s.time <= 30 && isShiftNight(s.day) && !((s.mind.burned.diner || 0) > s.day)) return this.dinerFinale();
    if (q.menu) return this.eat(q);
    return this.calmPlace(q);
  }

  async stationMenu(q) {
    const s = this.state, m = s.mind;
    const items = this.route.districts.filter((d) => d.id !== s.district).map((d) => ({ label: `Subway to ${d.name}`, right: `${this.travelMinutes(s.district, d.id)} min`, value: 'go:' + d.id }));
    items.push({ label: 'Post flyers here', sub: '$6 · 30 min · the tip line rings more; she feels more hunted', value: 'post', disabled: s.money < 6 });
    if (m.postersUnlocked && (m.flyers[s.district] || 0) > 0) items.push({ label: 'Take your flyers down here', sub: '1 hour', value: 'down' });
    items.push({ label: 'Not now', value: null });
    const v = await this.ui.menu({ title: q.name, subtitle: `${m.flyers[s.district] || 0} of your flyers are up in ${this.districtName(s.district)}.`, items });
    if (!v) return;
    if (v.startsWith('go:')) { this.travel(v.slice(3)); return; }
    if (v === 'post') { s.money -= 6; await this.fadeTime(0.5, '30 minutes', 'Tape. Poster. Tape. Her face, again and again.'); this.postFlyers(s.district, 4); }
    if (v === 'down') {
      await this.fadeTime(1, 'An hour later', 'You peel her face off every lamp post you taped it to. You keep one.');
      m.flyers[s.district] = 0;
      this.mind.apply({ pressure: -12, acceptance: 5, obsession: -4 });
      if (Object.values(m.flyers).every((n) => !n)) m.postersDown = true;
      this.placeFlyers();
    }
  }

  async eat(q) {
    const s = this.state, m = s.mind;
    const items = q.menu.map((it, i) => ({ label: it.name, right: `$${it.price}`, sub: `+${it.hunger} hunger`, value: i, disabled: s.money < it.price }));
    items.push({ label: 'Leave', value: -1 });
    const v = await this.ui.menu({ title: q.name, subtitle: m.obsession > 60 ? 'You\'re not hungry. You\'re never hungry anymore.' : 'You should eat something.', items });
    if (v == null || v < 0) return;
    const it = q.menu[v];
    s.money -= it.price;
    if (m.obsession > 70 && Math.random() < 0.3) {
      await this.ui.dialogue({ name: q.name, lines: ['You order. Then someone walks past the window with red hair, and you\'re outside, and you\'re three blocks away, and it isn\'t her.', 'You never ate.'] });
      this.mind.apply({ obsession: 2, breakdown: 2 });
      return;
    }
    s.needs.hunger = clamp(s.needs.hunger + it.hunger, 0, 100);
    this.advanceTime(0.6);
    this.mind.add('breakdown', -2, { quiet: true });
    await this.ui.dialogue({ name: q.name, lines: [it.note || 'You eat. It tastes like something, for once.'] });
  }

  async calmPlace(q) {
    const m = this.state.mind;
    const k = await this.ui.menu({ title: q.name, subtitle: 'Stay a while?', items: [{ label: 'Sit for an hour and a half', value: 1 }, { label: 'Leave', value: 0 }] });
    if (!k) return;
    this.advanceTime(1.5);
    if (m.obsession > 65) {
      await this.ui.dialogue({ name: q.name, lines: ['You can\'t sit still. Every face in the room gets checked, twice.'] });
      this.mind.apply({ obsession: 2, breakdown: 1 });
    } else {
      await this.ui.dialogue({ name: q.name, lines: [(q.text && q.text[0]) || 'For a little while, you just exist here.'] });
      this.mind.apply({ breakdown: -5, acceptance: 2 });
    }
  }

  // ---------------------------------------------------------------- work
  firstAssignment(e) { this.pushMsg(e.from, e.text); this.issueAssignment(); }
  issueAssignment() {
    const s = this.state, j = s.job;
    if (j.fired || j.current) return;
    const next = ROUTE.assignments.find((a) => !j.done[a.spot]);
    if (!next) return;
    j.current = { spot: next.spot, brief: next.brief, due: s.day + 3 };
  }
  async workMenu(q) {
    const s = this.state, j = s.job, m = s.mind;
    if (j.fired) { await this.ui.dialogue({ name: q.name, lines: ['Your badge doesn\'t open the door anymore.'] }); return; }
    const items = [];
    if (j.leaveUntil > s.day) items.push({ label: `On leave until day ${j.leaveUntil}`, disabled: true, value: 'x' });
    else if (j.current) items.push({ label: 'Current assignment', sub: `${j.current.brief} · due day ${j.current.due}`, value: 'cur' });
    else items.push({ label: 'Pick up an assignment', value: 'new' });
    items.push({ label: 'Edit photos', sub: '2h · +$60', value: 'edit' });
    if (j.strikes >= 1 || m.breakdown >= 60) items.push({ label: 'Ask Inés for leave', sub: 'Ten days. Your job stays. The money stops.', value: 'leave' });
    items.push({ label: 'Leave', value: null });
    const v = await this.ui.menu({ title: q.name, subtitle: `Strikes: ${j.strikes}/3`, items });
    if (v === 'new') { this.issueAssignment(); this.ui.toast(j.current ? `Assignment: ${j.current.brief}` : 'Nothing left to shoot.', '💼'); }
    if (v === 'cur') await this.ui.dialogue({ name: 'Assignment', lines: [j.current.brief, 'Find the photo spot (white hexagon on the map), press C, frame it, shoot. Two stars or better.'] });
    if (v === 'edit') {
      if (m.breakdown >= 70) {
        await this.fadeTime(2, 'Two hours', 'You stare at a contact sheet. Every face on it is hers.');
        this.mind.add('breakdown', 3);
      } else {
        await this.fadeTime(2, 'Two hours', 'Crop, curves, dust spots. For two hours your hands know what to do.');
        s.money += 60;
        this.mind.add('breakdown', -3);
      }
    }
    if (v === 'leave') {
      j.leaveUntil = s.day + 10; j.current = null;
      await this.ui.dialogue({ name: 'Inés Duarte', lines: ['Take it. Paid, I\'ll fight for it. Come back when the ground stops moving.'] });
      this.mind.apply({ breakdown: -5 });
    }
  }
  checkJob() {
    const s = this.state, j = s.job;
    if (j.fired || j.leaveUntil > s.day) return;
    if (j.current && s.day > j.current.due) {
      j.strikes++;
      j.current = null;
      if (j.strikes >= 3) {
        j.fired = true;
        this.pushMsg('Inés', 'I\'m so sorry. Accounting needed a name and it\'s yours. Take care of yourself. I mean it.');
        this.mind.apply({ breakdown: 12, isolation: 8 });
        return;
      }
      this.pushMsg('Inés', j.strikes === 1 ? 'You missed the deadline. It\'s okay. Once.' : 'Maya, that\'s twice. I\'m covering for you and I can\'t forever.');
      this.mind.add('breakdown', 5);
    }
    if (!j.current) this.issueAssignment();
  }

  // ---------------------------------------------------------------- camera
  updateViewfinder() {
    super.updateViewfinder();
    const e = this.evalShot();
    if (e && this.state.mind.breakdown >= 70 && !this.mind.onMeds()) this.ui.vf.querySelector('.info').textContent += '  ·  your hands won\'t stop shaking';
  }
  clearScan() { if (this.scanEl.childElementCount) this.scanEl.innerHTML = ''; }
  updateScan() {
    const s = this.state, m = s.mind, cam = this.camera;
    const paranoid = m.obsession > 60 && !this.mind.onMeds();
    const boxes = [];
    const add = (pos, label, cls) => {
      const v = pos.clone().add(new THREE.Vector3(0, 1.75, 0)).project(cam);
      if (v.z > 1 || Math.abs(v.x) > 0.95 || Math.abs(v.y) > 0.95) return;
      const d = pos.distanceTo(cam.position);
      if (d > 45) return;
      const size = Math.max(18, 900 / d);
      boxes.push(`<div class="scan ${cls}" style="left:${(v.x + 1) * 50}%;top:${(1 - v.y) * 50}%;width:${size}px;height:${size * 1.2}px"><span>${label}</span></div>`);
    };
    this.lastScanHigh = false;
    (this.traffic?.peds || []).forEach((q, i) => {
      const look = q.fig.userData.look || {};
      if (!['long', 'bob', 'bun'].includes(look.hairStyle)) return;
      const base = (i * 37) % 60 + 12;
      const pct = paranoid ? Math.min(97, base + Math.round(m.obsession / 3) + ((i * 13) % 20)) : base;
      if (pct >= 80) this.lastScanHigh = true;
      add(q.fig.position, `MATCH ${pct}%`, pct >= 80 ? 'hot' : '');
    });
    if (this.visions.ghost.visible) { add(this.visions.ghost.position, 'MATCH 99%', 'hot'); this.lastScanHigh = true; }
    if (this.visions.real.visible) add(this.visions.real.position, `MATCH ${'▒▓'[Math.floor(performance.now() / 120) % 2]}${'▓▒'[Math.floor(performance.now() / 90) % 2]}%`, 'real');
    this.scanEl.innerHTML = `<div class="scan-head">FACE SCAN · ${paranoid ? 'she could be anyone' : 'steady'}</div>${boxes.slice(0, 10).join('')}`;
  }

  takePhoto() {
    const s = this.state, m = s.mind, cam = this.camera;
    const realIn = this.visions.realInView(cam), ghostIn = this.visions.ghostInView(cam);
    const hadGhost = this.visions.ghost.visible;
    this.visions.ghost.visible = false;
    this.ui.viewfinder(false);
    this.clearScan();
    this.renderFrame();
    const img = this.capture();
    this.visions.ghost.visible = hadGhost;
    this.ui.viewfinder(true);
    this.audio.shutter(); this.ui.flash();
    s.shots++;
    if (realIn) {
      const sg = this.visions.r?.sg;
      this.addMemory({ id: 'lily_' + s.shots, title: 'Is that her?', img, text: 'It is. It\'s really her.' });
      this.mind.apply({ obsession: 3, breakdown: 2 });
      if (sg && !s.clues[sg.clue]) this.clue(sg.clue);
      return;
    }
    if (ghostIn) {
      this.visions.hideGhost(false);
      this.addMemory({ id: 'empty_' + s.shots, title: 'An empty street', img, text: 'She isn\'t in the photo. She was never in the photo.' });
      this.run(async () => { this.togglePhoto(false); await this.ui.cards(['You check the screen.', 'The street is empty. She isn\'t in the photo.'], { title: 'Photo' }); this.mind.add('breakdown', 4); });
      return;
    }
    const e = this.evalShot();
    let stars = e ? e.stars : 1;
    if (m.breakdown >= 70 && !this.mind.onMeds()) stars = 1;
    this.addMemory({ id: 'shot_' + s.shots, title: e ? e.sp.name : `Street, ${this.districtName(s.district)}`, img, text: stars === 1 && e ? 'Blurred. Your hands.' : '' });
    const j = s.job;
    if (e && j.current && e.sp.id === j.current.spot) {
      if (stars >= 2) {
        j.done[e.sp.id] = s.day; j.current = null; s.money += 120;
        this.ui.toast('Assignment done. +$120. One normal thing.', '💼', 3600);
        this.mind.add('breakdown', -5);
      } else this.ui.toast('Not good enough for Inés. Try again — steadier.', '💼', 3000);
    }
    if (this.lastScanHigh) {
      this.run(async () => {
        this.togglePhoto(false);
        const k = await this.ui.menu({ title: 'Wait.', subtitle: 'In the corner of the frame. The scan says it\'s a match.', items: [{ label: 'It\'s her. Pin it to the wall.', value: 1 }, { label: 'It\'s a stranger. Breathe.', value: 0 }] });
        if (k) {
          s.leads.push({ id: 'pin' + s.shots, from: 'Your photo', text: `A woman in the crowd in ${this.districtName(s.district)}. It\'s her?`, district: s.district, days: [s.day, s.day], hours: [0, 0], status: 'pinned', real: false });
          this.mind.add('obsession', 4);
        } else this.mind.apply({ obsession: -2, acceptance: 1 });
      });
    }
  }

  // ---------------------------------------------------------------- sightings
  async pickItem() {
    const sg = this.visions.pickUp();
    if (!sg) return;
    await this.ui.cards([sg.item], { title: 'She was here' });
    this.clue(sg.clue);
    this.mind.apply({ obsession: 3, breakdown: 2 });
  }

  async faceToFace() {
    const lily = { name: 'Lily', role: 'your sister', color: LILY.color };
    const k = await this.ui.dialogue({ ...lily, lines: ['Maya.', '(She\'s thinner. Her hair\'s grown out. Her hands are shaking as much as yours.)', 'Please. Not like this.'], choices: [{ text: 'Okay. I\'ll go.' }, { text: 'Come home. Please.' }, { text: 'Why?' }] });
    if (k === 0) { await this.ui.dialogue({ ...lily, lines: ['…Thank you.'] }); this.mind.apply({ acceptance: 15, pressure: -15, breakdown: -5 }); this.state.flags.respected = true; }
    else if (k === 1) { await this.ui.dialogue({ ...lily, lines: ['I can\'t. Not yet. Please stop looking for me.'] }); this.mind.apply({ pressure: 15, breakdown: 6 }); }
    else { await this.ui.dialogue({ ...lily, lines: ['Because I was drowning. And you were drowning too, and I was the thing pulling you under.'] }); this.mind.apply({ acceptance: 8, breakdown: 3 }); }
  }

  async dinerFinale() {
    const m = this.state.mind;
    if (m.breakdown < 70 && m.pressure < 75) { await this.ending('found'); return; }
    await this.ui.cards(['Through the window: red hair, an apron, a coffee pot.', 'She looks up and sees your face — whatever\'s left of it — and the pot hits the floor.', 'By the time you\'re inside, the back door is still swinging.'], { title: 'Mercer Diner' });
    m.burned.diner = this.state.day + 5;
    this.mind.apply({ breakdown: 15, pressure: 20 });
  }

  // ---------------------------------------------------------------- apartment
  enterApartment(silent = false) {
    if (!this.apartment) {
      this.apartment = new Apartment((id) => { if (this.ui.busy === 0 && this.pending === 0) this.aptAction(id); });
      this.apartment.setAspect(window.innerWidth / window.innerHeight);
    }
    if (this._flyerTex) this.apartment.setPoster(this._flyerTex);
    if (this.player?.photoMode) this.togglePhoto(false);
    this.inside = true;
    this.hideAllLabels();
    this.clearScan();
    this.apartment.setMayaSpot('center');
    this.refreshApartment();
    if (!silent) this.run(() => this.onArriveHome());
  }

  exitApartment() {
    this.inside = false;
    this.hideAllLabels();
    if (this.state.district !== 'brooklyn') this.enterDistrict('brooklyn');
    const home = resolvePos(this.route.districts[0].pois.find((p) => p.id === 'home'));
    this.player.place(home.x + home.dir[0] * 2.5, home.z + home.dir[1] * 2.5, Math.atan2(home.dir[0], home.dir[1]));
    this.player.snapCamera();
  }

  refreshApartment() {
    if (!this.apartment) return;
    const s = this.state;
    const wall = Object.keys(s.clues).map((id) => ({ kind: 'clue', t: id }))
      .concat(s.leads.filter((l) => l.status === 'false' || l.status === 'pinned').map((l) => ({ kind: 'false', t: l.id })))
      .concat(s.memories.filter((mm) => mm.id.startsWith('lily_')).map((mm) => ({ kind: 'photo', t: mm.id })));
    this.apartment.refresh({ neglect: s.mind.neglect, hour: s.time % 24, wall, medsTaken: this.mind.onMeds() });
  }

  async onArriveHome() {
    const s = this.state, m = s.mind;
    if (s.flags.lilyComing && s.time >= 18) { await this.ending('foundBy'); return; }
    const sam = this.npcState('sam');
    if (s.time >= 18 && !s.flags.samGone && (s.flags.lastIntervention || -99) + 6 <= s.day && sam.met && ((m.breakdown >= 60 && m.isolation >= 55) || m.neglect >= 0.72)) {
      await this.intervention();
      return;
    }
    if (m.breakdown >= 60 && Math.random() < 0.3) {
      this.apartment.showLily('bed', 900);
      this.audio.whisper();
      this.mind.spike(0.5);
    }
  }

  async intervention() {
    const s = this.state;
    s.flags.lastIntervention = s.day;
    const sam = NPCS.find((n) => n.id === 'sam');
    this.apartment.setVisitor(makeFigure(sam.look));
    const k = await this.ui.dialogue({ name: 'Sam, Dev and Rosa', role: 'at your door', color: '#f2b8c6', lines: ['They\'re all there. Sam, Dev, Rosa with a foil tray.', 'Sam: "We\'re not here to take anything from you. We\'re here because we can\'t watch you disappear too."', 'Dev: "The flat, May. You haven\'t opened the blinds in a week."'], choices: [{ text: 'Okay. Help me.' }, { text: 'You don\'t understand.' }, { text: 'Get out.' }] });
    if (k === 0) {
      await this.ui.cards(['They clean. Rosa feeds you. Sam sits on the edge of the bed until you take the pills and fall asleep at nine o\'clock like a child.'], { title: 'Intervention' });
      s.mind.medsDay = s.day;
      this.mind.apply({ breakdown: -15, isolation: -25, obsession: -10, acceptance: 6 });
      this.mind.add('neglect', -0.35);
      this.trust('sam', 1);
      this.social(10);
    } else if (k === 1) {
      await this.ui.dialogue({ name: 'Sam', lines: ['Then help us understand. We\'ll come back. We\'ll keep coming back.'] });
      this.mind.apply({ isolation: 10, breakdown: 4 });
      this.trust('sam', -1);
    } else {
      await this.ui.cards(['They go. Rosa leaves the tray on the floor by the door.', 'You hear Sam crying on the stairs. You turn the TV up.'], { title: 'Intervention' });
      this.mind.apply({ isolation: 25, breakdown: 8 });
      this.npcState('sam').rel -= 3;
      this.samLeaves();
      if (s.mind.neglect >= 0.8) this.devLeaves();
    }
    this.apartment.setVisitor(null);
  }

  devLeaves() {
    const s = this.state;
    if (s.flags.devGone) return;
    s.flags.devGone = true;
    this.pushMsg('Dev', 'I\'m staying at my brother\'s for a while. I\'m sorry. The rent\'s paid through December. Please call someone.');
    this.mind.add('isolation', 15);
  }

  async aptAction(id) {
    this.run(async () => {
      const s = this.state, m = s.mind, a = this.apartment;
      if (id === 'out') { this.exitApartment(); return; }
      if (id === 'wall') { a.setMayaSpot('center'); openWall(this); return; }
      if (id === 'meds') {
        if (this.mind.onMeds()) { this.ui.toast('You already took them today.', '💊'); return; }
        m.medsDay = s.day;
        s.needs.energy = clamp(s.needs.energy - 8, 0, 100);
        this.mind.add('acceptance', 1, { quiet: true });
        this.ui.toast('Meds taken. The edges will soften. So will the hunches.', '💊', 3600);
        this.refreshApartment();
        return;
      }
      if (id === 'bed') {
        a.setMayaSpot('bed');
        const t = s.time % 24 < 6 ? s.time % 24 + 24 : s.time;
        const canSleep = t >= 20 || s.needs.energy < 40;
        const items = [
          { label: 'Sleep', sub: canSleep ? 'Until morning' : 'Too early — after 8pm, or when exhausted', value: 'sleep', disabled: !canSleep },
          { label: 'Sleep, alarm for 4:45am', sub: 'For the dawn', value: 'alarm', disabled: !canSleep },
          { label: 'Lie down for two hours', value: 'rest' },
        ];
        if (m.breakdown >= 50) items.push({ label: 'Stay in bed. Let the day go.', sub: 'A whole day, gone', value: 'blur' });
        items.push({ label: 'Get up', value: null });
        const v = await this.ui.menu({ title: 'Bed', subtitle: `Day ${s.day} · ${fmtTime(s.time % 24)}`, items });
        if (v === 'sleep') await this.sleep(7.5);
        if (v === 'alarm') await this.sleep(4.75);
        if (v === 'rest') { await this.fadeTime(2, 'Two hours', 'You lie with your eyes open. The ceiling has a crack shaped like the L line.'); s.needs.energy = clamp(s.needs.energy + 22, 0, 100); }
        if (v === 'blur') {
          await this.ui.cards(['You don\'t get up.', 'The light moves across the wall and back again. Your phone buzzes and buzzes and stops.'], { title: 'A lost day' });
          this.mind.apply({ isolation: 8, breakdown: 2 });
          this.mind.add('neglect', 0.06);
          s.needs.hunger = clamp(s.needs.hunger - 25, 0, 100);
          await this.newDay({ wake: 9.5, energy: 70 });
        }
        return;
      }
      if (id === 'laptop') {
        a.setMayaSpot('desk');
        const items = [
          { label: 'Check the search forum', sub: '1 hour', value: 'forum' },
          { label: 'Post an update to the search group', sub: 'More eyes. More tips. She\'ll see it.', value: 'post' },
        ];
        if (m.letterUnlocked && !m.letter) items.push({ label: 'Write to Lily', value: 'letter' });
        if (m.letter && !m.letter.delivered) items.push({ label: 'Post your letter on the forum', sub: 'Public. She might see it.', value: 'publicLetter' });
        items.push({ label: 'Close the laptop', value: null });
        const v = await this.ui.menu({ title: 'Laptop', subtitle: `${s.leads.filter((l) => l.status === 'new').length} unfollowed tips`, items });
        if (v === 'forum') {
          await this.fadeTime(1, 'An hour later', 'Threads. Theories. A man in Ohio who is certain.');
          this.mind.apply({ obsession: 4, isolation: -2 });
          if (Math.random() < 0.6) this.randomTip('NYCMissing forum');
        }
        if (v === 'post') { this.mind.apply({ obsession: 3, pressure: 6 }); this.ui.toast('Posted. 40 shares in ten minutes.', '📣'); if (Math.random() < 0.7) this.randomTip('Search group'); }
        if (v === 'letter') await this.writeLetter();
        if (v === 'publicLetter') { m.letter.delivered = s.day; m.letter.public = true; this.mind.apply({ pressure: 5, acceptance: 3 }); this.ui.toast('Posted. You can\'t unpost it. You don\'t want to.', '✉️'); }
        return;
      }
      if (id === 'fridge') {
        const rotten = m.neglect >= 0.7;
        const v = await this.ui.menu({ title: 'Kitchen', subtitle: rotten ? 'The fridge smells. Everything in it is from before.' : 'Eggs. Bread. Something Rosa left.', items: [
          { label: 'Eat something from the fridge', sub: '+30 hunger · 20 min', value: 'fridge', disabled: rotten },
          { label: 'Order takeout', sub: '$14 · +40 hunger', value: 'takeout', disabled: s.money < 14 },
          { label: 'Not hungry', value: null },
        ] });
        if (v === 'fridge') { this.advanceTime(0.33); s.needs.hunger = clamp(s.needs.hunger + 30, 0, 100); this.mind.add('breakdown', -1, { quiet: true }); this.ui.toast('You ate. Standing up, at the counter. It counts.', '🍳'); }
        if (v === 'takeout') { s.money -= 14; this.advanceTime(0.75); s.needs.hunger = clamp(s.needs.hunger + 40, 0, 100); this.mind.add('neglect', 0.02); this.ui.toast('The box goes on the floor with the others.', '🥡'); }
        return;
      }
      if (id === 'clean') {
        await this.fadeTime(1.5, 'An hour and a half', 'Dishes. Boxes. You open the blinds and the light is almost too much.');
        this.mind.add('neglect', -0.3);
        this.mind.apply({ breakdown: -3, acceptance: 1 });
        m.cleanedToday = true;
        if (this.npcState('dev').cleanDeal) { this.npcState('dev').cleanDeal = false; this.trust('dev', 1); this.social(8); }
        this.refreshApartment();
        return;
      }
      if (id === 'mirror') {
        a.setMayaSpot('mirror');
        if (m.breakdown >= 40 && Math.random() < 0.75) {
          a.showLily('mirror', 1200);
          this.audio.sting();
          this.mind.spike(1);
          await new Promise((r) => setTimeout(r, 900));
          await this.ui.cards(['For a second she\'s behind you in the glass. Green coat. Wet hair.', 'You turn around.', 'Nobody.'], { title: 'Mirror' });
          this.mind.add('breakdown', 3);
        } else await this.ui.cards([m.breakdown >= 40 ? 'You look like Mom looked the winter Dad died.' : 'You look tired. You look like yourself, mostly.'], { title: 'Mirror' });
        return;
      }
      if (id === 'lily') {
        const v = await this.ui.menu({ title: 'Lily\'s room', subtitle: 'Her door has a green sticker on it from when she was nineteen.', items: [{ label: 'Sit on her bed for a while', value: 1 }, { label: 'Leave the door closed', value: 0 }] });
        if (v) {
          await this.ui.cards(['Her guitar case isn\'t in the corner. There\'s a dent in the carpet where it stood for eight months.', 'Her pillow still smells like her shampoo. You hate that it\'s fading.'], { title: 'Lily\'s room', hand: true });
          this.mind.apply({ acceptance: 3, breakdown: 2 });
          this.advanceTime(0.5);
        }
      }
    });
  }

  async writeLetter() {
    const m = this.state.mind;
    const v = await this.ui.menu({ title: 'Write to Lily', subtitle: 'You write it four times. Which one do you keep?', items: [
      { label: '"Come home. Please. I can\'t do this without you."', value: 0 },
      { label: '"I\'m not looking anymore. I just want you to know the door is open."', value: 1 },
      { label: '"Why would you do this to me?"', value: 2 },
    ] });
    if (v == null) return;
    m.letter = { tone: v, good: v === 1, day: this.state.day, delivered: false };
    if (v === 1) this.mind.add('acceptance', 10);
    else this.mind.apply({ pressure: v === 2 ? 15 : 10, breakdown: v === 2 ? 4 : 0 });
    this.ui.toast('Printed and folded. Carol at Harbor House could pass it on.', '✉️', 4200);
  }

  // ---------------------------------------------------------------- days
  async sleep(wake) {
    const s = this.state, m = s.mind;
    let energy = wake < 6 ? 75 : 100;
    let w = wake;
    if (!this.mind.onMeds() && m.breakdown > 60 && wake > 6) { energy = 60; w = 9; }
    const text = w === 9 ? 'You lie awake until four, replaying October 3rd. You sleep through the alarm.' : wake < 6 ? 'The alarm. 4:45. Dark. You\'re already awake.' : 'Sleep, eventually.';
    await this.newDay({ wake: w, energy, text });
  }

  async passOut() {
    await this.ui.cards(['4:30am. You don\'t remember getting home.', 'Your shoes are still on.'], { title: 'Lost time' });
    this.mind.add('breakdown', 5);
    this.inside = true;
    await this.newDay({ wake: 10, energy: 55 });
    this.enterApartment(true);
  }

  blackout() {
    if (this._blacking || this._ending) return;
    this._blacking = true;
    this.run(async () => {
      const others = this.route.districts.filter((d) => d.id !== this.state.district);
      const d = pick(others);
      const hours = 2 + Math.random() * 3;
      const done = await this.ui.fade('…', 1800);
      this.advanceTime(hours);
      const st = d.pois.find((q) => q.type === 'station');
      const p = resolvePos(st);
      this.enterDistrict(d.id, [p.x - p.dir[0] * 2.5, p.z - p.dir[1] * 2.5]);
      done();
      await this.ui.cards([`You're standing in ${d.name}. It's ${fmtTime(this.state.time % 24)}.`, 'You don\'t remember the train. You don\'t remember the last few hours at all.'], { title: 'Lost time' });
      this.mind.add('breakdown', 4);
      this._blacking = false;
    });
  }

  async newDay({ wake = 7.5, energy = 100, text = '' } = {}) {
    const s = this.state, m = s.mind;
    s.day++;
    s.time = wake;
    s.needs.energy = energy;
    s.needs.hunger = clamp(s.needs.hunger - 18, 3, 100);
    this.mind.newDay();
    if (isTherapyDay(s.day - 1) && m.lastSession !== s.day - 1) { this.mind.add('breakdown', 3, { quiet: true }); this.pushMsg('Dr. Rao', 'I missed you yesterday. Same time in three days? Please.'); }
    for (const id of ['dev', 'rosa', 'jess', 'sam', 'priya']) {
      const st = this.npcState(id);
      if (st.met && s.day - (st.seen || 0) > 3) st.rel = Math.max(-2, st.rel - 0.34);
    }
    if (this.npcState('sam').met && this.npcState('sam').rel <= 0 && !s.flags.samGone) this.samLeaves();
    if (m.neglect >= 0.85 && this.npcState('dev').rel <= 1 && !s.flags.devGone) this.devLeaves();
    for (const l of s.leads) if (l.status === 'pinned') { l.status = 'false'; this.mind.add('breakdown', 4, { quiet: true }); this.pushMsg('You', `The photo from ${this.districtName(l.district)}. You zoomed in at 3am. It wasn\'t her.`); }
    this.checkJob();
    if (m.letter?.delivered && m.letter.good && !s.flags.lilyComing && m.acceptance >= (m.letter.public ? 70 : 60) && m.pressure <= 35 && s.day >= m.letter.delivered + 2) {
      s.flags.lilyComing = s.day;
      s.plan.push({ id: 'lilytext', day: s.day, hour: wake + 1, kind: 'text', from: 'Unknown number', text: 'It\'s me. I read your letter. Can I come by tonight? Just me.' });
    }
    this.rollWeather();
    this.planDay();
    this.saveNow();
    this.mind.spike(0.2);
    const done = await this.ui.fade(text || `Day ${s.day}`, 1600, `${WEEKDAYS[(s.day - 1) % 7]} · Day ${s.day} · ${Math.max(0, CASE_DAYS - s.day)} days until the case goes inactive`);
    done();
    this.refreshApartment();
    this.checkEvents();
  }

  caseClosed() {
    this.run(async () => {
      if (this._ending) return;
      await this.ui.cards(['Det. Russo calls himself. He didn\'t have to.', '"The case goes inactive today. Inactive isn\'t closed. If she calls, we pick up."'], { title: 'Day 60' });
      await this.ending(this.state.mind.breakdown >= 85 ? 'hospital' : 'unresolved');
    });
  }

  collapse() {
    if (this._ending) return;
    this.run(() => this.ending('hospital'));
  }

  async incomingCall(which) {
    if (this._ending) return;
    const s = this.state;
    const from = which === 'bellevue' ? 'Bellevue Hospital' : 'Mom';
    const answered = await callPrompt(this, from);
    if (!answered) {
      this.pushMsg(from, which === 'bellevue' ? 'Please call us back regarding a patient who may match your sister\'s description.' : 'Mija, it\'s me. Call me back. Please. I just need to hear your voice.', { voicemail: true });
      this.mind.add('breakdown', which === 'bellevue' ? 6 : 2);
      if (which === 'bellevue') this.mind.add('obsession', 4);
      return;
    }
    if (which === 'bellevue') await bellevueCall(this);
    else await momCall(this, { rosie: which === 'momRosie' && !s.clues.rosie });
  }

  isSessionTime() { const s = this.state; return isTherapyDay(s.day) && s.time >= 15.5 && s.time <= 18.5; }
  nextSession() { const s = this.state; let d = s.day; if (!isTherapyDay(d) || s.time > 18.5 || s.mind.lastSession === d) d++; while (!isTherapyDay(d)) d++; return d; }

  // ---------------------------------------------------------------- endings
  async ending(key, { voluntary = false } = {}) {
    if (this._ending) return;
    this._ending = key;
    const s = this.state, m = s.mind, e = ENDINGS[key];
    if (key === 'found' || key === 'foundBy') s.flags.found = true;
    s.ended = true;
    this.mind.calm = 1;
    let cards = e.cards;
    if (key === 'hospital' && voluntary) cards = ['You tell Dr. Rao yes. Saying it out loud is the hardest thing you\'ve done all autumn.', 'Sam drives you. Nobody talks. Sam holds your hand at every red light.', ...e.cards.slice(2)];
    if (key === 'unresolved' && m.acceptance < 40) cards = [...cards, e.low];
    if (key === 'found') this.audio.playLanterns(0.5);
    await this.ui.cards(cards, { title: e.title, solid: true });
    const meta = loadMeta(META);
    meta.endings = { ...(meta.endings || {}), [key]: s.day };
    saveMeta(meta, META);
    const leadsFalse = s.leads.filter((l) => l.status === 'false').length;
    const friends = ['dev', 'rosa', 'jess', 'sam', 'priya'].filter((id) => this.npcState(id).rel >= 2).length;
    const stats = [
      ['Ending', e.title], ['Day', String(s.day)], ['Clues on the wall', `${Object.keys(s.clues).length}/${Object.keys(CLUES).length}`],
      ['Dead ends chased', String(leadsFalse)], ['Worst breakdown', String(Math.round(m.peak))], ['Friends still close', `${friends}/5`],
      ['Therapy sessions', String(m.sessions)], ['Endings found', `${Object.keys(meta.endings).length}/4`],
    ];
    try { localStorage.removeItem(SAVE); } catch { /* ignore */ }
    const a = await endingScreen(this, key, stats);
    this._ending = null;
    if (a === 'again') { this.inside = false; await this.newGame(); } else this.quitToTitle();
  }
}

export { DEDUCTIONS };
