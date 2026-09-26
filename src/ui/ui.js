// DOM user interface. Pure presentation: the game passes data in and gets
// choices back through promises. A key-handler stack routes keyboard input to
// whichever overlay is on top.

const h = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
};
export const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function fmtTime(t) {
  const hh = Math.floor(t) % 24, mm = Math.floor((t % 1) * 60);
  const ap = hh < 12 ? 'am' : 'pm';
  const h12 = hh % 12 === 0 ? 12 : hh % 12;
  return `${h12}:${String(mm).padStart(2, '0')}${ap}`;
}
export const hearts = (n) => '♥'.repeat(n) + '♡'.repeat(Math.max(0, 5 - n));

export class UI {
  constructor(root, audio) {
    this.root = root;
    this.audio = audio;
    this.stack = [];
    this.busy = 0;
    this._build();
    window.addEventListener('keydown', (e) => {
      const top = this.stack[this.stack.length - 1];
      if (top && top(e) !== false) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  }

  _build() {
    const r = this.root;
    this.hud = h('div', ''); this.hud.id = 'hud'; r.appendChild(this.hud);
    this.clock = h('div', 'hud-clock card-glass'); this.hud.appendChild(this.clock);
    this.obj = h('div', 'hud-obj card-glass'); this.hud.appendChild(this.obj);
    this.needs = h('div', 'hud-needs card-glass'); this.hud.appendChild(this.needs);
    this.keys = h('div', 'hud-keys card-glass'); this.hud.appendChild(this.keys);
    this.minimap = document.createElement('canvas'); this.minimap.id = 'minimap'; this.minimap.width = 340; this.minimap.height = 340;
    this.hud.appendChild(this.minimap);
    this.promptEl = h('div', 'prompt card-glass hidden'); this.hud.appendChild(this.promptEl);
    this.toasts = h('div', 'toasts'); r.appendChild(this.toasts);
    this.layer = h('div', ''); this.layer.style.cssText = 'position:absolute;inset:0;pointer-events:none'; r.appendChild(this.layer);
    this.fadeEl = h('div', 'fade', '<div class="ft"></div>'); r.appendChild(this.fadeEl);
    this.flashEl = h('div', 'flash'); r.appendChild(this.flashEl);
    this.hud.classList.add('hidden');
  }

  pushKeys(fn) { this.stack.push(fn); return () => { const i = this.stack.indexOf(fn); if (i >= 0) this.stack.splice(i, 1); }; }
  _overlay(el) {
    el.style.pointerEvents = 'auto';
    this.layer.appendChild(el);
    this.busy++;
    this._syncOverlay();
    return () => { el.remove(); this.busy--; this._syncOverlay(); };
  }
  // Declutter the HUD while a dialogue, menu or cinematic card is up.
  _syncOverlay() { this.root.classList.toggle('overlay-open', this.layer.children.length > 0); }

  showHud(v) { this.hud.classList.toggle('hidden', !v); }

  // ---------- HUD ----------
  setClock({ time, day, weekday, weather, district, sub, label }) {
    const wIcon = { clear: '☀️', cloudy: '☁️', rain: '🌧️' }[weather] || '';
    const icon = time >= 19.6 || time < 6 ? (weather === 'clear' ? '🌙' : wIcon) : wIcon;
    this.clock.innerHTML = `<div class="time">${fmtTime(time)}</div><div class="meta">${icon} ${esc(label)} · ${esc(weekday)}, Day ${day}</div><div class="place">${esc(district)} <small>${esc(sub)}</small></div>`;
  }
  setObjective(label, html, timer) {
    if (!html) { this.obj.classList.add('hidden'); return; }
    this.obj.classList.remove('hidden');
    this.obj.innerHTML = `<div class="lbl">${esc(label)}</div>${html}${timer ? `<div class="timer">${timer}</div>` : ''}`;
  }
  setNeeds(needs, money, cur, extra = '') {
    const bar = (v, c) => `<div class="bar"><i style="width:${Math.max(0, Math.min(100, v))}%;background:${c}"></i></div>`;
    const col = (v, base) => (v < 20 ? '#ff7a93' : base);
    this.needs.innerHTML = `
      <div class="need">Energy ${bar(needs.energy, col(needs.energy, '#8cc6f2'))}</div>
      <div class="need">Hunger ${bar(needs.hunger, col(needs.hunger, '#e8b04e'))}</div>
      <div class="need">Mood ${bar(needs.mood, col(needs.mood, '#7fc49a'))}</div>
      <div class="money"><span>Wallet</span><span>${cur}${Math.floor(money)}</span></div>${extra}`;
  }
  setKeys(list) { this.keys.innerHTML = list.map(([k, t]) => `<span><b>${k}</b>${t}</span>`).join(''); }
  prompt(text, sub, key = 'E') {
    if (!text) { this.promptEl.classList.add('hidden'); this._lastPrompt = null; return; }
    const id = key + text + (sub || '');
    if (this._lastPrompt === id) return;
    this._lastPrompt = id;
    this.promptEl.classList.remove('hidden');
    this.promptEl.innerHTML = `<kbd>${esc(key)}</kbd><span>${esc(text)}</span>${sub ? `<span class="sub">${esc(sub)}</span>` : ''}`;
  }
  toast(text, icon = '📱', ms = 3600) {
    const t = h('div', 'toast card-glass', `<span class="ti">${icon}</span><span>${esc(text)}</span>`);
    this.toasts.appendChild(t);
    while (this.toasts.children.length > 4) this.toasts.firstChild.remove();
    setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 420); }, ms);
  }
  flash() { this.flashEl.classList.remove('go'); void this.flashEl.offsetWidth; this.flashEl.classList.add('go'); }

  // ---------- dialogue ----------
  /** lines: array of strings; choices: [{text}] -> resolves index (or -1 if none) */
  dialogue({ name, role, color = '#fff', rel = null, lines = [], choices = null }) {
    return new Promise((resolve) => {
      const box = h('div', 'dialogue card-glass');
      box.innerHTML = `<div class="who"><b style="color:${color}">${esc(name)}</b><span>${esc(role || '')}</span>${rel != null ? `<span class="hearts">${hearts(rel)}</span>` : ''}</div><div class="line"></div><div class="more"></div><div class="choices"></div>`;
      const close = this._overlay(box);
      const lineEl = box.querySelector('.line'), moreEl = box.querySelector('.more'), chEl = box.querySelector('.choices');
      let i = 0, sel = 0;
      const finish = (v) => { popKeys(); close(); resolve(v); };
      const showChoices = () => {
        moreEl.textContent = '';
        if (!choices || !choices.length) { finish(-1); return; }
        chEl.innerHTML = '';
        choices.forEach((c, k) => {
          const b = h('button', k === 0 ? 'sel' : '', `<kbd>${k + 1}</kbd><span>${esc(c.text)}</span>`);
          b.onclick = (e) => { e.stopPropagation(); this.audio?.click(); finish(k); };
          chEl.appendChild(b);
        });
      };
      const next = () => {
        if (i < lines.length) {
          lineEl.innerHTML = fmtLine(lines[i]);
          i++;
          moreEl.textContent = i < lines.length || (choices && choices.length) ? '▸ E / Space / click' : '▸ E / Space / click to close';
          if (i === lines.length && choices && choices.length) showChoices();
        } else if (!choices || !choices.length) finish(-1);
      };
      box.onclick = () => { if (!chEl.children.length) { this.audio?.click(); next(); } };
      const popKeys = this.pushKeys((e) => {
        const btns = [...chEl.querySelectorAll('button')];
        if (btns.length) {
          const n = parseInt(e.key, 10);
          if (n >= 1 && n <= btns.length) { btns[n - 1].click(); return true; }
          if (e.key === 'ArrowDown' || e.key === 's') { sel = (sel + 1) % btns.length; }
          else if (e.key === 'ArrowUp' || e.key === 'w') { sel = (sel - 1 + btns.length) % btns.length; }
          else if (e.key === 'Enter' || e.key === 'e' || e.key === ' ') { btns[sel].click(); return true; }
          else if (e.key === 'Escape') { finish(btns.length - 1); return true; }
          btns.forEach((b, k) => b.classList.toggle('sel', k === sel));
          return true;
        }
        if (['e', 'E', ' ', 'Enter'].includes(e.key)) { this.audio?.click(); next(); return true; }
        if (e.key === 'Escape') { finish(-1); return true; }
        return true;
      });
      if (!lines.length) showChoices(); else next();
    });
  }

  // ---------- menu ----------
  /** items: [{label, sub, right, disabled, value}] -> resolves value or null */
  menu({ title, subtitle = '', items, foot = 'Esc to close' }) {
    return new Promise((resolve) => {
      const back = h('div', 'modal-back');
      const m = h('div', 'modal card-glass', `<h2>${esc(title)}</h2>${subtitle ? `<div class="subtitle">${subtitle}</div>` : ''}<div class="items"></div><div class="foot">${esc(foot)}</div>`);
      back.appendChild(m);
      const close = this._overlay(back);
      const list = m.querySelector('.items');
      let sel = items.findIndex((x) => !x.disabled);
      const btns = items.map((it, k) => {
        const b = h('button', 'menu-item', `<kbd>${k + 1}</kbd><span class="grow">${esc(it.label)}${it.sub ? `<span class="sub">${esc(it.sub)}</span>` : ''}</span>${it.right ? `<span class="right">${esc(it.right)}</span>` : ''}`);
        b.disabled = !!it.disabled;
        b.onclick = () => { this.audio?.click(); done(it.value); };
        list.appendChild(b);
        return b;
      });
      const mark = () => btns.forEach((b, k) => b.classList.toggle('sel', k === sel));
      mark();
      const done = (v) => { pop(); close(); resolve(v); };
      back.onclick = (e) => { if (e.target === back) done(null); };
      const pop = this.pushKeys((e) => {
        const n = parseInt(e.key, 10);
        if (n >= 1 && n <= items.length && !items[n - 1].disabled) { done(items[n - 1].value); return true; }
        if (e.key === 'Escape' || e.key === 'Tab') { done(null); return true; }
        const step = (d) => { for (let k = 1; k <= items.length; k++) { const j = (sel + d * k + items.length * 2) % items.length; if (!items[j].disabled) { sel = j; break; } } mark(); };
        if (e.key === 'ArrowDown' || e.key === 's') step(1);
        if (e.key === 'ArrowUp' || e.key === 'w') step(-1);
        if ((e.key === 'Enter' || e.key === 'e' || e.key === ' ') && sel >= 0 && !items[sel].disabled) done(items[sel].value);
        return true;
      });
    });
  }

  // ---------- cinematic cards ----------
  cards(lines, { title = '', solid = false, hand = false, scene = false, onEach = null } = {}) {
    return new Promise((resolve) => {
      const el = h('div', 'cards' + (solid ? ' solid' : '') + (hand ? ' hand' : '') + (scene ? ' scene' : ''), `<div class="inner">${title ? `<h1>${esc(title)}</h1>` : ''}<p></p><div class="tap">click · space · E</div></div>`);
      const close = this._overlay(el);
      const p = el.querySelector('p');
      let i = 0;
      const next = () => {
        if (i >= lines.length) { pop(); close(); resolve(); return; }
        p.style.animation = 'none'; void p.offsetWidth; p.style.animation = '';
        p.innerHTML = fmtLine(lines[i]);
        if (onEach) onEach(i);
        i++;
      };
      el.onclick = next;
      const pop = this.pushKeys((e) => { if ([' ', 'Enter', 'e', 'E', 'Escape'].includes(e.key)) next(); return true; });
      next();
    });
  }

  fade(text = '', ms = 1600, sub = '') {
    return new Promise((resolve) => {
      this.fadeEl.querySelector('.ft').innerHTML = text ? `${esc(text)}${sub ? `<small>${esc(sub)}</small>` : ''}` : '';
      this.fadeEl.classList.add('on');
      this.busy++;
      setTimeout(() => resolve(() => { this.fadeEl.classList.remove('on'); this.busy--; }), ms);
    });
  }

  // ---------- generic panel (phone, board, map) ----------
  panel(el, { onKey, backCls = 'phone-back' } = {}) {
    const back = h('div', backCls);
    back.appendChild(el);
    const close = this._overlay(back);
    let pop;
    const api = { close: () => { pop(); close(); api.closed = true; if (api.onClose) api.onClose(); }, back, closed: false };
    back.onclick = (e) => { if (e.target === back) api.close(); };
    pop = this.pushKeys((e) => (onKey ? onKey(e, api) : (e.key === 'Escape' ? (api.close(), true) : true)));
    return api;
  }

  // ---------- viewfinder ----------
  viewfinder(on, info = '', top = '') {
    if (!this.vf) {
      this.vf = h('div', 'viewfinder hidden', '<div class="frame"></div><div class="center"></div><div class="top"></div><div class="info"></div>');
      this.root.appendChild(this.vf);
    }
    this.vf.classList.toggle('hidden', !on);
    if (on) {
      this.vf.querySelector('.info').textContent = info;
      this.vf.querySelector('.top').textContent = top;
    }
  }
  viewfinderLock(v) { this.vf?.querySelector('.center').classList.toggle('lock', v); }

  // ---------- minigame: call and response ----------
  echoGame({ title, text, length, audio }) {
    const NOTES = [60, 62, 64, 67, 69];
    const COLS = ['#e8b04e', '#ff7a93', '#8cc6f2', '#7fc49a', '#c8a2f2'];
    return new Promise((resolve) => {
      const back = h('div', 'modal-back');
      const m = h('div', 'modal card-glass', `<h2>${esc(title)}</h2><div class="subtitle">${esc(text)}<br>Listen, then play it back with <b>1–5</b> or by clicking. Two slips allowed.</div><div class="pads"></div><div class="mg-status"></div>`);
      back.appendChild(m);
      const close = this._overlay(back);
      const pads = m.querySelector('.pads'), status = m.querySelector('.mg-status');
      const els = NOTES.map((n, k) => {
        const b = h('button', 'pad', String(k + 1));
        b.style.background = COLS[k] + '55'; b.style.color = COLS[k];
        b.onclick = () => press(k);
        pads.appendChild(b);
        return b;
      });
      const seq = [];
      let round = 0, pos = 0, lives = 2, listening = false, score = 0;
      const light = (k, ms = 300) => { els[k].classList.add('lit'); audio.note(NOTES[k] + 12, ms / 1000 + 0.1); setTimeout(() => els[k].classList.remove('lit'), ms); };
      const play = async () => {
        listening = false;
        status.textContent = `Round ${round + 1} of ${length} — listen…`;
        await wait(600);
        for (const k of seq) { light(k, 360); await wait(520); }
        status.textContent = 'Your turn';
        listening = true; pos = 0;
      };
      const nextRound = () => {
        if (round >= length) return end(true);
        seq.push(Math.floor(Math.random() * 5));
        if (seq.length < 3) { seq.push(Math.floor(Math.random() * 5)); }
        play();
      };
      const press = (k) => {
        if (!listening) return;
        light(k, 200);
        if (k === seq[pos]) {
          pos++;
          if (pos === seq.length) { score++; round++; listening = false; status.textContent = '✓ Lovely.'; setTimeout(nextRound, 700); }
        } else {
          lives--;
          audio.bad();
          listening = false;
          if (lives < 0) return end(false);
          status.textContent = `A slip — ${lives + 1 === 1 ? 'last chance' : 'try that phrase again'}.`;
          setTimeout(play, 900);
        }
      };
      const end = (won) => {
        listening = false;
        status.textContent = won ? 'Perfect run! 🎶' : `You made it through ${score} of ${length} phrases.`;
        setTimeout(() => { pop(); close(); resolve({ score, of: length, won }); }, 1300);
      };
      const pop = this.pushKeys((e) => { const n = parseInt(e.key, 10); if (n >= 1 && n <= 5) press(n - 1); return true; });
      nextRound();
    });
  }
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

function fmtLine(s) {
  // (parentheticals) render as stage directions
  return esc(s).replace(/\(([^)]+)\)/g, '<em>($1)</em>');
}
