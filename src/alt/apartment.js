// Maya's apartment: a cut-away room seen from a fixed camera. Neglect piles up
// in it day by day, and the case wall grows.
import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { makeFigure, animateFigure } from '../world/characters.js';
import { MAYA, LILY } from './data.js';

const std = (color, roughness = 0.85, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness, ...extra });
function box(w, h, d, m, x, y, z, parent) {
  const me = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  me.position.set(x, y + h / 2, z); me.castShadow = true; me.receiveShadow = true;
  parent.add(me);
  return me;
}

export const HOTSPOTS = [
  { id: 'bed', key: '1', label: 'Bed', pos: [2.8, 1.0, -2.4] },
  { id: 'meds', key: '2', label: 'Meds', pos: [1.35, 1.1, -3.0] },
  { id: 'wall', key: '3', label: 'The wall', pos: [-4.3, 1.15, -0.6] },
  { id: 'laptop', key: '4', label: 'Laptop', pos: [-3.5, 1.4, 1.6] },
  { id: 'fridge', key: '5', label: 'Kitchen', pos: [3.9, 2.3, 0.4] },
  { id: 'clean', key: '6', label: 'Clean up', pos: [0.2, 0.6, 1.2] },
  { id: 'mirror', key: '7', label: 'Mirror', pos: [-2.4, 2.5, -3.4] },
  { id: 'lily', key: '8', label: 'Lily\'s door', pos: [-3.7, 1.0, -3.4] },
  { id: 'out', key: '9', label: 'Go out', pos: [3.8, 1.6, 3.2] },
];

export class Apartment {
  constructor(onHotspot) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x07080b);
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    this.camera.position.set(3.4, 4.8, 6.6);
    this.look = new THREE.Vector3(-0.7, 0.9, -0.7);
    this.camera.lookAt(this.look);
    this.neglectItems = [];
    this.t = 0;
    const S = this.scene;

    // Shell
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(9, 7), std(0x6a4a34, 0.8));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; S.add(floor);
    const wallM = std(0xb9b2a4, 0.95);
    const back = new THREE.Mesh(new THREE.PlaneGeometry(9, 3.6), wallM); back.position.set(0, 1.8, -3.5); back.receiveShadow = true; S.add(back);
    const left = new THREE.Mesh(new THREE.PlaneGeometry(7, 3.6), wallM); left.rotation.y = Math.PI / 2; left.position.set(-4.5, 1.8, 0); left.receiveShadow = true; S.add(left);
    box(9, 0.15, 0.1, std(0xe8e2d6), 0, 0, -3.45, S);

    // Window + blinds
    this.glass = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.6), new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0x9ab8d8, emissiveIntensity: 1 }));
    this.glass.position.set(1.4, 2.1, -3.47); S.add(this.glass);
    box(2.4, 0.08, 0.12, std(0xf0ece4), 1.4, 1.26, -3.44, S);
    this.blinds = new THREE.Group(); S.add(this.blinds);
    const slatM = std(0xe8e2d4, 0.7);
    for (let i = 0; i < 12; i++) { const sl = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.12, 0.02), slatM); sl.position.set(1.4, 2.85 - i * 0.135, -3.4); this.blinds.add(sl); }

    // Furniture
    box(2.1, 0.45, 1.5, std(0x3a3028, 0.8), 2.9, 0, -2.6, S);
    this.duvet = box(2.0, 0.14, 1.45, std(0x6a7a8a, 0.9), 2.9, 0.45, -2.55, S);
    box(0.6, 0.12, 0.4, std(0xe8e4dc), 3.6, 0.58, -2.6, S);
    box(0.5, 0.55, 0.45, std(0x5a4632, 0.8), 1.35, 0, -3.1, S);
    this.pills = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.16, 12), std(0xd8752a, 0.5));
    this.pills.position.set(1.35, 0.63, -3.05); S.add(this.pills);
    box(1.0, 0.06, 2.2, std(0x7a5a3a, 0.7), -3.9, 0.75, 1.5, S);
    for (const [x, z] of [[-4.3, 0.5], [-3.5, 0.5], [-4.3, 2.5], [-3.5, 2.5]]) box(0.06, 0.75, 0.06, std(0x3a3a3a), x, 0, z, S);
    const lap = box(0.5, 0.03, 0.36, std(0x2a2a2e, 0.4), -3.8, 0.81, 1.6, S);
    this.screen = new THREE.Mesh(new THREE.PlaneGeometry(0.48, 0.32), new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0x7ab0ff, emissiveIntensity: 0.8 }));
    this.screen.position.set(-3.98, 1.0, 1.6); this.screen.rotation.y = Math.PI / 2; this.screen.rotation.x = -0.2; S.add(this.screen);
    void lap;
    // Kitchen
    this.fridge = box(0.9, 2.0, 0.8, std(0xdcdcd8, 0.4), 4.0, 0, 0.4, S);
    box(0.8, 0.95, 2.2, std(0x6a6a70, 0.6), 4.05, 0, 2.0, S);
    box(0.5, 0.05, 0.6, std(0x2a2c30, 0.3), 4.0, 0.95, 1.6, S);
    // Mirror, Lily's door
    const mirror = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.6), std(0x8fa0b0, 0.05, { metalness: 0.9 }));
    mirror.position.set(-2.4, 1.6, -3.47); S.add(mirror);
    box(0.9, 1.7, 0.04, std(0x2a2a2a), -2.4, 0.75, -3.49, S);
    box(1.0, 2.2, 0.06, std(0x8a6a4a, 0.7), -3.7, 0, -3.46, S);
    const sticker = new THREE.Mesh(new THREE.CircleGeometry(0.12, 16), std(0x6fbf8a));
    sticker.position.set(-3.7, 1.6, -3.42); S.add(sticker);
    // Plant, rug, lamp
    box(0.3, 0.35, 0.3, std(0xa0583a), 0.2, 0, -3.1, S);
    this.plant = new THREE.Mesh(new THREE.IcosahedronGeometry(0.38, 1), std(0x4f7a3a, 0.9, { flatShading: true }));
    this.plant.position.set(0.2, 0.75, -3.1); S.add(this.plant);
    const rug = new THREE.Mesh(new THREE.CircleGeometry(1.5, 32), std(0x7a3a3a, 0.95)); rug.rotation.x = -Math.PI / 2; rug.position.set(0.2, 0.01, 0.4); S.add(rug);
    box(0.05, 1.6, 0.05, std(0x2a2a2a), -1.3, 0, -3.1, S);
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.3, 16, 1, true), new THREE.MeshStandardMaterial({ color: 0xf3e2b8, emissive: 0xffc88a, emissiveIntensity: 0.8, side: THREE.DoubleSide }));
    shade.position.set(-1.3, 1.7, -3.1); S.add(shade);

    // The wall: corkboard with pins and string
    const cork = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 1.9), std(0xa87a4a, 0.95));
    cork.rotation.y = Math.PI / 2; cork.position.set(-4.47, 2.0, -0.6); S.add(cork);
    this.pins = new THREE.Group(); S.add(this.pins);

    // Neglect, in the order it arrives
    const add = (th, obj) => { obj.visible = false; obj.userData.th = th; this.neglectItems.push(obj); S.add(obj); return obj; };
    const mugM = std(0xe8e2d6, 0.5);
    for (const [x, z] of [[-3.7, 1.0], [-3.9, 2.2]]) { const c = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.1, 10), mugM); c.position.set(x, 0.86, z); add(0.14, c); }
    const laundry = new THREE.Mesh(new THREE.IcosahedronGeometry(0.4, 1), std(0x4a5a7a, 0.95, { flatShading: true })); laundry.scale.y = 0.4; laundry.position.set(1.6, 0.15, -1.6); add(0.24, laundry);
    const pizza = () => new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.05, 0.45), std(0xd8c8a0, 0.9));
    const p1 = pizza(); p1.position.set(-0.8, 0.03, 1.4); p1.rotation.y = 0.4; add(0.34, p1);
    for (let i = 0; i < 4; i++) { const d = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.03, 14), mugM); d.position.set(4.0, 1.0 + i * 0.035, 1.6); add(0.44, d); }
    for (const [x, z] of [[3.9, 2.6], [4.1, 2.9]]) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.3, 0.18), std(0xa88a5a)); b.position.set(x, 1.1, z); add(0.52, b); }
    this.posterMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 });
    for (let i = 0; i < 3; i++) { const st = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.12, 0.42), this.posterMat); st.position.set(-1.8 + i * 0.5, 0.06, 2.3 - i * 0.3); st.rotation.y = i * 0.5; add(0.6, st); }
    for (const [x, y] of [[-0.6, 1.9], [2.9, 1.6], [-1.6, 2.4]]) { const f = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.45), this.posterMat); f.position.set(x, y, -3.46); add(0.64, f); }
    const trash = std(0x1a1a1c, 0.4);
    for (const [x, z] of [[3.4, 3.2], [3.0, 3.0]]) { const t = new THREE.Mesh(new THREE.IcosahedronGeometry(0.35, 1), trash); t.scale.y = 0.85; t.position.set(x, 0.3, z); add(0.72, t); }
    const p2 = pizza(); p2.position.set(0.9, 0.03, 1.8); add(0.76, p2);
    const p3 = pizza(); p3.position.set(0.95, 0.08, 1.75); p3.rotation.y = 0.9; add(0.8, p3);
    for (const [x, z, c] of [[-0.3, -0.8, 0x7a3a3a], [2.2, 0.8, 0x3a3a4a], [-2.2, 1.9, 0xb8a888]]) { const cl = new THREE.Mesh(new THREE.IcosahedronGeometry(0.3, 1), std(c, 0.95, { flatShading: true })); cl.scale.y = 0.3; cl.position.set(x, 0.08, z); add(0.86, cl); }
    for (const [x, z] of [[-1.2, 0.2], [-1.0, 0.35], [1.7, 1.4]]) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.3, 8), std(0x3a6a3a, 0.2)); b.position.set(x, 0.15, z); if (x > 0) b.rotation.z = Math.PI / 2; add(0.93, b); }

    // Lights
    this.hemi = new THREE.HemisphereLight(0xfff0dc, 0x3a2a20, 0.6); S.add(this.hemi);
    this.lamp = new THREE.PointLight(0xffc88a, 6, 9, 1.6); this.lamp.position.set(-1.3, 1.6, -2.8); S.add(this.lamp);
    this.win = new THREE.DirectionalLight(0xcfe0ff, 1.2); this.win.position.set(1.4, 3.5, -7); this.win.target.position.set(0, 0, 1); S.add(this.win, this.win.target);
    this.screenLight = new THREE.PointLight(0x7ab0ff, 1.2, 3, 2); this.screenLight.position.set(-3.5, 1.1, 1.6); S.add(this.screenLight);

    // People
    this.maya = makeFigure(MAYA.look); this.maya.position.set(0.4, 0, 0.8); this.maya.rotation.y = -0.6; S.add(this.maya);
    this.lily = makeFigure(LILY.look); this.lily.position.set(-2.4, 0, -2.5); this.lily.visible = false; S.add(this.lily);
    this.visitor = null;

    // Hotspot labels
    this.labels = HOTSPOTS.map((h) => {
      const el = document.createElement('button');
      el.className = 'hotspot';
      el.innerHTML = `<kbd>${h.key}</kbd>${h.label}`;
      el.onclick = (e) => { e.stopPropagation(); onHotspot(h.id); };
      const o = new CSS2DObject(el);
      o.position.set(...h.pos);
      S.add(o);
      return o;
    });
  }

  setPoster(tex) { this.posterMat.map = tex; this.posterMat.needsUpdate = true; }

  setAspect(a) { this.camera.aspect = a; this.camera.updateProjectionMatrix(); }

  /** neglect 0-1, hour of day, wall = [{ kind: 'clue'|'false', title }] */
  refresh({ neglect, hour, wall, medsTaken }) {
    for (const o of this.neglectItems) o.visible = neglect >= o.userData.th;
    const closed = neglect > 0.84 ? 1 : neglect > 0.5 ? 0.5 : 0;
    this.blinds.children.forEach((sl, i) => { sl.visible = i < Math.round(12 * (0.15 + closed * 0.85)); });
    const day = hour > 7 && hour < 18.5 ? 1 : hour > 6 && hour < 20 ? 0.5 : 0;
    const light = day * (1 - closed * 0.85);
    this.glass.material.emissive.setHex(day ? (hour > 17 ? 0xe8a070 : 0x9ab8d8) : 0x1a2440);
    this.glass.material.emissiveIntensity = 0.35 + day * 0.9;
    this.win.intensity = 0.2 + light * 1.6;
    this.hemi.intensity = 0.25 + light * 0.5;
    this.lamp.intensity = day > 0.9 && closed < 0.5 ? 2 : 6;
    this.plant.material.color.setHex(neglect > 0.8 ? 0x6a5a3a : neglect > 0.45 ? 0x8a8a3a : 0x4f7a3a);
    this.pills.visible = true;
    this.pills.material.emissive.setHex(medsTaken ? 0x000000 : 0x3a1a00);
    this.duvet.rotation.z = neglect > 0.3 ? 0.15 : 0;
    this.setWall(wall);
  }

  setWall(items) {
    const key = JSON.stringify(items);
    if (key === this._wallKey) return;
    this._wallKey = key;
    for (const c of [...this.pins.children]) { this.pins.remove(c); c.geometry?.dispose(); }
    const pts = [];
    items.slice(0, 26).forEach((it, i) => {
      const col = i % 7, row = Math.floor(i / 7);
      const z = -2.0 + col * 0.46 + ((i * 37) % 10) / 60, y = 2.65 - row * 0.45 + ((i * 53) % 10) / 80;
      const card = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.26), new THREE.MeshStandardMaterial({ color: it.kind === 'false' ? 0xb8b8b0 : it.kind === 'photo' ? 0xd8d0c0 : 0xfffdf4, roughness: 0.9 }));
      card.rotation.y = Math.PI / 2; card.rotation.x = ((i * 13) % 10 - 5) / 60;
      card.position.set(-4.44, y, z);
      this.pins.add(card);
      const pin = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 6), std(0xc0282a, 0.4));
      pin.position.set(-4.41, y + 0.1, z); this.pins.add(pin);
      if (it.kind === 'false') {
        const x = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.03), std(0xc0282a));
        x.rotation.set(0.6, Math.PI / 2, 0); x.position.set(-4.43, y, z); this.pins.add(x);
      }
      if (it.kind !== 'false') pts.push(new THREE.Vector3(-4.4, y + 0.1, z));
    });
    if (pts.length > 1) {
      const seg = [];
      for (let i = 1; i < pts.length; i++) seg.push(pts[i - 1], pts[i]);
      this.pins.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(seg), new THREE.LineBasicMaterial({ color: 0xc0282a })));
    }
  }

  setMayaSpot(id) {
    const spots = { bed: [2.2, -1.6, 0.5], desk: [-3.1, 1.6, -1.57], door: [3.2, 2.6, 2.4], center: [0.4, 0.8, -0.6], mirror: [-2.4, -2.5, Math.PI] };
    const [x, z, r] = spots[id] || spots.center;
    this.maya.position.set(x, 0, z); this.maya.rotation.y = r;
  }

  showLily(where = 'mirror', ms = 1300) {
    const spots = { mirror: [-2.0, -2.9, 0], bed: [2.6, -2.2, Math.PI / 2] };
    const [x, z, r] = spots[where];
    this.lily.position.set(x, 0, z); this.lily.rotation.y = r;
    this.lily.visible = true;
    clearTimeout(this._lt);
    this._lt = setTimeout(() => { this.lily.visible = false; }, ms);
  }

  setVisitor(fig) {
    if (this.visitor) this.scene.remove(this.visitor);
    this.visitor = fig;
    if (fig) { fig.position.set(2.9, 0, 2.4); fig.rotation.y = -2.4; this.scene.add(fig); }
  }

  update(dt) {
    this.t += dt;
    this.camera.position.x = 3.4 + Math.sin(this.t * 0.2) * 0.12;
    this.camera.position.y = 4.8 + Math.sin(this.t * 0.27) * 0.06;
    this.camera.lookAt(this.look);
    animateFigure(this.maya, 0, dt);
    if (this.lily.visible) animateFigure(this.lily, 0, dt);
    if (this.visitor) animateFigure(this.visitor, 0, dt);
  }
}
