// Screens for Last Seen: title, intro, phone, the case wall, calls, endings.
import { esc, fmtTime, hearts } from '../ui/ui.js';
import { openMap } from '../ui/phone.js';
import { CLUES, DEDUCTIONS, ENDINGS, CASE_DAYS, MISSING_BEFORE, WEEKDAYS } from './data.js';

export const CARE_NOTE = 'This story deals with a missing family member, mental illness, hallucinations and psychiatric hospitalisation. If you\'re struggling yourself, please reach out to someone you trust — in the US you can call or text 988, any time.';

export function flyerHtml(portrait) {
  return `<div class="flyer" aria-label="Missing poster for Lily Reyes">
    <div class="fl-head">MISSING</div>
    <img class="fl-photo" src="${portrait}" alt="Photocopied photo of Lily">
    <div class="fl-name">LILY REYES, 24</div>
    <div class="fl-meta">5′5″ · hair dyed red · green coat · carries a guitar case</div>
    <div class="fl-seen">Last seen Oct 3, 11:48pm, leaving Bedford Av L station, Brooklyn</div>
    <div class="fl-call">If you have seen her please call<br><b>(917) 555-0143</b></div>
    <div class="fl-tabs">${Array.from({ length: 7 }, (_, i) => `<span class="${i === 2 || i === 5 ? 'torn' : ''}">LILY · 917 555 0143</span>`).join('')}</div>
  </div>`;
}

export function titleScreen(g, { portrait, save, meta }) {
  const el = document.createElement('div');
  el.className = 'ls-title';
  const found = Object.keys(meta.endings || {});
  el.innerHTML = `<div class="ls-col">
      <h1 class="ls-logo" data-text="LAST SEEN">LAST SEEN</h1>
      <div class="ls-sub">An alternate story from London-Newyork</div>
      <p class="ls-tag">One sister. One city. Sixty days before the case goes cold — if Maya lasts that long.</p>
      ${save && !save.ended ? `<button class="ls-btn primary" data-a="continue">Continue <small>Day ${save.day} · Breakdown ${Math.round(save.mind.breakdown)}</small></button>` : ''}
      <button class="ls-btn ${save && !save.ended ? '' : 'primary'}" data-a="new">New game</button>
      <div class="ls-row"><button class="btn" data-a="quality">Graphics: ${g.settings.quality === 'high' ? 'High' : 'Low'}</button><button class="btn" data-a="sound">Sound: ${g.settings.sound ? 'On' : 'Off'}</button></div>
      <div class="ls-endings">Endings found: ${found.length}/4 ${['found', 'foundBy', 'hospital', 'unresolved'].map((k) => `<span class="${found.includes(k) ? 'on' : ''}">${found.includes(k) ? esc(ENDINGS[k].title) : '???'}</span>`).join('')}</div>
      <p class="ls-care">${esc(CARE_NOTE)}</p>
    </div>
    <div class="ls-poster">${flyerHtml(portrait)}</div>`;
  const close = g.ui._overlay(el);
  return new Promise((resolve) => {
    el.querySelectorAll('[data-a]').forEach((b) => {
      b.onclick = () => {
        g.audio.start(); g.audio.click();
        const a = b.dataset.a;
        if (a === 'quality') { g.setSetting('quality', g.settings.quality === 'high' ? 'low' : 'high'); b.textContent = `Graphics: ${g.settings.quality === 'high' ? 'High' : 'Low'}`; return; }
        if (a === 'sound') { g.setSetting('sound', !g.settings.sound); b.textContent = `Sound: ${g.settings.sound ? 'On' : 'Off'}`; return; }
        close();
        resolve(a);
      };
    });
  });
}

/** Narration over the poster taped to a brick wall. */
export function playIntro(ui, lines, portrait) {
  return new Promise((resolve) => {
    const el = document.createElement('div');
    el.className = 'ls-intro';
    el.innerHTML = `<div class="ls-wall"><div class="ls-poster big">${flyerHtml(portrait)}</div></div><div class="ls-cap"><p></p><div class="tap">click · space · E</div></div>`;
    const close = ui._overlay(el);
    const p = el.querySelector('p');
    let i = 0;
    const next = () => {
      if (i >= lines.length) { pop(); close(); resolve(); return; }
      p.style.animation = 'none'; void p.offsetWidth; p.style.animation = '';
      p.textContent = lines[i++];
      el.classList.toggle('late', i >= 3);
    };
    el.onclick = next;
    const pop = ui.pushKeys((e) => { if ([' ', 'Enter', 'e', 'E', 'Escape'].includes(e.key)) next(); return true; });
    next();
  });
}

export function callPrompt(g, from) {
  g.audio.buzz();
  const ring = setInterval(() => g.audio.buzz(), 1400);
  return g.ui.menu({ title: `📞 ${from}`, subtitle: 'Incoming call', items: [{ label: 'Answer', value: true }, { label: 'Decline', sub: 'They\'ll leave a voicemail', value: false }], foot: '' })
    .then((v) => { clearInterval(ring); return !!v; });
}

// ---------------------------------------------------------------- phone
const APPS = [
  { id: 'messages', name: 'Messages', icon: '💬', bg: '#34c759' },
  { id: 'tips', name: 'Tips', icon: '📍', bg: '#e2463c' },
  { id: 'wall', name: 'The Wall', icon: '🧷', bg: '#8a5a2a' },
  { id: 'photos', name: 'Photos', icon: '🖼️', bg: '#5e5ce6' },
  { id: 'people', name: 'People', icon: '👥', bg: '#30b0c7' },
  { id: 'mind', name: 'Mind', icon: '🫀', bg: '#636366' },
  { id: 'map', name: 'Map', icon: '🗺️', bg: '#2a6a9a' },
  { id: 'settings', name: 'Settings', icon: '⚙️', bg: '#3a3a3c' },
];

export function openAltPhone(g, app = null) {
  const el = document.createElement('div');
  el.className = 'phone ls-phone';
  let current = app;
  const panel = g.ui.panel(el, {
    onKey: (e, api) => {
      if (e.key === 'Escape' || e.key === 'Tab' || e.key === 'p' || e.key === 'P') {
        if (current && e.key === 'Escape') { current = null; render(); } else api.close();
      }
      return true;
    },
  });
  const render = () => {
    const s = g.state;
    const status = `<div class="status"><span>${fmtTime(s.time % 24)}</span><span>${g.glitchText('No signal', 'LTE ▮▮▮')}</span></div>`;
    if (!current) {
      el.innerHTML = `${status}<div class="wall-bg"><div class="big">${fmtTime(s.time % 24).replace(/(am|pm)/, '')}</div><div class="d">Day ${s.day} · Lily missing ${s.day + MISSING_BEFORE} days</div></div><div class="grid"></div>`;
      const grid = el.querySelector('.grid');
      for (const a of APPS) {
        const b = document.createElement('button');
        b.className = 'app-icon';
        const badge = a.id === 'messages' ? g.unread() : a.id === 'tips' ? s.leads.filter((l) => l.status === 'new').length : 0;
        b.innerHTML = `<span class="i" style="background:${a.bg}">${a.icon}</span>${esc(a.name)}${badge ? `<span class="badge">${badge}</span>` : ''}`;
        b.onclick = () => {
          g.audio.click();
          if (a.id === 'wall') { panel.close(); openWall(g); return; }
          if (a.id === 'map') { panel.close(); openMap(g); return; }
          current = a.id; render();
        };
        grid.appendChild(b);
      }
      return;
    }
    const a = APPS.find((x) => x.id === current);
    el.innerHTML = `${status}<div class="app-head"><button class="back">‹</button><h3>${a.icon} ${esc(a.name)}</h3><button class="x">✕</button></div><div class="body"></div>`;
    el.querySelector('.back').onclick = () => { current = null; render(); };
    el.querySelector('.x').onclick = () => panel.close();
    PHONE[current](g, el.querySelector('.body'), { rerender: render, close: () => panel.close() });
  };
  render();
}

const PHONE = {
  messages(g, body) {
    const s = g.state;
    if (!s.messages.length) { body.innerHTML = '<p class="s">No messages.</p>'; return; }
    const by = new Map();
    for (const m of s.messages) { if (!by.has(m.from)) by.set(m.from, []); by.get(m.from).push(m); }
    body.innerHTML = [...by.entries()].reverse().map(([from, list]) => `<div class="thread"><h4>${esc(from)}</h4>${list.map((m) => `<div class="bubble${m.voicemail ? ' vm' : ''}">${m.voicemail ? '🔊 Voicemail: ' : ''}${esc(m.text)}<span class="ts">Day ${m.day}, ${fmtTime(m.time % 24)}</span></div>`).join('')}</div>`).join('');
    s.messages.forEach((m) => { m.read = true; });
  },

  tips(g, body, ctx) {
    const s = g.state;
    const label = { new: 'NEW', active: 'FOLLOWING', done: 'CHECKED', false: 'NOTHING', missed: 'MISSED', dismissed: 'LET GO' };
    if (!s.leads.length) { body.innerHTML = '<p class="s">No tips yet. The tip line gets busier when flyers go up.</p>'; return; }
    body.innerHTML = '<p class="s">Tips from the hotline, the forum and friends. Most are nothing. You can\'t tell which.</p>';
    for (const l of [...s.leads].reverse()) {
      const row = document.createElement('div');
      row.className = `list-row tip ${l.status}`;
      const when = `Day ${l.days[0]}${l.days[1] !== l.days[0] ? `–${l.days[1]}` : ''}, ${fmtTime(l.hours[0] % 24)}–${fmtTime(l.hours[1] % 24)}`;
      row.innerHTML = `<span class="dot" style="background:${l.status === 'active' ? '#e2463c' : l.status === 'new' ? '#e8b04e' : '#555'}"></span><div style="flex:1"><div class="t">${esc(l.from)} <span class="pill">${label[l.status]}</span></div><div>${esc(l.text)}</div><div class="s">${esc(g.districtName(l.district))} · ${when}</div></div>`;
      if (l.status === 'new' || l.status === 'active') {
        const btns = document.createElement('div');
        btns.className = 'tip-btns';
        const go = document.createElement('button'); go.className = 'btn primary'; go.textContent = l.status === 'active' ? 'Following' : 'Follow';
        go.onclick = () => { g.followLead(l); ctx.rerender(); };
        const no = document.createElement('button'); no.className = 'btn'; no.textContent = 'Let it go';
        no.onclick = () => { g.dismissLead(l); ctx.rerender(); };
        btns.append(go, no);
        row.appendChild(btns);
      }
      if (!l.read) { l.read = true; g.mind.add('obsession', 1, { quiet: true }); }
      body.appendChild(row);
    }
  },

  photos(g, body) {
    const s = g.state;
    const list = [...s.memories].reverse();
    body.innerHTML = list.length ? `<div class="memories">${list.map((m) => `<div class="memory">${m.img ? `<img src="${m.img}" alt="">` : `<div class="ph">${m.icon || '•'}</div>`}<div class="cap"><b>${esc(m.title)}</b><span class="s">Day ${m.day}</span>${m.text ? `<div>${esc(m.text)}</div>` : ''}</div></div>`).join('')}</div>` : '<p class="s">Press C to use your camera. It scans faces whether you want it to or not.</p>';
  },

  people(g, body) {
    const s = g.state;
    const rows = g.route.npcs.filter((n) => s.npcs[n.id]?.met).map((n) => {
      const st = s.npcs[n.id];
      const gone = (n.id === 'sam' && s.flags.samGone) || (n.id === 'dev' && s.flags.devGone);
      return `<div class="list-row${gone ? ' done' : ''}"><div><div class="t">${esc(n.name)} <span class="hearts">${hearts(Math.max(0, Math.round(st.rel)))}</span></div><div class="s">${esc(n.role)}${gone ? ' · not answering' : ''}</div><div class="s">${n.schedule.map((w) => `${fmtTime(w.from % 24)}–${fmtTime(w.to % 24)} ${g.districtName(w.district)}`).join(' · ')}</div></div></div>`;
    });
    body.innerHTML = (rows.join('') || '<p class="s">You haven\'t talked to anyone.</p>') + `<p class="s" style="margin-top:10px">Mom calls in the evenings. Dr. Rao sees you every third day at 4pm (Upper West Side).</p>`;
  },

  mind(g, body) {
    const s = g.state, m = s.mind;
    const bar = (v, c) => `<div class="bar"><i style="width:${v}%;background:${c}"></i></div>`;
    body.innerHTML = `
      <div class="sec">Right now</div>
      <div class="need">Breakdown ${bar(m.breakdown, '#e2463c')}</div>
      <div class="need">Obsession ${bar(m.obsession, '#e8b04e')}</div>
      <div class="need">Isolation ${bar(m.isolation, '#8cc6f2')}</div>
      <div class="need">Acceptance ${bar(m.acceptance, '#7fc49a')}</div>
      <div class="sec">Care</div>
      <div class="list-row"><div><div class="t">Meds ${g.mind.onMeds() ? '— taken today' : '— not taken today'}</div><div class="s">Steadier, fewer visions. But the hunches fade, and so does that sharp, awful focus.</div></div></div>
      <div class="list-row"><div><div class="t">Therapy — next: day ${g.nextSession()}, 4–6pm</div><div class="s">Dr. Rao, Upper West Side. Sessions so far: ${m.sessions}.</div></div></div>
      <div class="list-row"><div><div class="t">Grounding (R)</div><div class="s">Look away, name five things you can see, look back. What stays is real.</div></div></div>
      <div class="sec">The case</div>
      <div class="list-row"><div><div class="t">${Math.max(0, CASE_DAYS - s.day)} days until the case goes inactive</div><div class="s">${WEEKDAYS[(s.day - 1) % 7]}, day ${s.day}. Lily has been missing ${s.day + MISSING_BEFORE} days.</div></div></div>
      <p class="s" style="margin-top:12px">${esc(CARE_NOTE)}</p>`;
  },

  settings(g, body, ctx) {
    const st = g.settings;
    body.innerHTML = `
      <div class="setting"><span>Sound</span><button data-k="sound">${st.sound ? 'On' : 'Off'}</button></div>
      <div class="setting"><span>Graphics quality</span><button data-k="quality">${st.quality === 'high' ? 'High' : 'Low'}</button></div>
      <div class="setting"><span>Save game</span><button data-k="save">Save now</button></div>
      <div class="setting"><span>Quit to title</span><button class="btn danger" data-k="quit">Save & quit</button></div>
      <p class="s" style="margin-top:14px">WASD walk · Shift run · drag to look · E interact · Tab phone · B the wall · M map · C camera · R ground yourself.</p>`;
    body.querySelectorAll('button').forEach((b) => {
      b.onclick = () => {
        const k = b.dataset.k;
        if (k === 'sound') g.setSetting('sound', !st.sound);
        if (k === 'quality') g.setSetting('quality', st.quality === 'high' ? 'low' : 'high');
        if (k === 'save') { g.saveNow(); g.ui.toast('Saved', '💾'); }
        if (k === 'quit') { ctx.close(); g.quitToTitle(); return; }
        ctx.rerender();
      };
    });
  },
};

// ---------------------------------------------------------------- the wall
export function openWall(g) {
  const s = g.state;
  const el = document.createElement('div');
  el.className = 'board ls-board';
  const panel = g.ui.panel(el, { backCls: 'board-back', onKey: (e, api) => { if (['Escape', 'b', 'B', 'Tab'].includes(e.key)) api.close(); return true; } });
  const open = (d) => !s.deductions[d.id] && (!d.requires || d.requires.every((r) => s.deductions[r])) && (d.id === 'left' || s.deductions.left);
  const render = () => {
    el.innerHTML = `<div class="bhead"><h2>Where is Lily?</h2><button class="btn close">Close (B)</button></div><div class="cols"></div>`;
    el.querySelector('.close').onclick = () => panel.close();
    const cols = el.querySelector('.cols');
    for (const d of DEDUCTIONS) {
      const col = document.createElement('div');
      col.className = 'dcol';
      const n = d.clues.filter((c) => s.clues[c]).length;
      const solved = s.deductions[d.id], ok = open(d);
      const correct = d.options.find((o) => o.correct);
      col.innerHTML = `<div class="qcard ${solved ? 'solved' : ok ? '' : 'locked'}"><div class="count">${solved ? 'SOLVED' : ok ? `${n}/${d.need} clues` : 'NOT YET'}</div><h3>${esc(d.q)}</h3>${solved ? `<div class="ans">${esc(correct.text)}</div>` : ''}${ok && n >= d.need ? '<button class="btn deduce">Decide</button>' : ''}</div>`;
      for (const c of d.clues) if (s.clues[c]) col.insertAdjacentHTML('beforeend', `<div class="clue"><b>${esc(CLUES[c].title)}</b>${esc(CLUES[c].text)}<small>${esc(CLUES[c].src)} · Day ${s.clues[c]}</small></div>`);
      const btn = col.querySelector('.deduce');
      if (btn) btn.onclick = () => g.run(async () => {
        const v = await g.ui.menu({ title: d.q, subtitle: 'You\'ve been staring at this for hours. What does it add up to?', items: d.options.map((o, k) => ({ label: o.text, value: k })) });
        if (v == null) return;
        const o = d.options[v];
        panel.close();
        if (o.correct) { await g.ui.cards([d.reveal], { title: 'The wall' }); g.solve(d.id); }
        else {
          g.audio.bad();
          await g.ui.cards([o.wrong], { title: 'Wrong' });
          g.mind.apply({ breakdown: 8, obsession: 4 });
        }
      });
      cols.appendChild(col);
    }
    const falseCol = document.createElement('div');
    falseCol.className = 'dcol';
    const falses = s.leads.filter((l) => l.status === 'false' || l.status === 'pinned');
    falseCol.innerHTML = `<div class="qcard locked"><div class="count">DEAD ENDS</div><h3>Things that weren't her</h3></div>${falses.map((l) => `<div class="clue false"><b>${esc(l.from)}</b>${esc(l.text)}</div>`).join('') || '<div class="clue unknown">Nothing yet.</div>'}`;
    cols.appendChild(falseCol);
  };
  render();
}

// ---------------------------------------------------------------- ending
export function endingScreen(g, key, stats) {
  const e = ENDINGS[key];
  return new Promise((resolve) => {
    const el = document.createElement('div');
    el.className = 'cards solid ls-end';
    el.innerHTML = `<div class="inner"><h1>${esc(e.title)}</h1>
      <div class="stats">${stats.map(([k, v]) => `<div><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join('')}</div>
      <p class="ls-care" style="animation:none">${esc(CARE_NOTE)}</p>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:18px"><button class="btn primary" data-a="again">Play again</button><button class="btn" data-a="title">Back to title</button></div></div>`;
    const close = g.ui._overlay(el);
    el.querySelectorAll('button').forEach((b) => { b.onclick = () => { close(); resolve(b.dataset.a); }; });
  });
}
