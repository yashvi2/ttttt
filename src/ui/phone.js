import { esc, fmtTime, hearts } from './ui.js';
import { SISTERS } from '../data/common.js';
import { POI_STYLE } from '../world/city.js';

const APPS = [
  { id: 'messages', name: 'Messages', icon: '💬', bg: '#34c759' },
  { id: 'tasks', name: 'Tasks', icon: '✅', bg: '#ff9f0a' },
  { id: 'metro', name: 'Transit', icon: 'Ⓜ', bg: '#0a84ff' },
  { id: 'board', name: 'Board', icon: '🧩', bg: '#b3121e' },
  { id: 'journal', name: 'Journal', icon: '📔', bg: '#a2845e' },
  { id: 'people', name: 'People', icon: '👥', bg: '#5e5ce6' },
  { id: 'picks', name: 'Local Picks', icon: '⭐', bg: '#ffcc00' },
  { id: 'map', name: 'Map', icon: '🗺️', bg: '#30b0c7' },
  { id: 'settings', name: 'Settings', icon: '⚙️', bg: '#636366' },
];

export function openPhone(g, app = null) {
  const el = document.createElement('div');
  el.className = 'phone';
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
    const status = `<div class="status"><span>${fmtTime(s.time)}</span><span>${g.route.city} · 5G ▮▮▮</span></div>`;
    if (!current) {
      el.innerHTML = `${status}<div class="wall"><div class="big">${fmtTime(s.time).replace(/(am|pm)/, '')}</div><div class="d">Day ${s.day} · ${esc(g.districtName(s.district))}</div></div><div class="grid"></div>`;
      const grid = el.querySelector('.grid');
      for (const a of APPS) {
        if (a.id === 'board' && s.phase < 2) continue;
        const b = document.createElement('button');
        b.className = 'app-icon';
        const badge = a.id === 'messages' ? g.story.unread() : 0;
        b.innerHTML = `<span class="i" style="background:${a.bg}">${a.icon}</span>${esc(a.name)}${badge ? `<span class="badge">${badge}</span>` : ''}`;
        b.onclick = () => {
          g.audio.click();
          if (a.id === 'board') { panel.close(); openBoard(g); return; }
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
    const body = el.querySelector('.body');
    APP_RENDER[current](g, body, { rerender: render, close: () => panel.close() });
  };
  render();
  return panel;
}

const APP_RENDER = {
  messages(g, body, ctx) {
    const s = g.state;
    const byFrom = new Map();
    for (const m of s.messages) { if (!byFrom.has(m.from)) byFrom.set(m.from, []); byFrom.get(m.from).push(m); }
    if (!byFrom.size) { body.innerHTML = '<p class="s">No messages yet.</p>'; return; }
    const order = [...byFrom.keys()].sort((a, b) => Math.max(...byFrom.get(b).map((m) => m.day * 30 + m.time)) - Math.max(...byFrom.get(a).map((m) => m.day * 30 + m.time)));
    body.innerHTML = '';
    for (const from of order) {
      const th = document.createElement('div');
      th.className = 'thread';
      th.innerHTML = `<h4>${esc(from)}</h4>`;
      for (const m of byFrom.get(from)) {
        th.insertAdjacentHTML('beforeend', `<div class="bubble">${esc(m.text)}<span class="ts">Day ${m.day}, ${fmtTime(m.time)}</span></div>`);
        const def = g.route.messages.find((x) => x.id === m.id);
        if (def && def.replies) {
          if (m.replied != null) {
            const rp = def.replies[m.replied];
            th.insertAdjacentHTML('beforeend', `<div class="bubble me">${esc(rp.text)}</div><div class="bubble">${esc(rp.answer)}</div>`);
          } else {
            const row = document.createElement('div');
            row.className = 'reply-row';
            def.replies.forEach((rp, k) => {
              const b = document.createElement('button');
              b.textContent = rp.text;
              b.onclick = () => { m.replied = k; g.state.needs.mood = Math.min(100, g.state.needs.mood + rp.mood); g.audio.buzz(); ctx.rerender(); };
              row.appendChild(b);
            });
            th.appendChild(row);
          }
        }
        m.read = true;
      }
      body.appendChild(th);
    }
  },

  tasks(g, body) {
    const s = g.state, r = g.route;
    const obj = g.story.objective();
    let html = '';
    if (obj) html += `<div class="sec">Main — ${esc(obj.label)}</div><div class="list-row"><span class="dot" style="background:#e8b04e"></span><div><div class="t">${obj.html}</div>${obj.timer ? `<div class="s">${obj.timer}</div>` : ''}</div></div>`;
    if (s.phase === 1) {
      html += '<div class="sec">Settling in</div>';
      for (const t of r.tutorial) html += `<div class="list-row ${s.tutorial[t.id] ? 'done' : ''}"><span class="dot" style="background:${s.tutorial[t.id] ? '#7fc49a' : '#666'}"></span><div class="t">${esc(t.text)}</div></div>`;
    }
    html += '<div class="sec">Daily life</div>';
    const needs = s.needs;
    html += row(needs.hunger < 35 ? '#ff7a93' : '#7fc49a', 'Eat something', needs.hunger < 35 ? 'You\'re getting hungry.' : 'You\'re fed. For now.');
    html += row(needs.energy < 30 ? '#ff7a93' : '#7fc49a', 'Rest', needs.energy < 30 ? 'Head home to sleep.' : 'Energy is fine.');
    if (r.work.assignments) {
      html += `<div class="sec">${esc(r.work.label)} — assignments</div>`;
      if (s.assignment) {
        const a = r.work.assignments.find((x) => x.spot === s.assignment);
        html += row('#8cc6f2', 'Current: ' + a.brief, 'Take a 2★+ photo there (C).');
      } else html += row('#666', 'No assignment', 'Pick one up at the Lumen Residency.');
      html += `<div class="s" style="margin-top:6px">Completed: ${Object.keys(s.assignmentsDone).length}/${r.work.assignments.length}</div>`;
    } else {
      html += `<div class="sec">${esc(r.work.label)}</div>`;
      html += row('#8cc6f2', `Ear-training sessions: ${s.sessions}`, 'Hale Institute, Bloomsbury.');
      html += row(s.perks.venue ? '#7fc49a' : '#666', `Gigs played: ${s.gigs}`, s.perks.venue ? (s.sessions >= 3 ? 'Riverside Hall is ready for you (South Bank).' : 'Do 3 sessions first.') : 'Get to know the sound engineer at Riverside Hall.');
    }
    const gemsLeft = g.allPois().filter((p) => p.type === 'gem' && !p.requires && !s.gems[p.id]).length;
    html += '<div class="sec">Explore</div>';
    html += row('#ffe07a', `Hidden gems: ${Object.keys(s.gems).length} found`, gemsLeft ? `${gemsLeft} still hiding. Check Local Picks.` : 'You found them all!');
    html += row('#c8a2f2', `Districts visited: ${Object.keys(s.visited).length}/${r.districts.length}`, '');
    if (s.challenge.speedrun) html += row('#ff7a93', 'Speed Run', g.fmtRun());
    if (s.challenge.photoPerfect) html += row('#ff7a93', 'Photo Perfect', `${s.challenge.shotsLeft} exposures left`);
    body.innerHTML = html;
  },

  metro(g, body, ctx) {
    const r = g.route, s = g.state;
    const at = g.atStation();
    const ids = Object.keys(r.metro.map);
    let svg = '';
    for (const L of r.metro.lines) {
      const pts = L.stops.map((id) => r.metro.map[id].map((v) => v * 100).join(',')).join(' ');
      svg += `<polyline points="${pts}" fill="none" stroke="${L.color}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" style="stroke-width:7px"/>`;
    }
    body.innerHTML = `<div class="s" style="margin-bottom:8px">${at ? `You're at <b>${esc(at.name)}</b>. Tap a destination.` : 'Walk to a Ⓜ station to travel. Station entrances are marked on your minimap.'}${s.perks.express ? ' <b style="color:#7fc49a">Express unlocked.</b>' : ''}</div>
      <div class="metro"><svg viewBox="0 0 100 100" preserveAspectRatio="none">${svg}</svg></div><div class="legend" style="margin-top:8px">${r.metro.lines.map((L) => `<span><i style="background:${L.color}"></i>${esc(L.name)}</span>`).join('')}</div>`;
    const box = body.querySelector('.metro');
    for (const id of ids) {
      const [x, y] = r.metro.map[id];
      const b = document.createElement('button');
      const here = id === s.district;
      const mins = g.travelMinutes(s.district, id);
      b.className = 'stn' + (here ? ' here' : at ? ' go' : '');
      b.style.left = x * 100 + '%'; b.style.top = y * 100 + '%';
      b.innerHTML = `${esc(g.districtName(id))}${!here && at ? `<br><span style="font-weight:400">${mins} min</span>` : ''}${s.visited[id] ? '' : ' •'}`;
      b.disabled = here || !at;
      b.onclick = () => { ctx.close(); g.travel(id); };
      box.appendChild(b);
    }
  },

  journal(g, body) {
    const s = g.state;
    let html = `<div class="sec">Memories (${s.memories.length})</div><div class="memories">`;
    const list = [...s.memories].reverse();
    if (!list.length) html += '<p class="s">Take photos (C), discover hidden gems and visit places to collect memories.</p>';
    for (const m of list) {
      html += `<div class="memory">${m.img ? `<img src="${m.img}" alt="">` : `<div class="ph">${m.icon || '✨'}</div>`}<div class="cap"><b>${esc(m.title)}</b>${m.stars ? `<span class="stars">${'★'.repeat(m.stars)}${'☆'.repeat(3 - m.stars)}</span> ` : ''}<span class="s">Day ${m.day}</span>${m.text ? `<div>${esc(m.text)}</div>` : ''}</div></div>`;
    }
    html += '</div>';
    const entries = (s.journal || []).slice().reverse();
    if (entries.length) {
      html += '<div class="sec">Journal</div>';
      for (const j of entries) html += `<div class="journal-entry"><small>Day ${j.day}</small>${esc(j.text)}</div>`;
    }
    body.innerHTML = html;
  },

  people(g, body) {
    const s = g.state;
    let html = '';
    const met = g.route.npcs.filter((n) => s.npcs[n.id]?.met);
    if (!met.length) html = '<p class="s">You haven\'t met anyone yet. Walk up to people with name tags and press E.</p>';
    for (const n of met) {
      const st = s.npcs[n.id];
      const hint = s.phase >= 2 ? g.story.hintFor(n.id) : null;
      const where = n.schedule.map((w) => `${fmtTime(w.from)}–${fmtTime(w.to)} ${g.districtName(w.district)}`).join(' · ');
      html += `<div class="list-row"><span class="dot" style="background:#${new Number(n.look.top).toString(16).padStart(6, '0')}"></span><div><div class="t">${esc(n.name)} <span class="hearts">${hearts(st.rel)}</span></div><div class="s">${esc(n.role)}</div><div class="s">${esc(where)}</div>${hint ? `<div class="s" style="color:#e8b04e">🔎 ${esc(hint)}</div>` : ''}${n.perk && st.rel < n.perk.rel ? `<div class="s">Friendship reward at ${n.perk.rel}♥</div>` : ''}</div></div>`;
    }
    const unmet = g.route.npcs.length - met.length;
    if (unmet > 0) html += `<p class="s" style="margin-top:10px">${unmet} more people to meet across the city.</p>`;
    body.innerHTML = html;
  },

  picks(g, body) {
    const s = g.state;
    let html = '<p class="s">Reviews from locals. Some places don\'t show up on maps — you have to go looking.</p>';
    html += '<div class="sec">Hidden gems</div>';
    for (const p of g.allPois().filter((x) => x.type === 'gem' && !x.date)) {
      const found = s.gems[p.id];
      const dir = compass(p.pos.x, p.pos.z);
      html += `<div class="list-row ${found ? 'done' : ''}"><span class="dot" style="background:#ffe07a"></span><div><div class="t">${found ? esc(p.name) : '??? '}${found ? '' : `<span class="s">— ${esc(g.districtName(p.district))}</span>`}</div><div class="s">★★★★★ “${found ? 'You found it. Tell no one. (Tell everyone.)' : `Honestly the best-kept secret in ${esc(g.districtName(p.district))}. It's somewhere ${dir} — keep your eyes on the shopfronts.`}”</div></div></div>`;
    }
    html += '<div class="sec">Places to eat</div>';
    for (const p of g.allPois().filter((x) => x.type === 'eat')) {
      const top = p.menu[0];
      html += `<div class="list-row"><span class="dot" style="background:#${POI_STYLE.eat.color.toString(16)}"></span><div><div class="t">${esc(p.name)} <span class="s">${esc(g.districtName(p.district))}</span></div><div class="s">★★★★☆ “Get the ${esc(top.name.toLowerCase())}.” · open ${fmtTime(p.hours[0])}–${fmtTime(p.hours[1])}</div></div></div>`;
    }
    body.innerHTML = html;
  },

  settings(g, body, ctx) {
    const st = g.settings;
    body.innerHTML = `
      <div class="setting"><span>Sound</span><button data-k="sound">${st.sound ? 'On' : 'Off'}</button></div>
      <div class="setting"><span>Music volume</span><button data-k="music">${Math.round(st.music * 100)}%</button></div>
      <div class="setting"><span>Graphics quality</span><button data-k="quality">${st.quality === 'high' ? 'High (shadows + bloom)' : 'Low (faster)'}</button></div>
      <div class="setting"><span>Show place labels</span><button data-k="labels">${st.labels ? 'On' : 'Off'}</button></div>
      <div class="setting"><span>Save game</span><button data-k="save">Save now</button></div>
      <div class="setting"><span>Quit to title</span><button class="btn danger" data-k="quit">Save & quit</button></div>
      <p class="s" style="margin-top:14px">Controls: WASD / arrows to walk · Shift to run · drag to look · wheel to zoom · E interact · Tab phone · B board · M map · C camera · J journal.</p>`;
    body.querySelectorAll('button').forEach((b) => {
      b.onclick = () => {
        const k = b.dataset.k;
        if (k === 'sound') g.setSetting('sound', !st.sound);
        if (k === 'music') g.setSetting('music', st.music >= 1 ? 0 : Math.round((st.music + 0.25) * 100) / 100);
        if (k === 'quality') g.setSetting('quality', st.quality === 'high' ? 'low' : 'high');
        if (k === 'labels') g.setSetting('labels', !st.labels);
        if (k === 'save') { g.saveNow(); g.ui.toast('Game saved', '💾'); }
        if (k === 'quit') { ctx.close(); g.quitToTitle(); return; }
        ctx.rerender();
      };
    });
  },
};

function row(color, t, s) {
  return `<div class="list-row"><span class="dot" style="background:${color}"></span><div><div class="t">${t}</div>${s ? `<div class="s">${s}</div>` : ''}</div></div>`;
}
function compass(x, z) {
  const ns = z < -40 ? 'north' : z > 40 ? 'south' : '';
  const ew = x < -40 ? 'west' : x > 40 ? 'east' : '';
  return ns || ew ? `in the ${ns}${ns && ew ? '-' : ''}${ew}` : 'near the middle';
}

// ---------- Mystery board ----------
export function openBoard(g) {
  const s = g.state, r = g.route, story = g.story;
  const el = document.createElement('div');
  el.className = 'board';
  const panel = g.ui.panel(el, { backCls: 'board-back', onKey: (e, api) => { if (['Escape', 'b', 'B', 'Tab'].includes(e.key)) api.close(); return true; } });
  const render = () => {
    const sis = SISTERS[r.sister].name;
    el.innerHTML = `<div class="bhead"><h2>🧩 Where is ${esc(sis)}?</h2><button class="btn close">Close (B)</button></div><div class="cols"></div>`;
    el.querySelector('.close').onclick = () => panel.close();
    const cols = el.querySelector('.cols');
    for (const d of r.deductions) {
      const col = document.createElement('div');
      col.className = 'dcol';
      const solved = s.deductions[d.id];
      const open = story.deductionOpen(d);
      const n = story.clueCountFor(d.id);
      const locked = !solved && !open;
      const correct = d.options.find((o) => o.correct);
      col.innerHTML = `<div class="qcard ${solved ? 'solved' : locked ? 'locked' : ''}"><div class="count">${solved ? 'SOLVED' : locked ? 'Not yet…' : `${n}/${d.need} clues`}</div><h3>${esc(d.q)}</h3>${solved ? `<div class="ans">${esc(correct.text)}</div>` : ''}${open && n >= d.need ? '<button class="btn deduce">Make a deduction</button>' : ''}</div>`;
      for (const cid of d.clues) {
        const c = r.clues[cid];
        if (s.clues[cid]) col.insertAdjacentHTML('beforeend', `<div class="clue"><b>${esc(c.title)}</b>${esc(c.text)}<small>${esc(c.src)} · Day ${s.clues[cid]}</small></div>`);
      }
      const missing = d.clues.filter((c) => !s.clues[c]).length;
      if (!solved && !locked && missing) col.insertAdjacentHTML('beforeend', `<div class="clue unknown">${missing} more clue${missing > 1 ? 's' : ''} out there. Ask people, eavesdrop, take photos.</div>`);
      const btn = col.querySelector('.deduce');
      if (btn) btn.onclick = () => g.run(async () => {
        const v = await g.ui.menu({ title: d.q, subtitle: 'Look at your pinned clues. What do they add up to?', items: d.options.map((o, k) => ({ label: o.text, value: k })) });
        if (v == null) return;
        const o = d.options[v];
        if (o.correct) {
          panel.close();
          await g.ui.cards([d.reveal], { title: 'Deduction' });
          story.solve(d.id);
          g.afterDeduction(d.id);
        } else {
          g.audio.bad();
          await g.ui.cards([o.wrong], { title: 'Hmm. No.' });
        }
      });
      cols.appendChild(col);
    }
  };
  render();
}

// ---------- Full map ----------
export function openMap(g) {
  const el = document.createElement('div');
  el.className = 'modal card-glass mapview';
  el.innerHTML = `<h2>${esc(g.districtName(g.state.district))}</h2><div class="subtitle">${esc(g.district.def.sub)}</div><canvas width="900" height="900"></canvas><div class="legend">${Object.entries({ eat: 'Food', work: 'Work', hangout: 'Hang out', home: 'Home', station: 'Station', gem: 'Hidden gem', photo: 'Photo spot' }).map(([k, t]) => `<span><i style="background:#${POI_STYLE[k].color.toString(16).padStart(6, '0')}"></i>${t}</span>`).join('')}<span><i style="background:#fff;border:2px solid #ff7a93"></i>People</span></div>`;
  const panel = g.ui.panel(el, { backCls: 'modal-back', onKey: (e, api) => { if (['Escape', 'm', 'M'].includes(e.key)) api.close(); return true; } });
  const cv = el.querySelector('canvas');
  const tick = () => { if (panel.closed) return; g.drawMap(cv, true); requestAnimationFrame(tick); };
  tick();
}
