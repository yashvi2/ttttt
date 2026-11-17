// A single 3D object for a bento tile, in the style of the reset board's
// chrome trophy: a chrome vase of tulips on a copper pedestal, turning slowly
// on a transparent background. Loaded on demand.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { lathe, tulip } from './stillLife.js';

export function mountTrophy(canvas, { onReady } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture; pmrem.dispose();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);

  const key = new THREE.DirectionalLight(0xfff1dc, 1.6); key.position.set(-2, 4, 3); key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024); key.shadow.radius = 8;
  Object.assign(key.shadow.camera, { left: -1.5, right: 1.5, top: 1.5, bottom: -1.5, near: 0.5, far: 12 });
  scene.add(key, new THREE.HemisphereLight(0xffffff, 0xd9cbb8, 0.4));

  const chrome = new THREE.MeshStandardMaterial({ color: 0xe6e6ea, roughness: 0.1, metalness: 1 });
  const copper = new THREE.MeshStandardMaterial({ color: 0xb87a5a, roughness: 0.3, metalness: 0.9 });
  const obj = new THREE.Group();
  const cast = (m) => { m.castShadow = true; return m; };
  // copper pedestal and chrome stem, like a trophy
  obj.add(cast(new THREE.Mesh(lathe([[0, 0], [0.42, 0], [0.42, 0.06], [0.3, 0.16], [0.16, 0.2], [0, 0.2]]), copper)));
  const stem = cast(new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.32, 32), chrome)); stem.position.y = 0.36; obj.add(stem);
  const collar = cast(new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.08, 32), copper)); collar.position.y = 0.55; obj.add(collar);
  const vase = cast(new THREE.Mesh(lathe([[0, 0], [0.18, 0], [0.3, 0.14], [0.28, 0.34], [0.16, 0.5], [0.14, 0.6], [0.17, 0.66], [0.15, 0.67]]), chrome));
  vase.position.y = 0.59; obj.add(vase);
  const tulips = [tulip(0xe9946a, 0.62, -0.2), tulip(0xf3ece0, 0.78, 0.02), tulip(0x7a2a2e, 0.58, 0.22)];
  tulips.forEach((t, i) => { t.scale.setScalar(1.25); t.position.set((i - 1) * 0.04, 1.18, 0); obj.add(t); });
  obj.position.y = -1.05; scene.add(obj);

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), new THREE.ShadowMaterial({ color: 0x2b1418, opacity: 0.18 }));
  ground.rotation.x = -Math.PI / 2; ground.position.y = -1.05; ground.receiveShadow = true; scene.add(ground);

  const resize = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h;
    // fit the ~2.4-unit-tall object whatever the tile shape
    const fitH = 2.7, dist = Math.max(fitH / (2 * Math.tan((camera.fov * Math.PI) / 360)), (fitH * 0.36) / (camera.aspect * Math.tan((camera.fov * Math.PI) / 360)));
    camera.position.set(0, 0.5, dist); camera.lookAt(0, 0.05, 0); camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize); ro.observe(canvas);

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let mx = 0, cx = 0, raf = 0, visible = true; const t0 = performance.now();
  const onMove = (e) => { const r = canvas.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width - 0.5; };
  window.addEventListener('pointermove', onMove, { passive: true });
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !raf) raf = requestAnimationFrame(tick); });
  io.observe(canvas);
  function tick(now) {
    const t = (now - t0) / 1000;
    cx += (mx - cx) * 0.05;
    obj.rotation.y = (reduce ? 0.4 : t * 0.35) + cx * 0.8;
    if (!reduce) tulips.forEach((tp, i) => { tp.rotation.z = Math.sin(t * (0.8 + i * 0.17) + i) * 0.05; });
    renderer.render(scene, camera);
    raf = visible ? requestAnimationFrame(tick) : 0;
  }
  raf = requestAnimationFrame(tick);
  onReady && onReady();
  return () => {
    cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); window.removeEventListener('pointermove', onMove);
    scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach((m) => m.dispose()); });
    renderer.dispose();
  };
}
