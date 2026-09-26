// Procedural audio: city ambience, generative music for each city, and UI sounds.
// Everything is synthesised with WebAudio so the game ships with no audio assets.

const NOTE = (n) => 440 * Math.pow(2, (n - 69) / 12);

// "Paper Lanterns" — the song the sisters wrote as kids. MIDI note, beats.
export const LANTERNS = [
  [69, 1], [72, 1], [74, 2], [76, 1], [74, 1], [72, 2],
  [69, 1], [67, 1], [69, 2], [72, 1], [74, 1], [69, 3],
];

export class Audio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.musicVol = 0.5;
    this.ambVol = 0.6;
    this.style = 'nyc';
    this.mood = 'day';
    this.nextBeat = 0;
    this.beat = 0;
  }

  start() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain(); this.master.gain.value = this.enabled ? 0.8 : 0;
    this.master.connect(ctx.destination);
    this.music = ctx.createGain(); this.music.gain.value = this.musicVol * 0.5; this.music.connect(this.master);
    this.amb = ctx.createGain(); this.amb.gain.value = this.ambVol; this.amb.connect(this.master);
    this.sfx = ctx.createGain(); this.sfx.gain.value = 0.7; this.sfx.connect(this.master);

    // Simple reverb for music.
    this.verb = ctx.createConvolver();
    const len = ctx.sampleRate * 2.2;
    const ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = ir.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
    }
    this.verb.buffer = ir;
    const vg = ctx.createGain(); vg.gain.value = 0.3;
    this.verb.connect(vg); vg.connect(this.music);

    // Noise buffers.
    const nb = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate);
    const nd = nb.getChannelData(0);
    let last = 0;
    for (let i = 0; i < nd.length; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; nd[i] = last * 3.5; }
    this.brown = nb;
    const wb = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const wd = wb.getChannelData(0);
    for (let i = 0; i < wd.length; i++) wd[i] = Math.random() * 2 - 1;
    this.white = wb;

    this.traffic = this._loop(this.brown, 'lowpass', 380, 0.0);
    this.rainN = this._loop(this.white, 'highpass', 1800, 0.0);
    this.chatter = this._loop(this.white, 'bandpass', 900, 0.0);
    this.rumble = this._loop(this.brown, 'lowpass', 120, 0.0);
    this.chatterLfo = ctx.createOscillator(); this.chatterLfo.frequency.value = 3.3;
    const lg = ctx.createGain(); lg.gain.value = 0.02; this.chatterLfo.connect(lg); lg.connect(this.chatter.g.gain);
    this.chatterLfo.start();

    this.nextBeat = ctx.currentTime + 0.2;
    this._timer = setInterval(() => this._schedule(), 60);
  }

  _loop(buf, type, freq, gain) {
    const s = this.ctx.createBufferSource(); s.buffer = buf; s.loop = true;
    const f = this.ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq;
    const g = this.ctx.createGain(); g.gain.value = gain;
    s.connect(f); f.connect(g); g.connect(this.amb); s.start();
    return { s, f, g };
  }

  setEnabled(v) {
    this.enabled = v;
    if (this.master) this.master.gain.setTargetAtTime(v ? 0.8 : 0, this.ctx.currentTime, 0.1);
  }
  setMusicVolume(v) { this.musicVol = v; if (this.music) this.music.gain.setTargetAtTime(v * 0.5, this.ctx.currentTime, 0.2); }

  /** env: { style, night, rain, park, inside, transit } */
  setEnv(env) {
    if (!this.ctx) return;
    this.style = env.style;
    this.mood = env.night > 0.6 ? 'night' : 'day';
    const t = this.ctx.currentTime;
    const trafficLvl = env.transit ? 0 : (env.park ? 0.05 : 0.16) * (1 - env.night * 0.4);
    this.traffic.g.gain.setTargetAtTime(trafficLvl, t, 0.8);
    this.rainN.g.gain.setTargetAtTime(env.rain ? 0.06 : 0, t, 1.2);
    this.chatter.g.gain.setTargetAtTime(env.inside ? 0.035 : 0, t, 0.5);
    this.rumble.g.gain.setTargetAtTime(env.transit ? 0.5 : 0, t, 0.4);
    this.music.gain.setTargetAtTime((env.transit ? 0.2 : 1) * this.musicVol * 0.5, t, 0.5);
  }

  // ---- Music ----
  _schedule() {
    const ctx = this.ctx;
    if (!ctx || this.musicVol <= 0) return;
    const nyc = this.style === 'nyc';
    const bpm = nyc ? (this.mood === 'night' ? 84 : 96) : (this.mood === 'night' ? 72 : 88);
    const spb = 60 / bpm;
    while (this.nextBeat < ctx.currentTime + 0.3) {
      if (this.lanternsUntil && this.nextBeat < this.lanternsUntil) { this.nextBeat += spb; this.beat++; continue; }
      if (nyc) this._jazzBeat(this.nextBeat, spb); else this._chamberBeat(this.nextBeat, spb);
      this.nextBeat += spb;
      this.beat++;
    }
  }

  _jazzBeat(t, spb) {
    // ii-V-I-VI in F: Gm7 C7 Fmaj7 D7
    const chords = [[55, 58, 62, 65], [48, 52, 55, 58], [53, 57, 60, 64], [50, 54, 57, 60]];
    const bar = Math.floor(this.beat / 4) % 4, b = this.beat % 4;
    const ch = chords[bar];
    // Walking bass
    const root = ch[0] - 12;
    const walk = [root, root + 4, root + 7, root + (bar === 3 ? 6 : 5)];
    this._tone(NOTE(walk[b]), t, spb * 0.9, 'triangle', 0.16, 0.01, 0.5);
    // Comping on 2 and 4 (swung)
    if (b === 1 || b === 3) for (const n of ch) this._tone(NOTE(n), t + spb * 0.16, spb * 0.5, 'sine', 0.045, 0.01, 0.35, true);
    // Brushes
    this._noise(t, 0.08, 4000, 0.03);
    if (b === 1 || b === 3) this._noise(t, 0.12, 2500, 0.05);
    // Sparse melody
    if (Math.random() < (this.mood === 'night' ? 0.25 : 0.4)) {
      const scale = [65, 67, 69, 70, 72, 74, 76, 77];
      this._tone(NOTE(scale[Math.floor(Math.random() * scale.length)]), t + (Math.random() < 0.5 ? 0 : spb * 0.66), spb * 0.8, 'triangle', 0.05, 0.01, 0.6, true);
    }
  }

  _chamberBeat(t, spb) {
    // D - Bm - G - A with arpeggiated pizzicato and a soft pad.
    const chords = [[62, 66, 69], [59, 62, 66], [55, 59, 62], [57, 61, 64]];
    const bar = Math.floor(this.beat / 4) % 4, b = this.beat % 4;
    const ch = chords[bar];
    if (b === 0) {
      for (const n of ch) this._tone(NOTE(n - 12), t, spb * 4, 'sawtooth', 0.018, 0.6, 1.2, true, 900);
      this._tone(NOTE(ch[0] - 24), t, spb * 3.5, 'triangle', 0.12, 0.05, 1);
    }
    const arp = [ch[0], ch[1], ch[2], ch[1] + 12];
    for (let k = 0; k < 2; k++) this._tone(NOTE(arp[(b * 2 + k) % 4] + 12), t + k * spb / 2, spb * 0.3, 'triangle', 0.05, 0.005, 0.25, true);
    if (b === 2 && Math.random() < 0.5) this._tone(NOTE(ch[2] + 24), t, spb, 'sine', 0.035, 0.01, 1.4, true);
  }

  _tone(freq, t, dur, type, vol, att = 0.01, rel = 0.3, verb = false, lp = 0) {
    const ctx = this.ctx;
    const o = ctx.createOscillator(); o.type = type; o.frequency.value = freq;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + att);
    g.gain.setTargetAtTime(0, t + dur, rel / 3);
    let node = o;
    if (lp) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = lp; o.connect(f); node = f; }
    node.connect(g); g.connect(this.music);
    if (verb) g.connect(this.verb);
    o.start(t); o.stop(t + dur + rel + 0.2);
  }

  _noise(t, dur, freq, vol, dest) {
    const ctx = this.ctx;
    const s = ctx.createBufferSource(); s.buffer = this.white;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = 0.8;
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(dest || this.music);
    s.start(t, Math.random()); s.stop(t + dur + 0.05);
  }

  // ---- SFX ----
  _sfxTone(freq, dur, type = 'sine', vol = 0.2, delay = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + delay;
    const o = this.ctx.createOscillator(); o.type = type; o.frequency.value = freq;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.sfx); o.start(t); o.stop(t + dur + 0.05);
  }
  buzz() { this._sfxTone(180, 0.12, 'square', 0.06); this._sfxTone(180, 0.12, 'square', 0.06, 0.18); }
  chime() { this._sfxTone(880, 0.5, 'sine', 0.12); this._sfxTone(1320, 0.6, 'sine', 0.08, 0.1); }
  clue() { [72, 76, 79, 84].forEach((n, i) => this._sfxTone(NOTE(n), 0.6, 'triangle', 0.1, i * 0.09)); }
  click() { this._sfxTone(1200, 0.04, 'square', 0.04); }
  shutter() { if (!this.ctx) return; this._noise(this.ctx.currentTime, 0.05, 3000, 0.3, this.sfx); this._noise(this.ctx.currentTime + 0.07, 0.04, 2000, 0.2, this.sfx); }
  honk() { this._sfxTone(392, 0.25, 'sawtooth', 0.03); this._sfxTone(466, 0.25, 'sawtooth', 0.025); }
  note(midi, dur = 0.4) { this._sfxTone(NOTE(midi), dur, 'triangle', 0.18); }
  bad() { this._sfxTone(140, 0.3, 'sawtooth', 0.06); }
  pageTurn() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource(); src.buffer = this.white;
    const f = this.ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 0.7;
    f.frequency.setValueAtTime(900, t); f.frequency.exponentialRampToValueAtTime(3600, t + 0.28);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.18, t + 0.06); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.34);
    src.connect(f); f.connect(g); g.connect(this.sfx);
    src.start(t, Math.random()); src.stop(t + 0.4);
  }

  playLanterns(tempo = 0.42) {
    if (!this.ctx) return;
    const t0 = this.ctx.currentTime + 0.1;
    let t = t0;
    for (const [n, beats] of LANTERNS) {
      this._tone(NOTE(n), t, beats * tempo * 0.95, 'triangle', 0.12, 0.01, 0.8, true);
      this._tone(NOTE(n - 12), t, beats * tempo * 0.95, 'sine', 0.05, 0.02, 0.8, true);
      t += beats * tempo;
    }
    this.lanternsUntil = t;
  }
}
