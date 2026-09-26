// The Hart family album: an open scrapbook that turns its pages behind the
// opening narration. Items are placed in % of a page.
import { esc } from './ui.js';

const HEATHER = `<svg viewBox="0 0 60 120" aria-hidden="true"><path d="M30 118 C28 90 34 60 30 8" stroke="#5a6a3a" stroke-width="2.2" fill="none"/>
${Array.from({ length: 16 }, (_, i) => { const y = 14 + i * 6.2, s = i % 2 ? 1 : -1, x = 30 + s * (3 + (i % 3)); return `<circle cx="${x}" cy="${y}" r="${3.4 - i * 0.08}" fill="${i % 3 ? '#9a5ab0' : '#b77cc8'}"/>`; }).join('')}
<path d="M30 70 l-9 -6 M30 84 l9 -7 M30 98 l-8 -5" stroke="#5a6a3a" stroke-width="1.6"/></svg>`;

function item(it, i) {
  const pos = `left:${it.x}%;top:${it.y}%;width:${it.w}%;--r:${it.r || 0}deg;animation-delay:${120 + i * 140}ms`;
  const tape = it.tape ? `<span class="tape" style="--tc:${it.tape}"></span>` : '';
  switch (it.type) {
    case 'photo':
      return `<figure class="snap${it.scan ? ' scan' : ''}" style="${pos}">${tape}<div class="print"><img src="${it.src}" alt="${esc(it.alt || it.cap || '')}"></div>${it.cap ? `<figcaption>${esc(it.cap)}</figcaption>` : ''}</figure>`;
    case 'note':
      return `<div class="scrap" style="${pos}">${tape}${it.html}</div>`;
    case 'sprig':
      return `<div class="sprig" style="${pos}">${HEATHER}</div>`;
    case 'postcard':
      return `<div class="postcard" style="${pos};--pc:${it.color};--pi:${it.ink}">${tape}<span class="greet">Greetings from</span><b>${esc(it.city)}</b><span class="stamp">${esc(it.stamp)}</span></div>`;
    case 'boarding':
      return `<div class="ticket boarding" style="${pos}"><div class="tk-head"><span>BOARDING PASS</span><span>${esc(it.flight)}</span></div><div class="tk-route"><b>${esc(it.from)}</b><i>✈</i><b>${esc(it.to)}</b></div><div class="tk-row"><span>PASSENGER<br><b>${esc(it.name)}</b></span><span>DATE<br><b>${esc(it.date)}</b></span><span>SEAT<br><b>${esc(it.seat)}</b></span></div></div>`;
    case 'rail':
      return `<div class="ticket rail" style="${pos}"><div class="tk-head"><span>STANDARD · SINGLE</span><span>${esc(it.date)}</span></div><div class="tk-route"><b>${esc(it.from)}</b><i>→</i><b>${esc(it.to)}</b></div><div class="tk-row"><span>ROUTE<br><b>ANY PERMITTED</b></span><span>NAME<br><b>${esc(it.name)}</b></span></div></div>`;
    case 'voice':
      return `<div class="voice" style="${pos}"><span class="play">▶</span><span class="wave">${'<i></i>'.repeat(14)}</span><span class="len">${esc(it.len)}</span><small>${esc(it.meta)}</small></div>`;
    default:
      return '';
  }
}

/**
 * Plays the album. spreads: [{ text, left: [items], right: [items], cover, song }]
 * Resolves when the viewer has read every spread.
 */
export function playAlbum(ui, spreads, { audio, logoHtml }) {
  return new Promise((resolve) => {
    const stage = document.createElement('div');
    stage.className = 'album-stage';
    stage.innerHTML = `<div class="album-desk"><div class="album">
        <div class="page left"><div class="items"></div></div>
        <div class="page right"><div class="items"></div></div>
        <div class="cover"><div class="cover-inner">${logoHtml}<span class="cover-sub">The Hart family album · Harwick Bay</span></div></div>
      </div></div>
      <div class="album-caption"><p></p><div class="tap">click · space · E</div></div>`;
    const close = ui._overlay(stage);
    const album = stage.querySelector('.album');
    const L = stage.querySelector('.page.left .items'), R = stage.querySelector('.page.right .items');
    const text = stage.querySelector('.album-caption p');
    let i = -1, busy = false;
    const show = (k) => {
      const sp = spreads[k];
      text.style.animation = 'none'; void text.offsetWidth; text.style.animation = '';
      text.innerHTML = esc(sp.text);
      album.classList.toggle('closed', !!sp.cover);
      if (!sp.cover) {
        L.innerHTML = (sp.left || []).map(item).join('');
        R.innerHTML = (sp.right || []).map((it, n) => item(it, n + (sp.left || []).length)).join('');
      }
      if (sp.song && audio) audio.playLanterns(0.44);
    };
    const next = () => {
      if (busy) return;
      i++;
      if (i >= spreads.length) { pop(); close(); resolve(); return; }
      if (i === 0) { show(0); return; }
      const sameLook = !!spreads[i].cover && !!spreads[i - 1].cover;
      if (sameLook) { show(i); return; }
      busy = true;
      audio?.pageTurn?.();
      album.classList.add('turning');
      setTimeout(() => { show(i); album.classList.remove('turning'); busy = false; }, 320);
    };
    stage.onclick = next;
    const pop = ui.pushKeys((e) => { if ([' ', 'Enter', 'e', 'E', 'Escape'].includes(e.key)) next(); return true; });
    next();
  });
}

export const LOGO_HTML = '<span class="logo" role="img" aria-label="London-Newyork"><span class="l1">LONDON<i>-</i></span><span class="l2">NEWYORK</span></span>';

/**
 * Spreads for a route's opening narration. `lines` are the narration cards;
 * photos: { lighthouse, songwriting, lanterns } from renderAlbumPhotos.
 */
export function introSpreads(routeId, lines, photos, lastSummer, reunionPhoto) {
  const cover = (text) => ({ text, cover: true });
  if (routeId === 'nyc') {
    const s = [
      {
        text: lines[0],
        left: [
          { type: 'note', x: 10, y: 9, w: 56, r: -4, tape: '#e8b04e', html: '<b class="big">HARWICK BAY</b><span>pop. 1,912</span><span class="sm">(incl. two Harts)</span>' },
          { type: 'sprig', x: 64, y: 34, w: 20, r: 14 },
          { type: 'note', x: 12, y: 68, w: 62, r: 2, html: '<span>Em &amp; Soph — never more than a bedroom wall apart.</span>' },
        ],
        right: [{ type: 'photo', src: photos.lighthouse, x: 15, y: 5, w: 66, r: 3, tape: '#e8b04e', cap: 'The lighthouse, summer ’09 — Em (8) & Soph (6)' }],
      },
      {
        text: lines[1], song: true,
        left: [{ type: 'photo', src: photos.songwriting, x: 11, y: 10, w: 74, r: -3, tape: '#9ad0ff', cap: 'Christmas ’11 — writing “Paper Lanterns”' }],
        right: [
          { type: 'note', x: 12, y: 6, w: 72, r: 2, tape: '#ff9ab0', html: '<b class="big">PAPER LANTERNS</b><span class="sm">by E. + S. Hart (age 10 &amp; 8)</span><span class="chords">G · C · Em · <s>F#</s> <em>D!!</em></span><span>“light it up and let it go…”</span>' },
          { type: 'photo', src: photos.lanterns, x: 12, y: 47, w: 72, r: -2, cap: 'Lantern night on the beach, ’12' },
        ],
      },
      {
        text: lines[2],
        left: [
          { type: 'boarding', x: 7, y: 12, w: 84, r: -3, flight: 'FLIGHT 417', from: 'MAN', to: 'JFK', name: 'HART/EMMA', date: '02 APR 26', seat: '38K' },
          { type: 'rail', x: 9, y: 52, w: 80, r: 2, from: 'HARWICK BAY', to: 'LONDON KINGS X', name: 'HART/S', date: '05 APR 26' },
        ],
        right: [{ type: 'photo', src: lastSummer, scan: true, x: 13, y: 4, w: 70, r: 2, tape: '#ff7a93', cap: 'Last summer. The day before everything changed.' }],
      },
      {
        text: lines[3],
        left: [
          { type: 'postcard', x: 8, y: 10, w: 82, r: -4, city: 'NEW YORK', color: '#f7b733', ink: '#1b2129', stamp: 'USA', tape: '#8cc6f2' },
          { type: 'voice', x: 12, y: 62, w: 72, r: 1, len: '0:42', meta: 'Emma · sent 3:12am' },
        ],
        right: [
          { type: 'postcard', x: 10, y: 14, w: 82, r: 3, city: 'LONDON', color: '#d7263d', ink: '#ffffff', stamp: '1ST', tape: '#e8b04e' },
          { type: 'voice', x: 14, y: 66, w: 72, r: -2, len: '1:07', meta: 'Sophie · sent 11:48pm' },
        ],
      },
    ];
    for (const t of lines.slice(4)) s.push(cover(t));
    return s;
  }
  // London (New Game+): the album picks up where the New York story ended.
  const found = reunionPhoto
    ? { type: 'photo', src: reunionPhoto, x: 8, y: 12, w: 84, r: -3, tape: '#ff7a93', cap: 'Brooklyn Bridge, October. Found her.' }
    : { type: 'photo', src: photos.lanterns, x: 9, y: 12, w: 80, r: -3, tape: '#ff7a93', cap: 'Lantern night on the beach, ’12' };
  return [
    {
      text: lines[0],
      left: [found, { type: 'sprig', x: 40, y: 64, w: 18, r: 8 }],
      right: [
        { type: 'photo', src: lastSummer, scan: true, x: 16, y: 4, w: 62, r: 3, cap: 'Last summer, Harwick Bay' },
        { type: 'note', x: 18, y: 78, w: 64, r: -2, tape: '#9ad0ff', html: '<span>Our turn to swap. Don’t tell her. — E</span>' },
      ],
    },
    {
      text: lines[1],
      left: [
        { type: 'rail', x: 9, y: 14, w: 80, r: -2, from: 'HARWICK BAY', to: 'LONDON KINGS X', name: 'HART/S', date: '05 APR 26' },
        { type: 'sprig', x: 60, y: 50, w: 20, r: -10 },
      ],
      right: [
        { type: 'postcard', x: 10, y: 10, w: 82, r: 3, city: 'LONDON', color: '#d7263d', ink: '#ffffff', stamp: '1ST', tape: '#e8b04e' },
        { type: 'boarding', x: 8, y: 56, w: 84, r: -2, flight: 'FLIGHT 202', from: 'JFK', to: 'LHR', name: 'HART/EMMA', date: '11 APR 27', seat: '22A' },
      ],
    },
    ...lines.slice(2).map(cover),
  ];
}
