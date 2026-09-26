import * as THREE from 'three';
import { shared } from './materials.js';

const C = (h) => new THREE.Color(h);

// Time-of-day keyframes (hour -> look). Colours are interpolated between keys.
const KEYS = [
  { h: 0, top: C(0x050814), bottom: C(0x141a2e), sun: C(0x6677aa), sunI: 0.12, hemi: 0.18, fog: C(0x0d1222), night: 1 },
  { h: 5.4, top: C(0x0a1024), bottom: C(0x1c2238), sun: C(0x6677aa), sunI: 0.12, hemi: 0.2, fog: C(0x151a2c), night: 1 },
  { h: 6.6, top: C(0x39508a), bottom: C(0xf2a37a), sun: C(0xffa56b), sunI: 0.9, hemi: 0.45, fog: C(0xc99a8a), night: 0.55 },
  { h: 8.2, top: C(0x4f86c9), bottom: C(0xcfe0ee), sun: C(0xfff0d8), sunI: 2.3, hemi: 0.75, fog: C(0xbfd2e2), night: 0 },
  { h: 15.8, top: C(0x4a82c8), bottom: C(0xd6e3ee), sun: C(0xfff3e0), sunI: 2.4, hemi: 0.75, fog: C(0xc4d4e2), night: 0 },
  { h: 17.6, top: C(0x5474b0), bottom: C(0xffc28a), sun: C(0xffb066), sunI: 2.0, hemi: 0.6, fog: C(0xe4b894), night: 0.15 },
  { h: 18.6, top: C(0x3a3f7a), bottom: C(0xff8a5c), sun: C(0xff7a48), sunI: 1.1, hemi: 0.42, fog: C(0xb27070), night: 0.55 },
  { h: 19.6, top: C(0x121a3c), bottom: C(0x4a3656), sun: C(0x8888cc), sunI: 0.25, hemi: 0.25, fog: C(0x2b2440), night: 0.95 },
  { h: 24, top: C(0x050814), bottom: C(0x141a2e), sun: C(0x6677aa), sunI: 0.12, hemi: 0.18, fog: C(0x0d1222), night: 1 },
];

function sample(hour) {
  let a = KEYS[0], b = KEYS[KEYS.length - 1];
  for (let i = 0; i < KEYS.length - 1; i++) {
    if (hour >= KEYS[i].h && hour <= KEYS[i + 1].h) { a = KEYS[i]; b = KEYS[i + 1]; break; }
  }
  const t = (hour - a.h) / Math.max(0.0001, b.h - a.h);
  const lerp = (x, y) => x + (y - x) * t;
  return {
    top: a.top.clone().lerp(b.top, t), bottom: a.bottom.clone().lerp(b.bottom, t),
    sun: a.sun.clone().lerp(b.sun, t), fog: a.fog.clone().lerp(b.fog, t),
    sunI: lerp(a.sunI, b.sunI), hemi: lerp(a.hemi, b.hemi), night: lerp(a.night, b.night),
  };
}

export class Sky {
  constructor(scene, renderer, quality) {
    this.scene = scene;
    this.renderer = renderer;
    this.quality = quality;
    this.weather = 'clear';
    this.leaves = false;

    this.uniforms = {
      top: { value: new THREE.Color() }, bottom: { value: new THREE.Color() },
      sunDir: { value: new THREE.Vector3(0, 1, 0) }, sunColor: { value: new THREE.Color() },
      night: { value: 0 }, overcast: { value: 0 },
    };
    const skyMat = new THREE.ShaderMaterial({
      uniforms: this.uniforms, side: THREE.BackSide, depthWrite: false, fog: false,
      vertexShader: `varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform vec3 top; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; uniform float night; uniform float overcast;
        varying vec3 vDir;
        float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,37.719))) * 43758.5453); }
        void main(){
          vec3 d = normalize(vDir);
          float h = d.y;
          vec3 c = mix(bottom, top, pow(clamp(h, 0.0, 1.0), 0.55));
          float s = max(dot(d, normalize(sunDir)), 0.0);
          c += sunColor * (pow(s, 600.0) * 3.0 * (1.0 - overcast) + pow(s, 6.0) * 0.22);
          float st = step(0.9975, hash(floor(d * 320.0))) * night * smoothstep(0.05, 0.3, h) * (1.0 - overcast);
          c += vec3(st);
          if (h < 0.0) c = bottom * (1.0 + h * 0.6);
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`,
    });
    this.dome = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 16), skyMat);
    this.dome.renderOrder = -1;
    this.dome.frustumCulled = false;
    scene.add(this.dome);

    this.sunLight = new THREE.DirectionalLight(0xffffff, 2);
    this.sunLight.castShadow = quality === 'high';
    this.sunLight.shadow.mapSize.set(2048, 2048);
    const sc = this.sunLight.shadow.camera;
    sc.left = -70; sc.right = 70; sc.top = 70; sc.bottom = -70; sc.near = 1; sc.far = 400;
    this.sunLight.shadow.bias = -0.0004;
    this.sunLight.shadow.normalBias = 0.04;
    scene.add(this.sunLight, this.sunLight.target);

    this.hemi = new THREE.HemisphereLight(0xbfd6ff, 0x4a4036, 0.6);
    scene.add(this.hemi);

    scene.fog = new THREE.Fog(0xbfd2e2, 70, 460);

    // Environment map rendered from the sky only, refreshed as the hour changes.
    this.pmrem = new THREE.PMREMGenerator(renderer);
    this.envScene = new THREE.Scene();
    this.envDome = new THREE.Mesh(new THREE.SphereGeometry(10, 32, 16), skyMat);
    this.envScene.add(this.envDome);
    this.envRT = null;
    this.lastEnvHour = -10;

    this._buildRain();
    this._buildLeaves();
    this.hour = 12;
  }

  _buildRain() {
    const N = 2600;
    const pos = new Float32Array(N * 6);
    this.rainSeed = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      this.rainSeed[i * 3] = (Math.random() - 0.5) * 60;
      this.rainSeed[i * 3 + 1] = Math.random() * 30;
      this.rainSeed[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.rain = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0xaab8c8, transparent: true, opacity: 0.45 }));
    this.rain.frustumCulled = false;
    this.rain.visible = false;
    this.scene.add(this.rain);
  }

  _buildLeaves() {
    const N = 260;
    const g = new THREE.PlaneGeometry(0.18, 0.12);
    const m = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, roughness: 0.9 });
    this.leafMesh = new THREE.InstancedMesh(g, m, N);
    this.leafData = [];
    const cols = [0xd9772b, 0xb8452a, 0xe2b13c, 0x9c5a2a, 0xc98e2e];
    const col = new THREE.Color();
    for (let i = 0; i < N; i++) {
      this.leafData.push({ x: (Math.random() - 0.5) * 50, y: Math.random() * 14, z: (Math.random() - 0.5) * 50, s: Math.random() * 6.28, v: 0.5 + Math.random() * 0.6 });
      this.leafMesh.setColorAt(i, col.setHex(cols[i % cols.length]));
    }
    this.leafMesh.frustumCulled = false;
    this.leafMesh.visible = false;
    this.scene.add(this.leafMesh);
    this._dummy = new THREE.Object3D();
  }

  setWeather(weather, leaves) {
    this.weather = weather;
    this.leaves = leaves;
    this.rain.visible = weather === 'rain';
    this.leafMesh.visible = leaves && weather !== 'rain';
    this.lastEnvHour = -10;
  }

  get overcast() { return this.weather === 'rain' ? 0.75 : this.weather === 'cloudy' ? 0.45 : 0; }

  update(hour, focus, dt) {
    this.hour = hour;
    const s = sample(hour);
    const oc = this.overcast;
    const grey = new THREE.Color(0x8d949c).multiplyScalar(0.35 + 0.65 * (1 - s.night));
    s.top.lerp(grey, oc * 0.8); s.bottom.lerp(grey, oc * 0.7); s.fog.lerp(grey, oc * 0.75);
    const u = this.uniforms;
    u.top.value.copy(s.top); u.bottom.value.copy(s.bottom); u.sunColor.value.copy(s.sun);
    u.night.value = s.night; u.overcast.value = oc;

    // Sun path: rises in the east (+x), sets in the west, leaning south.
    const dayT = (hour - 6.6) / (18.9 - 6.6);
    const ang = Math.PI * THREE.MathUtils.clamp(dayT, -0.15, 1.15);
    const elev = Math.sin(ang);
    const dir = new THREE.Vector3(Math.cos(ang), Math.max(elev, 0.08) * 0.9, 0.45).normalize();
    if (dayT < 0 || dayT > 1) dir.set(-0.3, 0.8, 0.4).normalize(); // moonlight from high
    u.sunDir.value.copy(dir);

    this.sunLight.color.copy(s.sun);
    this.sunLight.intensity = s.sunI * (1 - oc * 0.65);
    this.sunLight.position.copy(focus).addScaledVector(dir, 160);
    this.sunLight.target.position.copy(focus);
    this.hemi.intensity = s.hemi * (1 + oc * 0.25);
    this.hemi.color.copy(s.top).lerp(new THREE.Color(0xffffff), 0.5);
    this.scene.fog.color.copy(s.fog);
    this.scene.fog.far = this.weather === 'rain' ? 260 : 460;
    this.scene.fog.near = this.weather === 'rain' ? 30 : 70;
    shared.uNight.value = s.night;
    this.night = s.night;

    this.dome.position.copy(focus);

    if (Math.abs(hour - this.lastEnvHour) > 0.25) {
      this.lastEnvHour = hour;
      if (this.envRT) this.envRT.dispose();
      this.envRT = this.pmrem.fromScene(this.envScene, 0.02);
      this.scene.environment = this.envRT.texture;
      this.scene.environmentIntensity = 0.35 + (1 - s.night) * 0.35;
    }

    if (this.rain.visible) {
      const p = this.rain.geometry.attributes.position.array;
      const t = shared.uTime.value;
      const n = this.rainSeed.length / 3;
      for (let i = 0; i < n; i++) {
        const x = focus.x + this.rainSeed[i * 3];
        const z = focus.z + this.rainSeed[i * 3 + 2];
        const y = 30 - ((this.rainSeed[i * 3 + 1] + t * 26) % 30);
        p[i * 6] = x; p[i * 6 + 1] = y; p[i * 6 + 2] = z;
        p[i * 6 + 3] = x + 0.08; p[i * 6 + 4] = y + 0.7; p[i * 6 + 5] = z;
      }
      this.rain.geometry.attributes.position.needsUpdate = true;
    }
    if (this.leafMesh.visible) {
      const d = this._dummy;
      const t = shared.uTime.value;
      this.leafData.forEach((L, i) => {
        L.y -= L.v * dt;
        if (L.y < 0.05) { L.y = 12 + Math.random() * 4; L.x = (Math.random() - 0.5) * 50; L.z = (Math.random() - 0.5) * 50; }
        d.position.set(focus.x + L.x + Math.sin(t * 0.8 + L.s) * 1.2, L.y, focus.z + L.z);
        d.rotation.set(t * L.v + L.s, t * 0.7 + L.s, 0);
        d.updateMatrix();
        this.leafMesh.setMatrixAt(i, d.matrix);
      });
      this.leafMesh.instanceMatrix.needsUpdate = true;
    }
  }
}

export function hourLabel(h) {
  if (h < 5) return 'Late night';
  if (h < 7) return 'Dawn';
  if (h < 11) return 'Morning';
  if (h < 14) return 'Midday';
  if (h < 17) return 'Afternoon';
  if (h < 19.2) return 'Golden hour';
  if (h < 21) return 'Evening';
  return 'Night';
}
