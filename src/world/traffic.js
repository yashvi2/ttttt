import * as THREE from 'three';
import { makeFigure, animateFigure, randomLook } from './characters.js';
import { std, glowMaterial } from './materials.js';
import { PITCH, WALK } from './city.js';

function carMesh(kind) {
  const g = new THREE.Group();
  const add = (geo, m, x, y, z) => { const me = new THREE.Mesh(geo, m); me.position.set(x, y, z); me.castShadow = true; g.add(me); return me; };
  const wheelG = new THREE.CylinderGeometry(0.36, 0.36, 0.3, 10).rotateZ(Math.PI / 2);
  const tyre = std(0x111111, 0.8);
  const glass = std(0x1d2630, 0.15, 0.5);
  let len = 4.4;
  if (kind === 'bus') {
    len = 10;
    const red = std(0xc41e1e, 0.5, 0.1);
    add(new THREE.BoxGeometry(2.5, 4.2, 10), red, 0, 2.4, 0);
    add(new THREE.BoxGeometry(2.52, 0.8, 9.4), glass, 0, 2.2, 0);
    add(new THREE.BoxGeometry(2.52, 0.8, 9.4), glass, 0, 3.9, 0);
    for (const z of [-3.4, 3.4]) for (const x of [-1.2, 1.2]) add(wheelG, tyre, x, 0.36, z);
  } else {
    const color = kind === 'cab' ? 0xf2c21b : kind === 'blackcab' ? 0x16181a : [0x8a8f96, 0x2a3a5a, 0xa03030, 0xe8e8e8, 0x3a3a3a, 0x3a5a3a][Math.floor(Math.random() * 6)];
    const body = std(color, 0.35, 0.3);
    add(new THREE.BoxGeometry(1.9, 0.8, 4.4), body, 0, 0.75, 0);
    add(new THREE.BoxGeometry(1.7, kind === 'blackcab' ? 0.9 : 0.7, 2.3), glass, 0, 1.45, -0.2);
    if (kind === 'cab') add(new THREE.BoxGeometry(0.7, 0.25, 0.3), glowMaterial(0xfff2b0, 0.6), 0, 1.92, -0.2);
    for (const z of [-1.4, 1.4]) for (const x of [-0.95, 0.95]) add(wheelG, tyre, x, 0.36, z);
  }
  const hl = glowMaterial(0xfff4d8, 0.3);
  const tl = glowMaterial(0xff2a2a, 0.3);
  add(new THREE.BoxGeometry(0.3, 0.15, 0.05), hl, -0.6, 0.8, len / 2);
  add(new THREE.BoxGeometry(0.3, 0.15, 0.05), hl, 0.6, 0.8, len / 2);
  add(new THREE.BoxGeometry(0.3, 0.15, 0.05), tl, -0.6, 0.8, -len / 2);
  add(new THREE.BoxGeometry(0.3, 0.15, 0.05), tl, 0.6, 0.8, -len / 2);
  g.userData.len = len;
  return g;
}

export class Traffic {
  constructor(scene, city, district, audio) {
    this.group = new THREE.Group();
    scene.add(this.group);
    this.cars = [];
    this.peds = [];
    this.audio = audio;
    const leftHand = city.id === 'london';
    const lanes = [];
    for (const x of district.drivable.x) for (const dir of [1, -1]) lanes.push({ axis: 'z', fixed: x + (leftHand ? -dir : dir) * 3.4 * -1, dir });
    for (const z of district.drivable.z) for (const dir of [1, -1]) lanes.push({ axis: 'x', fixed: z + (leftHand ? dir : -dir) * 3.4 * -1, dir });
    const kinds = city.id === 'nyc' ? ['cab', 'cab', 'cab', 'car', 'car'] : ['bus', 'blackcab', 'blackcab', 'car', 'car'];
    const nCars = Math.min(22, lanes.length * 2);
    for (let i = 0; i < nCars && lanes.length; i++) {
      const lane = lanes[i % lanes.length];
      const mesh = carMesh(kinds[i % kinds.length]);
      const car = { mesh, lane, s: -130 + Math.random() * 260, v: 9 + Math.random() * 4, vmax: 9 + Math.random() * 4, honk: 0 };
      this.group.add(mesh);
      this.cars.push(car);
    }
    // Pedestrians loop around blocks on the sidewalk.
    const blocks = [];
    for (let cz = -2; cz <= 2; cz++) for (let cx = -2; cx <= 2; cx++) {
      const c = district.cellAt(cx, cz);
      if (c && !['W', 'P'].includes(c)) blocks.push([cx * PITCH, cz * PITCH]);
    }
    const nPeds = Math.min(26, blocks.length * 2);
    for (let i = 0; i < nPeds && blocks.length; i++) {
      const [bx, bz] = blocks[Math.floor(Math.random() * blocks.length)];
      const fig = makeFigure(randomLook());
      const off = WALK + 0.3 + Math.random() * 0.7;
      this.group.add(fig);
      this.peds.push({ fig, bx, bz, off, u: Math.random() * 4, v: (0.6 + Math.random() * 0.5) * (Math.random() < 0.5 ? 1 : -1) });
    }
    this.ground = district.groundHeight;
  }

  update(dt, player) {
    const p = player.pos;
    for (const c of this.cars) {
      const { lane } = c;
      const L = c.mesh.userData.len;
      // Stop for the player if they're in front of the car.
      let block = false;
      const cx = lane.axis === 'x' ? c.s : lane.fixed;
      const cz = lane.axis === 'z' ? c.s : lane.fixed;
      const ahead = lane.axis === 'x' ? (p.x - cx) * lane.dir : (p.z - cz) * lane.dir;
      const side = lane.axis === 'x' ? Math.abs(p.z - cz) : Math.abs(p.x - cx);
      if (ahead > 0 && ahead < L / 2 + 6 && side < 2.2) block = true;
      // Keep distance from the car ahead in the same lane.
      for (const o of this.cars) {
        if (o === c || o.lane !== lane) continue;
        const gap = (o.s - c.s) * lane.dir;
        if (gap > 0 && gap < L / 2 + o.mesh.userData.len / 2 + 3) block = true;
      }
      const target = block ? 0 : c.vmax;
      c.v += (target - c.v) * Math.min(1, dt * (block ? 4 : 1.2));
      if (block && ahead > 0 && ahead < 10 && side < 2.2) {
        c.honk -= dt;
        if (c.honk <= 0 && this.audio) { this.audio.honk(); c.honk = 4 + Math.random() * 4; }
      }
      c.s += c.v * lane.dir * dt;
      if (c.s > 140) c.s = -140; if (c.s < -140) c.s = 140;
      if (lane.axis === 'x') { c.mesh.position.set(c.s, 0, lane.fixed); c.mesh.rotation.y = lane.dir > 0 ? Math.PI / 2 : -Math.PI / 2; }
      else { c.mesh.position.set(lane.fixed, 0, c.s); c.mesh.rotation.y = lane.dir > 0 ? 0 : Math.PI; }
    }
    for (const q of this.peds) {
      q.u = (q.u + (q.v * dt) / (q.off * 2) + 4) % 4;
      const seg = Math.floor(q.u), f = q.u - seg;
      const o = q.off;
      const pts = [[-o, -o], [o, -o], [o, o], [-o, o], [-o, -o]];
      const a = pts[seg], b = pts[seg + 1];
      const x = q.bx + a[0] + (b[0] - a[0]) * f, z = q.bz + a[1] + (b[1] - a[1]) * f;
      const dx = (b[0] - a[0]) * Math.sign(q.v), dz = (b[1] - a[1]) * Math.sign(q.v);
      q.fig.position.set(x, 0.2, z);
      q.fig.rotation.y = Math.atan2(dx, dz);
      const near = Math.hypot(p.x - x, p.z - z) < 1.2;
      if (!near) animateFigure(q.fig, 0.9, dt); else animateFigure(q.fig, 0, dt);
      if (near) q.u -= (q.v * dt) / (q.off * 2);
    }
  }

  dispose(scene) { scene.remove(this.group); }
}
