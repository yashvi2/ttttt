// Behaviour for the Case AVA screen, ported from the Claude Design source.
import React from 'react';
import { DCLogic } from '../dc/DCLogic.js';
import { __R } from '../dc/resources.js';

class Component extends DCLogic {
  lensRef = React.createRef();
  G = [['Region', ['Asia Pacific', 'EMEA', 'Latin America', 'North America']], ['Therapeutic area', ['Oncology', 'Immunology', 'Neuroscience', 'Cardiovascular']], ['Risk score', ['0–0.30', '0.31–0.60', '0.61–1']], ['Risk level', ['High', 'Medium', 'Low']]];
  autoStep() {
    if (this.manual) return;
    const f = this.state.f, n = Object.values(f).reduce((a, v) => a + v.length, 0);
    if (n >= 3) { this.setState({ f: {} }); return; }
    const [g, opts] = this.G[Math.floor(Math.random() * this.G.length)];
    const v = opts[Math.floor(Math.random() * opts.length)];
    this.setState(s => ({ f: { ...s.f, [g]: [...new Set([...(s.f[g] || []), v])] } }));
  }
  lvTick() { clearTimeout(this.lvT); if (this.lvManual) return; this.setState({ lvRun: false }, () => requestAnimationFrame(() => requestAnimationFrame(() => { if (this.lvManual) return; this.setState({ lvRun: true }); this.lvT = setTimeout(() => { if (!this.lvManual) this.setState(s => ({ lv: (s.lv + 1) % 4 }), () => this.lvTick()); else this.lvT = setTimeout(() => this.lvTick(), 600); }, 5000); }))); }
  avRecolor() { const r = this.rootRef && this.rootRef.current || document; r.querySelectorAll('[data-av]').forEach(w => { const [bg, fg, bd] = w.getAttribute('data-av').split('|'); w.querySelectorAll('*').forEach(el => { const cs = getComputedStyle(el); if (cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent') { el.style.setProperty('background-color', bg, 'important'); el.style.setProperty('box-shadow', bd ? 'inset 0 0 0 1px ' + bd : 'none', 'important'); } if (el.childElementCount === 0 || cs.color) el.style.setProperty('color', fg, 'important'); el.querySelectorAll('svg path').forEach(p => p.style.setProperty('fill', fg)); }); }); }
  componentDidMount() {
    this.vtT = setInterval(() => { if (!document.hidden) this.setState(s => ({ vt: ((s.vt || 0) + 1) % 6 })); }, 1500);
    this.ucT = setInterval(() => { if (!document.hidden) this.setState(s => ({ ucOn: !s.ucOn })); }, 1600);
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) this.scrManual = true; this.scrTick();
    window.addEventListener('scroll', this.onNavScroll, { passive: true }); window.addEventListener('resize', this.onNavScroll); this.onNavScroll();
    [300, 1000, 2500, 5000].forEach(ms => setTimeout(() => this.avRecolor(), ms)); this.auto = setInterval(() => this.autoStep(), 700); this.mountLens(); this.lvTick();
  }
  revRef = React.createRef();
  prodRef = React.createRef();
  prodRef2 = React.createRef();
  impRef = el => {
    if (!el || this.io3) return;
    if (typeof IntersectionObserver === 'undefined') { this.rollImpact(); return; }
    this.io3 = new IntersectionObserver(([e]) => { if (e.isIntersecting && !this.impStarted) { this.impStarted = true; this.io3.disconnect(); this.rollImpact(); } }, { threshold: 0.2 });
    this.io3.observe(el);
  };
  IMP = ['70%', '6', '3–4'];
  scrRef = React.createRef();
  SCR = [
    { k: 'Dosing Error · Trial details', dot: '#201e1d', url: 'rdquality / dosing-error / trial / 324-5967', img: 'assets/web/assets/ava/de-trial-details.webp', alt: 'Dosing Error trial details screen', pins: [
      [50, 1.6, 'Predictive, not final', 'A banner on every page: the scores support people, who make the final call.'],
      [6, 15, 'Two risks, side by side', 'Each risk shows its level and its score together.'],
      [78, 21, 'What changed', 'Rapid-change cards show the direction of each shift since the last refresh.'],
      [49, 58.4, 'Sites by risk', 'The site table uses the same three-level chips as every other screen.']] },
    { k: 'AVA · Trial sites and risk', dot: '#eb1700', url: 'rdquality / ava / trial / 17000139BLC2001', img: 'assets/web/assets/ava/ava-trial-details.webp', alt: 'AVA trial sites and risk screen', pins: [
      [50, 8.8, 'Stale-data warning', 'An alert and a “Data retrieved on” date whenever the source data lags.'],
      [30, 39, 'Risk over time', 'A trend chart with a date-range brush underneath.'],
      [74, 52.6, 'Audit decision per site', 'Recommended, selected or not recommended, shown in the table.'],
      [52, 63, 'Score, level, trend', 'Every risk column carries all three.']] },
    { k: 'AVA · Risk trends', dot: '#eb1700', url: 'rdquality / ava / trial / trends', img: 'assets/web/assets/ava/ava-trial-trends.webp', alt: 'AVA risk trends screen', pins: [
      [78, 36, 'Score range filter', 'Narrow the view to a band of scores.'],
      [40, 42, 'Compare sites', 'Risk trends for several sites on one chart.'],
      [62, 57.8, 'Choose the risks', 'Toggle composite, ATLAS, process risks and subject details.'],
      [40, 75, 'Context for each site', 'Region, enrolment and safety-report rates next to the risk.']] }];
  scrTick() {
    clearTimeout(this.scrT); if (this.scrManual) return;
    this.setState({ scrRun: false }, () => requestAnimationFrame(() => requestAnimationFrame(() => {
      if (this.scrManual || this.scrHover) return;
      this.setState({ scrRun: true });
      this.scrT = setTimeout(() => { if (this.scrManual || this.scrHover) return; this.setState(s => ({ scrI: ((s.scrI || 0) + 1) % this.SCR.length, scrH: null }), () => this.scrTick()); }, 7000);
    })));
  }
  scrStopNow() { this.scrManual = true; clearTimeout(this.scrT); if (this.state.scrRun) this.setState({ scrRun: false }); }
  scrVals() {
    const i = this.state.scrI || 0, h = this.state.scrH, S = this.SCR[i], run = !!this.state.scrRun;
    return { scrRef: this.scrRef, scr: S, scrOff: () => this.setState({ scrH: null }),
      scrStop: () => this.scrStopNow(),
      scrEnter: () => { this.scrHover = true; clearTimeout(this.scrT); if (this.state.scrRun) this.setState({ scrRun: false }); },
      scrLeave: () => { this.scrHover = false; this.scrTick(); },
      scrTabs: this.SCR.map((t, j) => ({ k: t.k, dot: j === i ? (j ? '#ffffff' : '#eb1700') : t.dot, sel: j === i ? 'true' : 'false', bg: j === i ? (j ? '#eb1700' : '#201e1d') : '#f6f5f4', fg: j === i ? '#ffffff' : '#201e1d',
        track: j === i && !this.scrManual ? 'rgba(255,255,255,.3)' : 'transparent', prog: j === i && run ? '100%' : '0%', dur: j === i && run ? '7000ms' : '0ms',
        pick: () => { this.scrStopNow(); this.setState({ scrI: j, scrH: null }); } })),
      scrPins: S.pins.map(([x, y, hd, pp], j) => ({ n: String(j + 1), x: x + '%', y: y + '%', h: hd, p: pp, sc: h === j ? '1.25' : '1', bg: h === j ? '#fdeceb' : '#f6f5f4',
        on: () => this.setState({ scrH: j }),
        pin: () => { this.scrStopNow(); this.setState({ scrH: j }); },
        go: () => { this.scrStopNow(); const v = this.scrRef.current; if (v) { const img = v.querySelector('img'); const top = img ? img.offsetHeight * y / 100 - v.clientHeight / 2 : 0; v.scrollTo({ top: Math.max(0, top), behavior: 'smooth' }); } this.setState({ scrH: j }); } })) };
  }
  navRef = React.createRef();
  NAV = [['context', 'Context'], ['role', 'My role'], ['journey', 'Workflow'], ['ai', 'AI checks'], ['research', 'Research'], ['decisions', 'Delivery'], ['myai', 'My AI use'], ['overviews', 'Product'], ['impact', 'Impact']];
  navGo(k) { const el = document.querySelector('.ava [data-mv="' + k + '"]'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 56, behavior: 'smooth' }); }
  onNavScroll = () => {
    if (this.navRaf) return;
    this.navRaf = requestAnimationFrame(() => {
      this.navRaf = 0;
      let a = null; document.querySelectorAll('.ava [data-mv]').forEach(el => { if (el.getBoundingClientRect().top < 140) a = el.getAttribute('data-mv'); });
      const root = document.querySelector('.ava'); let p = 0;
      if (root) { const r = root.getBoundingClientRect(), span = r.height - window.innerHeight; p = span > 0 ? Math.max(0, Math.min(1, -r.top / span)) : 0; }
      if (a !== this.state.navA || Math.abs(p - (this.state.navP || 0)) > 0.004) this.setState({ navA: a, navP: p });
    });
  };
  componentDidUpdate(_, prev) {
    if (prev.scrI !== this.state.scrI && this.scrRef.current) this.scrRef.current.scrollTop = 0;
    if (prev.navA === this.state.navA) return;
    const box = this.navRef.current, btn = box && box.querySelector('[data-k="' + this.state.navA + '"]');
    if (btn) box.scrollTo({ left: Math.max(0, btn.offsetLeft - 24), behavior: 'smooth' });
  }
  navVals() {
    const a = this.state.navA;
    return { navRef: this.navRef, navProg: ((this.state.navP || 0) * 100).toFixed(1) + '%',
      navItems: this.NAV.map(([id, k], i) => { const on = a === id; return { id, k, n: String(i + 1).padStart(2, '0'), cur: on ? 'true' : 'false', bg: on ? '#201e1d' : '#f6f5f4', fg: on ? '#ffffff' : '#4a4644', go: () => this.navGo(id) }; }) };
  }
  mkBars(key, rows, max) {
    const h = this.state[key], rd = h != null ? rows[h] : null;
    return { bars: rows.map(([k, v, lab, c, t], i) => ({ k, lab, c, w: 'calc((100% - 76px) * ' + (v / max).toFixed(3) + ')', op: h == null || h === i ? 1 : 0.45, aria: k + ': ' + lab + '. ' + t, on: () => this.setState({ [key]: i }), off: () => this.setState({ [key]: null }) })),
      has: !!rd, no: !rd, rd: rd ? { lab: rd[2], t: rd[4] } : { lab: '', t: '' } };
  }
  chartVals() {
    const s = this.state;
    const res = this.mkBars('resH', [['Old screens', 100, '100', '#8a8380', 'errors on the five core tasks, before the redesign (the baseline)'], ['Redesign', 30, '30', '#eb1700', 'errors on the same tasks with the redesign: 70% fewer']], 100);
    const day = this.mkBars('dayH', [['Before', 30, '30 days', '#8a8380', 'from a new requirement to a prototype people could test'], ['With Claude', 3, '3 days', '#eb1700', 'with Claude building functional prototypes from the requirement']], 30);
    const V = [44, 47, 49, 52, 57, 63, 71, 78], n = V.length, X = i => i / (n - 1) * 100, lvl = v => v > 60 ? 'High' : v > 30 ? 'Medium' : 'Low';
    const fx = v => (v / 100).toFixed(2);
    const ago = i => i === n - 1 ? 'This week' : (n - 1 - i) + (n - 1 - i === 1 ? ' week ago' : ' weeks ago');
    const lnD = V.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(2) + ' ' + (100 - v)).join(' '), lh = s.lnH, step = 100 / (n - 1);
    const R = [['V1.0', 'Sep 2023', 0, 'Dosing Error trial overview and details, with the three-colour risk scale'], ['V1.1', 'Nov 2023', 2, 'Score explanations, and a data date on every score'], ['V1.2', 'Jan 2024', 4, 'One filter component, and the export modal'], ['V2.0', 'Apr 2024', 7, 'AVA launched on the shared system'], ['V2.2', 'Jul 2024', 10, 'Confirm, override with a reason, and the audit trail'], ['V2.4', 'Oct 2024', 13, 'Therapeutic area, compound and region overviews']];
    const rx = m => (m / 13 * 100).toFixed(2) + '%', rh = s.relH, edge = (i, last) => i === 0 ? 'translateX(-12px)' : i === last ? 'translateX(calc(-100% + 12px))' : 'translateX(-50%)';
    return {
      resBars: res.bars, resHas: res.has, resNo: res.no, resRd: res.rd,
      dayBars: day.bars, dayHas: day.has, dayNo: day.no, dayRd: day.rd,
      lnD, lnArea: lnD + ' L100 100 L0 100 Z',
      lnGrid: [100, 60, 30, 0].map(v => ({ k: v === 100 ? '1' : v === 0 ? '0' : fx(v).replace(/0$/, ''), y: (100 - v) + '%' })),
      lnBands: [['High', 20], ['Medium', 55], ['Low', 85]].map(([k, y]) => ({ k, y: y + '%' })),
      lnDots: V.map((v, i) => ({ x: X(i).toFixed(2) + '%', y: (100 - v) + '%', i })).filter(d => d.i === n - 1 || d.i === lh),
      lnEnd: { v: fx(V[n - 1]), y: (100 - V[n - 1]) + '%' },
      lnHits: V.map((v, i) => ({ l: (X(i) - step / 2).toFixed(2) + '%', w: step.toFixed(2) + '%', aria: ago(i) + ': score ' + fx(v) + ', ' + lvl(v), on: () => this.setState({ lnH: i }) })),
      lnOff: () => this.setState({ lnH: null }), lnHas: lh != null,
      lnTip: lh != null ? { x: X(lh).toFixed(2) + '%', v: fx(V[lh]), lvl: lvl(V[lh]), k: ago(lh), tf: lh <= 1 ? 'translateX(-10px)' : lh >= n - 2 ? 'translateX(calc(-100% + 10px))' : 'translateX(-50%)' } : { x: '0%', v: '', lvl: '', k: '', tf: 'none' },
      lnRows: V.map((v, i) => ({ k: ago(i), v: fx(v), lvl: lvl(v) })),
      relPts: R.map(([v, d, m, t], i) => ({ v, x: rx(m), tf: edge(i, R.length - 1), ring: rh === i ? '0 0 0 2px #ffffff,0 0 0 4px #201e1d' : '0 0 0 2px #ffffff', aria: v + ', ' + d + ': ' + t, on: () => this.setState({ relH: i }), off: () => this.setState({ relH: null }) })),
      relTicks: [['Sep 2023', 0], ['Jan 2024', 4], ['Jul 2024', 10], ['Oct 2024', 13]].map(([k, m], i, a) => ({ k, x: rx(m), tf: edge(i, a.length - 1) })),
      relGaps: R.slice(1).map((r, i) => ({ k: (r[2] - R[i][2]) + ' mo', x: rx((r[2] + R[i][2]) / 2) })),
      relHas: rh != null, relNo: rh == null, relRd: rh != null ? { v: R[rh][0] + ' · ' + R[rh][1], t: R[rh][3] } : { v: '', t: '' }
    };
  }
  aiVals() {
    const s = this.state, d = s.aiD, ri = s.aiR, saved = !!s.aiSaved && !!d;
    const R = ['Known issue, fix already under way', 'Site audited in the last 90 days', 'Data entry backlog, not a quality issue', 'Other, with a written note'];
    const A = [['confirm', 'Confirm for audit'], ['override', 'Override'], ['watch', 'Keep watching']];
    const log = { confirm: ['Confirmed for audit', 'Added to the audit plan · Quality lead · Today, 14:32'], watch: ['Kept on watch', 'Re-checked after the next weekly refresh · Quality lead · Today, 14:32'], override: ['Overridden: ' + (ri != null ? R[ri] : ''), 'Quality lead · Today, 14:32 · Re-flags if the score rises again'] };
    return {
      aiActs: A.map(([k, t]) => { const on = d === k; return { t, on: on ? 'true' : 'false', bg: on ? '#201e1d' : '#ffffff', fg: on ? '#ffffff' : '#201e1d', bd: on ? '#201e1d' : '#c9c4c1', pick: () => this.setState({ aiD: k, aiR: null, aiSaved: k !== 'override' }) }; }),
      aiHint: !d, aiShowReasons: d === 'override' && !saved,
      aiReasons: R.map((t, i) => ({ t, on: ri === i ? 'true' : 'false', bd: ri === i ? '#eb1700' : '#e3e1df', dot: ri === i ? '4px' : '0px', pick: () => this.setState({ aiR: i }) })),
      aiNoReason: ri == null ? 'true' : 'false', aiSaveBg: ri == null ? '#c9c4c1' : '#eb1700', aiSaveCur: ri == null ? 'not-allowed' : 'pointer',
      aiSave: () => { if (this.state.aiR != null) this.setState({ aiSaved: true }); },
      aiSaved: saved, aiLogH: d ? log[d][0] : '', aiLogP: d ? log[d][1] : '',
      aiReset: () => this.setState({ aiD: null, aiR: null, aiSaved: false })
    };
  }
  rollImpact() {
    clearInterval(this.impI); clearTimeout(this.impDone);
    const t0 = Date.now(), D = 1800;
    const tick = () => { const k = Math.min(1, (Date.now() - t0) / D), e = 1 - Math.pow(1 - k, 4);
      const vals = k >= 1 ? this.IMP : this.IMP.map(v => v.replace(/\d+/g, d => { const n = +d; return k < 0.6 ? String(Math.floor(Math.random() * (n * 1.5 + 9))) : String(Math.round(n * e)); }));
      this.setState({ impV: vals }); if (k >= 1) clearInterval(this.impI); };
    this.impI = setInterval(tick, 40); this.impDone = setTimeout(() => { clearInterval(this.impI); this.setState({ impV: this.IMP }); }, D + 100);
  }
  mountLens() { const pr = this.prodRef.current; if (pr) { this.ro4 = new ResizeObserver(([e]) => this.setState({ pw: e.contentRect.width })); this.ro4.observe(pr); } const rv = this.revRef.current; if (rv) { this.ro2 = new ResizeObserver(([e]) => this.setState({ rw: e.contentRect.width })); this.ro2.observe(rv); } const el = this.lensRef.current; if (!el) return; this.ro = new ResizeObserver(([e]) => this.setState({ lw: e.contentRect.width })); this.ro.observe(el); }
  componentWillUnmount() { clearTimeout(this.scrT); window.removeEventListener('scroll', this.onNavScroll); window.removeEventListener('resize', this.onNavScroll); cancelAnimationFrame(this.navRaf); clearInterval(this.vtT); clearInterval(this.ucT); this.ro && this.ro.disconnect(); this.ro2 && this.ro2.disconnect(); this.ro4 && this.ro4.disconnect(); clearInterval(this.auto); clearTimeout(this.lvT); this.io3 && this.io3.disconnect(); clearInterval(this.impI); clearTimeout(this.impDone); }
  state = { scrI: 0, scrH: null, scrRun: false, navA: null, navP: 0, resH: null, dayH: null, lnH: null, relH: null, aiD: null, aiR: null, aiSaved: false, pw: 1100, impV: ['70%', '6', '3–4'], rw: 1100, lvRun: false, lw: 900, lv: 0, f: {} };
  filterVals() {
    const f = this.state.f, G = [['Region', 'Dropdown', ['Asia Pacific', 'EMEA', 'Latin America', 'North America']], ['Therapeutic area', 'Dropdown', ['Oncology', 'Immunology', 'Neuroscience', 'Cardiovascular']], ['Risk score', 'Range', ['0–0.30', '0.31–0.60', '0.61–1']], ['Risk level', 'Dropdown', ['High', 'Medium', 'Low']]];
    const set = (g, v, user = true) => { if (user) this.manual = true; this.setState(s => { const cur = s.f[g] || []; return { f: { ...s.f, [g]: cur.includes(v) ? cur.filter(x => x !== v) : [...cur, v] } }; }); };
    const D = [['324-5967', 'Oncology', 'High', 'EMEA', 0.82], ['118-2201', 'Immunology', 'Medium', 'North America', 0.47], ['207-4410', 'Neuroscience', 'High', 'Asia Pacific', 0.74], ['331-0912', 'Cardiovascular', 'Low', 'EMEA', 0.18], ['290-7781', 'Oncology', 'Medium', 'Latin America', 0.55], ['145-3306', 'Immunology', 'High', 'EMEA', 0.66]];
    const inR = (s, k) => { const [lo, hi] = k.split('–').map(Number); return s >= lo && s <= hi; };
    const ok = r => (!(f['Region'] || []).length || f['Region'].includes(r[3])) && (!(f['Therapeutic area'] || []).length || f['Therapeutic area'].includes(r[1])) && (!(f['Risk level'] || []).length || f['Risk level'].includes(r[2])) && (!(f['Risk score'] || []).length || f['Risk score'].some(k => inR(r[4], k)));
    const C = { High: ['#fbeaea', '#9e1f1f'], Medium: ['#fdf0e6', '#8a3f08'], Low: ['#eaf2ea', '#0b5e12'] };
    const rows = D.filter(ok), chips = G.flatMap(([g]) => (f[g] || []).map(v => ({ g, v, remove: () => set(g, v) })));
    return { fGroups: G.map(([k, kind, opts]) => ({ k, kind, opts: opts.map(v => { const on = (f[k] || []).includes(v); return { v, on: on ? 'true' : 'false', bg: on ? '#201e1d' : '#ffffff', fg: on ? '#ffffff' : '#201e1d', bd: on ? '#201e1d' : '#c9c4c1', toggle: () => set(k, v) }; }) })),
      fChips: chips, fEmpty: !chips.length, fReset: () => { this.manual = true; this.setState({ f: {} }); }, fHovOn: () => { this.hov = true; }, fHovOff: () => { this.hov = false; },
      fRows: rows.slice(0, 4).map(r => ({ id: 'Trial ' + r[0], ta: r[1], lvl: r[2] + ' · ' + r[4], bg: C[r[2]][0], fg: C[r[2]][1] })),
      fCount: rows.length + (rows.length === 1 ? ' trial matches' : ' trials match') + (rows.length > 4 ? ' · showing 4' : '') };
  }
  renderVals() {
    const lv = this.state.lv;
    const L = [
      { k: 'Trial', q: 'Which trials and sites carry the highest risk right now?', pts: ['Top high-risk trials and sites, side by side', 'Composite risk score with an explainer tooltip', 'Drill into a trial ID for its details'] },
      { k: 'Therapeutic area', q: 'Is risk clustering in one area of medicine?', pts: ['Risk rolled up by therapeutic area', 'Filter by region, country and score range', 'Export the view for a review meeting'] },
      { k: 'Compound', q: 'Which compounds keep showing up in risky trials?', pts: ['Compound ID with autocomplete search', 'Compound-level risk score and level', 'Same filter chips as every other lens'] },
      { k: 'Region', q: 'Where in the world should auditors go next?', pts: ['Risk by Asia Pacific, EMEA, Latin and North America', 'Region-level composite score and trend', 'Links back to the trials behind each number'] }];
    const impV = this.state.impV;
    return {
      ...(() => { const vt = this.state.vt || 0, a = vt % 3;
        const B = [['View trials', '#eb1700', '#b81200', '#ffffff', '#eb1700'], ['Export', '#ffffff', '#fdecea', '#eb1700', '#eb1700'], ['Cancel', 'transparent', '#fdecea', '#eb1700', 'transparent']];
        const R = [['CNTO-1275', '42', 'High', '#D32F2F'], ['JNJ-7706', '18', 'Low', '#0B831A'], ['JNJ-4528', '27', 'Medium', '#E37820']];
        const st = ['Filled', 'Tint', 'Outline'][a], C = [['Low', '#0B831A'], ['Medium', '#E37820'], ['High', '#D32F2F']], sz = [['3px 10px', '12px'], ['4px 12px', '13px'], ['5px 14px', '14px']][Math.floor(vt / 2) % 3];
        return {
          vbtns: B.map(([t, bg, hb, fg, bd], i) => ({ t, bg: i === a ? hb : bg, fg, bd, y: i === a ? '-2px' : '0px' })),
          vrows: R.map(([id, sites, risk, rc], i) => ({ id, sites, risk, rc, bg: i === a ? '#fdf1ef' : 'transparent', cb: i === a ? '#eb1700' : '#8a8380', cbg: i === a ? '#eb1700' : 'transparent', tick: i === a ? '✓' : '' })),
          vchips: C.map(([t, c]) => ({ t, pad: sz[0], fs: sz[1], bg: st === 'Filled' ? c : st === 'Tint' ? c + '22' : '#ffffff', fg: st === 'Filled' ? '#ffffff' : c, bd: st === 'Outline' ? c : 'transparent' })),
          vchipLabel: st + ' style',
          vtabs: ['Use Cases', 'Digital Products', 'Data Sources'].map((t, i) => ({ t, bg: i === a ? '#f9f7f6' : i === (a + 1) % 3 ? '#fbeaea' : '#f0efee', bw: i === a ? '2px' : '0px' }))
        }; })(),
      uc: this.state.ucOn ? { bg: '#eb1700', fg: '#ffffff', y: '-3px' } : { bg: '#f0efee', fg: '#eb1700', y: '0px' },
      shifts: [
        ['Unified', 'One set of UI patterns across AI-driven clinical and enterprise data experiences.'],
        ['Modular', 'Scalable components for dashboards, insights and content-led pages.'],
        ['Faster', 'Quicker, consistent delivery across clinical risk management and the DS capability showcase.'],
        ['Trusted', 'Data-first, structured patterns that improved usability and accessibility.'],
        ['Shared', 'Reusable assets and a common language across teams.']].map(([h, p], i) => ({ n: '0' + (i + 1), h, p })),
      risk: [
        { k: 'Low', hex: '#0B8314', c: '#0b8314', tint: '#eaf2ea', ink: '#0b5e12', label: 'Trial status', st: ['Open', 'Execution', 'Planned', 'Preparation'] },
        { k: 'Medium', hex: '#F37820', c: '#c25a10', tint: '#fdf0e6', ink: '#8a3f08', label: 'Trial status', st: ['Closed', 'Completed'] },
        { k: 'High', hex: '#D32F2F', c: '#d32f2f', tint: '#fbeaea', ink: '#9e1f1f', label: 'Trial status', st: ['Stopped', 'On hold', 'Cancelled'] }],
      comps: [['Filters and chips', '9'], ['Date range picker', '6'], ['Export modal', '13'], ['Risk-level modals', '8'], ['Risk score tooltips', '15'], ['Search by', '6'], ['Rearrange / hide columns', '4'], ['Table cells', '4'], ['Header', '2'], ['Inputs and states', '5']].map(([k]) => ({ k })),
      lenses: L.map((l, i) => ({ k: l.k, n: '0' + (i + 1), sel: i === lv ? 'true' : 'false', bar: 'transparent', tabBg: i === lv ? '#ffffff' : 'transparent', numC: i === lv ? '#eb1700' : '#6b6664', txtC: i === lv ? '#201e1d' : '#6b6664', prog: i === lv && this.state.lvRun ? '100%' : '0%', dur: i === lv && this.state.lvRun ? '5000ms' : '0ms', pick: () => { this.lvManual = true; this.setState({ lv: i, lvRun: false }); } })),
      prodRef: this.prodRef, prodRef2: this.prodRef2, prodZoom: (this.state.pw / 1440).toFixed(4), revRef: this.revRef, revScale: (this.state.rw / 1440).toFixed(4), lensRef: this.lensRef, lensHovOn: () => { this.lvHov = true; }, lensHovOff: () => { this.lvHov = false; }, lensScale: (this.state.lw / 1440).toFixed(4), lensQ: [{ t: L[lv].q, key: lv }], lens: { ...L[lv], comp: ['TrialOverview', 'TherapeuticAreaOverview', 'CompoundOverviewPage', 'RegionOverviewPage'][lv], slot: 'ava-lens-' + lv, img: 'assets/web/ava-cap/lens-' + lv + '.webp', ph: 'Drop the ' + L[lv].k.toLowerCase() + ' overview screen' },
      ...this.filterVals(),
      ...this.aiVals(),
      ...this.chartVals(),
      ...this.navVals(),
      ...this.scrVals(),
      impRef: this.impRef,
      flow: [
        { n: 'Before the trial', k: 'Predict', p: 'The model scores dosing-error risk from the study design, and the team adjusts until it’s acceptable.', bg: '#201e1d', fg: '#ffffff' },
        { n: 'Planning', k: 'Prevent', p: 'Leads compare risk across trials and reuse mitigations from similar studies.', bg: '#eb1700', fg: '#ffffff' },
        { n: 'During the trial', k: 'Monitor', p: 'Live data re-scores the risk, and the team steps in when it rises.', bg: '#f6f5f4', fg: '#201e1d' }],
      sprint: [['Plan', 'Stories with POs and BAs'], ['Design', 'One sprint ahead of build'], ['Review', 'With developers and users'], ['Ship', 'Release, learn, refine']].map(([k, p], i) => ({ n: '0' + (i + 1), k, p })),
      layers: [
        ['Tokens', 'Colour, type, spacing and radius as named variables, with J&J and Janssen brand modes', '#201e1d', '#ffffff'],
        ['Foundations', 'Type scale, grid and the three-colour risk language', '#3a3634', '#ffffff'],
        ['Components', 'Buttons, chips, table cells, badges and tabs, each with full variant sets', '#eb1700', '#ffffff'],
        ['Patterns', 'Filters, risk modals, score tooltips and export flows', '#fdeceb', '#201e1d'],
        ['Pages', 'Overview, details and dashboard templates reused across products', '#f6f5f4', '#201e1d']].map(([k, p, bg, fg], i) => ({ n: '0' + (i + 1), k, p, bg, fg })),
      typeScale: [
        ['Display', '39px', 600, '-0.02em', 'Trial Overview', 'Johnson Display Bold · 39'],
        ['Heading 1', '31px', 600, '-0.015em', 'Top high-risk trials', 'Johnson Display Bold · 31'],
        ['Heading 2', '25px', 600, '-0.01em', 'Trial milestones', 'Johnson Display Bold · 25'],
        ['Heading 3', '20px', 600, '0', 'Potential composite risk', 'Johnson Display Bold · 20'],
        ['Body large', '18px', 500, '0', 'Predictive risk insights for quality teams', 'Johnson Text Medium · 18'],
        ['Body', '16px', 500, '0', 'Most-used style in the file, on tables and forms', 'Johnson Text Medium · 16'],
        ['Label', '14px', 700, '0', 'SITE ID · RISK LEVEL · STATUS', 'Johnson Text Bold · 14'],
        ['Caption', '10px', 500, '0.02em', 'Data retrieved on 21 Sep 2023, 13:45', 'Johnson Text Medium · 10']].map(([k, px, w, ls, sample, spec]) => ({ k, px, w, ls, sample, spec })),
      variantMath: [
        { k: 'Button', total: '162', axes: [['3', 'variants'], ['3', 'types'], ['3', 'sizes'], ['6', 'states']], p: 'One button component covers every action across both tools.', isBtn: true, slot: 'ava-var-button', ph: 'Drop the Button variants frame' },
        { isRow: true, k: 'Table row', total: '162', axes: [['9', 'column sets'], ['2', 'densities'], ['2', 'checkbox'], ['2', 'hover'], ['2', 'selected']], p: 'One row component builds every data table across both tools.', slot: 'ava-var-row', ph: 'Drop the Table row variants frame' },
        { k: 'Chip', total: '60', axes: [['7', 'colours'], ['3', 'styles'], ['3', 'sizes']], p: 'One chip component covers filters, statuses and risk levels.', isChip: true, slot: 'ava-var-chip', ph: 'Drop the Chip variants frame' },
        { isTab: true, k: 'Tab', total: '3', axes: [['3', 'states']], p: 'Default, hover and selected, used for every filter tab on the portal.' },
        { isUse: true, k: 'Use case card', total: '2', axes: [['2', 'states']], p: 'The arrow block fills red on hover, so the whole card reads as one link.' }].map(v => ({ ...v, axes: v.axes.map(([n, k]) => ({ n, k })) })),
      users: [
        { k: 'Research scientists', q: 'Show me which trials need attention.', p: 'Track risk across many trials at once and need to spot outliers without reading every row.' },
        { k: 'Doctors and clinical leads', q: 'I have five minutes before my next meeting.', p: 'Check in briefly, act on what’s flagged and move on. Any learning curve is a reason not to come back.' }],
      rules: [
        { h: 'Answer first', p: 'Top high-risk trials and sites lead every page, before any detail.' },
        { h: 'Three colours, one meaning', p: 'Risk reads at a glance, with no legend to decode.' },
        { h: 'Fewer interactions', p: 'One filter, one template and the same actions everywhere, so nothing has to be relearned.' }],
      impact: [
        { v: '70%', h: 'Fewer task errors', p: 'Old screens vs the redesign, on the same core tasks (section 05).', bg: '#eb1700', fg: '#ffffff' },
        { v: '6', h: 'Releases in 13 months', p: 'Each one shaped by what people did with the last (section 06).', bg: '#201e1d', fg: '#ffffff' },
        { v: '3–4', h: 'More products built on the work', p: 'The same patterns now power products beyond Dosing Error and AVA.', bg: '#f6f5f4', fg: '#201e1d' }],
      get impactR() { return this.impact.map((m, i) => ({ ...m, v: impV[i] })); },
      impactPts: ['Every decision on a flagged site is traceable, with its reason', 'Fewer support tickets as screens became predictable'].map((t, i) => ({ n: '0' + (i + 1), t })),
      users: [
        { k: 'Research scientists', q: 'Show me which trials need attention.', p: 'Track risk across many trials at once and need to spot outliers without reading every row.' },
        { k: 'Doctors and clinical leads', q: 'I have five minutes before my next meeting.', p: 'Check in briefly, act on what’s flagged and move on. Any learning curve is a reason not to come back.' }],
      rules: [
        { h: 'Answer first', p: 'Top high-risk trials and sites lead every page, before any detail.' },
        { h: 'Three colours, one meaning', p: 'Risk reads at a glance, with no legend to decode.' },
        { h: 'Fewer interactions', p: 'One filter, one template and the same actions everywhere, so nothing has to be relearned.' }],
      mvRef: this.props.mvRef, nextBanner: this.props.nextBanner };
  }
}

export default Component;
