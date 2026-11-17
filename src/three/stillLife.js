// 3D still life for the home hero: blue wall, cream floor, a framed portrait
// and sea painting, tulips in a pink vase on a stool, a steaming coffee and an
// orange floor lamp. Loaded on demand (dynamic import) so three.js never
// weighs on the rest of the site.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// reset-board palette: dusty blue, cream, maroon, peach and mauve; objects in chrome, copper and soft clay
const COL = { wall: 0x93b3bc, floor: 0xf1ece1, pink: 0xb9a3b4, orange: 0xe9946a, wood: 0xb87a5a, woodDark: 0x8e5a44, cream: 0xf3ece0, coffee: 0x3b1b1d, stem: 0x6f8a6a, frame: 0x3b1b1d, mount: 0xf7f2e8 };

function seaTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 360;
  const g = c.getContext('2d');
  const sky = g.createLinearGradient(0, 0, 0, 360); sky.addColorStop(0, '#dcedf3'); sky.addColorStop(1, '#bfe0ec');
  g.fillStyle = sky; g.fillRect(0, 0, 512, 360);
  g.fillStyle = '#fff3d6'; g.beginPath(); g.arc(380, 96, 42, 0, Math.PI * 2); g.fill();
  [[210, '#7fb7cf'], [250, '#4f8fb0'], [292, '#2f6f95']].forEach(([y, col], i) => {
    g.fillStyle = col; g.beginPath(); g.moveTo(0, y);
    for (let x = 0; x <= 512; x += 8) g.lineTo(x, y + Math.sin(x / (40 + i * 12) + i) * (10 - i * 2));
    g.lineTo(512, 360); g.lineTo(0, 360); g.closePath(); g.fill();
  });
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function lathe(points, segments = 64) {
  return new THREE.LatheGeometry(points.map(([x, y]) => new THREE.Vector2(x, y)), segments);
}

function frame(w, h, map) {
  const g = new THREE.Group();
  const border = 0.07, mount = 0.12, depth = 0.06;
  const outer = new THREE.Mesh(new THREE.BoxGeometry(w + 2 * (border + mount), h + 2 * (border + mount), depth), new THREE.MeshStandardMaterial({ color: COL.frame, roughness: 0.5 }));
  const mnt = new THREE.Mesh(new THREE.PlaneGeometry(w + 2 * mount, h + 2 * mount), new THREE.MeshStandardMaterial({ color: COL.mount, roughness: 0.9 }));
  mnt.position.z = depth / 2 + 0.001;
  const art = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map, roughness: 0.85 }));
  art.position.z = depth / 2 + 0.002;
  [outer, mnt, art].forEach((m) => { m.castShadow = true; g.add(m); });
  return g;
}

export function tulip(color, height, lean) {
  const g = new THREE.Group();
  const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(lean * 0.4, height * 0.5, 0.02), new THREE.Vector3(lean, height, 0)]);
  const stem = new THREE.Mesh(new THREE.TubeGeometry(curve, 24, 0.018, 8), new THREE.MeshStandardMaterial({ color: COL.stem, roughness: 0.6 }));
  stem.castShadow = true; g.add(stem);
  const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 12), new THREE.MeshStandardMaterial({ color: 0x5b9a64, roughness: 0.6 }));
  leaf.scale.set(0.35, 1.5, 0.12); leaf.position.set(lean * 0.2 - 0.05, height * 0.3, 0); leaf.rotation.z = 0.5; leaf.castShadow = true; g.add(leaf);
  const head = new THREE.Group(); head.position.copy(curve.getPoint(1));
  const petalMat = new THREE.MeshPhysicalMaterial({ color, roughness: 0.45, clearcoat: 0.3, side: THREE.DoubleSide });
  for (let i = 0; i < 6; i++) {
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.11, 20, 16, 0, Math.PI), petalMat);
    p.scale.set(0.55, 1.15, 0.55);
    p.rotation.y = (i / 6) * Math.PI * 2 + (i % 2 ? 0.25 : 0);
    p.rotation.x = i % 2 ? -0.18 : -0.08;
    p.position.y = 0.09; p.castShadow = true; head.add(p);
  }
  g.add(head);
  return g;
}

export function mountStillLife(canvas, { portraitUrl, onReady }) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.95;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(COL.wall); scene.background.convertSRGBToLinear();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture; pmrem.dispose();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);

  // room
  // Wall and floor are drawn in their exact brand colours (unlit, no tone
  // mapping); a shadow-only layer on each adds the soft contact shadows.
  const flat = (color) => new THREE.MeshBasicMaterial({ color, toneMapped: false });
  const shadowOnly = () => new THREE.ShadowMaterial({ color: 0x3b1b1d, opacity: 0.16 });
  const plane = (mat, rx, pos) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(40, 20), mat); m.rotation.x = rx; m.position.copy(pos); scene.add(m); return m; };
  plane(flat(COL.wall), 0, new THREE.Vector3(0, 10, -1.21));
  plane(shadowOnly(), 0, new THREE.Vector3(0, 10, -1.2)).receiveShadow = true;
  plane(flat(COL.floor), -Math.PI / 2, new THREE.Vector3(0, -0.001, 8.8));
  plane(shadowOnly(), -Math.PI / 2, new THREE.Vector3(0, 0, 8.8)).receiveShadow = true;

  // lights
  scene.add(new THREE.HemisphereLight(0xfff4e6, 0x8fa9b0, 0.5));
  const sun = new THREE.DirectionalLight(0xfff1dc, 1.8);
  sun.position.set(-4, 7, 6); sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048); sun.shadow.radius = 6; sun.shadow.bias = -0.0004;
  Object.assign(sun.shadow.camera, { left: -6, right: 6, top: 6, bottom: -2, near: 1, far: 30 });
  scene.add(sun);

  // wall art
  const tex = new THREE.TextureLoader().load(portraitUrl, (t) => {
    t.colorSpace = THREE.SRGBColorSpace;
    // crop like object-fit: cover into the 4:5 frame, biased toward the face
    const ia = t.image.width / t.image.height, fa = 1.05 / 1.31;
    if (ia > fa) { t.repeat.set(fa / ia, 1); t.offset.set((1 - fa / ia) / 2, 0); }
    else { const r = ia / fa; t.repeat.set(1, r); t.offset.set(0, (1 - r) * 0.72); }
    t.needsUpdate = true;
  });
  const portrait = frame(1.05, 1.31, tex); portrait.position.set(-0.25, 1.95, -1.15); portrait.rotation.z = -0.025; scene.add(portrait);
  const sea = frame(0.78, 0.55, seaTexture()); sea.position.set(1.25, 2.1, -1.15); sea.rotation.z = 0.03; scene.add(sea);

  const wood = new THREE.MeshStandardMaterial({ color: COL.wood, roughness: 0.35, metalness: 0.85 });
  const woodDark = new THREE.MeshStandardMaterial({ color: 0xd9d9de, roughness: 0.18, metalness: 1 });
  const cast = (m) => { m.castShadow = true; m.receiveShadow = true; return m; };

  // stool + vase + tulips (left)
  const left = new THREE.Group();
  const seat = cast(new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.07, 48), wood)); seat.position.y = 0.72; left.add(seat);
  [[-0.24, -0.16], [0.24, -0.16], [0, 0.26]].forEach(([x, z]) => { const l = cast(new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.7, 16), woodDark)); l.position.set(x, 0.35, z); left.add(l); });
  const vase = cast(new THREE.Mesh(lathe([[0, 0], [0.16, 0], [0.22, 0.12], [0.2, 0.3], [0.13, 0.42], [0.11, 0.5], [0.13, 0.54], [0.12, 0.55]]), new THREE.MeshStandardMaterial({ color: 0xe6e6ea, roughness: 0.12, metalness: 1 })));
  vase.position.y = 0.755; left.add(vase);
  const tulips = [tulip(0xe9946a, 0.62, -0.18), tulip(0xf3ece0, 0.75, 0.02), tulip(0x7a2a2e, 0.58, 0.2)];
  tulips.forEach((t, i) => { t.position.set((i - 1) * 0.03, 1.22, 0); left.add(t); });
  left.position.set(-2.55, 0, 0.6); scene.add(left);

  // side table + coffee (right)
  const right = new THREE.Group();
  const top = cast(new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.05, 48), wood)); top.position.y = 0.62; right.add(top);
  const post = cast(new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.6, 16), woodDark)); post.position.y = 0.31; right.add(post);
  const foot = cast(new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.03, 32), woodDark)); foot.position.y = 0.015; right.add(foot);
  const ceramic = new THREE.MeshPhysicalMaterial({ color: COL.pink, roughness: 0.55, clearcoat: 0.25, sheen: 0.4 });
  const mug = cast(new THREE.Mesh(lathe([[0, 0], [0.1, 0], [0.115, 0.02], [0.12, 0.2], [0.11, 0.2], [0.105, 0.03], [0, 0.03]]), ceramic)); mug.position.y = 0.645; right.add(mug);
  const handle = cast(new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.015, 12, 32, Math.PI * 1.2), ceramic)); handle.position.set(0.13, 0.75, 0); handle.rotation.z = -Math.PI * 0.6; right.add(handle);
  const coffee = new THREE.Mesh(new THREE.CircleGeometry(0.105, 32), new THREE.MeshStandardMaterial({ color: COL.coffee, roughness: 0.2 })); coffee.rotation.x = -Math.PI / 2; coffee.position.y = 0.825; right.add(coffee);
  const sc = document.createElement('canvas'); sc.width = sc.height = 64;
  const sg = sc.getContext('2d'), rg = sg.createRadialGradient(32, 32, 0, 32, 32, 32);
  rg.addColorStop(0, 'rgba(255,255,255,1)'); rg.addColorStop(1, 'rgba(255,255,255,0)'); sg.fillStyle = rg; sg.fillRect(0, 0, 64, 64);
  const steamTex = new THREE.CanvasTexture(sc);
  const puffs = [0, 1, 2, 3, 4, 5, 6].map((i) => { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: steamTex, transparent: true, opacity: 0, depthWrite: false })); s.userData.t = i / 7; right.add(s); return s; });
  right.position.set(1.95, 0, 0.8); scene.add(right);

  // floor lamp (far right) with a warm glow
  const lamp = new THREE.Group();
  const orange = new THREE.MeshStandardMaterial({ color: 0xdedee3, roughness: 0.15, metalness: 1 });
  const base = cast(new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.28, 0.05, 40), orange)); base.position.y = 0.025; lamp.add(base);
  const poleCurve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0.05, 0), new THREE.Vector3(0.02, 1.4, 0), new THREE.Vector3(-0.05, 2.3, 0), new THREE.Vector3(-0.35, 2.55, 0.05)]);
  lamp.add(cast(new THREE.Mesh(new THREE.TubeGeometry(poleCurve, 48, 0.022, 10), orange)));
  const shade = cast(new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.32, 40, 1, true), new THREE.MeshStandardMaterial({ color: 0x7a2a2e, roughness: 0.6, side: THREE.DoubleSide })));
  shade.position.set(-0.45, 2.45, 0.05); shade.rotation.z = 0.9; lamp.add(shade);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffe2b8 })); bulb.position.set(-0.5, 2.38, 0.05); lamp.add(bulb);
  const glow = new THREE.PointLight(0xffb070, 3, 4, 1.6); glow.position.copy(bulb.position); lamp.add(glow);
  lamp.position.set(3.2, 0, 0.1); scene.add(lamp);

  // layout: keep everything in frame from wide desktop to tall phone
  const resize = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h;
    const narrow = camera.aspect < 0.9;
    camera.fov = narrow ? 44 : 32;
    left.position.x = narrow ? -1.05 : -2.55; right.position.x = narrow ? 1.0 : 1.95;
    left.scale.setScalar(narrow ? 0.8 : 1); right.scale.setScalar(narrow ? 0.85 : 1);
    lamp.visible = !narrow; sea.visible = !narrow;
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize); ro.observe(canvas);

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let mx = 0, my = 0, cx = 0, cy = 0, raf = 0, visible = true, t0 = performance.now();
  const onMove = (e) => { const r = canvas.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width - 0.5; my = (e.clientY - r.top) / r.height - 0.5; };
  window.addEventListener('pointermove', onMove, { passive: true });
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !raf) raf = requestAnimationFrame(tick); });
  io.observe(canvas);

  function tick(now) {
    const t = (now - t0) / 1000;
    cx += (mx - cx) * 0.05; cy += (my - cy) * 0.05;
    const narrow = camera.aspect < 0.9;
    camera.position.set(cx * 0.6, (narrow ? 1.9 : 1.7) - cy * 0.25, narrow ? 9.5 : 8.2);
    camera.lookAt(0, narrow ? 1.55 : 1.45, 0);
    if (!reduce) {
      tulips.forEach((tp, i) => { tp.rotation.z = Math.sin(t * (0.8 + i * 0.17) + i) * 0.06; });
      puffs.forEach((p) => { const k = (t * 0.35 + p.userData.t) % 1; p.position.set(Math.sin(k * 7 + p.userData.t * 5) * 0.03, 0.85 + k * 0.6, 0); p.scale.setScalar(0.12 + k * 0.22); p.material.opacity = Math.sin(k * Math.PI) * 0.45; });
      glow.intensity = 3 + Math.sin(t * 2) * 0.15;
    }
    renderer.render(scene, camera);
    raf = visible ? requestAnimationFrame(tick) : 0;
  }
  raf = requestAnimationFrame(tick);
  onReady && onReady();

  return () => {
    cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); window.removeEventListener('pointermove', onMove);
    scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach((m) => { if (m.map) m.map.dispose(); m.dispose(); }); });
    renderer.dispose();
  };
}
