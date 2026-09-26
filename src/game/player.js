import * as THREE from 'three';
import { makeFigure, animateFigure } from '../world/characters.js';

const RADIUS = 0.42;

export class Player {
  constructor(scene, camera, look) {
    this.scene = scene;
    this.camera = camera;
    this.pos = new THREE.Vector3();
    this.facing = 0;
    this.camYaw = Math.PI;
    this.camPitch = 0.32;
    this.camDist = 8.5;
    this.speed = 0;
    this.y = 0;
    this.keys = new Set();
    this.stick = { x: 0, y: 0 };
    this.photoMode = false;
    this.photoYaw = 0;
    this.photoPitch = 0.05;
    this.fov = 55;
    this.sprintMul = 1;
    this.setLook(look);
    this._camPos = new THREE.Vector3();
    this._bindInput();
  }

  setLook(look) {
    if (this.fig) this.scene.remove(this.fig);
    this.fig = makeFigure(look);
    this.scene.add(this.fig);
  }

  _bindInput() {
    const el = document.getElementById('scene');
    window.addEventListener('keydown', (e) => { this.keys.add(e.key.toLowerCase()); });
    window.addEventListener('keyup', (e) => { this.keys.delete(e.key.toLowerCase()); });
    window.addEventListener('blur', () => this.keys.clear());
    let drag = null;
    el.addEventListener('pointerdown', (e) => { if (e.pointerType === 'mouse' && e.button !== 0 && e.button !== 2) return; drag = { x: e.clientX, y: e.clientY, id: e.pointerId }; el.setPointerCapture(e.pointerId); });
    el.addEventListener('pointermove', (e) => {
      if (!drag || drag.id !== e.pointerId) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      drag.x = e.clientX; drag.y = e.clientY;
      if (this.photoMode) {
        const k = this.fov / 55;
        this.photoYaw -= dx * 0.004 * k;
        this.photoPitch = THREE.MathUtils.clamp(this.photoPitch - dy * 0.004 * k, -0.6, 1.3);
      } else {
        this.camYaw -= dx * 0.006;
        this.camPitch = THREE.MathUtils.clamp(this.camPitch + dy * 0.004, 0.05, 1.2);
      }
    });
    const end = (e) => { if (drag && drag.id === e.pointerId) drag = null; };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    el.addEventListener('wheel', (e) => {
      if (this.photoMode) this.fov = THREE.MathUtils.clamp(this.fov + e.deltaY * 0.03, 18, 70);
      else this.camDist = THREE.MathUtils.clamp(this.camDist + e.deltaY * 0.01, 4, 16);
    }, { passive: true });
  }

  place(x, z, facing = null) {
    this.pos.set(x, 0, z);
    if (facing != null) { this.facing = facing; this.camYaw = facing + Math.PI; }
    this.fig.position.copy(this.pos);
  }

  /** world: { colliders, circles, walkables, groundHeight } */
  update(dt, world, blocked) {
    let ix = 0, iz = 0;
    const k = this.keys;
    if (!blocked && !this.photoMode) {
      if (k.has('w') || k.has('arrowup')) iz += 1;
      if (k.has('s') || k.has('arrowdown')) iz -= 1;
      if (k.has('a') || k.has('arrowleft')) ix -= 1;
      if (k.has('d') || k.has('arrowright')) ix += 1;
      ix += this.stick.x; iz += this.stick.y;
    }
    if (!blocked && this.photoMode) {
      const r = dt * 1.2 * (this.fov / 55);
      if (k.has('a') || k.has('arrowleft')) this.photoYaw += r;
      if (k.has('d') || k.has('arrowright')) this.photoYaw -= r;
      if (k.has('w') || k.has('arrowup')) this.photoPitch = Math.min(1.3, this.photoPitch + r);
      if (k.has('s') || k.has('arrowdown')) this.photoPitch = Math.max(-0.6, this.photoPitch - r);
      if (k.has('q')) this.fov = Math.max(18, this.fov - dt * 30);
      if (k.has('z')) this.fov = Math.min(70, this.fov + dt * 30);
    }
    const len = Math.hypot(ix, iz);
    const running = k.has('shift') || len > 1.2;
    let target = 0;
    if (len > 0.1) {
      ix /= Math.max(1, len); iz /= Math.max(1, len);
      // Camera-relative movement.
      const fx = -Math.sin(this.camYaw), fz = -Math.cos(this.camYaw);
      const rx = -fz, rz = fx;
      const mx = fx * iz + rx * ix, mz = fz * iz + rz * ix;
      const want = Math.atan2(mx, mz);
      let d = want - this.facing;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      this.facing += d * Math.min(1, dt * 12);
      target = (running ? 7.2 * this.sprintMul : 4.2) * Math.min(1, Math.hypot(ix, iz));
      const step = target * dt;
      this._move(mx / Math.hypot(mx, mz) * step, mz / Math.hypot(mx, mz) * step, world);
    }
    this.speed += (target - this.speed) * Math.min(1, dt * 10);
    const gy = world.groundHeight(this.pos.x, this.pos.z);
    this.y += (gy - this.y) * Math.min(1, dt * 14);
    this.fig.position.set(this.pos.x, this.y, this.pos.z);
    this.fig.rotation.y = this.facing;
    this.fig.visible = !this.photoMode;
    animateFigure(this.fig, this.speed / 4.2, dt);
    this._updateCamera(dt);
    return this.speed;
  }

  _move(dx, dz, world) {
    const steps = Math.ceil(Math.hypot(dx, dz) / 0.3);
    for (let s = 0; s < steps; s++) {
      this.pos.x += dx / steps;
      this.pos.z += dz / steps;
      this._resolve(world);
    }
  }

  _resolve(world) {
    const p = this.pos;
    const onWalk = world.walkables.some((w) => p.x > w.minX && p.x < w.maxX && p.z > w.minZ && p.z < w.maxZ);
    for (const c of world.colliders) {
      if (c.water && onWalk) continue;
      const minX = c.minX - RADIUS, maxX = c.maxX + RADIUS, minZ = c.minZ - RADIUS, maxZ = c.maxZ + RADIUS;
      if (p.x > minX && p.x < maxX && p.z > minZ && p.z < maxZ) {
        const l = p.x - minX, r = maxX - p.x, t = p.z - minZ, b = maxZ - p.z;
        const m = Math.min(l, r, t, b);
        if (m === l) p.x = minX; else if (m === r) p.x = maxX; else if (m === t) p.z = minZ; else p.z = maxZ;
      }
    }
    for (const c of world.circles) {
      const dx = p.x - c.x, dz = p.z - c.z;
      const d = Math.hypot(dx, dz), rr = c.r + RADIUS;
      if (d < rr && d > 1e-4) { p.x = c.x + (dx / d) * rr; p.z = c.z + (dz / d) * rr; }
    }
  }

  _updateCamera(dt) {
    const cam = this.camera;
    if (this.photoMode) {
      cam.fov += (this.fov - cam.fov) * Math.min(1, dt * 10);
      cam.updateProjectionMatrix();
      cam.position.set(this.pos.x, this.y + 1.65, this.pos.z);
      const dir = new THREE.Vector3(Math.sin(this.photoYaw) * Math.cos(this.photoPitch), Math.sin(this.photoPitch), Math.cos(this.photoYaw) * Math.cos(this.photoPitch));
      cam.lookAt(cam.position.clone().add(dir));
      return;
    }
    if (Math.abs(cam.fov - 55) > 0.1) { cam.fov += (55 - cam.fov) * Math.min(1, dt * 8); cam.updateProjectionMatrix(); }
    const cp = Math.cos(this.camPitch), sp = Math.sin(this.camPitch);
    const want = new THREE.Vector3(
      this.pos.x + Math.sin(this.camYaw) * this.camDist * cp,
      this.y + 1.4 + sp * this.camDist,
      this.pos.z + Math.cos(this.camYaw) * this.camDist * cp,
    );
    if (this._camPos.lengthSq() === 0) this._camPos.copy(want);
    this._camPos.lerp(want, Math.min(1, dt * 8));
    cam.position.copy(this._camPos);
    cam.lookAt(this.pos.x, this.y + 1.5, this.pos.z);
  }

  snapCamera() { this._camPos.set(0, 0, 0); }

  enterPhoto() {
    this.photoMode = true;
    this.photoYaw = this.facing;
    this.photoPitch = 0.08;
    this.fov = 50;
  }
  exitPhoto() {
    this.photoMode = false;
    this.facing = this.photoYaw;
    this.camYaw = this.photoYaw + Math.PI;
    this.snapCamera();
  }
  photoDir() {
    return new THREE.Vector3(Math.sin(this.photoYaw) * Math.cos(this.photoPitch), Math.sin(this.photoPitch), Math.cos(this.photoYaw) * Math.cos(this.photoPitch));
  }
}
