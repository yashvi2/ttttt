import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { facadeMaterial, std, glowMaterial, signTexture } from './materials.js';
import { LANDMARKS } from './landmarks.js';

// Grid geometry (metres). 5x5 cells; each cell = one city block plus half the
// street around it.
export const PITCH = 50;
export const HALF_BLOCK = 18; // sidewalk edge
export const FACE = 15; // building facade
export const WALK = 16.8; // sidewalk line where doors/NPCs sit
export const BOUND = 132;

const NORMALS = { n: [0, -1], s: [0, 1], e: [1, 0], w: [-1, 0] };

export const POI_STYLE = {
  eat: { color: 0xf2a65a, icon: '☕' },
  work: { color: 0x6fb3f2, icon: '💼' },
  hangout: { color: 0xc58af2, icon: '🎨' },
  home: { color: 0x7ee0a1, icon: '🏠' },
  station: { color: 0x9ad0ff, icon: 'Ⓜ' },
  gem: { color: 0xffe07a, icon: '✨' },
  photo: { color: 0xffffff, icon: '📷' },
  goal: { color: 0xff6b8a, icon: '♥' },
  police: { color: 0x6fa8f2, icon: '🚓' },
  therapy: { color: 0x9ad0a0, icon: '🛋️' },
  shelter: { color: 0xe0c08a, icon: '🕯️' },
};

const STYLES = {
  tower: { mat: { floorH: 4, winW: 2, fill: 0.72, glass: 0x1a2632, metalness: 0.35, roughness: 0.45, lit: 0.55 }, colors: [0x8fa3b5, 0x7d8c99, 0xa7b3bd, 0x6e7f8e], h: [45, 130], lots: [2, 2], gap: 3 },
  office: { mat: { floorH: 3.8, winW: 2.2, fill: 0.5, lit: 0.45 }, colors: [0xb9ad98, 0xa89c88, 0xc7bca8, 0x9d9486], h: [22, 60], lots: [2, 2], gap: 1.5 },
  brownstone: { mat: { floorH: 3.4, winW: 2.4, fill: 0.42, lit: 0.42 }, colors: [0x7a4a38, 0x6a3e30, 0x8a5a44, 0x5e3a2c], h: [10, 15], lots: [5, 2], waterTower: 0.12 },
  warehouse: { mat: { floorH: 4.2, winW: 3.2, fill: 0.55, lit: 0.45 }, colors: [0x8a4634, 0x7a3e2e, 0x9a5a44, 0x6a4a3e], h: [12, 24], lots: [2, 2], waterTower: 0.45 },
  loft: { mat: { floorH: 3.8, winW: 2.6, fill: 0.5, lit: 0.5 }, colors: [0x6a5a50, 0x8a7a6a, 0x5a524c, 0x9a8a78], h: [18, 34], lots: [3, 2], waterTower: 0.3 },
  terrace: { mat: { floorH: 3.6, winW: 2.4, fill: 0.36, lit: 0.4, glass: 0x28303a }, colors: [0xece4d4, 0xe4dccb, 0xf0ebe0, 0xd8cfbe], h: [11, 15], lots: [5, 2], chimneys: true },
  pastel: { mat: { floorH: 3.5, winW: 2.2, fill: 0.36, lit: 0.4, glass: 0x28303a }, colors: [0xf2b8c6, 0xa8d4e6, 0xbfe3c0, 0xf6e3a1, 0xd9c2ec, 0xf5c9a0, 0xeeeeee], h: [10, 13], lots: [6, 2], chimneys: true },
  victorian: { mat: { floorH: 3.8, winW: 2.4, fill: 0.4, lit: 0.42 }, colors: [0x8a3f30, 0x7a3a2c, 0x9a4a38, 0x6a3428], h: [14, 26], lots: [3, 2], chimneys: true },
  yellowbrick: { mat: { floorH: 3.5, winW: 2.3, fill: 0.38, lit: 0.4 }, colors: [0xc9ae7a, 0xb89e6e, 0xd4bc8c, 0xa88e62], h: [12, 18], lots: [4, 2], chimneys: true },
  modern: { mat: { floorH: 3.8, winW: 1.8, fill: 0.75, glass: 0x243644, metalness: 0.3, roughness: 0.4, lit: 0.5 }, colors: [0x9aa6ae, 0x8a969e, 0xb0bac0, 0x6e7c86], h: [25, 60], lots: [2, 2], gap: 2 },
};

function rng(seed) {
  let s = 0;
  for (let i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

export function resolvePos(p) {
  if (p.at) {
    const d = p.face != null ? [Math.sin(p.face), Math.cos(p.face)] : [0, 1];
    return { x: p.at[0], z: p.at[1], dir: d };
  }
  const [cx, cz] = p.cell;
  const n = NORMALS[p.side || 's'];
  const tan = [Math.abs(n[1]), Math.abs(n[0])];
  const t = (p.t || 0) * 12;
  return { x: cx * PITCH + n[0] * WALK + tan[0] * t, z: cz * PITCH + n[1] * WALK + tan[1] * t, dir: n };
}

const aabb = (x, z, w, d) => ({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2 });

export function buildDistrict(d, city) {
  const R = rng(d.id);
  const group = new THREE.Group();
  const colliders = [];
  const circles = [];
  const walkables = [];
  const pads = []; // { rect, y }
  const glowMats = new Set();
  const animated = [];
  const labels = [];
  const grid = d.grid.map((row) => row.split(''));
  const cellAt = (cx, cz) => (grid[cz + 2] && grid[cz + 2][cx + 2]) || null;
  const isLand = (c) => c && c !== 'W';
  const isOpen = (c) => c === 'P' || c === 'W';

  const nyc = city.id === 'nyc';
  const autumn = nyc;

  // ---- Ground ----
  const asphalt = std(0x3a3c41, 0.92);
  asphalt.userData.street = true;
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400), asphalt);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  group.add(ground);

  const sidewalkM = std(nyc ? 0x9b9a95 : 0x8f8c86, 0.9);
  sidewalkM.userData.street = true;
  const plazaM = std(nyc ? 0xb3ab9c : 0xa8a093, 0.85);
  plazaM.userData.street = true;
  const grassM = std(autumn ? 0x6b6e3a : 0x55743c, 0.95);
  const pathM = std(0xb8a888, 0.95);
  const waterM = std(nyc ? 0x2c4658 : 0x3a4a48, 0.14, 0.1);
  const wallM = std(0x6e665c, 0.9);
  const railM = std(0x25292c, 0.5, 0.5);

  // Buildings, collected per style for instancing.
  const buildingSets = new Map();
  const addBuilding = (style, x, z, w, dd, h, color) => {
    if (!buildingSets.has(style)) buildingSets.set(style, []);
    buildingSets.get(style).push({ x, z, w, d: dd, h, color });
  };
  const roofProps = { tank: [], chimney: [] };
  const trees = [];
  const lamps = [];

  for (let cz = -2; cz <= 2; cz++) {
    for (let cx = -2; cx <= 2; cx++) {
      const c = cellAt(cx, cz);
      const X = cx * PITCH, Z = cz * PITCH;
      if (!c) continue;
      if (c === 'W') {
        // Water: shrink on sides that face land so a promenade street remains.
        let x0 = X - 25, x1 = X + 25, z0 = Z - 25, z1 = Z + 25;
        const nb = { w: cellAt(cx - 1, cz), e: cellAt(cx + 1, cz), n: cellAt(cx, cz - 1), s: cellAt(cx, cz + 1) };
        if (isLand(nb.w)) x0 += 8; if (isLand(nb.e)) x1 -= 8;
        if (isLand(nb.n)) z0 += 8; if (isLand(nb.s)) z1 -= 8;
        // Edge cells extend out into the backdrop river.
        if (cx === -2 && !nb.w) x0 -= 220; if (cx === 2 && !nb.e) x1 += 220;
        if (cz === -2 && !nb.n) z0 -= 220; if (cz === 2 && !nb.s) z1 += 220;
        const wm = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), waterM);
        wm.rotation.x = -Math.PI / 2; wm.position.set((x0 + x1) / 2, 0.03, (z0 + z1) / 2);
        wm.userData.water = true;
        group.add(wm);
        colliders.push({ minX: x0, maxX: x1, minZ: z0, maxZ: z1, water: true });
        // Embankment walls + railings on land sides.
        const sides = [['w', x0, (z0 + z1) / 2, 0.6, z1 - z0], ['e', x1, (z0 + z1) / 2, 0.6, z1 - z0], ['n', (x0 + x1) / 2, z0, x1 - x0, 0.6], ['s', (x0 + x1) / 2, z1, x1 - x0, 0.6]];
        for (const [k, px, pz, w, dd] of sides) {
          if (!isLand(nb[k])) continue;
          const wall = new THREE.Mesh(new THREE.BoxGeometry(w, 0.5, dd), wallM); wall.position.set(px, 0.25, pz); group.add(wall);
          const rail = new THREE.Mesh(new THREE.BoxGeometry(w === 0.6 ? 0.12 : w, 1.05, dd === 0.6 ? 0.12 : dd), railM);
          rail.position.set(px, 0.55, pz); group.add(rail);
        }
        continue;
      }
      if (c === 'P') {
        // Park: extend lawn across streets shared with neighbouring parks.
        let x0 = X - HALF_BLOCK, x1 = X + HALF_BLOCK, z0 = Z - HALF_BLOCK, z1 = Z + HALF_BLOCK;
        if (cellAt(cx - 1, cz) === 'P') x0 = X - 25; if (cellAt(cx + 1, cz) === 'P') x1 = X + 25;
        if (cellAt(cx, cz - 1) === 'P') z0 = Z - 25; if (cellAt(cx, cz + 1) === 'P') z1 = Z + 25;
        const lawn = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, 0.16, z1 - z0), grassM);
        lawn.position.set((x0 + x1) / 2, 0.08, (z0 + z1) / 2); lawn.receiveShadow = true; group.add(lawn);
        pads.push({ rect: { minX: x0, maxX: x1, minZ: z0, maxZ: z1 }, y: 0.16 });
        for (const [w, dd] of [[x1 - x0, 3], [3, z1 - z0]]) {
          const p = new THREE.Mesh(new THREE.BoxGeometry(w, 0.04, dd), pathM);
          p.position.set((x0 + x1) / 2, 0.17, (z0 + z1) / 2); p.receiveShadow = true; group.add(p);
        }
        const n = d.denseTrees ? 26 : 18;
        for (let i = 0; i < n; i++) {
          const tx = x0 + 2 + R() * (x1 - x0 - 4), tz = z0 + 2 + R() * (z1 - z0 - 4);
          if (Math.abs(tx - (x0 + x1) / 2) < 3 || Math.abs(tz - (z0 + z1) / 2) < 3) continue;
          if (d.clearings && d.clearings.some(([qx, qz, r]) => Math.hypot(tx - qx, tz - qz) < r)) continue;
          trees.push({ x: tx, z: tz, s: 0.8 + R() * 0.7 });
        }
        continue;
      }
      // Paved land: pad + either buildings or plaza.
      const pad = new THREE.Mesh(new THREE.BoxGeometry(HALF_BLOCK * 2, 0.2, HALF_BLOCK * 2), c === '.' ? plazaM : sidewalkM);
      pad.position.set(X, 0.1, Z); pad.receiveShadow = true; group.add(pad);
      pads.push({ rect: aabb(X, Z, HALF_BLOCK * 2, HALF_BLOCK * 2), y: 0.2 });
      // Street lamps around the block.
      for (const t of [-12, 0, 12]) {
        lamps.push([X + t, Z - 17.6], [X + t, Z + 17.6], [X - 17.6, Z + t], [X + 17.6, Z + t]);
      }
      if (c === '.' || c === 'G') {
        if (c === 'G') for (let i = 0; i < 6; i++) trees.push({ x: X - 12 + R() * 24, z: Z - 12 + R() * 24, s: 0.7 + R() * 0.4 });
        continue;
      }
      const style = STYLES[(d.styles && d.styles[c]) || c] || STYLES.office;
      const styleName = (d.styles && d.styles[c]) || c;
      colliders.push(aabb(X, Z, FACE * 2, FACE * 2));
      const [nx, nz] = style.lots;
      const gap = style.gap || 0;
      const lw = (FACE * 2) / nx, ld = (FACE * 2) / nz;
      for (let i = 0; i < nx; i++) {
        for (let j = 0; j < nz; j++) {
          const bx = X - FACE + lw * (i + 0.5), bz = Z - FACE + ld * (j + 0.5);
          const h = style.h[0] + R() * (style.h[1] - style.h[0]);
          const col = style.colors[Math.floor(R() * style.colors.length)];
          addBuilding(styleName, bx, bz, lw - gap, ld - gap, h, col);
          if (style.waterTower && R() < style.waterTower) roofProps.tank.push([bx + (R() - 0.5) * 3, h, bz + (R() - 0.5) * 3]);
          if (style.chimneys) roofProps.chimney.push([bx + (R() - 0.5) * lw * 0.5, h, bz + (R() - 0.5) * 2]);
        }
      }
    }
  }

  // Instanced buildings.
  const unitBox = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
  const dummy = new THREE.Object3D();
  const col = new THREE.Color();
  for (const [styleName, list] of buildingSets) {
    const style = STYLES[styleName] || STYLES.office;
    const m = facadeMaterial({ color: 0xffffff, ...style.mat });
    const im = new THREE.InstancedMesh(unitBox, m, list.length);
    list.forEach((b, i) => {
      dummy.position.set(b.x, 0.2, b.z); dummy.scale.set(b.w, b.h, b.d); dummy.rotation.set(0, 0, 0); dummy.updateMatrix();
      im.setMatrixAt(i, dummy.matrix);
      im.setColorAt(i, col.setHex(b.color).multiplyScalar(0.92 + R() * 0.16));
    });
    im.castShadow = true; im.receiveShadow = true;
    group.add(im);
  }
  // Water tanks (NYC) and chimneys (London).
  if (roofProps.tank.length) {
    const tankG = new THREE.CylinderGeometry(1.4, 1.4, 3, 12).translate(0, 3.2, 0);
    const legsG = new THREE.CylinderGeometry(1.1, 1.2, 1.7, 6, 1, true).translate(0, 0.85, 0);
    const roofG = new THREE.ConeGeometry(1.55, 1.2, 12).translate(0, 5.3, 0);
    const wood = std(0x6a4a30, 0.95), dark = std(0x2a2a2a, 0.7);
    for (const [g, m] of [[tankG, wood], [legsG, dark], [roofG, dark]]) {
      const im = new THREE.InstancedMesh(g, m, roofProps.tank.length);
      roofProps.tank.forEach(([x, y, z], i) => { dummy.position.set(x, y + 0.2, z); dummy.scale.set(1, 1, 1); dummy.updateMatrix(); im.setMatrixAt(i, dummy.matrix); });
      im.castShadow = true; group.add(im);
    }
  }
  if (roofProps.chimney.length) {
    const g = new THREE.BoxGeometry(2.4, 1.6, 0.9).translate(0, 0.8, 0);
    const im = new THREE.InstancedMesh(g, std(0x7a5040, 0.9), roofProps.chimney.length);
    roofProps.chimney.forEach(([x, y, z], i) => { dummy.position.set(x, y + 0.2, z); dummy.scale.set(1, 1, 1); dummy.updateMatrix(); im.setMatrixAt(i, dummy.matrix); });
    im.castShadow = true; group.add(im);
  }

  // Trees.
  if (trees.length) {
    const trunkG = new THREE.CylinderGeometry(0.18, 0.28, 3, 6).translate(0, 1.5, 0);
    const leafG = new THREE.IcosahedronGeometry(2.2, 1).translate(0, 4.4, 0);
    const trunks = new THREE.InstancedMesh(trunkG, std(0x4a3526, 0.9), trees.length);
    const leaves = new THREE.InstancedMesh(leafG, std(0xffffff, 0.9, 0, { flatShading: true }), trees.length);
    const pal = autumn ? [0xd0702a, 0xb8452a, 0xe0b040, 0x9a8a3a, 0x6a7a3a, 0xc9582a] : [0x4f7a3a, 0x5f8a3e, 0x7a9440, 0x46703a, 0x8e9a44];
    trees.forEach((t, i) => {
      dummy.position.set(t.x, 0.16, t.z); dummy.scale.setScalar(t.s); dummy.rotation.set(0, R() * 6, 0); dummy.updateMatrix();
      trunks.setMatrixAt(i, dummy.matrix); leaves.setMatrixAt(i, dummy.matrix);
      leaves.setColorAt(i, col.setHex(pal[Math.floor(R() * pal.length)]));
      circles.push({ x: t.x, z: t.z, r: 0.35 * t.s });
    });
    trunks.castShadow = leaves.castShadow = true;
    group.add(trunks, leaves);
  }

  // Street lamps.
  if (lamps.length) {
    const postG = new THREE.CylinderGeometry(0.07, 0.1, 4.6, 6).translate(0, 2.3, 0);
    const headG = (nyc ? new THREE.BoxGeometry(0.5, 0.2, 0.3) : new THREE.SphereGeometry(0.28, 8, 6)).translate(0, 4.7, 0);
    const posts = new THREE.InstancedMesh(postG, std(nyc ? 0x2a3a34 : 0x1d1f22, 0.6, 0.4), lamps.length);
    const lampGlow = glowMaterial(0xffd9a0, 0.2);
    glowMats.add(lampGlow);
    const heads = new THREE.InstancedMesh(headG, lampGlow, lamps.length);
    lamps.forEach(([x, z], i) => {
      dummy.position.set(x, 0.2, z); dummy.scale.set(1, 1, 1); dummy.rotation.set(0, 0, 0); dummy.updateMatrix();
      posts.setMatrixAt(i, dummy.matrix); heads.setMatrixAt(i, dummy.matrix);
      circles.push({ x, z, r: 0.2 });
    });
    posts.castShadow = true;
    group.add(posts, heads);
  }

  // Street markings: which lines carry traffic?
  const lines = [-75, -25, 25, 75];
  const drivable = { x: [], z: [] };
  const covered = (a, b) => (a === 'P' && b === 'P') || a === 'W' || b === 'W' || !a || !b;
  for (const L of lines) {
    const ci = L < 0 ? (L === -75 ? [-2, -1] : [-1, 0]) : (L === 25 ? [0, 1] : [1, 2]);
    let okX = true, okZ = true;
    for (let k = -2; k <= 2; k++) {
      if (covered(cellAt(ci[0], k), cellAt(ci[1], k))) okX = false;
      if (covered(cellAt(k, ci[0]), cellAt(k, ci[1]))) okZ = false;
    }
    if (okX && !(d.noTraffic?.x || []).includes(L)) drivable.x.push(L);
    if (okZ && !(d.noTraffic?.z || []).includes(L)) drivable.z.push(L);
  }
  const markM = std(nyc ? 0xe0b43a : 0xe8e8e8, 0.6);
  const dashes = [];
  for (const L of drivable.x) for (let z = -130; z < 130; z += 6) if ((((z + 130) / 6) | 0) % 2 === 0 || nyc) dashes.push([L, z + 1.5, 0.18, 3]);
  for (const L of drivable.z) for (let x = -130; x < 130; x += 6) if ((((x + 130) / 6) | 0) % 2 === 0 || nyc) dashes.push([x + 1.5, L, 3, 0.18]);
  // Crossings
  for (const x of lines) for (const z of lines) {
    for (const [dx, dz, rot] of [[0, -11, 0], [0, 11, 0], [-11, 0, 1], [11, 0, 1]]) {
      for (let k = -3; k <= 3; k++) {
        if (rot) dashes.push([x + dx, z + k * 1.8, 2.6, 0.8]);
        else dashes.push([x + k * 1.8, z + dz, 0.8, 2.6]);
      }
    }
  }
  const dashG = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
  const cross = new THREE.InstancedMesh(dashG, std(0xe8e6e0, 0.7), dashes.length);
  dashes.forEach(([x, z, w, dd], i) => {
    dummy.position.set(x, 0.02, z); dummy.scale.set(w, 1, dd); dummy.rotation.set(0, 0, 0); dummy.updateMatrix();
    cross.setMatrixAt(i, dummy.matrix);
  });
  cross.receiveShadow = true;
  group.add(cross);
  if (nyc) cross.material = markM;

  // ---- Backdrop skyline ----
  {
    const R2 = rng(d.id + 'bg');
    const waterEdges = { w: grid.every((r) => r[0] === 'W'), e: grid.every((r) => r[4] === 'W'), n: grid[0].every((c) => c === 'W'), s: grid[4].every((c) => c === 'W') };
    const pts = [];
    const bd = d.backdrop || city.backdrop;
    for (let i = 0; i < 520 && pts.length < 260; i++) {
      const x = (R2() - 0.5) * 820, z = (R2() - 0.5) * 820;
      if (Math.abs(x) < 150 && Math.abs(z) < 150) continue;
      const across = (waterEdges.w && x < -150) || (waterEdges.e && x > 150) || (waterEdges.n && z < -150) || (waterEdges.s && z > 150);
      if ((waterEdges.w && x < -150 && x > -340) || (waterEdges.e && x > 150 && x < 340) || (waterEdges.n && z < -150 && z > -340) || (waterEdges.s && z > 150 && z < 340)) continue;
      let h = bd === 'manhattan' ? 50 + R2() * R2() * 260 : bd === 'london' ? 14 + R2() * 30 + (R2() < 0.08 ? 80 + R2() * 90 : 0) : 20 + R2() * 70;
      if (bd === 'manhattan' && across) h += 60;
      pts.push({ x, z, w: 14 + R2() * 22, d: 14 + R2() * 22, h });
    }
    const m = facadeMaterial({ color: 0xffffff, floorH: 4, winW: 2.4, fill: 0.6, lit: 0.5, roughness: 0.8 });
    const im = new THREE.InstancedMesh(unitBox, m, pts.length);
    pts.forEach((p, i) => {
      dummy.position.set(p.x, 0, p.z); dummy.scale.set(p.w, p.h, p.d); dummy.rotation.set(0, 0, 0); dummy.updateMatrix();
      im.setMatrixAt(i, dummy.matrix);
      im.setColorAt(i, col.setHex(bd === 'london' ? 0x9a8e80 : 0x7a8088).multiplyScalar(0.7 + R2() * 0.4));
    });
    group.add(im);
  }

  // ---- Landmarks ----
  for (const L of d.landmarks || []) {
    const b = LANDMARKS[L.type];
    if (!b) continue;
    const r = b(L.opts || {});
    const rot = L.rot || 0;
    r.group.position.set(L.at[0], L.y || 0, L.at[1]);
    r.group.rotation.y = rot;
    group.add(r.group);
    if (r.group.userData.spin) animated.push((dt) => { r.group.userData.spin.rotation.z += dt * 0.01; });
    const place = (bx) => rotRect(bx, L.at[0], L.at[1], rot);
    if (!L.noCollide) {
      for (const c of r.colliders || []) colliders.push({ ...place(c), water: c.water });
      for (const c of r.circles || []) { const p = rotPt(c.x, c.z, rot); circles.push({ x: L.at[0] + p[0], z: L.at[1] + p[1], r: c.r }); }
      for (const w of r.walkables || []) walkables.push({ ...place(w), y: w.y });
    }
  }

  // ---- Points of interest ----
  const pois = [];
  for (const def of d.pois) {
    const p = resolvePos(def);
    const style = POI_STYLE[def.type] || POI_STYLE.gem;
    const poi = { ...def, pos: new THREE.Vector3(p.x, 0, p.z), dir: p.dir, district: d.id };
    // Storefront prop.
    if (def.side && def.type !== 'station') {
      const [cx, cz] = def.cell;
      if (!['.', 'P', 'G'].includes(cellAt(cx, cz))) {
        const sf = storefront(def.name, def.sign || {}, style.color);
        const n = NORMALS[def.side];
        sf.position.set(p.x - n[0] * (WALK - FACE), 0.2, p.z - n[1] * (WALK - FACE));
        sf.rotation.y = Math.atan2(n[0], n[1]);
        group.add(sf);
      }
    }
    if (def.type === 'station') {
      const r = LANDMARKS.subwayEntrance({ city: city.id });
      const n = p.dir;
      r.group.position.set(p.x + n[0] * 2.5, 0.2, p.z + n[1] * 2.5);
      r.group.rotation.y = Math.atan2(n[0], n[1]);
      group.add(r.group);
    }
    // Ground ring.
    const ringM = new THREE.MeshBasicMaterial({ color: style.color, transparent: true, opacity: 0.7, depthWrite: false });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.15, 40).rotateX(-Math.PI / 2), ringM);
    ring.position.set(p.x, 0.25, p.z);
    group.add(ring);
    poi.ring = ring;
    // Label.
    const el = document.createElement('div');
    el.className = 'poi-label type-' + def.type;
    el.innerHTML = `<span class="ic">${style.icon}</span><span class="nm"></span>`;
    el.querySelector('.nm').textContent = def.name;
    const lab = new CSS2DObject(el);
    lab.position.set(p.x, 3.2, p.z);
    group.add(lab);
    poi.label = lab;
    labels.push(lab);
    pois.push(poi);
  }

  // Photo spots.
  const photoSpots = (d.photoSpots || []).map((s) => {
    const ring = new THREE.Mesh(new THREE.RingGeometry(1.3, 1.45, 6).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55, depthWrite: false }));
    ring.position.set(s.at[0], 0.26, s.at[1]);
    group.add(ring);
    return { ...s, district: d.id, pos: new THREE.Vector3(s.at[0], 0, s.at[1]), targetV: new THREE.Vector3(...s.target), ring };
  });

  // World bounds.
  colliders.push(aabb(0, -BOUND - 5, 400, 10), aabb(0, BOUND + 5, 400, 10), aabb(-BOUND - 5, 0, 10, 400), aabb(BOUND + 5, 0, 10, 400));

  group.traverse((o) => {
    if (o.material && o.material.userData && o.material.userData.nightGlow != null) glowMats.add(o.material);
  });

  function groundHeight(x, z) {
    for (const w of walkables) if (x > w.minX && x < w.maxX && z > w.minZ && z < w.maxZ) return w.y;
    for (const p of pads) if (x > p.rect.minX && x < p.rect.maxX && z > p.rect.minZ && z < p.rect.maxZ) return p.y;
    return 0;
  }

  function update(dt, time, night, wet) {
    for (const m of glowMats) m.emissiveIntensity = m.userData.nightGlow * 0.5 * (1 - night) + 2.4 * night;
    for (const a of animated) a(dt);
    const pulse = 0.55 + Math.sin(time * 3) * 0.2;
    for (const p of pois) if (p.ring.visible) p.ring.material.opacity = pulse;
    asphalt.roughness = wet ? 0.28 : 0.92;
    asphalt.color.setHex(wet ? 0x26282c : 0x3a3c41);
    sidewalkM.roughness = plazaM.roughness = wet ? 0.35 : 0.9;
  }

  function dispose() {
    group.traverse((o) => {
      if (o.isCSS2DObject && o.element.parentNode) o.element.parentNode.removeChild(o.element);
      if (o.geometry && o.geometry !== unitBox) o.geometry.dispose();
    });
  }

  return {
    group, colliders, circles, walkables, pois, photoSpots, groundHeight, update, dispose, labels,
    drivable, grid, cellAt, spawn: d.spawn, lamps,
  };
}

function rotPt(x, z, r) {
  const c = Math.cos(r), s = Math.sin(r);
  return [x * c + z * s, -x * s + z * c];
}
function rotRect(b, ox, oz, r) {
  const pts = [[b.minX, b.minZ], [b.maxX, b.minZ], [b.minX, b.maxZ], [b.maxX, b.maxZ]].map(([x, z]) => rotPt(x, z, r));
  const xs = pts.map((p) => p[0] + ox), zs = pts.map((p) => p[1] + oz);
  return { minX: Math.min(...xs), maxX: Math.max(...xs), minZ: Math.min(...zs), maxZ: Math.max(...zs) };
}

function storefront(name, sign, color) {
  const g = new THREE.Group();
  const awningCol = sign.awning ?? color;
  const aw = new THREE.Mesh(new THREE.BoxGeometry(6, 0.18, 1.6), std(awningCol, 0.8));
  aw.position.set(0, 3.1, 0.8); aw.rotation.x = 0.18; aw.castShadow = true; g.add(aw);
  const door = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 2.6), std(0x1a1512, 0.5));
  door.position.set(0, 1.3, 0.03); g.add(door);
  const win = new THREE.Mesh(new THREE.PlaneGeometry(5.6, 2), new THREE.MeshStandardMaterial({ color: 0x3a2f24, emissive: 0xffc27a, emissiveIntensity: 0.4, roughness: 0.2 }));
  win.material.userData.nightGlow = 0.35;
  win.position.set(0, 1.4, 0.02); g.add(win);
  door.position.z = 0.04;
  const tex = signTexture(name, { bg: sign.bg || '#1d2b3a', fg: sign.fg || '#f6e7c8', font: sign.font || 'Georgia, serif' });
  const sm = new THREE.MeshStandardMaterial({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.15, roughness: 0.6 });
  sm.userData.nightGlow = 0.25;
  const s = new THREE.Mesh(new THREE.PlaneGeometry(5.2, 1.3), sm);
  s.position.set(0, 4, 0.06); g.add(s);
  return g;
}
