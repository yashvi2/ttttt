// Lily in the city: hallucinations that vanish, and the real Lily, who doesn't.
import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { makeFigure, animateFigure } from '../world/characters.js';
import { LILY, SIGHTINGS, isShiftNight } from './data.js';

const inHours = (t, [a, b]) => t >= a && t <= b;

function insideSolid(district, x, z) {
  for (const c of district.colliders) if (x > c.minX - 1 && x < c.maxX + 1 && z > c.minZ - 1 && z < c.maxZ + 1) return true;
  return Math.abs(x) > 125 || Math.abs(z) > 125;
}

export class Visions {
  constructor(game) {
    this.g = game;
    this.ghost = makeFigure(LILY.look);
    this.ghost.visible = false;
    this.real = makeFigure(LILY.look);
    this.real.visible = false;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 0.25).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xf4efe4, emissive: 0xffe6a0, emissiveIntensity: 0.6 }));
    this.item = new THREE.Group();
    this.item.add(m);
    const el = document.createElement('div');
    el.className = 'poi-label type-gem';
    el.innerHTML = '<span class="ic">❔</span><span class="nm">Something on the ground</span>';
    this.itemLabel = new CSS2DObject(el);
    this.itemLabel.position.y = 1.2;
    this.item.add(this.itemLabel);
    this.item.visible = false;
    game.scene.add(this.ghost, this.real, this.item);
    this.h = null; // hallucination runtime
    this.r = null; // real sighting runtime
    this.cool = 25;
    this.hunches = [];
  }

  get s() { return this.g.state; }
  get m() { return this.g.state.mind; }

  reset() {
    this.hideGhost(false);
    this.real.visible = false;
    this.r = null;
    this.item.visible = false;
    this.itemLabel.element.style.display = 'none';
    this.itemData = null;
    this.cool = 12;
    this.pickHunches();
  }

  // Obsession gives Maya "hunches": marks on the minimap. Some are real.
  pickHunches() {
    this.hunches = [];
    const d = this.g.district;
    if (!d) return;
    for (const sg of SIGHTINGS) if (sg.district === d.def.id) this.hunches.push({ x: sg.at[0], z: sg.at[1], real: true, id: sg.id });
    const pois = d.pois.filter((p) => p.type !== 'home');
    for (let i = 0; i < 2 && pois.length; i++) {
      const p = pois[Math.floor(Math.random() * pois.length)];
      this.hunches.push({ x: p.pos.x + 3, z: p.pos.z + 3, real: false });
    }
  }
  showHunches() { return this.m.obsession > 55 && !this.g.mind.onMeds(); }

  activeSighting() {
    const s = this.s, d = this.g.district.def.id;
    if (this.m.pressure >= 75 || s.flags.found) return null;
    return SIGHTINGS.find((sg) => sg.district === d
      && s.day >= sg.days[0] && s.day <= sg.days[1]
      && inHours(s.time, sg.hours)
      && (!sg.shift || isShiftNight(s.day))
      && s.sightDone?.[sg.id] !== s.day
      && !((this.m.burned[sg.id] || 0) > s.day)) || null;
  }

  update(dt) {
    const g = this.g;
    if (g.inside || g.mode !== 'play') return;
    const blocked = g.ui.busy > 0 || g.pending > 0;
    this.updateReal(dt, blocked);
    this.updateGhost(dt, blocked);
    if (this.item.visible) this.item.rotation.y += dt;
  }

  // ---------------------------------------------------------------- real
  updateReal(dt, blocked) {
    const g = this.g, p = g.player.pos;
    if (!this.r) {
      const sg = this.activeSighting();
      if (!sg) { this.real.visible = false; return; }
      this.r = { sg, state: 'idle', t: 0 };
      this.real.position.set(sg.at[0], g.district.groundHeight(sg.at[0], sg.at[1]), sg.at[1]);
      this.real.rotation.y = sg.face;
      this.real.visible = true;
    }
    const r = this.r, f = this.real, sg = r.sg;
    r.t += dt;
    const dist = Math.hypot(f.position.x - p.x, f.position.z - p.z);
    let speed = 0;
    if (r.state === 'idle') {
      if (sg.pose === 'busk') { const rig = f.userData.rig; rig.armL.rotation.x = rig.armR.rotation.x = -0.9 + Math.sin(r.t * 7) * 0.08; }
      if (sg.pose === 'walk') speed = this.moveTo(f, sg.exit, 1.1, dt);
      if (dist < 16 && !blocked) { r.state = 'noticed'; r.t = 0; }
      if (sg.pose === 'walk' && speed === 0) this.leave(false);
    } else if (r.state === 'noticed') {
      f.rotation.y = Math.atan2(p.x - f.position.x, p.z - f.position.z);
      const hesitate = this.m.breakdown < 70 ? 3.5 : 0.5;
      if (dist < 3.2 && !this.m.faceToFace && this.m.breakdown < 70 && !blocked) {
        this.m.faceToFace = true;
        r.state = 'leaving';
        this.drop();
        g.run(() => g.faceToFace(sg));
      } else if (r.t > hesitate) { r.state = 'leaving'; this.drop(); }
    } else if (r.state === 'leaving') {
      speed = this.moveTo(f, sg.exit, this.m.breakdown < 70 ? 2.4 : 5, dt);
      if (speed === 0 || dist > 50) this.leave(true);
    }
    animateFigure(f, speed / 2.6, dt);
  }

  moveTo(f, [x, z], v, dt) {
    const dx = x - f.position.x, dz = z - f.position.z, d = Math.hypot(dx, dz);
    if (d < 0.4) return 0;
    const step = Math.min(d, v * dt);
    f.position.x += (dx / d) * step; f.position.z += (dz / d) * step;
    f.position.y = this.g.district.groundHeight(f.position.x, f.position.z);
    f.rotation.y = Math.atan2(dx, dz);
    return v;
  }

  drop() {
    const sg = this.r.sg;
    if (this.s.clues[sg.clue] || this.item.visible) return;
    this.item.position.copy(this.real.position).setY(this.real.position.y + 0.05);
    this.item.visible = true;
    this.itemLabel.element.style.display = '';
    this.itemData = sg;
  }

  leave(noticed) {
    this.real.visible = false;
    if (!this.s.sightDone) this.s.sightDone = {};
    this.s.sightDone[this.r.sg.id] = this.s.day;
    if (noticed) this.g.ui.toast('Gone. Like she was never there. But she was.', '🌫️', 3200);
    this.r = null;
  }

  pickUp() {
    const sg = this.itemData;
    this.item.visible = false;
    this.itemLabel.element.style.display = 'none';
    this.itemData = null;
    return sg;
  }
  itemTarget() {
    if (!this.item.visible) return null;
    const p = this.g.player.pos;
    const d = Math.hypot(this.item.position.x - p.x, this.item.position.z - p.z);
    return d < 2.6 ? d : null;
  }

  /** Is the real Lily in frame? Used by the camera. */
  realInView(cam) {
    if (!this.real.visible) return false;
    const v = this.real.position.clone().add(new THREE.Vector3(0, 1.2, 0));
    if (v.distanceTo(cam.position) > 48) return false;
    v.project(cam);
    return Math.abs(v.x) < 0.95 && Math.abs(v.y) < 0.95 && v.z < 1;
  }
  ghostInView(cam) {
    if (!this.ghost.visible) return false;
    const v = this.ghost.position.clone().add(new THREE.Vector3(0, 1.2, 0)).project(cam);
    return Math.abs(v.x) < 0.95 && Math.abs(v.y) < 0.95 && v.z < 1;
  }

  // ---------------------------------------------------------------- hallucinations
  chance() {
    const m = this.m;
    if (m.breakdown < 28) return 0;
    let c = 0.012 * Math.pow((m.breakdown - 25) / 75, 1.3) * (0.6 + m.obsession / 100);
    if (this.g.mind.onMeds()) c *= m.medsPlus ? 0.2 : 0.3;
    return c;
  }

  updateGhost(dt, blocked) {
    const g = this.g, p = g.player.pos;
    if (!this.h) {
      this.cool -= dt;
      if (blocked || this.cool > 0 || g.player.photoMode) return;
      let c = this.chance();
      // Standing on a false hunch makes her appear.
      if (this.showHunches() && this.hunches.some((hn) => !hn.real && Math.hypot(hn.x - p.x, hn.z - p.z) < 8)) c = Math.max(c, 0.2);
      if (Math.random() < c * dt * 60 / 60) this.spawnGhost();
      return;
    }
    const h = this.h, f = this.ghost;
    h.t += dt;
    const dist = Math.hypot(f.position.x - p.x, f.position.z - p.z);
    const cam = g.camera;
    const fwd = new THREE.Vector3(); cam.getWorldDirection(fwd);
    const to = f.position.clone().sub(cam.position).normalize();
    const looking = fwd.dot(to) > 0.45;
    h.away = looking ? 0 : h.away + dt;
    if (g.player.speed > 5 && dist < h.lastDist) h.chased += h.lastDist - dist;
    h.lastDist = dist;
    const v = this.moveTo(f, h.target, 1.0, dt);
    animateFigure(f, v / 2.6, dt);
    if (dist < 10 || h.away > 0.7 || h.t > 15) this.hideGhost(true);
  }

  spawnGhost() {
    const g = this.g, p = g.player.pos;
    const fwd = new THREE.Vector3(); g.camera.getWorldDirection(fwd); fwd.y = 0; fwd.normalize();
    const side = new THREE.Vector3(-fwd.z, 0, fwd.x);
    for (let i = 0; i < 10; i++) {
      const d = 24 + Math.random() * 16, o = (Math.random() - 0.5) * 12;
      const x = p.x + fwd.x * d + side.x * o, z = p.z + fwd.z * d + side.z * o;
      if (insideSolid(g.district, x, z)) continue;
      const tx = x + fwd.x * 20, tz = z + fwd.z * 20;
      this.ghost.position.set(x, g.district.groundHeight(x, z), z);
      this.ghost.rotation.y = Math.atan2(fwd.x, fwd.z);
      this.ghost.visible = true;
      this.h = { t: 0, away: 0, chased: 0, lastDist: d, target: insideSolid(g.district, tx, tz) ? [x, z] : [tx, tz] };
      g.audio.whisper();
      return;
    }
    this.cool = 5;
  }

  hideGhost(react) {
    if (!this.h) { this.ghost.visible = false; return; }
    const chased = this.h.chased;
    this.ghost.visible = false;
    this.h = null;
    this.cool = 30 + Math.random() * 40;
    if (!react) return;
    const mind = this.g.mind;
    mind.spike(0.7);
    this.g.audio.sting();
    if (chased > 6) {
      mind.add('breakdown', 3);
      mind.add('obsession', 2, { quiet: true });
      this.g.ui.toast('She was never there.', '🌫️', 3000);
    } else mind.add('breakdown', 1, { quiet: true });
  }

  /** Grounding: hallucinations dissolve, real people stay. */
  ground() {
    const had = !!this.h;
    if (had) { this.ghost.visible = false; this.h = null; this.cool = 40; }
    return had;
  }
}
