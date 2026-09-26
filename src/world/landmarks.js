import * as THREE from 'three';
import { std, facadeMaterial, glowMaterial, signTexture } from './materials.js';

// Every builder returns { group, colliders: [aabb], circles: [], walkables: [] }
// Positions are local to `at`; the caller places the group.

function box(w, h, d, m, x = 0, y = 0, z = 0) {
  const me = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  me.position.set(x, y + h / 2, z);
  me.castShadow = true; me.receiveShadow = true;
  return me;
}
function cyl(rt, rb, h, m, x = 0, y = 0, z = 0, seg = 16) {
  const me = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);
  me.position.set(x, y + h / 2, z);
  me.castShadow = true; me.receiveShadow = true;
  return me;
}
const aabb = (x, z, w, d) => ({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2 });

function screen(text, bg, fg, w, h) {
  const t = signTexture(text, { bg, fg, font: 'Helvetica, Arial, sans-serif', w: 512, h: Math.round(512 * h / w) });
  const m = new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xffffff, emissiveMap: t, emissiveIntensity: 1.3 });
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), m);
}

export const LANDMARKS = {
  empireState() {
    const g = new THREE.Group();
    const m = facadeMaterial({ color: 0xcdbfa6, floorH: 4, winW: 1.8, fill: 0.4, lit: 0.45 });
    const tiers = [[30, 30, 0, 22], [24, 24, 22, 150], [18, 18, 150, 176], [12, 12, 176, 190], [7, 7, 190, 198]];
    for (const [w, d, y0, y1] of tiers) g.add(box(w, y1 - y0, d, m, 0, y0, 0));
    g.add(cyl(2.2, 3, 16, std(0xd8d0c0, 0.6), 0, 198));
    g.add(cyl(0.2, 0.6, 26, std(0xbbbbbb, 0.3, 0.6), 0, 214));
    const top = new THREE.Mesh(new THREE.BoxGeometry(12.4, 6, 12.4), glowMaterial(0xff9a3c));
    top.position.y = 183; g.add(top);
    return { group: g, colliders: [aabb(0, 0, 30, 30)] };
  },

  timesSquare() {
    const g = new THREE.Group();
    const dark = facadeMaterial({ color: 0x8a8f98, floorH: 4, lit: 0.6, groundFloor: 7 });
    const ads = [
      ['BROADWAY', '#b0122b', '#fff1d0'], ['LONDON-NEWYORK', '#12324a', '#ffd27a'], ['☕ 24/7', '#1b1b1b', '#62f0c8'],
      ['NEW YORK', '#1d4fbf', '#ffffff'], ['JAZZ TONIGHT', '#3a1454', '#ffb3f0'], ['HELLO, CITY', '#e05a1a', '#fff'],
      ['DELI', '#f2c230', '#1b1b1b'], ['LIVE • LIVE • LIVE', '#101010', '#ff5a5a'],
    ];
    const towers = [[-12, -12, 60], [12, -12, 75], [-12, 12, 48], [12, 12, 66]];
    const S = 11, hf = S / 2 + 0.05;
    towers.forEach(([x, z, h], i) => {
      g.add(box(S, h, S, dark, x, 0, z));
      for (let k = 0; k < 2; k++) {
        const a1 = ads[(i * 2 + k) % ads.length];
        const s = screen(a1[0], a1[1], a1[2], 9.5, 5 + k * 1.5);
        s.position.set(x > 0 ? x - hf : x + hf, 9 + k * 11, z);
        s.rotation.y = x > 0 ? -Math.PI / 2 : Math.PI / 2;
        g.add(s);
        const a2 = ads[(i * 3 + k + 3) % ads.length];
        const s2 = screen(a2[0], a2[1], a2[2], 9.5, 4.5);
        s2.position.set(x, 14 + k * 12, z > 0 ? z + hf : z - hf);
        s2.rotation.y = z > 0 ? 0 : Math.PI;
        g.add(s2);
        // LED ribbon wrapping the tower at street level.
        if (k === 0) {
          const band = new THREE.Mesh(new THREE.BoxGeometry(S + 0.3, 1.4, S + 0.3), glowMaterial([0xff4a6a, 0x4ad0ff, 0xffc84a, 0x9a6aff][i], 0.9));
          band.position.set(x, 4.2, z); g.add(band);
          const low = screen(ads[(i + 5) % ads.length][0], ads[(i + 5) % ads.length][1], ads[(i + 5) % ads.length][2], 8, 2.6);
          low.position.set(x > 0 ? x - hf - 0.2 : x + hf + 0.2, 6.6, z); low.rotation.y = x > 0 ? -Math.PI / 2 : Math.PI / 2; g.add(low);
        }
        const a3 = ads[(i + k * 5 + 1) % ads.length];
        const s3 = screen(a3[0], a3[1], a3[2], 9.5, 4);
        s3.position.set(x, 30 + k * 10, z > 0 ? z - hf : z + hf);
        s3.rotation.y = z > 0 ? Math.PI : 0;
        g.add(s3);
      }
    });
    // Red steps
    const red = std(0xb3232f, 0.4);
    for (let i = 0; i < 6; i++) g.add(box(8, 0.45, 1.1, red, 0, i * 0.45, -3 + i * 1.1));
    return {
      group: g,
      colliders: towers.map(([x, z]) => aabb(x, z, S, S)).concat([aabb(0, 0.3, 8, 6.6)]),
    };
  },

  brooklynBridge({ length = 150 } = {}) {
    // Bridge runs along -x from the shore (x=0) out over the water.
    const g = new THREE.Group();
    const stone = std(0xb49c7a, 0.9);
    const deck = std(0x6a5a48, 0.85);
    g.add(box(length, 0.6, 12, deck, -length / 2, 0, 0));
    const rail = std(0x3a3028, 0.6);
    g.add(box(length, 1.1, 0.2, rail, -length / 2, 0.6, 6));
    g.add(box(length, 1.1, 0.2, rail, -length / 2, 0.6, -6));
    const towerX = [-45, -125];
    const cables = [];
    for (const tx of towerX) {
      g.add(box(10, 40, 4.5, stone, tx, -8, 8));
      g.add(box(10, 40, 4.5, stone, tx, -8, -8));
      g.add(box(10, 18, 20.5, stone, tx, 32, 0));
      g.add(box(11, 2, 21.5, stone, tx, 50, 0));
      // Gothic arch hint
      const arch = new THREE.Mesh(new THREE.TorusGeometry(5.2, 0.9, 6, 12, Math.PI), stone);
      arch.position.set(tx, 32, 0); arch.rotation.y = Math.PI / 2; g.add(arch);
      cables.push(tx);
    }
    // Cables
    const pts = [];
    for (const side of [-6, 6]) {
      const seg = (x0, x1, sag) => {
        for (let i = 0; i < 20; i++) {
          const a = i / 20, b = (i + 1) / 20;
          const y = (t) => 50 - Math.sin(t * Math.PI) * sag;
          pts.push(new THREE.Vector3(x0 + (x1 - x0) * a, y(a), side), new THREE.Vector3(x0 + (x1 - x0) * b, y(b), side));
        }
      };
      seg(-45, -125, 44);
      pts.push(new THREE.Vector3(0, 1.5, side), new THREE.Vector3(-45, 50, side));
      pts.push(new THREE.Vector3(-125, 50, side), new THREE.Vector3(-length, 20, side));
      for (let x = -5; x > -length; x -= 6) {
        const yTop = x > -45 ? 1.5 + (x / -45) * 48.5 : x > -125 ? 50 - Math.sin(((x + 45) / -80) * Math.PI) * 44 : 50 - ((x + 125) / -(length - 125)) * 30;
        pts.push(new THREE.Vector3(x, 0.6, side), new THREE.Vector3(x, yTop, side));
      }
    }
    const lines = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x3b3530 }));
    g.add(lines);
    // Lamps along the walkway
    const lampM = glowMaterial(0xffd08a);
    for (let x = -8; x > -length; x -= 16) {
      g.add(cyl(0.08, 0.08, 3, rail, x, 0.6, 5.4, 6));
      const l = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 6), lampM); l.position.set(x, 3.8, 5.4); g.add(l);
    }
    return {
      group: g,
      colliders: [aabb(-length / 2, 6.6, length, 1), aabb(-length / 2, -6.6, length, 1), ...towerX.flatMap((tx) => [aabb(tx, 8, 10, 4.5), aabb(tx, -8, 10, 4.5)])],
      walkables: [{ ...aabb(-length / 2 - 2, 0, length + 4, 12), y: 0.6 }],
    };
  },

  washingtonArch() {
    const g = new THREE.Group();
    const m = std(0xe8e2d4, 0.7);
    g.add(box(4, 14, 5, m, -6, 0, 0));
    g.add(box(4, 14, 5, m, 6, 0, 0));
    g.add(box(16, 5, 5.4, m, 0, 14, 0));
    const a = new THREE.Mesh(new THREE.TorusGeometry(4, 0.8, 6, 16, Math.PI), m);
    a.position.set(0, 12, 0); g.add(a);
    // Fountain behind
    const basin = cyl(7, 7.4, 0.8, std(0xcfc8b8, 0.6), 0, 0, -22, 28);
    g.add(basin);
    const water = new THREE.Mesh(new THREE.CircleGeometry(6.6, 28), std(0x6a93a8, 0.1, 0.2));
    water.rotation.x = -Math.PI / 2; water.position.set(0, 0.7, -22); g.add(water);
    const jet = cyl(0.2, 0.5, 3, std(0xdfefff, 0.1, 0, { transparent: true, opacity: 0.6 }), 0, 0.7, -22, 8);
    g.add(jet);
    return { group: g, colliders: [aabb(-6, 0, 4, 5), aabb(6, 0, 4, 5)], circles: [{ x: 0, z: -22, r: 7.6 }] };
  },

  bethesda() {
    const g = new THREE.Group();
    const stone = std(0xc9b491, 0.8);
    g.add(box(40, 0.3, 24, stone, 0, 0, 0));
    for (let i = -3; i <= 3; i++) g.add(box(1.2, 1.1, 1.2, stone, i * 5.6, 0.3, -11.5));
    g.add(box(40, 0.3, 0.6, stone, 0, 1.1, -11.5));
    const basin = cyl(6, 6.4, 0.9, stone, 0, 0.3, 2, 28); g.add(basin);
    const water = new THREE.Mesh(new THREE.CircleGeometry(5.7, 28), std(0x5f8ca0, 0.1, 0.2));
    water.rotation.x = -Math.PI / 2; water.position.set(0, 1.1, 2); g.add(water);
    g.add(cyl(0.9, 1.3, 4, stone, 0, 1.1, 2, 10));
    const angel = new THREE.Group();
    angel.add(cyl(0.3, 0.45, 1.8, std(0x4f6e58, 0.5, 0.4), 0, 0, 0, 8));
    const wing = box(1.6, 1.2, 0.1, std(0x4f6e58, 0.5, 0.4), 0, 0.6, -0.2);
    angel.add(wing);
    angel.add(new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 6), std(0x4f6e58, 0.5, 0.4)));
    angel.children[2].position.y = 2.05;
    angel.position.set(0, 5.1, 2);
    g.add(angel);
    return { group: g, colliders: [], circles: [{ x: 0, z: 2, r: 6.8 }] };
  },

  museumFacade({ color = 0xd9cdb4, width = 60, name = 'MUSEUM' } = {}) {
    const g = new THREE.Group();
    const m = std(color, 0.8);
    g.add(box(width, 20, 24, facadeMaterial({ color, floorH: 5, winW: 5, fill: 0.35, lit: 0.2, groundFloor: 6 }), 0, 0, -8));
    for (let i = 0; i < 6; i++) g.add(box(width * 0.6 + 4 - i * 0.2, 0.4, 2 + i * 0.5, m, 0, i * 0.4, 5 + i * 0.5 - 1));
    const n = 8;
    for (let i = 0; i < n; i++) {
      const x = -width * 0.28 + (i / (n - 1)) * width * 0.56;
      g.add(cyl(0.9, 1, 14, m, x, 2.4, 4.4, 14));
    }
    g.add(box(width * 0.62, 2.2, 3.6, m, 0, 16.4, 4.4));
    g.add(box(width * 0.64, 0.6, 3.8, m, 0, 18.6, 4.4));
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(14, 1.4), new THREE.MeshStandardMaterial({ map: signTexture(name, { bg: '#d9cdb4', fg: '#3a3226', font: 'Georgia, serif' }) }));
    sign.position.set(0, 17.5, 6.25); g.add(sign);
    return { group: g, colliders: [aabb(0, -8, width, 24), aabb(0, 4.6, width * 0.6, 3)] };
  },

  lake({ w = 60, d = 34 } = {}) {
    const g = new THREE.Group();
    const water = new THREE.Mesh(new THREE.PlaneGeometry(w, d), std(0x3a5a68, 0.14, 0.1));
    water.rotation.x = -Math.PI / 2; water.position.y = 0.2; g.add(water);
    water.userData.water = true;
    return { group: g, colliders: [{ ...aabb(0, 0, w, d), water: true }] };
  },

  bowBridge({ length = 42 } = {}) {
    const g = new THREE.Group();
    const m = std(0xd8d4c8, 0.6);
    const deck = box(4, 0.4, length, m, 0, 0.5, 0); g.add(deck);
    for (const s of [-1.9, 1.9]) g.add(box(0.2, 1, length, std(0x2a2a2a, 0.4, 0.4), s, 0.9, 0));
    return { group: g, colliders: [aabb(-2.1, 0, 0.3, length), aabb(2.1, 0, 0.3, length)], walkables: [{ ...aabb(0, 0, 4, length + 2), y: 0.9 }] };
  },

  stPancras() {
    const g = new THREE.Group();
    const brick = facadeMaterial({ color: 0x9a4a3a, floorH: 4.2, winW: 3, fill: 0.4, lit: 0.5 });
    const roof = std(0x3f4a52, 0.7);
    g.add(box(80, 18, 20, brick, 0, 0, 0));
    const r = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 12, 6, 4, 1), roof);
    r.rotation.y = Math.PI / 4; r.scale.set(80 / 16.9, 1, 1.2); r.position.set(0, 21, 0); g.add(r);
    g.add(box(10, 44, 10, brick, 30, 0, 2));
    const spire = new THREE.Mesh(new THREE.ConeGeometry(6.5, 16, 4), roof);
    spire.rotation.y = Math.PI / 4; spire.position.set(30, 52, 2); g.add(spire);
    const clock = new THREE.Mesh(new THREE.CircleGeometry(2.4, 24), glowMaterial(0xfff2cc));
    clock.position.set(30, 36, 7.05); g.add(clock);
    // Train shed roof behind
    const shed = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 70, 24, 1, true, -Math.PI / 2, Math.PI), std(0x6a7a86, 0.5, 0.4, { side: THREE.DoubleSide }));
    shed.rotation.z = Math.PI / 2; shed.rotation.y = Math.PI / 2; shed.position.set(-5, 0, -42); g.add(shed);
    return { group: g, colliders: [aabb(0, 0, 80, 20), aabb(-5, -42, 42, 70)] };
  },

  londonEye() {
    const g = new THREE.Group();
    const white = std(0xeef2f4, 0.35, 0.5);
    const wheel = new THREE.Group();
    const R = 60;
    wheel.add(new THREE.Mesh(new THREE.TorusGeometry(R, 0.7, 8, 96), white));
    wheel.add(new THREE.Mesh(new THREE.TorusGeometry(R - 3, 0.35, 6, 96), white));
    const spokes = [];
    for (let i = 0; i < 32; i++) {
      const a = (i / 32) * Math.PI * 2;
      spokes.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(Math.cos(a) * R, Math.sin(a) * R, 0));
    }
    wheel.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(spokes), new THREE.LineBasicMaterial({ color: 0xcfd8dc })));
    const podM = std(0xdfeaf0, 0.15, 0.3, { emissive: 0x88ccff, emissiveIntensity: 0.0 });
    podM.userData.nightGlow = 0.6;
    for (let i = 0; i < 32; i++) {
      const a = (i / 32) * Math.PI * 2;
      const pod = new THREE.Mesh(new THREE.CapsuleGeometry(1.6, 3, 4, 10), podM);
      pod.rotation.z = Math.PI / 2; pod.position.set(Math.cos(a) * (R + 2), Math.sin(a) * (R + 2), 0);
      wheel.add(pod);
    }
    wheel.position.y = R + 4;
    g.add(wheel);
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.2, 80, 8), white);
    leg.position.set(0, 36, -14); leg.rotation.x = -0.36; g.add(leg);
    g.add(cyl(1.5, 1.5, 8, white, 0, 60, 0));
    g.userData.spin = wheel;
    return { group: g, colliders: [aabb(0, -14, 6, 30)] };
  },

  bigBen() {
    const g = new THREE.Group();
    const stone = facadeMaterial({ color: 0xc9b27e, floorH: 5, winW: 2.2, fill: 0.35, lit: 0.4 });
    g.add(box(12, 70, 12, stone, 0, 0, 0));
    const face = glowMaterial(0xfff4d0);
    for (let i = 0; i < 4; i++) {
      const c = new THREE.Mesh(new THREE.CircleGeometry(4, 24), face);
      const a = (i * Math.PI) / 2;
      c.position.set(Math.sin(a) * 6.05, 62, Math.cos(a) * 6.05); c.rotation.y = a; g.add(c);
    }
    const spire = new THREE.Mesh(new THREE.ConeGeometry(7, 22, 4), std(0x3e4a4e, 0.6));
    spire.rotation.y = Math.PI / 4; spire.position.y = 81; g.add(spire);
    // Palace of Westminster block
    g.add(box(160, 28, 26, stone, -90, 0, 0));
    for (let i = 0; i < 10; i++) g.add(box(3, 36, 3, stone, -170 + i * 16, 0, 12));
    return { group: g, colliders: [] };
  },

  shard() {
    const g = new THREE.Group();
    const m = std(0x9fb6c8, 0.08, 0.8);
    const c = new THREE.Mesh(new THREE.ConeGeometry(22, 240, 6), m);
    c.position.y = 120; g.add(c);
    return { group: g, colliders: [] };
  },

  waterlooBridge({ length = 170 } = {}) {
    // Runs along -z from the shore (z=0) out across the river.
    const g = new THREE.Group();
    const conc = std(0xb8b3a8, 0.8);
    g.add(box(18, 1.2, length, conc, 0, -0.6, -length / 2));
    for (let z = -30; z > -length; z -= 32) g.add(box(16, 8, 5, conc, 0, -8.6, z));
    const rail = std(0x2e3033, 0.5, 0.4);
    g.add(box(0.3, 1.1, length, rail, 8.7, 0.6, -length / 2));
    g.add(box(0.3, 1.1, length, rail, -8.7, 0.6, -length / 2));
    const lampM = glowMaterial(0xffe2a8);
    for (let z = -6; z > -length; z -= 18) {
      for (const s of [-8.2, 8.2]) {
        g.add(cyl(0.1, 0.12, 5, rail, s, 0.6, z, 6));
        const l = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 6), lampM); l.position.set(s, 5.8, z); g.add(l);
      }
    }
    return {
      group: g,
      colliders: [aabb(8.9, -length / 2, 0.4, length), aabb(-8.9, -length / 2, 0.4, length)],
      walkables: [{ ...aabb(0, -length / 2 - 2, 18, length + 4), y: 0.6 }],
    };
  },

  camdenLock() {
    const g = new THREE.Group();
    // Canal running along x
    const water = new THREE.Mesh(new THREE.PlaneGeometry(120, 10), std(0x34483c, 0.14, 0.1));
    water.rotation.x = -Math.PI / 2; water.position.y = 0.04; g.add(water);
    const wall = std(0x5e4a3e, 0.9);
    g.add(box(120, 0.5, 0.8, wall, 0, 0, 5.4));
    g.add(box(120, 0.5, 0.8, wall, 0, 0, -5.4));
    // Lock gates
    const wood = std(0x3a2a1c, 0.8);
    g.add(box(0.6, 1.2, 10, wood, -8, 0, 0));
    g.add(box(0.6, 1.2, 10, wood, 8, 0, 0));
    for (const x of [-8, 8]) g.add(box(5, 0.3, 0.3, std(0xeeeeee, 0.5), x + 2.5, 1, 4.6));
    // Footbridge
    const br = std(0x2e3a3a, 0.5, 0.5);
    g.add(box(4, 0.4, 14, br, 22, 0.5, 0));
    g.add(box(0.2, 1, 14, br, 20.1, 0.9, 0));
    g.add(box(0.2, 1, 14, br, 23.9, 0.9, 0));
    // Market stalls
    const cols = [0xb03a2e, 0x2e6ab0, 0xe0a82e, 0x2e8a5a, 0x7a3ab0, 0xe06a2e];
    for (let i = 0; i < 8; i++) {
      const x = -40 + i * 11;
      const stall = new THREE.Group();
      stall.add(box(4, 1, 2.4, std(0x5a4632, 0.9), 0, 0, 0));
      stall.add(box(4.4, 0.15, 3, std(cols[i % cols.length], 0.8), 0, 2.4, 0));
      for (const sx of [-2, 2]) stall.add(cyl(0.05, 0.05, 2.4, br, sx, 0, -1.2, 5));
      stall.position.set(x, 0, 12 + (i % 2) * 2);
      g.add(stall);
    }
    return {
      group: g,
      colliders: [{ ...aabb(-4, 0, 112, 10.4), water: true }, ...Array.from({ length: 8 }, (_, i) => aabb(-40 + i * 11, 12 + (i % 2) * 2, 4, 2.4))],
      walkables: [{ ...aabb(22, 0, 4, 16), y: 0.9 }],
    };
  },

  camdenSign() {
    const g = new THREE.Group();
    const m = std(0x22262a, 0.5, 0.4);
    g.add(box(0.8, 9, 1.4, m, -9, 0, 0));
    g.add(box(0.8, 9, 1.4, m, 9, 0, 0));
    g.add(box(19, 2.4, 1.2, m, 0, 9, 0));
    const s = screen('CAMDEN LOCK', '#1a1d20', '#f1e3b8', 17, 1.9);
    s.position.set(0, 10.2, 0.65); g.add(s);
    return { group: g, colliders: [aabb(-9, 0, 0.8, 1.4), aabb(9, 0, 0.8, 1.4)] };
  },

  britishMuseum({ width = 34 } = {}) {
    return LANDMARKS.museumFacade({ color: 0xe0d6c0, width, name: 'THE BRITISH MUSEUM' });
  },

  amnh({ width = 34 } = {}) {
    return LANDMARKS.museumFacade({ color: 0xc8b89c, width, name: 'NATURAL HISTORY' });
  },

  subwayEntrance({ city = 'nyc' } = {}) {
    const g = new THREE.Group();
    const iron = std(0x1f3a2e, 0.5, 0.4);
    g.add(box(0.1, 1, 4, iron, -1.5, 0.2, 0));
    g.add(box(0.1, 1, 4, iron, 1.5, 0.2, 0));
    g.add(box(3, 1, 0.1, iron, 0, 0.2, -2));
    if (city === 'nyc') {
      for (const x of [-1.5, 1.5]) {
        g.add(cyl(0.06, 0.06, 2.6, iron, x, 0.2, 2, 6));
        const gl = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 8), glowMaterial(0x6be08a, 0.8));
        gl.position.set(x, 3, 2); g.add(gl);
      }
    } else {
      g.add(cyl(0.08, 0.08, 3.2, std(0x333333, 0.5), 2.2, 0.2, 1.5, 6));
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.14, 8, 24), glowMaterial(0xdc241f, 0.7));
      ring.position.set(2.2, 3.8, 1.5); g.add(ring);
      const bar = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.3, 0.06), glowMaterial(0x0019a8, 0.7));
      bar.position.set(2.2, 3.8, 1.5); g.add(bar);
    }
    return { group: g, colliders: [aabb(0, -0.5, 3.2, 3.5)] };
  },
};
