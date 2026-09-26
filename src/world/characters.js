import * as THREE from 'three';

const geo = {
  torso: new THREE.CapsuleGeometry(0.22, 0.42, 4, 10),
  head: new THREE.SphereGeometry(0.17, 16, 12),
  leg: new THREE.CapsuleGeometry(0.085, 0.62, 3, 8),
  arm: new THREE.CapsuleGeometry(0.065, 0.5, 3, 8),
  bob: new THREE.SphereGeometry(0.19, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.62),
  bun: new THREE.SphereGeometry(0.09, 10, 8),
  long: new THREE.CylinderGeometry(0.17, 0.2, 0.42, 14, 1, true, Math.PI * 0.25, Math.PI * 1.5),
  cap: new THREE.CylinderGeometry(0.19, 0.19, 0.08, 16),
  brim: new THREE.BoxGeometry(0.3, 0.02, 0.16),
  coat: new THREE.CylinderGeometry(0.25, 0.3, 0.55, 12, 1, true),
  shoe: new THREE.BoxGeometry(0.12, 0.08, 0.24),
  cam: new THREE.BoxGeometry(0.16, 0.1, 0.07),
  lens: new THREE.CylinderGeometry(0.035, 0.035, 0.06, 10),
  guitar: new THREE.BoxGeometry(0.34, 0.95, 0.12),
  bag: new THREE.BoxGeometry(0.26, 0.3, 0.12),
  scarf: new THREE.TorusGeometry(0.13, 0.05, 6, 14),
};

const matCache = new Map();
function mat(color, rough = 0.85) {
  const k = color + ':' + rough;
  if (!matCache.has(k)) matCache.set(k, new THREE.MeshStandardMaterial({ color, roughness: rough }));
  return matCache.get(k);
}

/**
 * Builds a stylised person. look = { skin, hair, hairStyle, top, bottom, shoes, coat, accessory, scarf, height }
 * Returns a Group with userData.rig for animation.
 */
export function makeFigure(look = {}) {
  const {
    skin = 0xe0b08a, hair = 0x3a2a1e, hairStyle = 'short', top = 0x4a6a8a, bottom = 0x2c2f3a,
    shoes = 0x1b1b1b, coat = null, accessory = null, scarf = null, height = 1, cap = null, child = false,
  } = look;
  const g = new THREE.Group();
  const body = new THREE.Group();
  g.add(body);

  const hips = new THREE.Group(); hips.position.y = 0.92; body.add(hips);
  const legL = new THREE.Group(); legL.position.set(-0.1, 0, 0); hips.add(legL);
  const legR = new THREE.Group(); legR.position.set(0.1, 0, 0); hips.add(legR);
  for (const L of [legL, legR]) {
    const m = new THREE.Mesh(geo.leg, mat(bottom)); m.position.y = -0.42; L.add(m);
    const s = new THREE.Mesh(geo.shoe, mat(shoes, 0.6)); s.position.set(0, -0.86, 0.05); L.add(s);
  }
  const torso = new THREE.Mesh(geo.torso, mat(top)); torso.position.y = 1.3; body.add(torso);
  if (coat != null) {
    const c = new THREE.Mesh(geo.coat, mat(coat)); c.position.y = 1.02; body.add(c);
    torso.material = mat(coat);
  }
  const armL = new THREE.Group(); armL.position.set(-0.3, 1.52, 0); body.add(armL);
  const armR = new THREE.Group(); armR.position.set(0.3, 1.52, 0); body.add(armR);
  for (const A of [armL, armR]) {
    const m = new THREE.Mesh(geo.arm, mat(coat ?? top)); m.position.y = -0.3; A.add(m);
  }
  // Head and hair live in their own group (pivot at the neck) so it can be
  // scaled up for children.
  const headG = new THREE.Group(); headG.position.y = 1.72; body.add(headG);
  const head = new THREE.Mesh(geo.head, mat(skin, 0.7)); head.position.y = 0.14; headG.add(head);
  const hairM = mat(hair, 0.9);
  if (hairStyle !== 'bald') {
    const h = new THREE.Mesh(geo.bob, hairM); h.position.y = 0.16; h.rotation.x = -0.25; headG.add(h);
  }
  if (hairStyle === 'long' || hairStyle === 'bob') {
    const l = new THREE.Mesh(geo.long, hairM); l.position.set(0, hairStyle === 'long' ? 0 : 0.1, -0.02);
    l.scale.y = hairStyle === 'long' ? 1.1 : 0.55; headG.add(l);
  }
  if (hairStyle === 'bun') { const b = new THREE.Mesh(geo.bun, hairM); b.position.set(0, 0.31, -0.1); headG.add(b); }
  if (cap != null) {
    const c = new THREE.Mesh(geo.cap, mat(cap)); c.position.y = 0.29; headG.add(c);
    const br = new THREE.Mesh(geo.brim, mat(cap)); br.position.set(0, 0.26, 0.16); headG.add(br);
  }
  if (scarf != null) { const s = new THREE.Mesh(geo.scarf, mat(scarf)); s.rotation.x = Math.PI / 2; s.position.y = 1.7; body.add(s); }
  if (accessory === 'camera') {
    const c = new THREE.Mesh(geo.cam, mat(0x1a1a1a, 0.4)); c.position.set(0.05, 1.22, 0.24); body.add(c);
    const l = new THREE.Mesh(geo.lens, mat(0x333333, 0.3)); l.rotation.x = Math.PI / 2; l.position.set(0.05, 1.22, 0.3); body.add(l);
  } else if (accessory === 'guitar') {
    const c = new THREE.Mesh(geo.guitar, mat(0x2b2b30, 0.5)); c.position.set(0.05, 1.3, -0.3); c.rotation.z = 0.25; body.add(c);
  } else if (accessory === 'bag') {
    const c = new THREE.Mesh(geo.bag, mat(0x6b4a32, 0.7)); c.position.set(0.32, 1.05, 0); body.add(c);
  }
  if (child) { headG.scale.setScalar(1.45); headG.position.y = 1.66; }
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; } });
  g.scale.setScalar(height);
  g.userData.rig = { body, hips, legL, legR, armL, armR, head, headG, phase: Math.random() * 6 };
  return g;
}

/** speed: 0 idle, ~1 walk, ~1.7 run */
export function animateFigure(fig, speed, dt) {
  const r = fig.userData.rig;
  if (!r) return;
  r.phase += dt * (speed > 0.05 ? 6 + speed * 3 : 1.4);
  if (speed > 0.05) {
    const a = Math.sin(r.phase) * 0.55 * Math.min(1.3, speed);
    r.legL.rotation.x = a; r.legR.rotation.x = -a;
    r.armL.rotation.x = -a * 0.8; r.armR.rotation.x = a * 0.8;
    r.body.position.y = Math.abs(Math.cos(r.phase)) * 0.05 * speed;
  } else {
    r.legL.rotation.x *= 0.8; r.legR.rotation.x *= 0.8;
    r.armL.rotation.x = Math.sin(r.phase) * 0.04; r.armR.rotation.x = -Math.sin(r.phase) * 0.04;
    r.body.position.y = Math.sin(r.phase) * 0.008;
  }
}

const SKINS = [0xf1c9a5, 0xe0ac86, 0xc68a62, 0x9a6440, 0x6e4529, 0x4e301c];
const HAIRS = [0x1b1410, 0x3a2a1e, 0x6b4a2a, 0xa8743a, 0xd8b36a, 0x8a8a8a, 0x5a1f14];
const TOPS = [0x3b5b7a, 0x7a3b3b, 0x2f5a44, 0xc9a14a, 0x5a4a7a, 0x333333, 0xb5b0a4, 0x8a5a2a, 0x2a4a6a, 0xa33f3f];
export function randomLook(rand = Math.random) {
  const pick = (a) => a[Math.floor(rand() * a.length)];
  const styles = ['short', 'short', 'long', 'bob', 'bun', 'bald'];
  const hasCoat = rand() < 0.5;
  return {
    skin: pick(SKINS), hair: pick(HAIRS), hairStyle: pick(styles), top: pick(TOPS), bottom: pick([0x22252e, 0x3a3f4a, 0x4a3a2a, 0x2a3a5a]),
    coat: hasCoat ? pick([0x2e2e30, 0x5a4636, 0x7a6a50, 0x283848, 0x6a2a2a]) : null,
    accessory: rand() < 0.25 ? 'bag' : null, scarf: rand() < 0.2 ? pick(TOPS) : null,
    height: 0.92 + rand() * 0.14,
  };
}
