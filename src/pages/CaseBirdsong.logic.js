// Behaviour for the Case Birdsong screen, ported from the Claude Design source.
import React from 'react';
import { DCLogic } from '../dc/DCLogic.js';
import { __R } from '../dc/resources.js';

class Component extends DCLogic {
  state = { a: 0, paused: false };
  ytRef = React.createRef();
  lapRef = React.createRef();
  S = [['web-ns.jpg','Nature’s Symphony','Gallery landing'],['web-ml.jpg','Myths and Legends','Byangoma-Byangomi'],['web-sn.jpg','Songs of Nature','Do songbirds sing the same songs?'],['web-bm.jpg','Birds in Music','Treasured in folk music']];
  componentDidMount() {
    this.watchYt(); this.tick();
    const l = this.lapRef.current;
    if (l && l.animate) this.fl = l.animate([{ transform: 'rotate(-9deg) translateY(0)' }, { transform: 'rotate(-9deg) translateY(-2.5%)' }, { transform: 'rotate(-9deg) translateY(0)' }], { duration: 5000, iterations: Infinity, easing: 'ease-in-out' });
  }
  tick() { clearInterval(this.t); this.t = setInterval(() => { if (!this.state.paused) this.go(1); }, 3200); }
  go(d) { const n = this.S.length; this.setState(s => { const sa = s.s ?? s.a; const ns = (sa + d + 2 * n) % (2 * n); return { s: ns, a: ns % n }; }); }
  componentWillUnmount() { clearInterval(this.t); this.io && this.io.disconnect(); this.fl && this.fl.cancel(); }
  componentDidUpdate() { this.watchYt(); }
  watchYt() {
    const f = this.ytRef.current; if (!f || this.io) return;
    const cmd = c => f.contentWindow && f.contentWindow.postMessage(JSON.stringify({ event: 'command', func: c, args: [] }), '*');
    this.io = new IntersectionObserver(([e]) => cmd(e.intersectionRatio >= 0.5 ? 'playVideo' : 'pauseVideo'), { threshold: [0, 0.5] });
    this.io.observe(f);
  }
  renderVals() {
    const a = this.state.a, n = this.S.length;
    const N = n * 2, sa = this.state.s ?? a;
    const strip = this.S.concat(this.S).map(([f], i) => { let d = ((i - sa) % N + N) % N; if (d > N / 2) d -= N; const far = Math.abs(d) >= 3;
      return { src: 'assets/ime/' + f, left: (33 + d * 38) + '%', cardOp: d === 0 || far ? 0 : 0.85, dur: far ? '0ms' : '1100ms' }; });
    const macs = this.S.map(([f, g, t], i) => { let d = ((i - a) % n + n) % n; if (d > n / 2) d -= n; const far = Math.abs(d) >= 3;
      return { src: 'assets/ime/' + f, alt: g + ' — ' + t, op: i === a ? 1 : 0, tf: i === a ? 'scale(1)' : 'scale(1.06)', left: (33 + d * 38) + '%', cardOp: d === 0 || far ? 0 : 0.85, dur: far ? '0ms' : '1100ms' }; });
    const cur = this.S[a];
    return { ytRef: this.ytRef, lapRef: this.lapRef, macs, strip,
      macNum: String(a + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0'), macLabel: cur[1] + ' · ' + cur[2],
      macPrev: () => { this.go(-1); this.tick(); }, macNext: () => { this.go(1); this.tick(); },
      macPause: () => this.setState({ paused: true }), macResume: () => this.setState({ paused: false }) };
  }
}

export default Component;
