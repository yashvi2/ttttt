// Lily's portrait for the MISSING flyer, rendered in-engine and "photocopied".
import * as THREE from 'three';
import { makeFigure } from '../world/characters.js';
import { LILY } from './data.js';

export function renderPortrait(renderer, restore) {
  const scene = new THREE.Scene();
  const c = document.createElement('canvas'); c.width = 4; c.height = 128;
  const g0 = c.getContext('2d');
  const gr = g0.createLinearGradient(0, 0, 0, 128);
  gr.addColorStop(0, '#8aa4bc'); gr.addColorStop(1, '#e8c89a');
  g0.fillStyle = gr; g0.fillRect(0, 0, 4, 128);
  const bg = new THREE.CanvasTexture(c); bg.colorSpace = THREE.SRGBColorSpace;
  scene.background = bg;
  const lily = makeFigure(LILY.look);
  lily.rotation.y = 0.35;
  const r = lily.userData.rig; r.armL.rotation.x = -0.25;
  scene.add(lily);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x6a5a4a, 1.3));
  const key = new THREE.DirectionalLight(0xfff0dc, 2.2); key.position.set(2, 3, 4); scene.add(key);
  const cam = new THREE.PerspectiveCamera(24, 1, 0.1, 50);
  const canvas = renderer.domElement;
  const W = canvas.width, H = canvas.height, ar = 0.82;
  cam.aspect = W / H;
  if (W / H < ar) cam.fov = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(12)) * (ar / (W / H))));
  cam.position.set(0.4, 1.72, 3.2); cam.lookAt(0, 1.58, 0);
  cam.updateProjectionMatrix();
  renderer.setRenderTarget(null);
  renderer.render(scene, cam);
  let sw, sh;
  if (W / H > ar) { sh = H; sw = H * ar; } else { sw = W; sh = W / ar; }
  const w = 328, h = 400;
  const out = document.createElement('canvas'); out.width = w; out.height = h;
  const g = out.getContext('2d', { willReadFrequently: true });
  g.drawImage(canvas, (W - sw) / 2, (H - sh) / 2, sw, sh, 0, 0, w, h);
  restore();
  // Photocopy: grey, crushed contrast, toner speckle.
  const img = g.getImageData(0, 0, w, h), d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    let l = 0.3 * d[i] + 0.59 * d[i + 1] + 0.11 * d[i + 2];
    l = (l - 128) * 1.6 + 140 + (Math.random() - 0.5) * 40;
    if (Math.random() < 0.004) l = 20;
    l = Math.max(0, Math.min(255, l));
    d[i] = d[i + 1] = d[i + 2] = l;
  }
  g.putImageData(img, 0, 0);
  scene.traverse((o) => o.geometry?.dispose());
  return out.toDataURL('image/jpeg', 0.8);
}

/** The flyer as a canvas texture, for lamp posts and the apartment floor. */
export function flyerTexture(portraitUrl) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 340;
  const g = c.getContext('2d');
  g.fillStyle = '#f4f1ea'; g.fillRect(0, 0, 256, 340);
  g.fillStyle = '#111'; g.textAlign = 'center';
  g.font = '700 50px Anton, Impact, "Arial Narrow", sans-serif';
  g.fillText('MISSING', 128, 54);
  g.font = '700 22px Anton, Impact, sans-serif';
  g.fillText('LILY REYES, 24', 128, 290);
  g.font = '13px "Special Elite", "Courier New", monospace';
  g.fillText('Last seen Oct 3 · Bedford Av', 128, 310);
  g.fillText('(917) 555-0143', 128, 328);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const img = new Image();
  img.onload = () => { g.drawImage(img, 38, 66, 180, 200); g.strokeStyle = '#111'; g.strokeRect(38, 66, 180, 200); tex.needsUpdate = true; };
  img.src = portraitUrl;
  return tex;
}
