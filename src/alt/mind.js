// Maya's mental state, and how it bends what the player sees and hears.
import * as THREE from 'three';

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export function freshMind() {
  return {
    breakdown: 34, // 0-100. At 100 Maya collapses.
    obsession: 58, // the search. Sharpens hunches, feeds false leads.
    isolation: 42, // days without people
    acceptance: 0, // making peace with not knowing
    pressure: 34, // how hunted Lily feels (hidden from the player)
    neglect: 0.28, // the apartment, 0-1
    medsDay: 0, // last day meds were taken
    medsMissed: 0,
    medsPlus: false, // Dr. Rao adjusted the dose
    groundBoost: false, // Dr. Rao practised grounding with her
    socialToday: false,
    cleanedToday: false,
    groundUses: 0,
    flyers: { brooklyn: 14, village: 4, midtown: 2 },
    flyersDay: 0,
    postersDown: false,
    sessions: 0,
    lastSession: 0,
    letter: null, // { tone, day, delivered }
    burned: {}, // sighting/diner id -> day she can be found again
    faceToFace: false,
    peak: 34,
  };
}

/** Screen-space distortion, driven by breakdown (uBreak) and short spikes (uGlitch). */
export const DistortShader = {
  uniforms: {
    tDiffuse: { value: null },
    uBreak: { value: 0 },
    uGlitch: { value: 0 },
    uCalm: { value: 0 },
    uTime: { value: 0 },
    uRes: { value: new THREE.Vector2(1, 1) },
  },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uBreak; uniform float uGlitch; uniform float uCalm; uniform float uTime; uniform vec2 uRes;
    varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      float b = uBreak * (1.0 - uCalm * 0.7);
      float gl = uGlitch * (1.0 - uCalm);
      vec2 uv = vUv;
      // Tearing bands during glitches (and rarely at high breakdown).
      float row = floor(uv.y * 48.0);
      float tick = floor(uTime * 16.0);
      float tear = step(1.0 - (gl * 0.35 + smoothstep(0.75, 1.0, b) * 0.04), hash(vec2(row, tick)));
      uv.x += tear * (hash(vec2(tick, row)) - 0.5) * 0.09;
      // The world breathes when things get bad.
      uv += vec2(sin(uv.y * 11.0 + uTime * 1.1), cos(uv.x * 9.0 + uTime * 0.9)) * 0.003 * smoothstep(0.45, 1.0, b);
      vec2 d = uv - 0.5;
      float ca = 0.0008 + b * b * 0.007 + gl * 0.014;
      vec3 col = vec3(texture2D(tDiffuse, uv + d * ca).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, uv - d * ca).b);
      // Edge blur grows with breakdown.
      float r = smoothstep(0.3, 1.0, b) * (0.0015 + length(d) * 0.012);
      if (r > 0.0002) {
        col += texture2D(tDiffuse, uv + vec2(r, 0.0)).rgb + texture2D(tDiffuse, uv - vec2(r, 0.0)).rgb;
        col += texture2D(tDiffuse, uv + vec2(0.0, r)).rgb + texture2D(tDiffuse, uv - vec2(0.0, r)).rgb;
        col /= 5.0;
      }
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(col, vec3(l), clamp(b * 0.9, 0.0, 0.88));
      col *= mix(vec3(1.0), vec3(0.9, 0.96, 1.08), b);
      float v = smoothstep(0.95, 0.2, length(d) * (1.0 + b * 0.7));
      col *= mix(1.0, v, 0.3 + b * 0.55);
      col += (hash(vUv * uRes + uTime * 61.0) - 0.5) * (0.01 + b * 0.035 + gl * 0.1);
      col *= 1.0 - gl * 0.22 * step(0.5, fract(vUv.y * uRes.y * 0.5));
      gl_FragColor = vec4(col, 1.0);
    }`,
};

const LABEL = { breakdown: 'Breakdown', obsession: 'Obsession', isolation: 'Isolation', acceptance: 'Acceptance' };

export class Mind {
  constructor(game) {
    this.g = game;
    this.glitch = 0;
    this.calm = 0;
    this.beatT = 0;
  }
  get m() { return this.g.state.mind; }
  get s() { return this.g.state; }

  onMeds() { return this.m.medsDay === this.s.day; }
  level() { return clamp((this.m.breakdown - 18) / 80, 0, 1); }
  band() { const b = this.m.breakdown; return b < 45 ? 'stable' : b < 70 ? 'shaky' : 'unstable'; }

  /** Change a stat. Big changes are shown to the player. */
  add(key, delta, { quiet = false } = {}) {
    const m = this.m;
    if (key === 'neglect') { m.neglect = clamp(m.neglect + delta, 0, 1); return; }
    const before = m[key];
    m[key] = clamp(before + delta, 0, 100);
    const d = Math.round(m[key] - before);
    if (!quiet && LABEL[key] && Math.abs(d) >= 3) {
      const up = d > 0;
      const good = key === 'acceptance' ? up : !up;
      this.g.ui.toast(`${LABEL[key]} ${up ? '+' : ''}${d}`, good ? '🫧' : '⚡', 2400);
    }
    if (key === 'breakdown') {
      m.peak = Math.max(m.peak, m.breakdown);
      if (delta >= 5) this.spike(Math.min(1, delta / 14));
      if (m.breakdown >= 100) this.g.collapse();
    }
  }
  apply(delta) { for (const [k, v] of Object.entries(delta || {})) this.add(k, v); }
  spike(v = 0.6) { this.glitch = Math.max(this.glitch, v); }

  /** Called with game hours as time passes while Maya is awake. */
  hours(h) {
    const m = this.m, n = this.s.needs;
    let gain = 0.22 * (0.5 + m.obsession / 100) * (1 + m.isolation / 110);
    if (this.onMeds()) gain *= m.medsPlus ? 0.45 : 0.55;
    if (n.hunger < 20) gain *= 1.6;
    if (n.energy < 20) gain *= 1.5;
    if (m.neglect > 0.6) gain *= 1.2;
    this.add('breakdown', gain * h, { quiet: true });
    // Lost time: the worst hours stop being remembered.
    if (m.breakdown >= 85 && Math.random() < 0.05 * h && !this.g.inside) this.g.blackout();
  }

  /** Daily bookkeeping, run when a new day starts. */
  newDay() {
    const m = this.m;
    if (m.medsDay === this.s.day - 1) { m.medsMissed = 0; this.add('obsession', -5, { quiet: true }); }
    else {
      m.medsMissed++;
      if (m.medsMissed >= 2) { this.add('breakdown', 4, { quiet: true }); this.add('obsession', 6, { quiet: true }); }
    }
    this.add('isolation', m.socialToday ? -3 : 7, { quiet: true });
    let neglect = 0.035 + (m.breakdown > 50 ? 0.04 : 0) + (m.obsession > 60 ? 0.02 : 0);
    if (m.cleanedToday) neglect -= 0.02;
    this.add('neglect', neglect);
    const flyersUp = Object.values(m.flyers).reduce((a, b) => a + b, 0);
    this.add('pressure', -2 + (flyersUp > 10 ? 2 : 0) + (this.s.day - m.flyersDay < 3 ? 3 : 0), { quiet: true });
    m.socialToday = false;
    m.cleanedToday = false;
    m.groundUses = 0;
  }

  /** Per-frame effects: shader uniforms, sound, heartbeat. */
  frame(dt, pass) {
    const lvl = this.level();
    this.glitch = Math.max(0, this.glitch - dt * 1.4);
    this.calm = Math.max(0, this.calm - dt * 0.35);
    if (pass) {
      const u = pass.uniforms;
      u.uBreak.value += (lvl - u.uBreak.value) * Math.min(1, dt * 2);
      u.uGlitch.value = this.glitch;
      u.uCalm.value = this.calm;
      u.uTime.value += dt;
    }
    const a = this.g.audio;
    if (!a.ctx) return;
    a.warble = lvl * (1 - this.calm);
    this._audioT = (this._audioT || 0) - dt;
    if (this._audioT <= 0) {
      this._audioT = 0.5;
      a.setMusicFilter(20000 * Math.pow(1 - lvl * 0.92, 2) + 600);
      a.setTinnitus(clamp((this.m.breakdown - 72) / 28, 0, 1) * (1 - this.calm));
    }
    if (this.m.breakdown > 58 && this.g.mode === 'play') {
      this.beatT -= dt;
      if (this.beatT <= 0) {
        this.beatT = 60 / (62 + (this.m.breakdown - 58) * 1.4);
        a.heartbeat(0.05 + (this.m.breakdown - 58) / 42 * 0.12);
      }
    }
  }
}
