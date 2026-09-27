import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

import { Sky, hourLabel } from '../world/sky.js';
import { shared } from '../world/materials.js';
import { buildDistrict, resolvePos, POI_STYLE, PITCH } from '../world/city.js';
import { Traffic } from '../world/traffic.js';
import { makeFigure, animateFigure } from '../world/characters.js';
import { Audio } from '../audio.js';
import { UI, esc, fmtTime } from '../ui/ui.js';
import { openPhone, openBoard, openMap } from '../ui/phone.js';
import { Player } from './player.js';
import { Story, PHASES } from './story.js';
import { newState, saveGame, loadGame, clearSave, loadMeta, saveMeta } from './state.js';
import { SISTERS, BACKSTORY } from '../data/common.js';
import { renderAlbumPhotos } from '../world/album-scenes.js';
import { playAlbum, introSpreads, LOGO_HTML } from '../ui/album.js';
import lastSummer from '../assets/album/last-summer.jpg';
import NYC from '../data/nyc.js';
import LONDON from '../data/london.js';

export const ROUTES = { nyc: NYC, london: LONDON };
const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const SETTINGS_KEY = 'sistersApart.settings.v1';

const inWindow = (t, [a, b]) => (t >= a && t <= b) || (t + 24 >= a && t + 24 <= b);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const pick = (arr, seed) => arr[Math.abs(Math.floor(seed)) % arr.length];

export class Game {
  constructor() {
    this.settings = { sound: true, music: 0.5, quality: 'high', labels: true };
    try { Object.assign(this.settings, JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}); } catch { /* storage unavailable */ }
    const canvas = document.getElementById('scene');
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(55, 1, 0.1, 2000);
    this.labels = new CSS2DRenderer();
    this.labels.domElement.style.position = 'absolute';
    this.labels.domElement.style.inset = '0';
    this.labels.domElement.style.pointerEvents = 'none';
    document.getElementById('labels').appendChild(this.labels.domElement);

    this.composer = new EffectComposer(this.renderer);
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(this.renderPass);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), 0.55, 0.5, 0.82);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());

    this.audio = new Audio();
    this.audio.enabled = this.settings.sound;
    this.audio.musicVol = this.settings.music;
    this.ui = new UI(document.getElementById('ui'), this.audio);
    this.story = new Story(this);
    this.sky = new Sky(this.scene, this.renderer, this.settings.quality);
    this.player = null;
    this.npcFigs = new Map();
    this.queue = Promise.resolve();
    this.pending = 0;
    this._last = performance.now();
    this.hudTimer = 0;
    this.msgTimer = 0;
    this.saveTimer = 0;
    this.mode = 'boot';
    this.timeScale = 1; // game minutes per real second

    this.applyQuality();
    window.addEventListener('resize', () => this.resize());
    this.resize();
    this.ui.pushKeys((e) => this.onKey(e));
    this._bindPhotoClick();
    this._touch();
    const unlock = () => this.audio.start();
    window.addEventListener('pointerdown', unlock, { once: false });
    window.addEventListener('keydown', unlock, { once: false });
    // Save when the tab is hidden or closed so a reload never loses progress.
    const flush = () => { if (this.mode === 'play' && this.ui.busy === 0 && this.pending === 0) this.saveNow(); };
    window.addEventListener('pagehide', flush);
    document.addEventListener('visibilitychange', () => { if (document.hidden) flush(); });
    this.loop();
  }

  // ---------------------------------------------------------------- setup
  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.composer.setSize(w, h);
    this.labels.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }
  applyQuality() {
    const hi = this.settings.quality === 'high';
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, hi ? 1.75 : 1));
    this.renderer.shadowMap.enabled = hi;
    this.sky.sunLight.castShadow = hi;
    this.bloom.enabled = hi;
    this.scene.traverse((o) => { if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { m.needsUpdate = true; }); });
    this.resize();
  }
  setSetting(k, v) {
    this.settings[k] = v;
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings)); } catch { /* ignore */ }
    if (k === 'sound') this.audio.setEnabled(v);
    if (k === 'music') this.audio.setMusicVolume(v);
    if (k === 'quality') this.applyQuality();
  }

  run(fn) {
    this.pending++;
    this.queue = this.queue.then(fn).catch((e) => console.error(e)).finally(() => { this.pending--; });
    return this.queue;
  }

  // ---------------------------------------------------------------- title
  async title() {
    this.mode = 'title';
    this.ui.showHud(false);
    this.route = NYC;
    this.state = newState(NYC);
    this.state.time = 18.2;
    this.state.weather = 'clear';
    this.enterDistrict('brooklyn', [-60, 40], { quiet: true });
    this.titleOrbit = 0;
    const meta = loadMeta();
    const save = loadGame();
    const el = document.createElement('div');
    el.className = 'title';
    const sE = SISTERS.emma, sS = SISTERS.sophie;
    el.innerHTML = `<div class="inner">
      <h1>${LOGO_HTML}</h1>
      <div class="tag">Two sisters. Two cities. Six weeks of slices, strangers and clues — and one bridge at sunset.</div>
      ${save && !save.ended ? `<button class="route" data-a="continue"><span class="av" style="background:#e8e2d4">↻</span><span><b>Continue</b><span>${esc(ROUTES[save.route].city)} · Day ${save.day} · ${esc(PHASES[save.phase])}</span></span><span></span></button>` : ''}
      <button class="route" data-a="nyc"><span class="av" style="background:${sE.color}">E</span><span><b>Emma — New York</b><span>${esc(sE.blurb)}</span></span><span class="tagp">Story</span></button>
      <button class="route" data-a="london"><span class="av" style="background:${sS.color}">S</span><span><b>Sophie — London</b><span>${esc(sS.blurb)}</span></span><span class="tagp">${meta.completed.nyc ? 'New Game+' : 'Play after Emma'}</span></button>
      <div class="opts">
        <label><input type="checkbox" data-o="speedrun"> Speed Run (timer)</label>
        <label><input type="checkbox" data-o="photoPerfect"> Photo Perfect (24 exposures, Emma only)</label>
      </div>
      <div class="row"><button class="btn" data-a="quality">Graphics: ${this.settings.quality === 'high' ? 'High' : 'Low'}</button><button class="btn" data-a="sound">Sound: ${this.settings.sound ? 'On' : 'Off'}</button></div>
      <div class="foot">${meta.best.nyc ? `Best speed run (New York): ${fmtMs(meta.best.nyc)}. ` : ''}${meta.best.london ? `Best (London): ${fmtMs(meta.best.london)}. ` : ''}${meta.trueEnding.nyc || meta.trueEnding.london ? 'True ending found ✦. ' : ''}WASD to walk · drag to look · E to interact · Tab for your phone.</div>
    </div>`;
    const close = this.ui._overlay(el);
    return new Promise((resolve) => {
      el.querySelectorAll('[data-a]').forEach((b) => {
        b.onclick = async () => {
          this.audio.start();
          this.audio.click();
          const a = b.dataset.a;
          if (a === 'quality') { this.setSetting('quality', this.settings.quality === 'high' ? 'low' : 'high'); b.textContent = `Graphics: ${this.settings.quality === 'high' ? 'High' : 'Low'}`; return; }
          if (a === 'sound') { this.setSetting('sound', !this.settings.sound); b.textContent = `Sound: ${this.settings.sound ? 'On' : 'Off'}`; return; }
          const opts = {};
          el.querySelectorAll('[data-o]').forEach((c) => { opts[c.dataset.o] = c.checked; });
          close();
          if (a === 'continue') resolve({ action: 'continue' });
          else resolve({ action: 'new', route: a, opts });
        };
      });
    });
  }

  async boot() {
    for (;;) {
      const choice = await this.title();
      if (choice.action === 'continue') await this.continueGame();
      else await this.newGame(choice.route, choice.opts);
      await new Promise((r) => { this._toTitle = r; });
    }
  }

  quitToTitle() {
    if (this.state && !this.state.ended && this.mode === 'play') this.saveNow();
    this.mode = 'title';
    this.ui.showHud(false);
    if (this.player) this.player.photoMode = false;
    this.ui.viewfinder(false);
    if (this._toTitle) { const r = this._toTitle; this._toTitle = null; r(); }
  }

  // ---------------------------------------------------------------- game start
  async newGame(routeId, opts) {
    this.mode = 'intro';
    this.route = ROUTES[routeId];
    this.state = newState(this.route, { ...opts, photoPerfect: opts.photoPerfect && routeId === 'nyc' });
    this.state.journal = [];
    this.rollWeather();
    this._setupPlayer(SISTERS[this.route.protagonist].look);
    const sis = SISTERS[this.route.protagonist], other = SISTERS[this.route.sister];
    const intro = routeId === 'nyc'
      ? [...BACKSTORY, `${this.route.season}. New York. ${sis.name} has been here two weeks, and the city still hasn't noticed.`, `${other.name} is in London. Probably. Definitely. …Right?`]
      : [`Six months later.`, `${this.route.season}. London. ${sis.name} has the internship, a flat in King's Cross, and a guitar with a new G string.`, `${other.name} is back in New York. Probably. Definitely. …Right?`];
    this.enterDistrict(this.route.startDistrict, null, { quiet: true });
    const spreads = introSpreads(routeId, intro, this.albumPhotos(), lastSummer, loadMeta().reunionPhoto);
    await playAlbum(this.ui, spreads, { audio: this.audio, logoHtml: LOGO_HTML });
    this.startPlay();
    this.run(async () => {
      await this.ui.cards([`Phase 1 — ${PHASES[1]}`, 'Walk with WASD, drag to look around, press E to talk to people and enter places. Your phone (Tab) has messages, tasks and the transit map.'], { title: sis.full });
    });
  }

  async continueGame() {
    this.mode = 'intro';
    const s = loadGame();
    this.route = ROUTES[s.route];
    this.state = { ...newState(this.route), ...s };
    this.state.journal = this.state.journal || [];
    const look = this.state.epilogue ? SISTERS[this.route.epilogue.as].look : SISTERS[this.route.protagonist].look;
    this._setupPlayer(look);
    this.enterDistrict(this.state.district, this.state.pos, { quiet: true });
    this.startPlay();
    this.ui.toast(`Welcome back — Day ${this.state.day}, ${fmtTime(this.state.time)}`, '📔');
  }

  /** Childhood snapshots for the album, rendered once per session. */
  albumPhotos() {
    if (!this._albumPhotos) this._albumPhotos = renderAlbumPhotos(this.renderer, () => this.renderFrame());
    return this._albumPhotos;
  }

  _setupPlayer(look) {
    if (!this.player) this.player = new Player(this.scene, this.camera, look);
    else this.player.setLook(look);
    this.player.sprintMul = 1;
  }

  startPlay() {
    this.mode = 'play';
    this.ui.showHud(true);
    this.player.fig.visible = true;
    this.story.checkMessages();
    this.updateHud(true);
    if (this.state.perks.bike) this.player.sprintMul = 1.3;
  }

  // ---------------------------------------------------------------- districts
  districtDef(id) { return this.route.districts.find((d) => d.id === id); }
  districtName(id) { const d = this.districtDef(id); return d ? d.name : id; }

  enterDistrict(id, spawn, { quiet = false } = {}) {
    if (this.district) {
      this.scene.remove(this.district.group);
      this.district.dispose();
    }
    if (this.traffic) this.traffic.dispose(this.scene);
    for (const f of this.npcFigs.values()) this._hideNpc(f);
    if (this.beacon) { this.scene.remove(this.beacon); this.beacon = null; }
    if (this.sisterFig) { this.scene.remove(this.sisterFig); this.sisterFig = null; }

    const def = this.districtDef(id);
    this.district = buildDistrict(def, this.route);
    this.district.def = def;
    this.scene.add(this.district.group);
    this.traffic = new Traffic(this.scene, this.route, this.district, this.audio);
    this.state.district = id;
    const sp = spawn || def.spawn;
    if (this.player) {
      const face = def.spawnFace != null ? def.spawnFace : Math.atan2(-sp[0], -sp[1]);
      this.player.place(sp[0], sp[1], face);
      this.player.snapCamera();
    }
    const parks = def.grid.join('').split('').filter((c) => c === 'P' || c === 'G').length;
    this.sky.setWeather(this.state.weather, this.route.weather.leaves && parks > 0);
    this._buildNpcs();
    this._updateBeacon();
    if (this.mode === 'play' && !quiet) this.onEnterDistrict(id);
    else if (!this.state.visited[id] && this.mode !== 'title') this.state.visited[id] = this.state.day;
  }

  onEnterDistrict(id) {
    if (!this.state.visited[id]) {
      this.state.visited[id] = this.state.day;
      const def = this.districtDef(id);
      this.addMemory({ id: 'district_' + id, title: `First time in ${def.name}`, text: def.sub, icon: '🗺️' });
      this.ui.toast(`New neighbourhood: ${def.name}`, '🗺️', 4000);
      this.state.needs.mood = clamp(this.state.needs.mood + 4, 0, 100);
    }
  }

  allPois() {
    if (!this._allPois || this._allPoisRoute !== this.route.id) {
      this._allPoisRoute = this.route.id;
      this._allPois = this.route.districts.flatMap((d) => d.pois.map((p) => { const q = resolvePos(p); return { ...p, district: d.id, pos: { x: q.x, z: q.z } }; }));
    }
    return this._allPois;
  }
  findPoi(id) { return this.allPois().find((p) => p.id === id); }

  _buildNpcs() {
    for (const n of this.route.npcs) {
      if (!this.npcFigs.has(n.id) || this.npcFigs.get(n.id).route !== this.route.id) {
        const old = this.npcFigs.get(n.id);
        if (old) { this._hideNpc(old); old.el.remove(); }
        const fig = makeFigure(n.look);
        const el = document.createElement('div');
        el.className = 'npc-label';
        const lab = new CSS2DObject(el);
        lab.position.y = 2.35;
        fig.add(lab);
        this.npcFigs.set(n.id, { fig, el, lab, route: this.route.id, slot: null });
      }
    }
    this._placeNpcs(true);
  }

  npcSlot(n) {
    const t = this.state.time % 24;
    const t2 = t < 5 ? t + 24 : t;
    return n.schedule.find((w) => t2 >= w.from && t2 < w.to) || null;
  }

  _placeNpcs(force = false) {
    for (const n of this.route.npcs) {
      const f = this.npcFigs.get(n.id);
      if (!f) continue;
      const slot = this.npcSlot(n);
      const here = slot && slot.district === this.state.district && !(this.state.phase >= 5 && this.state.phase < 6);
      if (!force && f.slot === (here ? slot : null)) continue;
      f.slot = here ? slot : null;
      if (!here) { this._hideNpc(f); continue; }
      const p = resolvePos(slot);
      let x = p.x, z = p.z;
      if (slot.cell) { x += Math.abs(p.dir[1]) * 2.2; z += Math.abs(p.dir[0]) * 2.2; }
      f.fig.position.set(x, this.district.groundHeight(x, z), z);
      f.fig.rotation.y = Math.atan2(p.dir[0], p.dir[1]);
      f.home = f.fig.rotation.y;
      f.lab.visible = true;
      this.scene.add(f.fig);
    }
  }

  // three.js does not hide CSS2D labels of children when their parent leaves
  // the scene, so hide the element by hand.
  _hideNpc(f) {
    this.scene.remove(f.fig);
    f.lab.visible = false;
    f.el.style.display = 'none';
    f.slot = null;
  }

  presentNpcs() {
    return this.route.npcs.filter((n) => { const f = this.npcFigs.get(n.id); return f && f.slot; });
  }

  // ---------------------------------------------------------------- loop
  loop() {
    requestAnimationFrame(() => this.loop());
    const now = performance.now();
    const dt = Math.min(0.05, (now - this._last) / 1000);
    this._last = now;
    shared.uTime.value += dt;
    if (this.mode === 'title') this.updateTitle(dt);
    else if (this.mode === 'play') this.update(dt);
    if (this.district) {
      const s = this.state;
      this.district.update(dt, shared.uTime.value, this.sky.night || 0, s.weather === 'rain');
      if (this.traffic) this.traffic.update(dt, this.player || { pos: new THREE.Vector3(999, 0, 999) });
      const focus = this.player && this.mode === 'play' ? this.player.pos : this.camera.position;
      this.sky.update(s.time % 24, focus, dt);
    }
    this.renderFrame();
  }

  renderFrame() {
    if (this.bloom.enabled) this.composer.render(); else this.renderer.render(this.scene, this.camera);
    this.labels.render(this.scene, this.camera);
  }

  updateTitle(dt) {
    this.titleOrbit += dt * 0.03;
    const a = this.titleOrbit;
    this.camera.position.set(-60 + Math.sin(a) * 40, 14 + Math.sin(a * 0.7) * 3, 50 + Math.cos(a) * 40);
    this.camera.lookAt(-140, 22, 50);
    for (const f of this.npcFigs.values()) animateFigure(f.fig, 0, dt);
    if (this.player) this.player.fig.visible = false;
  }

  update(dt) {
    const s = this.state, ui = this.ui;
    const blocked = ui.busy > 0 || this.pending > 0;
    s.playMs += dt * 1000;
    const speed = this.player.update(dt, this.district, blocked);
    s.pos = [this.player.pos.x, this.player.pos.z];

    // Time and needs.
    if (!blocked && s.phase !== 5) {
      const hours = (dt / 60) * this.timeScale;
      this.advanceTime(hours, speed > 5 ? 1.6 : 1);
    }
    // NPCs
    this._placeNpcs();
    for (const n of this.presentNpcs()) {
      const f = this.npcFigs.get(n.id);
      const d = f.fig.position.distanceTo(this.player.pos);
      if (d < 7) {
        const want = Math.atan2(this.player.pos.x - f.fig.position.x, this.player.pos.z - f.fig.position.z);
        f.fig.rotation.y += angleDelta(f.fig.rotation.y, want) * Math.min(1, dt * 4);
      }
      animateFigure(f.fig, 0, dt);
      f.lab.visible = d < 40;
    }
    if (this.sisterFig) animateFigure(this.sisterFig, 0, dt);

    // Pursuit timer.
    if (s.phase === 4 && s.pursuit && !blocked) {
      s.pursuit.left -= dt;
      this.checkPursuit();
    }
    // Hidden gems + POI visibility.
    this.updatePois();
    if (this.beacon) { this.beacon.material.opacity = 0.18 + Math.sin(shared.uTime.value * 3) * 0.06; }

    // Interaction prompt.
    this.target = blocked ? null : this.findTarget();
    if (this.player.photoMode) {
      this.updateViewfinder();
      ui.prompt(null);
    } else if (this.target) ui.prompt(this.target.label, this.target.sub);
    else if (!blocked && this.nearSpot) ui.prompt(`Photo spot: ${this.nearSpot.name}`, 'press C for camera', 'C');
    else ui.prompt(null);

    // Periodic.
    this.msgTimer -= dt;
    if (this.msgTimer <= 0) { this.msgTimer = 3; if (!blocked) this.story.checkMessages(); }
    this.saveTimer -= dt;
    if (this.saveTimer <= 0) { this.saveTimer = 60; if (!blocked) this.saveNow(); }
    this.hudTimer -= dt;
    if (this.hudTimer <= 0) {
      this.hudTimer = 0.25;
      this.updateHud();
      this.audio.setEnv({ style: this.route.id, night: this.sky.night || 0, rain: s.weather === 'rain', park: this.district.def.grid.join('').split('P').length > 8, inside: !!this.inside, transit: !!this.inTransit });
    }
    this.mapTimer = (this.mapTimer || 0) - dt;
    if (this.mapTimer <= 0) { this.mapTimer = 0.1; this.drawMap(this.ui.minimap, false); }
  }

  advanceTime(hours, exert = 1) {
    const s = this.state, n = s.needs;
    const before = s.time;
    s.time += hours;
    n.hunger = clamp(n.hunger - hours * 5.5, 0, 100);
    n.energy = clamp(n.energy - hours * 3.2 * exert, 0, 100);
    if (n.hunger < 20) n.mood = clamp(n.mood - hours * 3, 0, 100);
    if (n.energy < 15) n.mood = clamp(n.mood - hours * 3, 0, 100);
    this.player.sprintMul = (s.perks.bike ? 1.3 : 1) * (n.hunger < 12 || n.energy < 8 ? 0.75 : 1);
    if (before < 23 && s.time >= 23 && s.phase < 4) this.ui.toast('It\'s getting late. Head home to sleep.', '🌙');
    if (s.time >= 26.5 && this.mode === 'play' && s.phase < 4) this.run(() => this.passOut());
  }

  // ---------------------------------------------------------------- HUD
  updateHud() {
    const s = this.state, r = this.route;
    const def = this.district.def;
    this.ui.setClock({ time: s.time % 24, day: s.day, weekday: WEEKDAYS[(s.day - 1) % 7], weather: s.weather, district: def.name, sub: def.sub, label: hourLabel(s.time % 24) });
    const obj = this.story.objective();
    this.ui.setObjective(obj?.label, obj?.html, obj?.timer);
    let extra = '';
    if (s.challenge.speedrun) extra += `<div class="money"><span>Speed run</span><span>${this.fmtRun()}</span></div>`;
    if (s.challenge.photoPerfect) extra += `<div class="money"><span>Film</span><span>${s.challenge.shotsLeft} left</span></div>`;
    this.ui.setNeeds(s.needs, s.money, r.currency, extra);
    const unread = this.story.unread();
    this.ui.setKeys([['E', 'interact'], ['Tab', `phone${unread ? ` (${unread})` : ''}`], ['B', 'board'], ['M', 'map'], ['C', 'camera'], ['Shift', 'run']]);
  }
  fmtRun() { return fmtMs(this.state.playMs); }

  drawMap(cv, big) {
    const g = cv.getContext('2d');
    const W = cv.width, H = cv.height;
    const s = this.state, d = this.district;
    const p = this.player ? this.player.pos : new THREE.Vector3();
    const range = big ? 140 : 62;
    const cx = big ? 0 : p.x, cz = big ? 0 : p.z;
    const sc = W / (range * 2);
    const X = (x) => (x - cx) * sc + W / 2, Z = (z) => (z - cz) * sc + H / 2;
    g.save();
    g.clearRect(0, 0, W, H);
    if (!big) { g.beginPath(); g.arc(W / 2, H / 2, W / 2, 0, Math.PI * 2); g.clip(); }
    g.fillStyle = '#23272e'; g.fillRect(0, 0, W, H);
    const rect = (x0, z0, x1, z1, c) => { g.fillStyle = c; g.fillRect(X(x0), Z(z0), (x1 - x0) * sc, (z1 - z0) * sc); };
    for (let gz = -2; gz <= 2; gz++) for (let gx = -2; gx <= 2; gx++) {
      const c = d.cellAt(gx, gz);
      const x = gx * PITCH, z = gz * PITCH;
      if (c === 'W') {
        const edge = 400;
        rect(x - 25 - (gx === -2 ? edge : 0), z - 25 - (gz === -2 ? edge : 0), x + 25 + (gx === 2 ? edge : 0), z + 25 + (gz === 2 ? edge : 0), '#2c587a');
      } else if (c === 'P') rect(x - 25, z - 25, x + 25, z + 25, '#35583a');
      else if (c === 'G') { rect(x - 18, z - 18, x + 18, z + 18, '#4a6a44'); }
      else if (c === '.') rect(x - 18, z - 18, x + 18, z + 18, '#6b665c');
      else if (c) { rect(x - 18, z - 18, x + 18, z + 18, '#51565f'); rect(x - 15, z - 15, x + 15, z + 15, '#3c4049'); }
    }
    // P cells next to buildings: redraw streets around parks
    for (let gz = -2; gz <= 2; gz++) for (let gx = -2; gx <= 2; gx++) {
      if (d.cellAt(gx, gz) !== 'P') continue;
      const x = gx * PITCH, z = gz * PITCH;
      const nb = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      for (const [dx, dz] of nb) {
        const c = d.cellAt(gx + dx, gz + dz);
        if (c === 'P' || c === 'W' || !c) continue;
        if (dx === -1) rect(x - 25, z - 25, x - 18, z + 25, '#23272e');
        if (dx === 1) rect(x + 18, z - 25, x + 25, z + 25, '#23272e');
        if (dz === -1) rect(x - 25, z - 25, x + 25, z - 18, '#23272e');
        if (dz === 1) rect(x - 25, z + 18, x + 25, z + 25, '#23272e');
      }
    }
    for (const w of d.walkables) rect(w.minX, w.minZ, w.maxX, w.maxZ, '#8a7a66');
    for (const c of d.colliders) if (c.water && c.maxX - c.minX < 200) rect(c.minX, c.minZ, c.maxX, c.maxZ, '#2c587a');
    for (const w of d.walkables) rect(w.minX, w.minZ, w.maxX, w.maxZ, '#8a7a66');
    const dot = (x, z, col, r, label) => {
      g.beginPath(); g.arc(X(x), Z(z), r, 0, Math.PI * 2); g.fillStyle = col; g.fill();
      g.lineWidth = 2; g.strokeStyle = 'rgba(0,0,0,0.5)'; g.stroke();
      if (label && big) { g.fillStyle = '#fff'; g.font = '600 20px Fredoka, Arial, sans-serif'; g.fillText(label, X(x) + r + 5, Z(z) + 6); }
    };
    const R = big ? 11 : 9;
    for (const sp of d.photoSpots) if (sp.ring.visible) dot(sp.pos.x, sp.pos.z, '#ffffff', R * 0.6, big ? '📷 ' + sp.name : null);
    for (const q of d.pois) {
      if (!q.ring.visible) continue;
      const c = '#' + POI_STYLE[q.type].color.toString(16).padStart(6, '0');
      dot(q.pos.x, q.pos.z, c, q.type === 'station' ? R * 1.2 : R, q.name);
      if (q.type === 'station') { g.fillStyle = '#111'; g.font = `700 ${R * 1.4}px Fredoka, Arial, sans-serif`; g.textAlign = 'center'; g.fillText('M', X(q.pos.x), Z(q.pos.z) + R * 0.5); g.textAlign = 'left'; }
    }
    for (const n of this.presentNpcs()) {
      const f = this.npcFigs.get(n.id);
      const met = s.npcs[n.id]?.met;
      dot(f.fig.position.x, f.fig.position.z, met ? '#ff7a93' : '#ffffff', R * 0.7, met ? n.name.split(' ')[0] : '?');
    }
    if (this.goal) {
      const t = shared.uTime.value;
      g.beginPath(); g.arc(X(this.goal.x), Z(this.goal.z), R * (1.4 + Math.sin(t * 4) * 0.3), 0, Math.PI * 2);
      g.strokeStyle = '#ff7a93'; g.lineWidth = 4; g.stroke();
    }
    if (this.player) {
      g.translate(X(p.x), Z(p.z));
      g.rotate(-this.player.facing + Math.PI);
      g.beginPath(); g.moveTo(0, -R * 1.5); g.lineTo(R, R); g.lineTo(-R, R); g.closePath();
      g.fillStyle = '#e8b04e'; g.fill(); g.strokeStyle = '#111'; g.lineWidth = 2; g.stroke();
    }
    g.restore();
  }

  // ---------------------------------------------------------------- POIs & targeting
  poiVisible(q) {
    const s = this.state;
    if (q.requires && q.requires.startsWith('perk:') && !s.perks[q.requires.slice(5)]) return false;
    if (q.hidden && !s.gems[q.id]) return false;
    return true;
  }
  isOpen(q) { return !q.hours || inWindow(this.state.time % 24, q.hours); }

  updatePois() {
    const s = this.state, p = this.player.pos;
    for (const q of this.district.pois) {
      let vis = this.poiVisible(q);
      const dist = Math.hypot(q.pos.x - p.x, q.pos.z - p.z);
      if (!vis && q.hidden && !s.gems[q.id] && dist < 11 && !(q.requires && !this.poiVisible({ ...q, hidden: false }))) {
        s.gems[q.id] = s.day;
        vis = true;
        this.audio.chime();
        this.ui.toast(`Hidden gem discovered: ${q.name}`, '✨', 4500);
        this.addMemory({ id: 'gem_' + q.id, title: q.name, text: 'A hidden gem.', icon: '✨' });
        s.needs.mood = clamp(s.needs.mood + 6, 0, 100);
      }
      q.ring.visible = vis;
      q.label.visible = vis && this.settings.labels && dist < 48;
      q.label.element.classList.toggle('closed', !this.isOpen(q));
    }
    this.nearSpot = null;
    for (const sp of this.district.photoSpots) {
      sp.ring.visible = !sp.requires || !!s.perks[sp.requires.slice(5)];
      if (sp.ring.visible && Math.hypot(sp.pos.x - p.x, sp.pos.z - p.z) < 5) this.nearSpot = sp;
    }
    // NPC labels
    for (const n of this.presentNpcs()) {
      const f = this.npcFigs.get(n.id);
      const st = s.npcs[n.id];
      const hint = st?.met && s.phase >= 2 && this.story.npcClue(n.id)?.clue;
      const html = st?.met ? `${esc(n.name.split(' ')[0])}${hint ? '<span class="bang">!</span>' : ''}<span class="role">${esc(n.role)}</span>` : `${esc(n.name)}<span class="role">${esc(n.role)}</span>`;
      if (f.el._h !== html) { f.el.innerHTML = html; f.el._h = html; }
    }
  }

  findTarget() {
    const p = this.player.pos, s = this.state;
    let best = null, bd = 1e9;
    const consider = (d, t) => { if (d < bd) { bd = d; best = t; } };
    for (const n of this.presentNpcs()) {
      const f = this.npcFigs.get(n.id);
      const d = f.fig.position.distanceTo(p);
      if (d < 2.8) consider(d, { kind: 'npc', npc: n, label: s.npcs[n.id]?.met ? `Talk to ${n.name.split(' ')[0]}` : `Say hello to ${n.name.split(' ')[0]}`, sub: n.role });
    }
    for (const q of this.district.pois) {
      if (!q.ring.visible) continue;
      const d = Math.hypot(q.pos.x - p.x, q.pos.z - p.z);
      if (d > 2.6) continue;
      const verb = { eat: 'Eat at', work: 'Go to work at', hangout: 'Visit', home: 'Go inside —', station: 'Take the ' + this.route.metro.name + ' at', gem: 'Visit', police: 'Go into', therapy: 'Go to', shelter: 'Knock at' }[q.type] || 'Visit';
      const sub = this.isOpen(q) ? (q.type === 'eat' || (q.type === 'gem' && q.menu) ? 'food' : '') : `closed · opens ${fmtTime(q.hours[0] % 24)}`;
      consider(d - 0.3, { kind: 'poi', poi: q, label: `${verb} ${q.name}`, sub });
    }
    return best;
  }

  // ---------------------------------------------------------------- input
  onKey(e) {
    if (this.mode !== 'play') return false;
    const k = e.key.toLowerCase();
    const busy = this.ui.busy > 0 || this.pending > 0;
    if (this.player.photoMode) {
      if (k === 'c' || k === 'escape') { this.togglePhoto(false); return true; }
      if (k === ' ' || k === 'enter' || k === 'f') { this.takePhoto(); return true; }
      return false;
    }
    if (busy) return false;
    if (k === 'e' || k === 'enter') { this.interact(); return true; }
    if (k === 'tab' || k === 'p' || k === 'escape') { openPhone(this, k === 'escape' ? 'settings' : null); return true; }
    if (k === 'j') { openPhone(this, 'journal'); return true; }
    if (k === 'b') { if (this.state.phase >= 2) openBoard(this); else this.ui.toast('Nothing to investigate… yet.', '🧩'); return true; }
    if (k === 'm') { openMap(this); return true; }
    if (k === 'c') { this.togglePhoto(true); return true; }
    return false;
  }

  interact() {
    const t = this.findTarget();
    if (!t) return;
    this.run(async () => {
      if (t.kind === 'npc') await this.talkTo(t.npc);
      else if (t.kind === 'poi') await this.usePoi(t.poi);
    });
  }

  _bindPhotoClick() {
    const el = document.getElementById('scene');
    let down = null;
    el.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, t: performance.now() }; });
    el.addEventListener('pointerup', (e) => {
      if (!down || !this.player || !this.player.photoMode) return;
      if (Math.hypot(e.clientX - down.x, e.clientY - down.y) < 6 && performance.now() - down.t < 400) this.takePhoto();
      down = null;
    });
  }

  _touch() {
    if (!('ontouchstart' in window)) return;
    const wrap = document.createElement('div');
    wrap.className = 'touch';
    wrap.innerHTML = '<div class="stick"><i></i></div><div class="tbtns"><button data-k="e">E</button><button data-k="c">📷</button><button data-k="b">🧩</button><button data-k="tab">📱</button></div>';
    document.getElementById('ui').appendChild(wrap);
    const stick = wrap.querySelector('.stick'), knob = stick.querySelector('i');
    let id = null;
    const move = (e) => {
      const r = stick.getBoundingClientRect();
      let dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2), dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      const l = Math.hypot(dx, dy); if (l > 1) { dx /= l; dy /= l; }
      knob.style.transform = `translate(${dx * 38}px, ${dy * 38}px)`;
      if (this.player) this.player.stick = { x: dx, y: -dy * (l > 0.95 ? 1.3 : 1) };
    };
    stick.addEventListener('pointerdown', (e) => { id = e.pointerId; stick.setPointerCapture(id); move(e); });
    stick.addEventListener('pointermove', (e) => { if (e.pointerId === id) move(e); });
    const end = () => { id = null; knob.style.transform = ''; if (this.player) this.player.stick = { x: 0, y: 0 }; };
    stick.addEventListener('pointerup', end); stick.addEventListener('pointercancel', end);
    wrap.querySelectorAll('button').forEach((b) => {
      b.onclick = () => {
        const k = b.dataset.k;
        if (this.player?.photoMode && k === 'c') { this.takePhoto(); return; }
        if (this.player?.photoMode && k === 'e') { this.togglePhoto(false); return; }
        this.onKey({ key: k === 'tab' ? 'Tab' : k });
      };
    });
  }

  // ---------------------------------------------------------------- NPCs
  npcState(id) {
    const s = this.state;
    if (!s.npcs[id]) s.npcs[id] = { rel: 0, met: false, lastTalk: 0, lastMeal: 0, deep: {}, idx: 0, perk: false };
    return s.npcs[id];
  }

  async talkTo(n) {
    const s = this.state, st = this.npcState(n.id), ui = this.ui, story = this.story;
    const color = '#' + n.look.top.toString(16).padStart(6, '0');
    const base = { name: n.name, role: n.role, color: lighten(color) };
    const say = (lines, choices) => ui.dialogue({ ...base, rel: st.rel, lines, choices });
    if (!st.met) {
      st.met = true; st.rel = 1; st.lastTalk = s.day;
      await say(n.intro);
      if (n.id === this.route.roommate) story.tutorialDone('talk_dev');
      s.dayLog.push({ kind: 'met', text: n.name });
      ui.toast(`You met ${n.name}`, '👋');
      return;
    }
    if (st.lastTalk !== s.day) { st.lastTalk = s.day; await this.bumpRel(n, 1, say); }
    const phaseLines = n.lines[Math.min(4, s.phase)] || n.lines[1];
    let greet = pick(phaseLines, s.day + st.idx);
    const sis = story.sisterName;
    for (;;) {
      const mealOk = this.mealSpot(n) && st.lastMeal !== s.day;
      const choices = [
        { text: 'How\'s it going?', v: 'chat' },
        { text: 'Tell me something about the city.', v: 'city' },
        { text: `Ask about ${sis}`, v: 'sister' },
      ];
      if (mealOk) choices.push({ text: `Grab a bite together? (${this.route.currency}${this.mealSpot(n).cost}, 1h)`, v: 'meal' });
      choices.push({ text: 'See you around.', v: 'bye' });
      const k = await say(greet ? [greet] : [], choices);
      greet = null;
      const v = k < 0 ? 'bye' : choices[k].v;
      if (v === 'bye') return;
      if (v === 'chat') { st.idx++; await say([pick(phaseLines, s.day + st.idx)]); }
      if (v === 'city') { st.idx++; s.needs.mood = clamp(s.needs.mood + 2, 0, 100); await say([pick(n.city, st.idx + s.day)]); }
      if (v === 'sister') {
        const x = s.phase >= 2 ? story.npcClue(n.id) : null;
        if (x && x.clue) {
          await say(x.clue.lines);
          if (x.clue.song) this.audio.playLanterns();
          story.addClue(x.clue.id);
          story.checkMessages();
        } else if (x && x.locked) {
          await say([n.sister.low, `(${n.name.split(' ')[0]} hesitates, like there's more. Maybe once you know each other better.)`]);
        } else {
          await say([st.rel >= 3 ? n.sister.high : n.sister.low]);
        }
      }
      if (v === 'meal') {
        const m = this.mealSpot(n);
        if (s.money < m.cost) { await say(['(You check your wallet. Not today.)']); continue; }
        s.money -= m.cost; st.lastMeal = s.day;
        s.needs.hunger = clamp(s.needs.hunger + 30, 0, 100);
        s.needs.mood = clamp(s.needs.mood + 10, 0, 100);
        this.advanceTime(1);
        const done = await ui.fade(`${m.poi.name}`, 900, 'An hour later');
        done();
        await say([n.meal]);
        s.dayLog.push({ kind: 'meal', text: n.name.split(' ')[0] });
        story.tutorialDone('eat');
        await this.bumpRel(n, 1, say);
      }
    }
  }

  async bumpRel(n, amt, say) {
    const st = this.npcState(n.id);
    const before = st.rel;
    st.rel = clamp(st.rel + amt, 0, 5);
    if (st.rel > before) this.ui.toast(`${n.name.split(' ')[0]} ${'♥'.repeat(st.rel)}`, '💞', 2200);
    for (let r = before + 1; r <= st.rel; r++) {
      if (n.deep && n.deep[r] && !st.deep[r]) { st.deep[r] = true; await say([n.deep[r]]); }
    }
    if (n.perk && st.rel >= n.perk.rel && !st.perk) {
      st.perk = true;
      this.grantPerk(n.perk.id);
      await this.ui.cards([n.perk.desc], { title: `Unlocked: ${n.perk.name}` });
    }
  }

  mealSpot(n) {
    const f = this.npcFigs.get(n.id);
    let best = null;
    for (const q of this.district.pois) {
      if ((q.type !== 'eat' && !(q.type === 'gem' && q.menu)) || !this.poiVisible(q) || !this.isOpen(q)) continue;
      const d = Math.hypot(q.pos.x - f.fig.position.x, q.pos.z - f.fig.position.z);
      if (d < 16 && (!best || d < best.d)) best = { poi: q, d, cost: Math.min(...q.menu.map((m) => m.price)) * 2 };
    }
    return best;
  }

  grantPerk(id, silent = false) {
    const s = this.state;
    if (s.perks[id]) return;
    s.perks[id] = s.day;
    if (id === 'bike') this.player.sprintMul = 1.3;
    if (!silent) this.audio.chime();
  }

  // ---------------------------------------------------------------- places
  async usePoi(q) {
    const s = this.state;
    if (s.epilogue && q.id === this.route.epilogue.goal) return this.finishEpilogue();
    if (q.type === 'station') { openPhone(this, 'metro'); return; }
    if (q.type === 'home') return this.atHome();
    if (!this.isOpen(q)) {
      await this.ui.dialogue({ name: q.name, role: 'Closed', lines: [`The sign on the door says: open ${fmtTime(q.hours[0] % 24)} – ${fmtTime(q.hours[1] % 24)}.`] });
      return;
    }
    if (q.date) return this.date(q);
    if (q.type === 'work') return this.work(q);
    if (q.menu) return this.eat(q);
    return this.hangout(q);
  }

  async eat(q) {
    const s = this.state, r = this.route;
    const items = q.menu.map((m, i) => ({ label: m.name, sub: `+${m.hunger} hunger${r.prefs.includes(m.tag) ? ' · ♥ your kind of thing' : ''}`, right: `${r.currency}${m.price}`, value: i, disabled: s.money < m.price }));
    items.push({ label: 'Just looking', value: -1 });
    const v = await this.ui.menu({ title: q.name, subtitle: q.type === 'gem' ? 'A hidden gem.' : 'What\'ll it be?', items });
    if (v == null || v < 0) return;
    const m = q.menu[v];
    s.money -= m.price;
    s.needs.hunger = clamp(s.needs.hunger + m.hunger, 0, 100);
    const loved = r.prefs.includes(m.tag);
    s.needs.mood = clamp(s.needs.mood + m.mood + (loved ? 4 : 0), 0, 100);
    this.advanceTime(0.75);
    this.story.tutorialDone('eat');
    s.dayLog.push({ kind: 'eat', text: `${m.name} at ${q.name}` });
    this.inside = true;
    const lines = [m.note];
    if (loved) lines.push(`(${SISTERS[r.protagonist].name} is very happy about this.)`);
    await this.ui.dialogue({ name: q.name, role: 'Forty-five minutes well spent', color: '#e8b04e', lines });
    this.inside = false;
    await this.overhear(q);
  }

  async hangout(q) {
    const s = this.state;
    const long = q.type !== 'gem';
    const v = await this.ui.menu({ title: q.name, subtitle: long ? 'Spend a couple of hours here?' : 'Stay a while?', items: [{ label: long ? 'Spend two hours here' : 'Stay for an hour', sub: '+mood', value: 1 }, { label: 'Maybe later', value: 0 }] });
    if (!v) return;
    this.advanceTime(long ? 2 : 1);
    s.needs.mood = clamp(s.needs.mood + (long ? 12 : 10), 0, 100);
    s.needs.energy = clamp(s.needs.energy - 5, 0, 100);
    s.dayLog.push({ kind: 'hang', text: q.name });
    const text = pick(q.text || ['You enjoy yourself.'], s.day + Object.keys(s.clues).length);
    const done = await this.ui.fade(q.name, 900, long ? 'Two hours later' : 'An hour later');
    done();
    await this.ui.dialogue({ name: q.name, role: this.districtName(q.district), color: '#c8a2f2', lines: [text] });
    if (!this.state.memories.find((m) => m.id === 'place_' + q.id)) this.addMemory({ id: 'place_' + q.id, title: q.name, text, icon: '🎨' });
    await this.overhear(q);
  }

  async overhear(q) {
    if (!q.overhear) return;
    const story = this.story;
    if (story.hasClue(q.overhear) || !story.clueAllowed(q.overhear)) return;
    await this.ui.cards(this.route.overhears[q.overhear], { title: 'Overheard' });
    story.addClue(q.overhear);
  }

  async date(q) {
    const s = this.state;
    const n = this.story.npc(q.date);
    if (s.flags['date_' + n.id]) { await this.ui.dialogue({ name: q.name, lines: [`The waiter remembers you. "Table for one tonight? ${n.name.split(' ')[0]} still talks about the dessert."`] }); return; }
    if (s.time % 24 < 18) { await this.ui.dialogue({ name: q.name, lines: ['The reservation is for the evening.'] }); return; }
    s.flags['date_' + n.id] = true;
    this.advanceTime(2);
    await this.ui.cards(n.date, { title: `Dinner with ${n.name.split(' ')[0]}` });
    s.needs.mood = clamp(s.needs.mood + 20, 0, 100);
    s.needs.hunger = clamp(s.needs.hunger + 45, 0, 100);
    this.addMemory({ id: 'date_' + n.id, title: `Dinner with ${n.name.split(' ')[0]}`, text: q.name, icon: '🕯️' });
    await this.bumpRel(n, 1, (lines) => this.ui.dialogue({ name: n.name, role: n.role, lines }));
  }

  async work(q) {
    const s = this.state, r = this.route, w = r.work;
    this.story.tutorialDone('work');
    if (w.assignments) {
      const cur = s.assignment && w.assignments.find((a) => a.spot === s.assignment);
      const next = w.assignments.find((a) => !s.assignmentsDone[a.spot]);
      const items = [];
      if (cur) items.push({ label: 'Current assignment', sub: cur.brief, value: 'cur' });
      else if (next) items.push({ label: 'Pick up a photo assignment', sub: `Pays ${r.currency}${w.pay}`, value: 'assign' });
      else items.push({ label: 'All assignments complete!', disabled: true, value: 'x' });
      items.push({ label: w.session.name, sub: `${w.session.hours}h · +${r.currency}${w.session.pay}`, value: 'session' });
      items.push({ label: 'Leave', value: null });
      const v = await this.ui.menu({ title: q.name, subtitle: `${w.label} · ${Object.keys(s.assignmentsDone).length}/${w.assignments.length} assignments done`, items });
      if (v === 'assign') {
        s.assignment = next.spot;
        await this.ui.dialogue({ name: 'Marguerite\'s note', role: 'Pinned to your desk', color: '#e8b04e', lines: [`Assignment: ${next.brief}.`, 'Frame it well, catch the right light. Two stars or better. — M.'] });
      } else if (v === 'cur') {
        await this.ui.dialogue({ name: 'Your assignment', lines: [cur.brief, 'Find the photo spot (white hexagon on the map), press C, frame the subject and shoot.'] });
      } else if (v === 'session') {
        if (s.needs.energy < 15) { this.ui.toast('Too tired to focus. Rest first.', '😴'); return; }
        this.advanceTime(w.session.hours, 1.5);
        s.money += w.session.pay;
        s.needs.mood = clamp(s.needs.mood + 3, 0, 100);
        s.dayLog.push({ kind: 'work', text: w.session.name });
        const done = await this.ui.fade(w.session.name, 1000, `${w.session.hours} hours later`);
        done();
        await this.ui.dialogue({ name: q.name, role: w.session.name, lines: [pick(w.session.text, s.day)] });
      }
      return;
    }
    const kind = q.activity || 'session';
    const ses = w.sessions[kind];
    if (kind === 'gig') {
      if (!s.perks.venue) { await this.ui.dialogue({ name: q.name, lines: ['The stage is booked weeks ahead. Maybe if you knew the sound engineer…'] }); return; }
      if (s.sessions < ses.needSessions) { await this.ui.dialogue({ name: 'Rafi', lines: [`Do a few more sessions with Imogen first. ${ses.needSessions - s.sessions} to go. Then the stage is yours.`] }); return; }
      if (s.time % 24 < 18) { await this.ui.dialogue({ name: 'Rafi', lines: ['Doors are at six. Come back tonight.'] }); return; }
    }
    const v = await this.ui.menu({ title: q.name, subtitle: ses.text, items: [{ label: ses.name, sub: `${ses.hours}h${ses.pay ? ` · up to ${r.currency}${ses.pay}` : ' · +mood'}`, value: 1 }, { label: 'Leave', value: 0 }] });
    if (!v) return;
    if (s.needs.energy < 15) { this.ui.toast('Too tired to play. Rest first.', '😴'); return; }
    const res = await this.ui.echoGame({ title: ses.name, text: ses.text, length: ses.length, audio: this.audio });
    const ratio = res.score / res.of;
    this.advanceTime(ses.hours, 1.4);
    const pay = Math.round(ses.pay * (0.4 + 0.6 * ratio));
    s.money += pay;
    s.needs.mood = clamp(s.needs.mood + (res.won ? 10 : 4) + (kind === 'gig' ? 12 : 0), 0, 100);
    if (kind === 'session') s.sessions++;
    if (kind === 'gig') {
      s.gigs++;
      this.addMemory({ id: 'gig_' + s.gigs, title: s.gigs === 1 ? 'First gig at Riverside Hall' : `Gig #${s.gigs} at Riverside Hall`, text: res.won ? 'The crowd sang the last chorus back.' : 'A wobbly middle, a great ending.', icon: '🎸' });
      const rafi = this.story.npc('rafi');
      if (rafi) await this.bumpRel(rafi, 1, (lines) => this.ui.dialogue({ name: rafi.name, lines }));
    }
    s.dayLog.push({ kind: 'work', text: ses.name });
    await this.ui.dialogue({ name: q.name, role: ses.name, lines: [res.won ? 'You nailed it.' : 'Not perfect, but it\'s getting there.', pay ? `(+${r.currency}${pay})` : '(Your fingers ache in the good way.)'] });
  }

  async atHome() {
    const s = this.state;
    const t = s.time % 24 < 5 ? s.time % 24 + 24 : s.time;
    const canSleep = t >= 20 || s.needs.energy < 40;
    const items = [
      { label: 'Sleep', sub: canSleep ? 'End the day' : 'Too early — come back after 8pm (or when tired)', value: 'sleep', disabled: !canSleep },
      { label: 'Rest for two hours', sub: '+energy', value: 'rest' },
      { label: 'Write in your journal', sub: s.journalDay === s.day ? 'Already written today' : '+mood · a quiet moment', value: 'journal', disabled: s.journalDay === s.day },
      { label: 'Leave', value: null },
    ];
    const v = await this.ui.menu({ title: 'Home', subtitle: `Day ${s.day} · ${fmtTime(s.time % 24)}`, items });
    if (v === 'sleep') await this.sleep();
    if (v === 'rest') {
      this.advanceTime(2);
      s.needs.energy = clamp(s.needs.energy + 25, 0, 100);
      const d = await this.ui.fade('You lie down with the window open. The city hums.', 1400, 'Two hours later');
      d();
    }
    if (v === 'journal') {
      s.journalDay = s.day;
      const txt = pick(this.route.reflections[Math.min(4, Math.max(1, s.phase))], s.day);
      s.journal.push({ day: s.day, text: txt });
      s.needs.mood = clamp(s.needs.mood + 6, 0, 100);
      this.advanceTime(0.5);
      await this.ui.cards([txt], { title: 'Journal', hand: true });
    }
  }

  async sleep() {
    const s = this.state, r = this.route;
    const log = s.dayLog;
    const bits = [];
    const eats = log.filter((x) => x.kind === 'eat' || x.kind === 'meal').length;
    const met = log.filter((x) => x.kind === 'met').map((x) => x.text);
    const clues = log.filter((x) => x.kind === 'clue').map((x) => x.text);
    const hangs = log.filter((x) => x.kind === 'hang').map((x) => x.text);
    if (met.length) bits.push(`Met ${listJoin(met)}.`);
    if (hangs.length) bits.push(`Spent time at ${listJoin(hangs)}.`);
    if (eats === 0) bits.push('Forgot to eat properly. Mum would be furious.');
    if (clues.length) bits.push(`Pinned to the board: ${listJoin(clues.map((c) => `“${c}”`))}.`);
    const refl = pick(r.reflections[Math.min(4, Math.max(1, s.phase))], s.day + 1);
    this.story.tutorialDone('sleep');
    await this.ui.cards([...(bits.length ? [bits.join(' ')] : []), refl], { title: `Evening — Day ${s.day}`, hand: true });
    if (!s.journal.find((j) => j.day === s.day)) s.journal.push({ day: s.day, text: [...bits, refl].join(' ') });
    this.newDay(false);
  }

  async passOut() {
    if (this.state.phase >= 4) return;
    await this.ui.cards([`It's 2:30am. You meant to go home hours ago.`, `You wake up on your own sofa. ${this.story.npc(this.route.roommate).name.split(' ')[0]} left a blanket over you and a note: "Tough night, champ."`], { title: 'Too late' });
    this.newDay(true);
  }

  newDay(tired) {
    const s = this.state;
    s.day++;
    s.time = tired ? 9 : 7.5;
    s.needs.energy = tired ? 60 : 100;
    s.needs.hunger = clamp(s.needs.hunger - 20, 5, 100);
    s.needs.mood = clamp(s.needs.mood + (tired ? -10 : 5), 0, 100);
    s.dayLog = [];
    this.rollWeather();
    const home = resolvePos(this.findPoi('home'));
    this.enterDistrict(this.route.startDistrict, [home.x + home.dir[0] * 2.5, home.z + home.dir[1] * 2.5]);
    this.saveNow();
    this.run(async () => {
      const d = await this.ui.fade(`Day ${s.day}`, 1300, `${WEEKDAYS[(s.day - 1) % 7]} · ${s.weather === 'rain' ? 'rain' : s.weather === 'cloudy' ? 'overcast' : 'clear skies'}`);
      d();
    });
    this.story.checkMessages();
  }

  rollWeather() {
    const w = this.route.weather;
    const x = Math.random();
    this.state.weather = x < w.rain ? 'rain' : x < w.rain + w.cloudy ? 'cloudy' : 'clear';
    if (this.state.day === 1) this.state.weather = 'clear';
    this.sky.setWeather(this.state.weather, this.sky.leaves);
  }

  // ---------------------------------------------------------------- transit
  metroGraph() {
    const adj = {};
    for (const L of this.route.metro.lines) for (let i = 0; i < L.stops.length; i++) {
      const a = L.stops[i];
      adj[a] = adj[a] || new Set();
      if (i > 0) adj[a].add(L.stops[i - 1]);
      if (i < L.stops.length - 1) adj[a].add(L.stops[i + 1]);
    }
    return adj;
  }
  travelMinutes(from, to) {
    const adj = this.metroGraph();
    const dist = { [from]: 0 }, q = [from];
    while (q.length) { const a = q.shift(); for (const b of adj[a] || []) if (dist[b] == null) { dist[b] = dist[a] + 1; q.push(b); } }
    const hops = dist[to] ?? 3;
    return Math.round((12 + hops * 13) * (this.state.perks.express ? 0.5 : 1));
  }
  atStation() {
    const p = this.player.pos;
    return this.district.pois.find((q) => q.type === 'station' && Math.hypot(q.pos.x - p.x, q.pos.z - p.z) < 6) || null;
  }
  travel(dest) {
    this.run(async () => {
      const mins = this.travelMinutes(this.state.district, dest);
      this.inTransit = true;
      this.audio.setEnv({ style: this.route.id, night: this.sky.night, transit: true });
      const done = await this.ui.fade(pick(this.route.metro.verbs, Math.random() * 100), 2200, `${this.route.metro.name} to ${this.districtName(dest)} · ${mins} min`);
      this.advanceTime(mins / 60);
      const st = this.route.districts.find((d) => d.id === dest).pois.find((q) => q.type === 'station');
      const p = resolvePos(st);
      this.enterDistrict(dest, [p.x - p.dir[0] * 2.5, p.z - p.dir[1] * 2.5]);
      this.story.tutorialDone('metro');
      this.saveNow();
      this.inTransit = false;
      done();
    });
  }

  // ---------------------------------------------------------------- photography
  togglePhoto(on) {
    if (on) {
      if (this.state.challenge.photoPerfect && this.state.challenge.shotsLeft <= 0) { this.ui.toast('Out of film.', '🎞️'); return; }
      this.player.enterPhoto();
      this.audio.click();
    } else this.player.exitPhoto();
    this.ui.viewfinder(on, '', '');
    this.ui.showHud(!on);
  }

  evalShot() {
    const p = this.player.pos, dir = this.player.photoDir();
    const eye = new THREE.Vector3(p.x, this.player.y + 1.65, p.z);
    let best = null;
    for (const sp of this.district.photoSpots) {
      if (!sp.ring.visible) continue;
      const d = Math.hypot(sp.pos.x - p.x, sp.pos.z - p.z);
      if (d > 9) continue;
      const to = sp.targetV.clone().sub(eye).normalize();
      const ang = THREE.MathUtils.radToDeg(to.angleTo(dir));
      const half = this.player.fov * 0.5;
      if (ang > half * 0.85) continue;
      const centered = ang < half * 0.35;
      const light = inWindow(this.state.time % 24, sp.hours);
      const stars = 1 + (centered ? 1 : 0) + (light ? 1 : 0);
      if (!best || stars > best.stars) best = { sp, stars, centered, light, ang };
    }
    return best;
  }

  updateViewfinder() {
    const e = this.evalShot();
    const s = this.state;
    const film = s.challenge.photoPerfect ? `  ·  ${s.challenge.shotsLeft} exposures` : '';
    this.ui.viewfinderLock(!!(e && e.centered));
    const top = `Drag / WASD to aim · wheel or Q/Z to zoom · click or Space to shoot · C to exit${film}`;
    if (e) this.ui.viewfinder(true, `${e.sp.name}  ${'★'.repeat(e.stars)}${'☆'.repeat(3 - e.stars)}${e.light ? '' : '  ·  wrong light'}`, top);
    else this.ui.viewfinder(true, this.nearSpot ? `Frame the subject: ${this.nearSpot.name}` : 'Street photo', top);
  }

  takePhoto() {
    const s = this.state;
    if (s.challenge.photoPerfect) {
      if (s.challenge.shotsLeft <= 0) { this.ui.toast('Out of film.', '🎞️'); this.togglePhoto(false); return; }
      s.challenge.shotsLeft--;
    }
    this.ui.viewfinder(false);
    this.renderFrame();
    const img = this.capture();
    this.ui.viewfinder(true);
    this.audio.shutter();
    this.ui.flash();
    s.shots++;
    const e = this.evalShot();
    if (!e) {
      this.addMemory({ id: 'street_' + s.shots, title: `Street photo, ${this.districtName(s.district)}`, img, stars: 1, text: '' });
      this.ui.toast('Snap. A little street moment for the journal.', '📷', 2500);
      return;
    }
    const { sp, stars, light } = e;
    const prev = s.memories.find((m) => m.id === 'photo_' + sp.id);
    if (!prev || prev.stars <= stars) {
      if (prev) s.memories.splice(s.memories.indexOf(prev), 1);
      this.addMemory({ id: 'photo_' + sp.id, title: sp.name, img, stars, text: sp.desc }, true);
    }
    const hrs = `${fmtTime(sp.hours[0] % 24)}–${fmtTime(sp.hours[1] % 24)}`;
    this.ui.toast(`${sp.name} ${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}${light ? '' : ` — best light ${hrs}`}`, '📷', 4200);
    s.needs.mood = clamp(s.needs.mood + stars, 0, 100);
    s.dayLog.push({ kind: 'photo', text: sp.name });
    if (s.assignment === sp.id && stars >= 2) {
      s.assignmentsDone[sp.id] = s.day;
      s.assignment = null;
      s.money += this.route.work.pay;
      this.ui.toast(`Assignment complete! +${this.route.currency}${this.route.work.pay}`, '💼', 4200);
      const mentor = this.story.npc('marguerite');
      if (mentor && this.npcState('marguerite').met) this.run(() => this.bumpRel(mentor, 1, (lines) => this.ui.dialogue({ name: mentor.name, role: 'via text', lines })));
    }
    if (sp.clue && !this.story.hasClue(sp.clue) && this.story.clueAllowed(sp.clue) && (!s.challenge.photoPerfect || stars >= 2)) {
      const text = this.route.photoClues[sp.clue];
      this.run(async () => {
        this.togglePhoto(false);
        await this.ui.cards([text], { title: 'Wait — what\'s that?' });
        this.story.addClue(sp.clue);
      });
    }
  }

  capture(w = 240, h = 150) {
    try {
      const src = this.renderer.domElement;
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      const g = c.getContext('2d');
      const ar = src.width / src.height, tar = w / h;
      let sw = src.width, sh = src.height, sx = 0, sy = 0;
      if (ar > tar) { sw = sh * tar; sx = (src.width - sw) / 2; } else { sh = sw / tar; sy = (src.height - sh) / 2; }
      g.drawImage(src, sx, sy, sw, sh, 0, 0, w, h);
      return c.toDataURL('image/jpeg', 0.72);
    } catch { return null; }
  }

  addMemory(m, silent = false) {
    const s = this.state;
    if (s.memories.find((x) => x.id === m.id)) return;
    s.memories.push({ ...m, day: s.day });
    if (!silent && !m.img) { /* toast handled by caller */ }
  }

  // ---------------------------------------------------------------- phases
  onPhase(p) {
    const sis = this.story.sisterName;
    const txt = {
      2: [`A week in. The city is starting to feel less like a postcard and more like a place.`, `But something about ${sis}'s messages is… off.`, 'Make friends. Ask questions. Keep your eyes open — clues go on your Mystery Board (B).'],
      3: [`${sis} is here, somewhere, hiding in plain sight.`, 'Find out where she sleeps and what her days look like. The people you\'ve met know more than they think.'],
    }[p];
    if (txt) this.run(() => this.ui.cards(txt, { title: `Phase ${p} — ${PHASES[p]}` }));
    this.saveNow();
  }

  afterDeduction() { this.saveNow(); }

  startPursuit() {
    const s = this.state, r = this.route;
    this.story.setPhase(4);
    s.pursuit = { step: 0, left: r.pursuit.steps[0].seconds };
    if (s.time % 24 < 15.5 || s.time >= 24) s.time = 15.5 + (s.time >= 24 ? 0 : 0);
    this.run(async () => {
      this.audio.buzz();
      await this.ui.cards(r.pursuit.intro, { title: `Phase 4 — ${PHASES[4]}` });
      this._updateBeacon();
    });
  }

  _updateBeacon() {
    if (this.beacon) { this.scene.remove(this.beacon); this.beacon = null; }
    this.goal = null;
    const s = this.state, r = this.route;
    let spec = null, label = '';
    if (s.phase === 4 && s.pursuit) { spec = r.pursuit.steps[s.pursuit.step]; label = `Follow the lantern — ${spec.name}`; }
    if (s.phase === 6 && s.epilogue) {
      const q = this.findPoi(r.epilogue.goal);
      spec = { district: q.district, at: [q.pos.x, q.pos.z] };
      label = null;
    }
    if (!spec || spec.district !== s.district) {
      if (spec) this.goal = null;
      return;
    }
    const p = resolvePos(spec);
    this.goal = { district: spec.district, x: p.x, z: p.z, label };
    if (!label) this.goal.label = null;
    const m = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 90, 20, 1, true), new THREE.MeshBasicMaterial({ color: 0xff7a93, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    m.position.set(p.x, 45, p.z);
    this.beacon = m;
    this.scene.add(m);
  }

  checkPursuit() {
    const s = this.state, r = this.route;
    const st = r.pursuit.steps[s.pursuit.step];
    if (s.pursuit.left < 0 && !s.pursuit.warned) { s.pursuit.warned = true; this.ui.toast('Too slow! She\'s moved on — but she left the lantern trail.', '🏮', 4500); }
    if (!this.goal || st.district !== s.district) return;
    const d = Math.hypot(this.goal.x - this.player.pos.x, this.goal.z - this.player.pos.z);
    if (d < 4.5 && !this.pending) {
      this.run(async () => {
        if (s.pursuit.left < 0) s.late++;
        if (st.final) { await this.reunion(); return; }
        await this.ui.cards(st.note, { title: st.name, hand: true });
        this.addMemory({ id: 'lantern_' + s.pursuit.step, title: `A lantern at ${st.name}`, text: st.note[st.note.length - 1], icon: '🏮' });
        s.pursuit.step++;
        s.pursuit.left = r.pursuit.steps[s.pursuit.step].seconds;
        s.pursuit.warned = false;
        this._updateBeacon();
        this.saveNow();
      });
    }
  }

  // ---------------------------------------------------------------- reunion & endings
  async reunion() {
    const s = this.state, r = this.route, R = r.reunion;
    s.phase = 5;
    s.pursuit = null;
    this._updateBeacon();
    s.time = R.hour;
    const sis = SISTERS[r.sister];
    this._placeNpcs(true);
    const d = await this.ui.fade('', 900);
    this.sisterFig = makeFigure(sis.look);
    const [x, z] = R.at;
    this.sisterFig.position.set(x, this.district.groundHeight(x, z), z);
    this.sisterFig.rotation.y = R.sisterFace;
    this.scene.add(this.sisterFig);
    // Player stands a few metres behind her along the bridge.
    const back = [-Math.sin(R.sisterFace) * 5, -Math.cos(R.sisterFace) * 5];
    this.player.place(x + back[0], z + back[1], R.sisterFace);
    // Low three-quarter view from behind: both sisters against the sunset.
    this.player.camYaw = R.sisterFace + Math.PI * 0.86;
    this.player.camPitch = 0.1;
    this.player.camDist = 7;
    this.player.snapCamera();
    d();
    this.audio.playLanterns(0.46);
    await this.ui.cards(['She\'s there. Leaning on the railing, guitar case at her feet, watching the water like it owes her a song.'], { title: 'Phase 5 — Reunion', scene: true });
    this.sisterFig.rotation.y = R.sisterFace + Math.PI;
    for (const L of R.lines) {
      if (L.who === 'sister') await this.ui.dialogue({ name: sis.name, role: 'your sister', color: sis.color, lines: [L.text] });
      else if (L.who === 'narrate') await this.ui.cards([L.text], { scene: true });
      else if (L.who === 'choice') {
        const k = await this.ui.dialogue({ name: SISTERS[r.protagonist].name, role: 'you', color: SISTERS[r.protagonist].color, lines: [], choices: L.options.map((o) => ({ text: o.text })) });
        const o = L.options[Math.max(0, k)];
        await this.ui.dialogue({ name: sis.name, role: 'your sister', color: sis.color, lines: [o.reply] });
      }
    }
    // The photograph.
    const eye = new THREE.Vector3(this.player.pos.x, this.player.y + 1.6, this.player.pos.z);
    const head = this.sisterFig.position.clone().add(new THREE.Vector3(0, 1.7, 0));
    const saved = { pos: this.camera.position.clone(), fov: this.camera.fov };
    this.camera.position.copy(eye); this.camera.fov = 30; this.camera.updateProjectionMatrix(); this.camera.lookAt(head);
    this.renderFrame();
    const img = this.capture();
    const albumImg = this.capture(480, 300);
    this.camera.position.copy(saved.pos); this.camera.fov = saved.fov; this.camera.updateProjectionMatrix();
    // Keep the reunion photo for the next story's family album.
    const meta = loadMeta();
    if (albumImg) { meta.reunionPhoto = albumImg; saveMeta(meta); }
    this.audio.shutter(); this.ui.flash();
    this.addMemory({ id: 'reunion', title: `${sis.name}, the second after she laughed`, img, stars: 3, text: r.reunion.district === 'brooklyn' ? 'The Brooklyn Bridge at sunset.' : 'Waterloo Bridge at sunset.' });
    await this.ui.cards(['You\'ve found each other.'], { title: '♥', scene: true });
    await this.epilogue();
  }

  async epilogue() {
    const s = this.state, r = this.route, E = r.epilogue;
    s.phase = 6;
    s.epilogue = true;
    if (this.sisterFig) { this.scene.remove(this.sisterFig); this.sisterFig = null; }
    await this.ui.cards(E.intro.slice(1), { title: E.intro[0], solid: true });
    s.day++;
    s.time = E.hour;
    s.weather = 'clear';
    this.player.setLook(SISTERS[E.as].look);
    this.player.camDist = 8.5; this.player.camPitch = 0.32;
    this.enterDistrict(E.district, E.spawn, { quiet: true });
    this.saveNow();
  }

  async finishEpilogue() {
    const r = this.route, s = this.state;
    await this.ui.cards(r.epilogue.cards, { title: `${SISTERS[r.epilogue.as].name}`, hand: true });
    await this.ending();
  }

  async ending() {
    const s = this.state, r = this.route;
    s.ended = true;
    const friends = r.npcs.filter((n) => (s.npcs[n.id]?.rel || 0) >= 3).length;
    const photos = s.memories.filter((m) => m.id.startsWith('photo_')).length;
    const visitedAll = r.districts.every((d) => s.visited[d.id]);
    const trueEnd = friends >= 7 && visitedAll && photos >= 6;
    if (trueEnd) await this.ui.cards(r.trueEnding, { title: 'True Ending — Convergence', solid: true });
    const meta = loadMeta();
    meta.completed[r.id] = true;
    if (trueEnd) meta.trueEnding[r.id] = true;
    if (s.challenge.speedrun && (!meta.best[r.id] || s.playMs < meta.best[r.id])) meta.best[r.id] = s.playMs;
    saveMeta(meta);
    clearSave();
    const clues = Object.keys(s.clues).length, totalClues = Object.keys(r.clues).length;
    const gems = Object.keys(s.gems).length, totalGems = this.allPois().filter((p) => p.type === 'gem' && !p.requires).length;
    const el = document.createElement('div');
    el.className = 'cards solid';
    el.innerHTML = `<div class="inner"><h1>${trueEnd ? 'True Ending ✦' : 'The End'}</h1><p style="animation:none">${esc(SISTERS[r.protagonist].name)} &amp; ${esc(SISTERS[r.sister].name)} — ${esc(r.city)}</p>
      <div class="stats">
        <div><span>Days</span><b>${s.day}</b></div>
        <div><span>Clues found</span><b>${clues}/${totalClues}</b></div>
        <div><span>Close friends (3♥+)</span><b>${friends}/${r.npcs.length}</b></div>
        <div><span>Memories</span><b>${s.memories.length}</b></div>
        <div><span>Hidden gems</span><b>${gems}/${totalGems}</b></div>
        <div><span>Neighbourhoods</span><b>${Object.keys(s.visited).length}/${r.districts.length}</b></div>
        <div><span>Lanterns reached in time</span><b>${r.pursuit.steps.length - s.late}/${r.pursuit.steps.length}</b></div>
        <div><span>Play time</span><b>${fmtMs(s.playMs)}</b></div>
      </div>
      ${trueEnd ? '' : '<p style="font-size:14px;color:#b8b2a6;animation:none">A truer ending waits for those who make seven close friends, visit every neighbourhood and take six great photographs.</p>'}
      <div class="row" style="justify-content:center;display:flex;gap:10px;margin-top:20px">${r.id === 'nyc' ? '<button class="btn primary" data-a="ng">Play Sophie\'s story — London (New Game+)</button>' : ''}<button class="btn" data-a="title">Back to title</button></div></div>`;
    const close = this.ui._overlay(el);
    await new Promise((resolve) => {
      el.querySelectorAll('button').forEach((b) => { b.onclick = () => { close(); resolve(b.dataset.a); if (b.dataset.a === 'ng') this._ng = true; }; });
    });
    if (this._ng) {
      this._ng = false;
      await this.newGame('london', { speedrun: s.challenge.speedrun });
    } else this.quitToTitle();
  }

  saveNow() {
    if (!this.state || this.state.ended || this.mode !== 'play') return;
    saveGame(this.state);
  }
}

function angleDelta(a, b) {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}
function lighten(hex) {
  const c = new THREE.Color(hex);
  c.lerp(new THREE.Color(0xffffff), 0.45);
  return '#' + c.getHexString();
}
function listJoin(a) {
  const u = [...new Set(a)];
  if (u.length <= 1) return u.join('');
  return u.slice(0, -1).join(', ') + ' and ' + u[u.length - 1];
}
function fmtMs(ms) {
  const t = Math.floor(ms / 1000);
  const hh = Math.floor(t / 3600), mm = Math.floor((t % 3600) / 60), ss = t % 60;
  return `${hh ? hh + ':' : ''}${String(mm).padStart(hh ? 2 : 1, '0')}:${String(ss).padStart(2, '0')}`;
}
