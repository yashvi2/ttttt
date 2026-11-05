// Behaviour for the Case Pfizer screen, ported from the Claude Design source.
import React from 'react';
import { DCLogic } from '../dc/DCLogic.js';
import { __R } from '../dc/resources.js';

class Component extends DCLogic {
  state = { lb: null, ti: 0, count: 110, open: 0, dv: 0, vw: 0, ci: 0, pc: 0 };
  pcRun() { clearInterval(this.pct); this.pct = setInterval(() => { if (!document.hidden) this.setState(s => ({ pc: (s.pc + 1) % 4 })); }, 3200); }
  rootRef = React.createRef();
  countRef = React.createRef();
  T = [['Courage', 'Daring', 'Big type and bold blue, used with confidence.'], ['Excellence', 'Focused', 'One action per section, nothing competing for it.'], ['Equity', 'Compassionate', 'Readable for colour blindness, low vision and ADHD.'], ['Joy', 'Spirited', 'Motion that brings warmth to the science.']];
  R = [
    { k: 'Design system', pts: ['Type scale in Pfizer Tomorrow and Diatype', 'Blue for clickable, black for static', 'Buttons in every state'], kind: 'system' },
    { k: 'Guidelines', pts: ['Grids, palettes and icon library', 'Brand motif, imagery and video subtitles'], img: 'guides' },
    { k: 'Live screens', pts: ['Home page and mega-menus', 'Product pipeline, filterable by phase'], kind: 'scroll' },
    { k: 'Corporate design UI', pts: ['Specs handed to internal teams', 'The base for internal pages and dashboards'], img: 'fonts' }
  ];
  componentDidMount() {
    this.pcRun();
    const r = this.rootRef.current; if (!r) return;
    this.anims = [];
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.ct = setInterval(() => { if (!document.hidden) this.step(1); }, 3200);
    this.autoDev();
    this.ti = setInterval(() => { if (!document.hidden) this.setState(s => ({ ti: (s.ti + 1) % 4 }), () => this.swap()); }, 2600);
    const c = this.countRef.current;
    if (c && !reduce) { this.io = new IntersectionObserver(([e]) => { if (!e.isIntersecting) return; this.io.disconnect(); const t0 = performance.now(), D = 1600; this.setState({ count: 0 }); clearInterval(this.cnt); this.cnt = setInterval(() => { const p = Math.min(1, (performance.now() - t0) / D); this.setState({ count: Math.round(110 * (1 - Math.pow(1 - p, 3))) }); if (p >= 1) clearInterval(this.cnt); }, 30); setTimeout(() => { clearInterval(this.cnt); this.setState({ count: 110 }); }, D + 400); }, { threshold: 0.3 }); this.io.observe(c); }
    if (reduce || !r.animate) return;
    const A = (el, k, o) => this.anims.push(el.animate(k, o));
    r.querySelectorAll('[data-pz-l]').forEach((el, i) => A(el, [{ transform: 'translateY(110%)' }, { transform: 'translateY(0)' }], { duration: 900, delay: 150 + i * 80, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' }));
    r.querySelectorAll('[data-pz-pulse]').forEach(el => A(el, [{ opacity: 1 }, { opacity: 0.25 }], { duration: 900, iterations: Infinity, direction: 'alternate' }));
    r.querySelectorAll('[data-pz-pan]').forEach(el => { const x = el.getAttribute('data-pz-pan'); A(el, [{ transform: 'translateX(0)', offset: 0 }, { transform: 'translateX(0)', offset: 0.35 }, { transform: `translateX(${x})`, offset: 0.5 }, { transform: `translateX(${x})`, offset: 0.85 }, { transform: 'translateX(0)', offset: 1 }], { duration: 11000, iterations: Infinity, easing: 'cubic-bezier(.6,0,.2,1)' }); });
    r.querySelectorAll('[data-pz-mq]').forEach(el => A(el, [{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], { duration: 28000, iterations: Infinity }));
  }
  componentDidUpdate() { if (this._lastOpen !== this.state.open) { this._lastOpen = this.state.open; setTimeout(() => this.setupScroll(), 550); } }
  setupScroll() {
    const r = this.rootRef.current, el = r && r.querySelector('[data-pz-scroll]');
    if (this.sc) { this.sc.cancel(); this.sc = null; }
    if (!el || !el.animate || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const run = () => { const box = el.parentElement.getBoundingClientRect().height, d = Math.max(0, el.getBoundingClientRect().height - box); if (!d) return;
      this.sc = el.animate([{ transform: 'translateY(0)', offset: 0 }, { transform: 'translateY(0)', offset: 0.1 }, { transform: `translateY(${-d * 0.42}px)`, offset: 0.4 }, { transform: `translateY(${-d * 0.42}px)`, offset: 0.5 }, { transform: `translateY(${-d}px)`, offset: 0.85 }, { transform: `translateY(${-d}px)`, offset: 0.92 }, { transform: 'translateY(0)', offset: 1 }], { duration: 16000, iterations: Infinity, easing: 'ease-in-out' }); };
    el.complete ? run() : el.addEventListener('load', run, { once: true });
  }
  swap() { const el = this.rootRef.current && this.rootRef.current.querySelector('[data-pz-trait]'); if (el && el.animate && !matchMedia('(prefers-reduced-motion: reduce)').matches) el.animate([{ transform: 'translateY(100%)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }], { duration: 600, easing: 'cubic-bezier(.2,.8,.2,1)' }); }
  autoDev() { clearInterval(this.at); this.at = setInterval(() => { if (document.hidden || Date.now() < (this.hold || 0)) return; this.setState(s => { const n = (s.dv * 2 + s.vw + 1) % 6; return { dv: Math.floor(n / 2), vw: n % 2, ci: 0 }; }); }, 3600); }
  step(d) { const cols = [3, 2, 1][this.state.dv], max = 3 - cols; this.setState(s => ({ ci: max ? (s.ci + d + max + 1) % (max + 1) : 0 })); }
  componentWillUnmount() { clearInterval(this.pct); clearInterval(this.ct); clearInterval(this.at); clearInterval(this.ti); clearInterval(this.cnt); this.io && this.io.disconnect(); this.sc && this.sc.cancel(); (this.anims || []).forEach(a => a.cancel()); }
  respVals() {
    const dv = this.state.dv, vw = this.state.vw, cols = [3, 2, 1][dv], ci = Math.min(this.state.ci, 3 - cols);
    const D = [
      { w: '100%', bezel: '0px', r: '0px', ir: '0px', bg: '#d9d9e0', h: '560px', pad: '28px', mfs: '17px', rule: '#ffffff', menuFlex: '1' },
      { w: '600px', bezel: '14px', r: '30px', ir: '16px', bg: '#111114', h: '720px', pad: '22px', mfs: '18px', rule: '#eef0ff', menuFlex: '1' },
      { w: '330px', bezel: '10px', r: '44px', ir: '34px', bg: '#111114', h: '660px', pad: '18px', mfs: '17px', rule: '#eef0ff', menuFlex: '1' }][dv];
    const pick = (key, i) => () => { this.hold = Date.now() + 12000; this.setState({ [key]: i, ci: 0 }); clearInterval(this.ct); this.ct = setInterval(() => { if (!document.hidden) this.step(1); }, 3200); };
    const seg = (arr, key, cur) => arr.map((k, i) => ({ k, on: i === cur, bg: i === cur ? '#0000c9' : 'transparent', fg: i === cur ? '#ffffff' : '#0000c9', pick: pick(key, i) }));
    return {
      devices: seg(['Desktop', 'iPad', 'Mobile'], 'dv', dv), views: seg(['Articles', 'Menu'], 'vw', vw),
      dev: { ...D, isDesk: dv === 0, notDesk: dv !== 0, isPhone: dv === 2 },
      isArticles: vw === 0, isMenu: vw === 1,
      navItems: ['Science', 'Products', 'Responsibility', 'Partnerships', 'News', 'Careers'].map(k => ({ k, u: vw === 1 && k === 'Responsibility' ? '#0000c9' : 'transparent' })),
      car: { cw: 'calc((100% - ' + (cols - 1) * 16 + 'px) / ' + cols + ')', x: 'calc(' + (-ci) + ' * (100% + 16px) / ' + cols + ')', prog: Math.round((ci + cols) / 3 * 100) + '%', tfs: ['20px', '22px', '22px'][dv],
        prev: () => this.step(-1), next: () => this.step(1) },
      articles: [
        { src: (window.__R || (x => x))('assets/web/assets/pfizer/article-1.webp'), t: 'When Cancer becomes ‘Part of the story’', p: 'A campaign to shift the cancer narrative, with a new chapter for Sherlock Holmes.' },
        { src: (window.__R || (x => x))('assets/web/assets/pfizer/article-2.webp'), t: 'Exploring rare and less common causes of heart failure', p: 'Over a million people in the UK live with heart failure.' },
        { src: (window.__R || (x => x))('assets/web/assets/pfizer/article-3.webp'), t: 'Onballa UK app launched to help patients with alopecia areata', p: 'A new app designed to support people with alopecia areata.' }],
      menu: ['Transparency', 'Environmental Sustainability', 'Science Education', 'Diversity, Equity and Inclusion', 'Raising Public Awareness', 'Social Investment', 'Codes of Conduct', 'Animal Welfare', 'Insurance Details'].map((k, i) => ({ k, chev: i < 7 ? 1 : 0 }))
    };
  }
  renderVals() {
    const o = k => () => this.setState({ lb: (window.__R || (x => x))('assets/pfizer/' + k + '.png') }), ti = this.state.ti, op = this.state.open;
    return {
      pc: { o0: this.state.pc === 0 ? 1 : 0, o1: this.state.pc === 1 ? 1 : 0, o2: this.state.pc === 2 ? 1 : 0, o3: this.state.pc === 3 ? 1 : 0 },
      pcDots: [0, 1, 2, 3].map(i => ({ label: 'Screen ' + (i + 1), bg: i === this.state.pc ? '#ffffff' : 'rgba(255,255,255,0.35)', go: () => { this.setState({ pc: i }); this.pcRun(); } })),
      pcPrev: () => { this.setState(s => ({ pc: (s.pc + 3) % 4 })); this.pcRun(); }, pcNext: () => { this.setState(s => ({ pc: (s.pc + 1) % 4 })); this.pcRun(); },
      pcHold: () => clearInterval(this.pct), pcGo: () => this.pcRun(),
      rootRef: this.rootRef, countRef: this.countRef, mvRef: this.props.mvRef, nextBanner: this.props.nextBanner,
      open: { pipeline_page: o('pipeline-page'), articles: o('articles-desktop'), menu: o('menu-desktop') },
      ...this.respVals(),
      hasLb: !!this.state.lb, lb: this.state.lb, closeLb: () => this.setState({ lb: null }),
      trait: { t: this.T[ti][1] + '.' },
      traits: this.T.map(([v, t, ui], i) => ({ v, t, ui, bg: i === ti ? '#ffffff' : '#000088', fg: i === ti ? '#0000c9' : '#ffffff', ring: i === ti ? 'inset 0 0 0 1px #ffffff' : 'inset 0 0 0 1px rgba(255,255,255,0.45)', pick: () => { clearInterval(this.ti); this.setState({ ti: i }, () => this.swap()); } })),
      stats: [
        { n: String(this.state.count), k: 'Products made explorable on the pipeline page' },
        { n: '6', k: 'Type levels, each with one clickable rule' },
        { n: '4', k: 'Brand traits turned into website rules' },
        { n: '6', u: 'months', k: 'From the new brand to a live pfizer.com' }
      ],
      rows: this.R.map((r, i) => ({ ...r, open: i === op, rot: i === op ? '180deg' : '0deg', gr: i === op ? '1fr' : '0fr',
        isSystem: r.kind === 'system', isScroll: r.kind === 'scroll', hasImg: !!r.img, img: r.img ? (window.__R || (x => x))('assets/pfizer/' + r.img + '.png') : '',
        zoom: r.img ? o(r.img) : null, toggle: () => this.setState(s => ({ open: s.open === i ? -1 : i })) })),
      scale: [
        { k: 'H1', fs: '40px', label: 'Breakthroughs', spec: '72 / 86' },
        { k: 'H2', fs: '32px', label: 'Our pipeline', spec: '52 / 62' },
        { k: 'H3', fs: '26px', label: 'Clinical trials', spec: '42 / 50' },
        { k: 'H4', fs: '22px', label: 'Areas of focus', spec: '32 / 38' },
        { k: 'Body', fs: '16px', label: 'Body text, readable at 20px', spec: '20 / 27' }
      ],
      role: [
        { k: 'Adapt', h: 'Brand to screen', p: 'Translated Pentagram’s identity into web type, colour and interaction rules.' },
        { k: 'Include', h: 'Accessible by default', p: 'Designed for colour blindness, low vision and ADHD from the first component.' },
        { k: 'Lead', h: 'Offshore design team', p: 'Led the TCS team through the rebrand, reviewing every page against the system.' },
        { k: 'Scale', h: 'Corporate design UI', p: 'Set up the guidelines that internal pages and dashboards now follow.' }
      ]
    };
  }
}

export default Component;
