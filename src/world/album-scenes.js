// Childhood snapshots for the family album, rendered with the game's own
// renderer and then "developed" on a 2D canvas with a film look.
import * as THREE from 'three';
import { makeFigure } from './characters.js';
import { SISTERS } from '../data/common.js';

const std = (color, roughness = 0.85, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness, ...extra });
const glow = (color, intensity = 1.6) => new THREE.MeshStandardMaterial({ color: 0x221a10, emissive: color, emissiveIntensity: intensity });

function gradient(stops) {
  const c = document.createElement('canvas');
  c.width = 4; c.height = 256;
  const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 256);
  for (const [t, col] of stops) gr.addColorStop(t, col);
  g.fillStyle = gr; g.fillRect(0, 0, 4, 256);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// The sisters as kids: Emma in her yellow raincoat, Sophie in a green jumper.
function kid(which) {
  const base = SISTERS[which].look;
  const look = which === 'emma'
    ? { ...base, coat: 0xf2c230, top: 0xf2c230, bottom: 0x2a4a7a, shoes: 0xc0282a, scarf: null, accessory: null, height: 0.6, child: true }
    : { ...base, coat: null, top: 0x3f8a5a, bottom: 0x7a3a5a, shoes: 0x3a2a1a, scarf: null, accessory: null, height: 0.52, child: true };
  return makeFigure(look);
}
function sit(fig) {
  const r = fig.userData.rig;
  r.legL.rotation.x = r.legR.rotation.x = -1.45;
  fig.position.y -= 0.8 * fig.scale.y;
}

function lighthouse({ lit = false } = {}) {
  const g = new THREE.Group();
  const red = std(0xc8382e, 0.6), white = std(0xf2efe8, 0.6);
  for (let i = 0; i < 7; i++) {
    const r0 = 1.9 - i * 0.09, r1 = r0 - 0.09;
    const seg = new THREE.Mesh(new THREE.CylinderGeometry(r1, r0, 2, 20), i % 2 ? white : red);
    seg.position.y = i * 2 + 1; seg.castShadow = true; g.add(seg);
  }
  const deck = new THREE.Mesh(new THREE.CylinderGeometry(1.75, 1.75, 0.25, 20), std(0x2a2a2a, 0.5));
  deck.position.y = 14.1; g.add(deck);
  const lamp = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 1.5, 16), lit ? glow(0xffe08a, 3) : std(0xfff3c8, 0.15, { emissive: 0xffe6a0, emissiveIntensity: 0.5 }));
  lamp.position.y = 15; g.add(lamp);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(1.3, 1.3, 16), std(0x2a2a2a, 0.5));
  cap.position.y = 16.4; g.add(cap);
  return g;
}

// 1. The lighthouse, 2009 (portrait).
function sceneLighthouse(shadows) {
  const scene = new THREE.Scene();
  scene.background = gradient([[0, '#5a93c9'], [0.5, '#a8cbe4'], [0.78, '#ecdcbc'], [1, '#f6d7a6']]);
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), std(0x3f7593, 0.3));
  sea.rotation.x = -Math.PI / 2; sea.position.y = -5; scene.add(sea);
  const head = new THREE.Mesh(new THREE.CylinderGeometry(24, 28, 5, 32), [std(0x8a7a66, 0.95), std(0x7f9e4a, 0.95, { flatShading: true }), std(0x6a5a4a)]);
  head.position.set(0, -2.5, -6); head.receiveShadow = true; scene.add(head);
  const lh = lighthouse(); lh.position.set(5, 0, -12); scene.add(lh);
  const cottage = new THREE.Mesh(new THREE.BoxGeometry(5, 3, 4), std(0xf4f1ea, 0.8));
  cottage.position.set(10.5, 1.5, -10); cottage.castShadow = true; scene.add(cottage);
  const roof = new THREE.Mesh(new THREE.ConeGeometry(4, 2, 4), std(0x4a4a52, 0.7));
  roof.rotation.y = Math.PI / 4; roof.position.set(10.5, 4, -10); scene.add(roof);
  const fence = std(0xf4f1ea, 0.8);
  for (let x = -9; x <= 1; x += 1.6) {
    const p = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.9, 0.12), fence); p.position.set(x, 0.45, -3); scene.add(p);
  }
  const rail = new THREE.Mesh(new THREE.BoxGeometry(10.2, 0.08, 0.08), fence); rail.position.set(-4, 0.75, -3); scene.add(rail);
  const e = kid('emma'), s = kid('sophie');
  e.position.set(-1.05, 0, 7); e.rotation.y = 0.25; s.position.set(-0.47, 0, 7.15); s.rotation.y = -0.15;
  e.userData.rig.armR.rotation.z = 0.55; s.userData.rig.armL.rotation.z = -0.6;
  scene.add(e, s);
  const sun = new THREE.DirectionalLight(0xffe2b8, 2.8);
  sun.position.set(-14, 16, 14); sun.castShadow = shadows;
  Object.assign(sun.shadow.camera, { left: -20, right: 20, top: 20, bottom: -20 });
  scene.add(sun, new THREE.HemisphereLight(0xcfe4ff, 0x5a6a3a, 1.1));
  const cam = new THREE.PerspectiveCamera(50, 1, 0.1, 1200);
  cam.position.set(-1, 0.9, 11.5); cam.lookAt(2, 4.5, -12);
  return { scene, cam };
}

// 2. Writing "Paper Lanterns" on Mum's record player, 2011 (square).
function sceneSongwriting(shadows) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x2a1e18);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), std(0x7a5234, 0.75));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
  // Striped wallpaper.
  const c = document.createElement('canvas'); c.width = 256; c.height = 256;
  const g = c.getContext('2d');
  for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#e9dab4' : '#c6cf9e'; g.fillRect(i * 32, 0, 32, 256); }
  g.fillStyle = '#b88a6a';
  for (let y = 16; y < 256; y += 32) for (let x = 16; x < 256; x += 64) { g.beginPath(); g.arc(x, y, 3, 0, 7); g.fill(); }
  const wp = new THREE.CanvasTexture(c); wp.colorSpace = THREE.SRGBColorSpace; wp.wrapS = wp.wrapT = THREE.RepeatWrapping; wp.repeat.set(4, 2);
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(14, 6), new THREE.MeshStandardMaterial({ map: wp, roughness: 0.9 }));
  wall.position.set(0, 3, -3); wall.receiveShadow = true; scene.add(wall);
  const side = wall.clone(); side.rotation.y = Math.PI / 2; side.position.set(-4, 3, 2); scene.add(side);
  const win = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.5), glow(0xdfeeff, 1.3));
  win.position.set(2.2, 3.1, -2.97); scene.add(win);
  const frame = new THREE.Mesh(new THREE.BoxGeometry(2.1, 1.8, 0.06), std(0xf4f1ea, 0.7));
  frame.position.set(2.2, 3.1, -2.99); scene.add(frame);
  const board = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.9, 0.8), std(0x5a3a22, 0.7));
  board.position.set(-1.5, 0.45, -2.5); board.castShadow = true; scene.add(board);
  const base = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.2, 0.75), std(0x9a6a40, 0.55));
  base.position.set(-1.8, 1.0, -2.45); scene.add(base);
  const platter = new THREE.Mesh(new THREE.CylinderGeometry(0.33, 0.33, 0.03, 32), std(0x141414, 0.35));
  platter.position.set(-1.9, 1.12, -2.45); scene.add(platter);
  const label = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.035, 20), std(0xc0392b, 0.6));
  label.position.set(-1.9, 1.125, -2.45); scene.add(label);
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.38), std(0xcfcfcf, 0.3, { metalness: 0.8 }));
  arm.position.set(-1.5, 1.15, -2.4); arm.rotation.y = 0.45; scene.add(arm);
  const sleeves = [0x2a6a9a, 0xe0a82e, 0xb3473a, 0x3a3a3a];
  sleeves.forEach((col, i) => {
    const sl = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.62, 0.02), std(col, 0.7));
    sl.position.set(-0.2 + i * 0.05, 0.31, -2.05 + i * 0.03); sl.rotation.x = -0.12; scene.add(sl);
  });
  const rug = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.7, 0.02, 40), std(0xb3473a, 0.95));
  rug.position.set(0, 0.01, 0); rug.receiveShadow = true; scene.add(rug);
  // Paper lanterns strung across the room.
  const cols = [0xff9ab0, 0xffd27a, 0x9ad0ff, 0xa8e0a0, 0xffb07a, 0xd9a8ff, 0xffd27a];
  const pts = [];
  for (let i = 0; i <= 20; i++) {
    const t = i / 20;
    pts.push(new THREE.Vector3(-3.8 + t * 7.6, 3.0 - Math.sin(t * Math.PI) * 0.35, -2.4));
  }
  scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x3a2a1a })));
  cols.forEach((col, i) => {
    const t = (i + 0.5) / cols.length;
    const l = new THREE.Mesh(new THREE.IcosahedronGeometry(0.22, 1), glow(col, 1.4));
    l.scale.y = 1.15;
    l.position.set(-3.8 + t * 7.6, 3.0 - Math.sin(t * Math.PI) * 0.35 - 0.3, -2.4);
    scene.add(l);
  });
  const e = kid('emma'), s = kid('sophie');
  e.position.set(-0.5, 0, 0.2); e.rotation.y = 0.7; sit(e);
  s.position.set(0.45, 0, -0.1); s.rotation.y = -0.5; sit(s);
  for (const f of [e, s]) { const r = f.userData.rig; r.armL.rotation.x = r.armR.rotation.x = -0.9; }
  scene.add(e, s);
  // Sophie's ukulele and Emma's notebook.
  const uke = new THREE.Group();
  uke.add(new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.06, 20), std(0xd9a066, 0.5)));
  const neck = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.03, 0.34), std(0x6a4a2a, 0.6)); neck.position.z = -0.22; uke.add(neck);
  uke.rotation.set(Math.PI / 2, 0, 0.9); uke.position.set(0.38, 0.42, 0.18);
  scene.add(uke);
  const book = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.02, 0.19), std(0xf6f1e4, 0.8));
  book.position.set(-0.36, 0.33, 0.45); book.rotation.y = 0.5; scene.add(book);
  const lamp = new THREE.PointLight(0xffc58a, 14, 12, 1.6);
  lamp.position.set(2.6, 2.4, 1.2); lamp.castShadow = shadows; scene.add(lamp);
  scene.add(new THREE.HemisphereLight(0xfff0dd, 0x3a2a20, 0.95));
  const fill = new THREE.DirectionalLight(0xcfe0ff, 0.6); fill.position.set(3, 5, 6); scene.add(fill);
  const cam = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
  cam.position.set(1.5, 1.15, 2.7); cam.lookAt(-0.45, 0.85, -1.0);
  return { scene, cam };
}

// 3. Lantern night on the beach, 2012 (landscape).
function sceneLanterns(shadows) {
  const scene = new THREE.Scene();
  scene.background = gradient([[0, '#0b1230'], [0.42, '#26285a'], [0.66, '#6a4468'], [0.8, '#dd7e58'], [1, '#f1b074']]);
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), std(0x1b2a48, 0.25, { metalness: 0.2 }));
  sea.rotation.x = -Math.PI / 2; sea.position.y = -0.2; scene.add(sea);
  const sand = new THREE.Mesh(new THREE.PlaneGeometry(80, 18), std(0xb99a70, 0.95));
  sand.rotation.x = -Math.PI / 2; sand.position.set(0, 0, 4); sand.receiveShadow = true; scene.add(sand);
  const e = kid('emma'), s = kid('sophie');
  e.position.set(-0.45, 0, 1.4); e.rotation.y = Math.PI + 0.15; s.position.set(0.35, 0, 1.55); s.rotation.y = Math.PI - 0.1;
  for (const f of [e, s]) { const r = f.userData.rig; r.armL.rotation.x = r.armR.rotation.x = -0.75; }
  scene.add(e, s);
  const lanternM = glow(0xffb35a, 2.4);
  for (const [x, z] of [[-0.42, 0.98], [0.34, 1.18]]) {
    const l = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.15, 0.3, 14), lanternM);
    l.position.set(x, 0.52, z); scene.add(l);
    const pl = new THREE.PointLight(0xffa54a, 3.5, 7, 2); pl.position.set(x, 0.6, z - 0.1); scene.add(pl);
  }
  // Lanterns already floating away.
  const rnd = mulberry(7);
  for (let i = 0; i < 14; i++) {
    const l = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.5, 10), glow(0xffa84a, 2 + rnd()));
    const d = 8 + rnd() * 40;
    l.position.set((rnd() - 0.5) * d * 0.9, 2 + rnd() * d * 0.28, -d);
    scene.add(l);
  }
  const lh = lighthouse({ lit: true }); lh.scale.setScalar(0.7); lh.position.set(-34, 0, -70); scene.add(lh);
  const beam = new THREE.Mesh(new THREE.ConeGeometry(4, 40, 16, 1, true), new THREE.MeshBasicMaterial({ color: 0xffe9a8, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  beam.rotation.z = Math.PI / 2 + 0.1; beam.position.set(-14, 10.6, -70); scene.add(beam);
  const moon = new THREE.Mesh(new THREE.SphereGeometry(4, 20, 14), glow(0xfff4dc, 1.8));
  moon.position.set(60, 60, -220); scene.add(moon);
  const starPos = [];
  for (let i = 0; i < 260; i++) starPos.push((rnd() - 0.5) * 900, 80 + rnd() * 300, -300 - rnd() * 100);
  const stars = new THREE.Points(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3)), new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false }));
  scene.add(stars);
  scene.add(new THREE.HemisphereLight(0x3a4a8a, 0x2a2018, 0.45));
  const rim = new THREE.DirectionalLight(0xff9a6a, 0.7); rim.position.set(0, 3, -20); scene.add(rim);
  const cam = new THREE.PerspectiveCamera(50, 1, 0.1, 1500);
  cam.position.set(0.9, 1.05, 4.6); cam.lookAt(-0.4, 1.3, -4);
  void shadows;
  return { scene, cam };
}

function mulberry(a) {
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

/** Warm, faded, grainy "drugstore print" look plus a date stamp. */
function develop(g, w, h, { stamp, leak = 'left', seed = 1 }) {
  const img = g.getImageData(0, 0, w, h);
  const d = img.data;
  const rnd = mulberry(seed);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      let r = d[i], gg = d[i + 1], b = d[i + 2];
      const l = 0.3 * r + 0.59 * gg + 0.11 * b;
      r = l + (r - l) * 0.86; gg = l + (gg - l) * 0.86; b = l + (b - l) * 0.86;
      r = 22 + r * 0.88 * 1.06; gg = 18 + gg * 0.88; b = 14 + b * 0.84;
      const dx = x / w - 0.5, dy = y / h - 0.5;
      const v = 1 - (dx * dx + dy * dy) * 0.85;
      const n = (rnd() - 0.5) * 22;
      d[i] = r * v + n; d[i + 1] = gg * v + n; d[i + 2] = b * v + n;
    }
  }
  g.putImageData(img, 0, 0);
  g.save();
  g.globalCompositeOperation = 'screen';
  const lx = leak === 'left' ? 0 : w;
  const gr = g.createRadialGradient(lx, h * 0.3, 0, lx, h * 0.3, w * 0.55);
  gr.addColorStop(0, 'rgba(255,120,40,0.45)'); gr.addColorStop(1, 'rgba(255,120,40,0)');
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  g.restore();
  if (stamp) {
    g.save();
    g.font = `700 ${Math.round(h * 0.055)}px "Courier New", monospace`;
    g.textAlign = 'right';
    g.shadowColor = 'rgba(255,90,0,0.9)'; g.shadowBlur = h * 0.012;
    g.fillStyle = 'rgba(255,146,54,0.92)';
    g.fillText(stamp, w * 0.94, h * 0.93);
    g.restore();
  }
}

/**
 * Renders the album snapshots. Must run in one task so the main canvas can be
 * redrawn (restore) before the browser presents it — the album scenes never flash.
 */
export function renderAlbumPhotos(renderer, restore) {
  const shots = [
    { id: 'lighthouse', build: sceneLighthouse, w: 540, h: 720, stamp: "'09  8 14", leak: 'right', seed: 3 },
    { id: 'songwriting', build: sceneSongwriting, w: 600, h: 600, stamp: "'11 12 26", leak: 'left', seed: 5 },
    { id: 'lanterns', build: sceneLanterns, w: 720, h: 540, stamp: "'12  8 30", leak: 'right', seed: 9 },
  ];
  const out = {};
  const canvas = renderer.domElement;
  const prevTarget = renderer.getRenderTarget();
  renderer.setRenderTarget(null);
  for (const s of shots) {
    const { scene, cam } = s.build(renderer.shadowMap.enabled);
    const W = canvas.width, H = canvas.height;
    cam.aspect = W / H;
    // Keep the intended framing when the screen is narrower than the print.
    const ar = s.w / s.h;
    if (W / H < ar) cam.fov = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(cam.fov / 2)) * (ar / (W / H))));
    cam.updateProjectionMatrix();
    renderer.render(scene, cam);
    let sw, sh;
    if (W / H > ar) { sh = H; sw = H * ar; } else { sw = W; sh = W / ar; }
    const c = document.createElement('canvas');
    c.width = s.w; c.height = s.h;
    const g = c.getContext('2d', { willReadFrequently: true });
    g.drawImage(canvas, (W - sw) / 2, (H - sh) / 2, sw, sh, 0, 0, s.w, s.h);
    develop(g, s.w, s.h, s);
    out[s.id] = c.toDataURL('image/jpeg', 0.86);
    scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  }
  renderer.setRenderTarget(prevTarget);
  restore();
  return out;
}
