import * as THREE from 'three';

// Uniforms shared by every procedural material so the time-of-day system
// can drive window lights and wet streets from one place.
export const shared = {
  uNight: { value: 0 },
  uTime: { value: 0 },
};

const cache = new Map();

/**
 * Facade material: windows are generated in the fragment shader from world
 * position, so every building of any size shares one material and windows
 * never stretch. At night a random subset of windows glows.
 */
export function facadeMaterial(opts = {}) {
  const key = JSON.stringify(opts);
  if (cache.has(key)) return cache.get(key);
  const {
    color = 0xffffff, floorH = 3.6, winW = 2.4, fill = 0.55, glass = 0x1e2630,
    roughness = 0.88, metalness = 0.0, lit = 0.35, warm = 0xffc27a, groundFloor = 3.4,
  } = opts;
  const m = new THREE.MeshStandardMaterial({ color, roughness, metalness });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uNight = shared.uNight;
    sh.uniforms.uFloorH = { value: floorH };
    sh.uniforms.uWinW = { value: winW };
    sh.uniforms.uFill = { value: fill };
    sh.uniforms.uGlass = { value: new THREE.Color(glass) };
    sh.uniforms.uWarm = { value: new THREE.Color(warm) };
    sh.uniforms.uLit = { value: lit };
    sh.uniforms.uGround = { value: groundFloor };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nvarying vec3 vWN;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        mat4 fm = modelMatrix;
        #ifdef USE_INSTANCING
          fm = modelMatrix * instanceMatrix;
        #endif
        vWPos = (fm * vec4(position, 1.0)).xyz;
        vWN = normalize(mat3(fm) * normal);`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vWPos; varying vec3 vWN;
        uniform float uNight; uniform float uFloorH; uniform float uWinW; uniform float uFill;
        uniform vec3 uGlass; uniform vec3 uWarm; uniform float uLit; uniform float uGround;
        float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float winMask = 0.0; float winLit = 0.0;
        if (abs(vWN.y) < 0.5 && vWPos.y > uGround) {
          float u = abs(vWN.x) > 0.5 ? vWPos.z : vWPos.x;
          vec2 cell = vec2(u / uWinW, (vWPos.y - uGround) / uFloorH);
          vec2 f = fract(cell);
          vec2 w = fwidth(cell) * 0.8 + 0.001;
          float a = 0.5 - uFill * 0.5; float b = 0.5 + uFill * 0.5;
          float mx = smoothstep(a - w.x, a + w.x, f.x) * (1.0 - smoothstep(b - w.x, b + w.x, f.x));
          float my = smoothstep(0.22 - w.y, 0.22 + w.y, f.y) * (1.0 - smoothstep(0.84 - w.y, 0.84 + w.y, f.y));
          winMask = mx * my;
          vec2 id = floor(cell) + vec2(floor(vWN.x * 3.0) * 17.0, floor(vWN.z * 3.0) * 31.0);
          winLit = step(1.0 - uLit, h21(id + floor(vWPos.xz / 40.0)));
          diffuseColor.rgb = mix(diffuseColor.rgb, uGlass, winMask * 0.9);
        } else if (abs(vWN.y) < 0.5) {
          diffuseColor.rgb *= 0.72;
        }`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.32, winMask);`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance += uWarm * winMask * winLit * uNight * 1.7;`);
  };
  m.customProgramCacheKey = () => 'facade' + key;
  cache.set(key, m);
  return m;
}

export function std(color, roughness = 0.8, metalness = 0, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });
}

// Emissive material whose glow follows night factor (lamps, signs).
export function glowMaterial(color, base = 0.25) {
  const m = new THREE.MeshStandardMaterial({ color: 0x111111, emissive: color, emissiveIntensity: 1 });
  m.userData.nightGlow = base;
  return m;
}

/** Draws a sign onto a canvas and returns a texture. */
export function signTexture(text, { bg = '#1d2b3a', fg = '#f6e7c8', font = 'Georgia, serif', w = 512, h = 128, border = null } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  if (border) { g.strokeStyle = border; g.lineWidth = 8; g.strokeRect(8, 8, w - 16, h - 16); }
  g.fillStyle = fg;
  let size = h * 0.5;
  g.font = `600 ${size}px ${font}`;
  while (g.measureText(text).width > w * 0.88 && size > 12) { size -= 2; g.font = `600 ${size}px ${font}`; }
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, w / 2, h / 2 + 2);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
