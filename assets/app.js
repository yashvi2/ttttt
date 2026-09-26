/* Portfolio app: React (via htm, no build step) + Three.js + a small scroll engine. */
(function () {
  "use strict";

  var S = window.SITE, P = window.PROJECTS, CS = window.CASE_SECTIONS;
  var h = window.React.createElement;
  var html = window.htm.bind(h);
  var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef;
  var mq = function (q) { return !!(window.matchMedia && window.matchMedia(q).matches); };
  var REDUCE = mq("(prefers-reduced-motion: reduce)");
  var pad = function (n) { return String(n).padStart(2, "0"); };
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };

  /* ================================================================
     Scroll engine
     Writes CSS variables and transforms straight to the DOM, so React
     never re-renders on scroll.
       data-speed="0.1"     parallax drift, relative to viewport centre
       data-progress="pin"  --p = 0..1 while a tall section is pinned
       data-progress="read" --p = 0..1 as an element is read through
       data-progress="fill" --p = 0..1 as an element crosses the upper middle
       data-marquee="1|-1"  endless strip, nudged by scroll velocity
       data-track           horizontal track inside a pinned section
  ================================================================ */
  var Engine = {
    speed: [], prog: [], marq: [], hooks: [], lastY: 0, vel: 0, running: false,
    refresh: function () {
      var q = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
      this.speed = REDUCE ? [] : q("[data-speed]");
      this.prog = q("[data-progress]");
      this.marq = q("[data-marquee]").map(function (el) { return { el: el, x: 0 }; });
      // Size pinned horizontal sections so their scroll length matches the track
      q("[data-track]").forEach(function (track) {
        var sec = track.closest("[data-progress]");
        if (!sec) return;
        if (window.innerWidth < 820) { sec.style.height = ""; track.style.transform = ""; return; }
        var extra = track.scrollWidth - window.innerWidth;
        sec.style.height = (window.innerHeight + Math.max(0, extra)) + "px";
      });
      if (!this.running) { this.running = true; this.loop(); }
    },
    loop: function () {
      var self = this;
      var tick = function () {
        var vh = window.innerHeight, y = window.scrollY;
        self.vel = self.vel * 0.85 + (y - self.lastY) * 0.15;
        self.lastY = y;

        var doc = document.documentElement;
        doc.style.setProperty("--scroll", (y / Math.max(1, doc.scrollHeight - vh)).toFixed(4));

        for (var i = 0; i < self.speed.length; i++) {
          var el = self.speed[i], r = el.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) continue;
          var d = (r.top + r.height / 2 - vh / 2) * parseFloat(el.getAttribute("data-speed"));
          el.style.transform = "translate3d(0," + d.toFixed(1) + "px,0)";
        }
        for (var j = 0; j < self.prog.length; j++) {
          var e = self.prog[j], rr = e.getBoundingClientRect(), mode = e.getAttribute("data-progress"), p;
          if (rr.bottom < -vh || rr.top > vh * 2) continue;
          if (mode === "pin") p = -rr.top / Math.max(1, rr.height - vh);
          else if (mode === "fill") p = (vh * 0.85 - rr.top) / (vh * 0.45);
          else p = (vh * 0.9 - rr.top) / (rr.height + vh * 0.35);
          p = clamp(p, 0, 1);
          e.style.setProperty("--p", p.toFixed(4));
          var track = mode === "pin" && e.querySelector("[data-track]");
          if (track && window.innerWidth >= 820) {
            var ex = track.scrollWidth - window.innerWidth;
            track.style.transform = "translate3d(" + (-p * ex).toFixed(1) + "px,0,0)";
          }
          if (e.__onProgress) e.__onProgress(p);
        }
        for (var k = 0; k < self.marq.length; k++) {
          var m = self.marq[k], dir = parseFloat(m.el.getAttribute("data-marquee"));
          var half = m.el.scrollWidth / 2;
          if (!REDUCE) m.x -= dir * (0.6 + Math.min(Math.abs(self.vel), 60) * 0.25);
          if (m.x <= -half) m.x += half;
          if (m.x > 0) m.x -= half;
          m.el.style.transform = "translate3d(" + m.x.toFixed(1) + "px,0,0)";
        }
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  };
  window.addEventListener("resize", function () { Engine.refresh(); });

  /* ================================================================
     Three.js hero: one field of points that reorganises itself
     People → Information → Technology → Services → Systems
  ================================================================ */
  function rng(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function gauss(r) { var u = r() || 1e-6, v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }

  function buildStates(N) {
    var r = rng(7), st = [], i, o;
    for (i = 0; i < 5; i++) st.push(new Float32Array(N * 3));
    // 0 People: a handful of small groups
    var C = [[-2.3, 0.9, 0], [1.7, 1.4, -0.6], [0.1, -1.3, 0.5], [-1.3, -1.1, -1.1], [2.4, -0.7, 0.8], [-0.2, 1.9, 0.9]];
    for (i = 0; i < N; i++) { o = i * 3; var c = C[i % C.length];
      st[0][o] = c[0] + gauss(r) * 0.32; st[0][o + 1] = c[1] + gauss(r) * 0.32; st[0][o + 2] = c[2] + gauss(r) * 0.32; }
    // 1 Information: an ordered sheet
    var cols = Math.ceil(Math.sqrt(N));
    for (i = 0; i < N; i++) { o = i * 3; var cx = i % cols, cy = Math.floor(i / cols);
      st[1][o] = (cx - cols / 2) * 0.2; st[1][o + 1] = (cy - cols / 2) * 0.2; st[1][o + 2] = Math.sin(cx * 0.35) * 0.25; }
    // 2 Technology: stacked layers
    for (i = 0; i < N; i++) { o = i * 3; var L = i % 4, a = r() * Math.PI * 2, rad = Math.sqrt(r()) * 2.1;
      st[2][o] = Math.cos(a) * rad; st[2][o + 1] = (L - 1.5) * 0.85; st[2][o + 2] = Math.sin(a) * rad; }
    // 3 Services: a loop of handovers
    for (i = 0; i < N; i++) { o = i * 3; var u = (i / N) * Math.PI * 2, v = r() * Math.PI * 2, rr = 0.28 + r() * 0.1;
      st[3][o] = (2.1 + rr * Math.cos(v)) * Math.cos(u); st[3][o + 1] = (2.1 + rr * Math.cos(v)) * Math.sin(u); st[3][o + 2] = rr * Math.sin(v); }
    // 4 Systems: everything connected
    var g = Math.PI * (3 - Math.sqrt(5));
    for (i = 0; i < N; i++) { o = i * 3; var y = 1 - (i / (N - 1)) * 2, rad2 = Math.sqrt(1 - y * y) * 2.4, th = g * i;
      st[4][o] = Math.cos(th) * rad2; st[4][o + 1] = y * 2.4; st[4][o + 2] = Math.sin(th) * rad2; }
    return st;
  }

  function initScene(canvas, getP) {
    var T = window.THREE;
    if (!T) return function () {};
    var renderer;
    try { renderer = new T.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); }
    catch (e) { canvas.style.display = "none"; return function () {}; }
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    var scene = new T.Scene();
    var camera = new T.PerspectiveCamera(38, 1, 0.1, 100);
    var group = new T.Group(); scene.add(group);

    var N = window.innerWidth < 700 ? 420 : 720;
    var states = buildStates(N);
    var pos = new Float32Array(N * 3);
    var col = new Float32Array(N * 3);
    for (var i = 0; i < N; i++) {
      var red = i % 11 === 0;
      col[i * 3] = red ? 0.894 : 0.05; col[i * 3 + 1] = red ? 0.0 : 0.05; col[i * 3 + 2] = red ? 0.17 : 0.05;
    }
    var geo = new T.BufferGeometry();
    geo.setAttribute("position", new T.BufferAttribute(pos, 3));
    geo.setAttribute("color", new T.BufferAttribute(col, 3));

    var dot = document.createElement("canvas"); dot.width = dot.height = 64;
    var dc = dot.getContext("2d"); dc.beginPath(); dc.arc(32, 32, 28, 0, Math.PI * 2); dc.fillStyle = "#fff"; dc.fill();
    var tex = new T.CanvasTexture(dot);
    var mat = new T.PointsMaterial({ size: 0.075, vertexColors: true, map: tex, alphaTest: 0.5, transparent: true, sizeAttenuation: true });
    group.add(new T.Points(geo, mat));

    // Links: nearest neighbours in the "systems" state, faded in towards the end
    var pairs = [], s4 = states[4];
    for (i = 0; i < N; i++) {
      var best = [-1, -1], bd = [1e9, 1e9];
      for (var j = 0; j < N; j++) { if (j === i) continue;
        var dx = s4[i * 3] - s4[j * 3], dy = s4[i * 3 + 1] - s4[j * 3 + 1], dz = s4[i * 3 + 2] - s4[j * 3 + 2], d = dx * dx + dy * dy + dz * dz;
        if (d < bd[0]) { bd[1] = bd[0]; best[1] = best[0]; bd[0] = d; best[0] = j; } else if (d < bd[1]) { bd[1] = d; best[1] = j; } }
      if (i < best[0]) pairs.push(i, best[0]);
      if (i < best[1] && i % 2 === 0) pairs.push(i, best[1]);
    }
    var lpos = new Float32Array(pairs.length * 3);
    var lgeo = new T.BufferGeometry(); lgeo.setAttribute("position", new T.BufferAttribute(lpos, 3));
    var lmat = new T.LineBasicMaterial({ color: 0x0b0b0b, transparent: true, opacity: 0 });
    group.add(new T.LineSegments(lgeo, lmat));

    var mouse = { x: 0, y: 0 }, rot = { x: 0, y: 0 };
    var onMove = function (e) { mouse.x = e.clientX / window.innerWidth - 0.5; mouse.y = e.clientY / window.innerHeight - 0.5; };
    window.addEventListener("pointermove", onMove, { passive: true });

    var size = function () {
      var w = canvas.clientWidth, hh = canvas.clientHeight;
      renderer.setSize(w, hh, false); camera.aspect = w / Math.max(1, hh); camera.updateProjectionMatrix();
      group.position.x = w > 900 ? 1.9 : 0; group.position.y = w > 900 ? 0 : 0.6;
    };
    size(); window.addEventListener("resize", size);

    var visible = true, raf = 0, t0 = performance.now(), spin = 0;
    var io = new IntersectionObserver(function (en) { visible = en[0].isIntersecting; });
    io.observe(canvas);
    var smooth = function (x) { return x * x * (3 - 2 * x); };

    var frame = function (now) {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      var t = (now - t0) / 1000, p = getP();
      var s = clamp(p * 1.15, 0, 1) * 4, a = Math.floor(Math.min(s, 3.999)), f = smooth(s - a);
      var A = states[a], B = states[a + 1], w = REDUCE ? 0 : 0.05;
      for (var k = 0; k < N * 3; k += 3) {
        var ph = k * 0.013;
        pos[k] = A[k] + (B[k] - A[k]) * f + Math.sin(t * 0.9 + ph) * w;
        pos[k + 1] = A[k + 1] + (B[k + 1] - A[k + 1]) * f + Math.cos(t * 0.8 + ph) * w;
        pos[k + 2] = A[k + 2] + (B[k + 2] - A[k + 2]) * f;
      }
      geo.attributes.position.needsUpdate = true;
      var lo = clamp((s - 2.6) / 1.2, 0, 1) * 0.28;
      lmat.opacity = lo;
      if (lo > 0) {
        for (var q = 0; q < pairs.length; q++) { var src = pairs[q] * 3, dst = q * 3; lpos[dst] = pos[src]; lpos[dst + 1] = pos[src + 1]; lpos[dst + 2] = pos[src + 2]; }
        lgeo.attributes.position.needsUpdate = true;
      }
      if (!REDUCE) spin += 0.0018;
      rot.x += (mouse.y * 0.5 - rot.x) * 0.05; rot.y += (mouse.x * 0.8 - rot.y) * 0.05;
      group.rotation.set(rot.x + (a === 1 ? -0.35 * (1 - f) : 0), spin + rot.y, 0);
      camera.position.z = 7.2 + s * 0.7;
      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(frame);

    return function () {
      cancelAnimationFrame(raf); io.disconnect();
      window.removeEventListener("pointermove", onMove); window.removeEventListener("resize", size);
      geo.dispose(); lgeo.dispose(); mat.dispose(); lmat.dispose(); tex.dispose(); renderer.dispose();
    };
  }

  /* ================================================================
     Anonymised artefacts (reconstructed, no client detail)
  ================================================================ */
  var L = function (w) { return '<div class="ln ' + w + '"></div>'; };
  var VIS = {
    ia: function () {
      var col = function (hd, hi) { var s = ""; for (var i = 0; i < 3; i++) s += '<div class="leaf' + (i === hi ? " hi" : "") + '">' + L(i ? "m" : "l") + L("s") + "</div>";
        return '<div class="col"><div class="head">' + hd + "</div>" + s + "</div>"; };
      return '<div class="vis v-ia" role="img" aria-label="Reconstructed information architecture: one entry point and three task-led sections"><div class="root">Home</div><div class="branches">' + col("Find", 0) + col("Understand", 1) + col("Act", 2) + '</div><span class="tag">Task-led structure</span></div>';
    },
    journey: function () {
      var lane = function (n, hd) { var c = ""; for (var i = 0; i < 5; i++) c += '<div class="cell' + (hd.indexOf(i) > -1 ? " hand" : "") + '"></div>'; return '<div class="lane"><span class="tag">' + n + "</span>" + c + "</div>"; };
      return '<div class="vis v-journey" role="img" aria-label="Journey map across three user groups and five stages, with handovers highlighted"><div class="stages"><span></span><span>Aware</span><span>Access</span><span>Use</span><span>Handover</span><span>Follow-up</span></div>' +
        lane("Group A", [3]) + lane("Group B", [1, 3]) + lane("Group C", [3, 4]) +
        '<svg class="curve" viewBox="0 0 300 56" preserveAspectRatio="none" aria-hidden="true"><line x1="0" y1="28" x2="300" y2="28"/><path d="M8 20 C 50 14, 70 24, 96 26 S 150 18, 170 22 S 205 50, 222 46 S 270 22, 292 18"/><circle cx="222" cy="46" r="4"/></svg><span class="tag">Experience curve · handovers marked</span></div>';
    },
    dashboard: function () {
      var b = [38, 52, 44, 60, 48, 72, 66, 84, 58, 62].map(function (v, i) { return '<i style="height:' + v + '%"' + (i === 7 ? ' class="hi"' : "") + "></i>"; }).join("");
      var row = function (s, k) { return '<div class="row">' + L(s) + '<span class="pill ' + k + '">' + (k === "w" ? "Review" : "On track") + "</span></div>"; };
      return '<div class="vis v-dash panel" role="img" aria-label="Anonymised dashboard: summary indicators with one flagged, a trend chart and a status table"><div class="kpis"><div class="kpi panel"><span class="tag">Indicator</span><b></b></div><div class="kpi panel alert"><span class="tag">Needs attention</span><b></b></div><div class="kpi panel"><span class="tag">Indicator</span><b></b></div></div><div class="chart panel">' + b + '</div><div class="rows panel">' + row("l", "k") + row("m", "w") + row("l", "k") + "</div></div>";
    },
    ai: function () {
      return '<div class="vis v-ai" role="img" aria-label="Concept: an AI answer showing sources and confidence, which the person can edit or reject"><div class="q">Summarise the options for me</div><div class="a panel">' + L("l") + L("l") + L("m") +
        '<div class="srcs"><span class="src">Source 1</span><span class="src">Source 2</span><span class="src">+1</span></div><div class="conf"><span class="tag">Confidence</span><div class="meter"><i></i></div><span class="tag">Medium</span></div><div class="acts"><span>Edit</span><span>Accept</span><span>Why?</span></div></div><span class="tag">Concept · person stays in control</span></div>';
    },
    blueprint: function () {
      var r = function (n, cls, cells) { return '<div class="r ' + cls + '"><span class="tag">' + n + "</span>" + cells.map(function (c) { return '<div class="c ' + c + '"></div>'; }).join("") + "</div>"; };
      return '<div class="vis v-bp" role="img" aria-label="Service blueprint with pain points and opportunities marked">' + r("Student", "cust", ["", "", "", ""]) + r("Front stage", "", ["", "pain", "", "pain"]) + '<div class="vline"><span>line of visibility</span></div>' + r("Back stage", "", ["", "", "pain", ""]) + r("Systems", "", ["", "e", "", ""]) + r("Opportunity", "opp", ["e", "", "", ""]) + "</div>";
    },
    participation: function () {
      var d = [[50, 3, 0], [88, 28, 0], [92, 70, 1], [55, 97, 0], [12, 74, 0], [8, 30, 1], [70, 20, 1], [80, 50, 0], [28, 22, 0], [22, 62, 1], [60, 80, 1], [36, 82, 0]]
        .map(function (p) { return '<i class="dot' + (p[2] ? " a" : "") + '" style="left:' + p[0] + "%;top:" + p[1] + '%"></i>'; }).join("");
      return '<div class="vis v-part" role="img" aria-label="Participation map: visitors, staff and community around the museum experience"><div class="ring"></div><div class="ring r2"></div><div class="ring r3"></div><div class="core">Visitor<br>experience</div>' + d + '<span class="lbl tag" style="left:50%;top:13%">Staff</span><span class="lbl tag" style="left:50%;top:94%">Community</span></div>';
    }
  };
  var Vis = function (p) { return html`<div className="vis-wrap" dangerouslySetInnerHTML=${{ __html: VIS[p.kind]() }}></div>`; };

  /* Words that darken as you read */
  function Words(props) {
    var words = props.text.split(" ");
    var hi = props.hi || [];
    return html`<p className=${"words " + (props.className || "")} data-progress="read" style=${{ "--n": words.length }}>
      ${words.map(function (w, i) {
        return html`<span key=${i} className=${"w" + (hi.indexOf(i) > -1 ? " hi" : "")} style=${{ "--i": i }}>${w} </span>`;
      })}
    </p>`;
  }

  /* ================================================================
     Header
  ================================================================ */
  function Header() {
    return html`<header className="bar">
      <div className="bar-progress" aria-hidden="true"></div>
      <a className="brand" href="#top">Yashvi Jain<i aria-hidden="true"></i></a>
      <nav className="nav" aria-label="Primary">
        <a href="#work">Work</a><a href="#approach">Approach</a><a href="#about">About</a><a href="#contact" className="nav-cta">Contact</a>
      </nav>
    </header>`;
  }

  /* ================================================================
     Hero: pinned, scroll zooms out from people to systems
  ================================================================ */
  var STAGES = [
    ["People", "Someone trying to get something done."],
    ["Information", "What they need to know, and how it is structured."],
    ["Technology", "The tools and platforms that carry it."],
    ["Services", "The teams, processes and handovers around the tools."],
    ["Systems", "The organisations and rules shaping all of it."]
  ];
  function Hero() {
    var sec = useRef(null), cv = useRef(null);
    var st = useState(0), stage = st[0], setStage = st[1];
    useEffect(function () {
      var p = 0, last = -1;
      sec.current.__onProgress = function (v) {
        p = v; var s = Math.min(4, Math.floor(clamp(v * 1.15, 0, 1) * 4.999));
        if (s !== last) { last = s; setStage(s); }
      };
      return initScene(cv.current, function () { return p; });
    }, []);
    return html`<section className="hero" id="top" ref=${sec} data-progress="pin" data-stage=${stage}>
      <div className="hero-pin">
        <canvas ref=${cv} className="hero-canvas" aria-hidden="true"></canvas>
        <p className="hero-eyebrow mono">UX Designer <b>/</b> Service Designer <b>/</b> Design Researcher <b>·</b> London</p>
        <h1 className="hero-h">
          <span className="hl hl1">Designing better</span>
          <span className="hl hl2">experiences for</span>
          <span className="hl hl3"><em>complex systems.</em></span>
        </h1>
        <div className="hero-copy">
          <p>Multidisciplinary UX & Service Designer combining research, systems thinking and digital design to create clearer, more human experiences.</p>
          <div className="ctas">
            <a className="btn btn-red" href="#work">View selected work <span aria-hidden="true">↘</span></a>
            <a className="btn" href="#about">About me</a>
          </div>
        </div>
        <ol className="stages" aria-label="Scroll to zoom out">
          ${STAGES.map(function (s, i) {
            return html`<li key=${i} className=${i === stage ? "on" : ""} aria-current=${i === stage ? "step" : null}>
              <span className="mono">${pad(i + 1)}</span><strong>${s[0]}</strong><span className="st-line">${s[1]}</span></li>`;
          })}
        </ol>
        <p className="scroll-cue mono" aria-hidden="true"><span></span>Scroll to zoom out</p>
      </div>
    </section>`;
  }

  /* ================================================================
     Intro statement
  ================================================================ */
  function Intro() {
    var text = "I'm a multidisciplinary UX and Service Designer with 3+ years of experience across complex digital products and services. I combine user research, interaction design, service design and systems thinking to understand difficult problems and turn them into clear, evidence-led experiences.";
    return html`<section className="intro" aria-label="Introduction">
      <p className="intro-k mono">(Hello)</p>
      <${Words} text=${text} hi=${[16, 17, 22, 23, 38, 39]} className="intro-t" />
      <div className="intro-float">
        <span data-speed="-0.18" className="fl fl1"><b>Pfizer</b>enterprise UX</span>
        <span data-speed="0.12" className="fl fl2"><b>Johnson & Johnson</b>complex ecosystems</span>
        <span data-speed="-0.08" className="fl fl3"><b>MA</b>Design Management, LCC</span>
      </div>
      <p className="intro-flow mono">Research <i>→</i> Strategy <i>→</i> UX <i>→</i> Service <i>→</i> Systems</p>
    </section>`;
  }

  /* ================================================================
     Selected work: scattered, filterable, parallax
  ================================================================ */
  var FILTERS = [["all", "All"], ["research", "Research"], ["ux", "UX & product"], ["service", "Service & systems"], ["data", "Data"], ["ai", "AI"]];
  var SPEEDS = [-0.06, 0.1, -0.03, 0.07, -0.08, 0.04];
  function Card(props) {
    var p = props.p, i = props.i;
    var onMove = function (e) {
      var r = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--mx", (e.clientX - r.left) + "px");
      e.currentTarget.style.setProperty("--my", (e.clientY - r.top) + "px");
    };
    return html`<li className=${"wk wk" + (i + 1) + (props.dim ? " dim" : "")} data-speed=${SPEEDS[i]}>
      <span className="wk-big" aria-hidden="true">${p.num}</span>
      <a className="card" href=${"#case-" + p.id}>
        <div className="card-vis" onMouseMove=${onMove}>
          <${Vis} kind=${p.visual} />
          <span className="card-cursor" aria-hidden="true">View</span>
        </div>
        <p className="card-meta mono"><b>${p.client}</b><span>${p.kind}</span></p>
        <h3 className="card-title">${p.title}</h3>
        <p className="card-sum">${p.summary}</p>
      </a>
    </li>`;
  }
  function Work() {
    var fs = useState("all"), f = fs[0], setF = fs[1];
    return html`<section className="work-sec" id="work" aria-labelledby="work-h">
      <div className="work-head">
        <h2 id="work-h" className="big-h"><span>Selected</span> <em>work</em></h2>
        <p className="work-note">Six projects across products, services and systems. Each one shows context, challenge, my role, process and outcome.</p>
        <div className="filters" role="group" aria-label="Filter projects by type of work">
          ${FILTERS.map(function (x) {
            return html`<button key=${x[0]} type="button" className="chip" aria-pressed=${f === x[0]} onClick=${function () { setF(x[0]); }}>${x[1]}</button>`;
          })}
        </div>
      </div>
      <ol className="scatter">
        ${P.map(function (p, i) { return html`<${Card} key=${p.id} p=${p} i=${i} dim=${f !== "all" && p.filters.indexOf(f) < 0} />`; })}
      </ol>
      <p className="confidential mono">Selected project details and visuals have been adapted or anonymised to respect client confidentiality.</p>
    </section>`;
  }

  /* ================================================================
     Transferability
  ================================================================ */
  var XFER = [
    ["Healthcare", "Designing within complexity and regulation", "Banking · Insurance · Public sector"],
    ["Pharmaceuticals", "Evidence-led decision making", "Consulting · Research-led products"],
    ["Enterprise", "Stakeholder and organisational complexity", "Digital transformation · SaaS"],
    ["Data dashboards", "Information hierarchy and decision support", "Fintech · Business intelligence"],
    ["AI", "Emerging technology and responsible interaction", "Any organisation adopting AI"],
    ["Cultural projects", "Ambiguity, research and participation", "Museums · Charities · Community services"],
    ["Service design", "Systems and journey thinking", "Operations · Omnichannel services"]
  ];
  function Transfer() {
    var strip = ["Healthcare", "Banking", "Fintech", "Consulting", "SaaS", "Public services", "Culture", "Pharma", "Insurance", "Enterprise"];
    var row = strip.concat(strip);
    return html`<section className="xfer-sec" id="transfer" aria-labelledby="xfer-h">
      <div className="marquee" aria-hidden="true"><div className="mq-track" data-marquee="1">
        ${row.map(function (w, i) { return html`<span key=${i}>${w}<i>✳</i></span>`; })}
      </div></div>
      <div className="xfer-in">
        <p className="kicker mono">Transferability</p>
        <h2 id="xfer-h" className="mid-h">Different industries. <em>Similar design challenges.</em></h2>
        <ul className="xfer">
          ${XFER.map(function (x, i) {
            return html`<li key=${i} style=${{ "--o": [0, 18, 6, 30, 12, 24, 3][i] + "%" }} data-speed=${[0.03, -0.03, 0.05, -0.02, 0.04, -0.05, 0.02][i]}>
              <span className="xf-exp">${x[0]}</span><span className="xf-arrow" aria-hidden="true">→</span>
              <span className="xf-cap">${x[1]}<small>${x[2]}</small></span></li>`;
          })}
        </ul>
        <p className="xfer-end">I'm interested in complex problems, <em>regardless of where they occur.</em></p>
      </div>
    </section>`;
  }

  /* ================================================================
     Approach: pinned horizontal track
  ================================================================ */
  var MODES = [
    ["Understand", "User interviews, stakeholder interviews, observation, surveys, secondary research and contextual inquiry."],
    ["Frame", "Problem definition, synthesis, thematic analysis, journey mapping, personas and opportunity areas."],
    ["Explore", "Ideation, co-design, information architecture, wireframes, prototypes and service concepts."],
    ["Test", "Usability testing, heuristic evaluation, accessibility testing and iterative research."],
    ["Deliver", "High-fidelity design, design systems, documentation, developer collaboration and design QA."],
    ["Learn", "Analytics, feedback, post-launch evaluation and iteration."]
  ];
  function Approach() {
    return html`<section className="appr" id="approach" data-progress="pin" aria-labelledby="appr-h">
      <div className="appr-pin">
        <div className="appr-track" data-track="">
          <div className="appr-intro">
            <p className="kicker mono">My approach</p>
            <h2 id="appr-h" className="mid-h">I move between the details and <em>the bigger picture.</em></h2>
            <p className="appr-note">Six modes of work. I move back and forth between them as the evidence changes. It's a loop, not a checklist.</p>
          </div>
          ${MODES.map(function (m, i) {
            return html`<article key=${i} className=${"mode m" + i}>
              <span className="mode-n">${pad(i + 1)}</span>
              <h3 className="mode-h">${m[0]}</h3>
              <p>${m[1]}</p>
            </article>`;
          })}
          <div className="mode-loop" aria-label="Then back to Understand">
            <svg viewBox="0 0 120 120" aria-hidden="true"><path d="M60 10 A50 50 0 1 1 18 36" /><path d="M8 26 L18 36 L30 28" /></svg>
            <p>Back to <strong>Understand</strong>. Iterative, not linear.</p>
          </div>
        </div>
        <div className="appr-bar" aria-hidden="true"><i></i></div>
      </div>
    </section>`;
  }

  /* ================================================================
     Principles: outlined words fill as they cross the screen
  ================================================================ */
  var PRINCIPLES = [
    ["Research-led", "I use evidence to understand what people actually need rather than designing around assumptions."],
    ["Systems thinking", "I look beyond individual touchpoints to understand the services, organisations and systems surrounding them."],
    ["Clarity", "I turn complex information, processes and requirements into experiences people can understand and use."],
    ["Collaboration", "I work across design, research, technology, business and other disciplines to move ideas towards implementation."],
    ["Accessibility", "I consider accessibility and inclusion as part of the design process, not an afterthought."]
  ];
  function Principles() {
    return html`<section className="prin" id="principles" aria-labelledby="prin-h">
      <p className="kicker mono">What I bring</p>
      <h2 id="prin-h" className="sr">Five principles</h2>
      <ol className="prin-list">
        ${PRINCIPLES.map(function (x, i) {
          return html`<li key=${i} className=${"pr pr" + i} data-progress="fill">
            <span className="pr-n mono">${pad(i + 1)}</span>
            <span className="pr-w">${x[0]}</span>
            <p className="pr-d">${x[1]}</p>
          </li>`;
        })}
      </ol>
    </section>`;
  }

  /* ================================================================
     Experience
  ================================================================ */
  // CHECK: confirm the project, the measure and that the 30 days → 3 days figure can be disclosed
  function Experience() {
    return html`<section className="exp" id="experience" aria-labelledby="exp-h">
      <div className="exp-side">
        <p className="kicker mono">Experience</p>
        <h2 id="exp-h" className="mid-h">From interface detail to <em>organisational systems.</em></h2>
        <div className="stat" data-speed="-0.06">
          <p className="stat-num"><s>30 days</s><span className="stat-ar">→</span><strong>3 days</strong></p>
          <p className="stat-cap">Verified project outcome: turnaround reduced on a client engagement at TCS.</p>
        </div>
      </div>
      <ol className="tl">
        <li>
          <p className="tl-when mono">Oct 2022 — Present · on sabbatical for MA</p>
          <h3>Tata Consultancy Services</h3>
          <p className="tl-role mono">UI/UX & Service Designer</p>
          <p>Enterprise UX for healthcare and pharmaceutical clients including Pfizer and Johnson & Johnson. I planned and ran discovery research, facilitated workshops and user testing, created journey maps, flows and interfaces, and worked with business analysts and developers to balance user needs with technical constraints.</p>
          <ul className="tags">${["Enterprise UX", "UX research", "Usability testing", "Accessibility / WCAG", "Design systems", "Dashboards", "Digital transformation", "Developer collaboration"].map(function (t) { return html`<li key=${t}>${t}</li>`; })}</ul>
        </li>
        <li>
          <p className="tl-when mono">2025 — 2026</p>
          <h3>London College of Communication, UAL</h3>
          <p className="tl-role mono">MA Design Management</p>
          <p>Expanding my practice from interface-level problem solving to organisational and systemic challenges. Alongside the course I work as a Student Ambassador and Halls Community Lead, which keeps me close to how services feel from the inside.</p>
          <ul className="tags">${["Design research", "Systems thinking", "Service design", "Participatory design", "Strategy", "Organisational design", "Social innovation", "Critical design"].map(function (t) { return html`<li key=${t}>${t}</li>`; })}</ul>
        </li>
        <li>
          <p className="tl-when mono">Jan — Aug 2022</p>
          <h3>Indian Music Experience Museum</h3>
          <p className="tl-role mono">UI/UX Design Intern · British Council</p>
          <p>Participatory design sessions and co-design workshops with visitors, rapid prototyping, personas and low-fidelity blueprints.</p>
        </li>
        <li>
          <p className="tl-when mono">2018 — 2022</p>
          <h3>Amity University, Noida</h3>
          <p className="tl-role mono">Bachelor of Design, Product Design</p>
        </li>
      </ol>
    </section>`;
  }

  /* ================================================================
     About: the path as a staircase
  ================================================================ */
  function About() {
    var steps = ["Product Design", "UX / UI", "Research", "Service Design", "Systems Thinking"];
    return html`<section className="about" id="about" aria-labelledby="about-h">
      <p className="kicker mono">About</p>
      <h2 id="about-h" className="mid-h about-h">I'm interested in what happens between <em>people, products and systems.</em></h2>
      <div className="about-grid">
        <div className="about-copy">
          <p className="about-lede">I started in product design, learning how physical things get made and used. That curiosity followed me into UX and UI.</p>
          <p>At TCS I worked on enterprise projects for large healthcare and pharmaceutical organisations. The interfaces mattered, but the hardest problems usually sat around them: in handovers between teams, in regulation, in how information was produced and approved.</p>
          <p>That pulled me towards research, service design and systems thinking, and to an MA in Design Management in London. Today my practice combines all four. I'm still learning which question to ask first.</p>
        </div>
        <ol className="stairs" aria-label="How my practice has grown" data-progress="read">
          ${steps.map(function (s, i) { return html`<li key=${i} style=${{ "--k": i }}><span className="mono">${["Start", "Then", "Then", "Now", "Next"][i]}</span>${s}</li>`; })}
        </ol>
      </div>
    </section>`;
  }

  /* ================================================================
     Research & thinking + skills
  ================================================================ */
  // CHECK: replace or link these with your actual essays, MA papers or talks
  var THREADS = [
    ["Service design · Public services", "Who owns the journey when no single team does?", "How organisations can design for the handovers between departments, not only within them."],
    ["Responsible AI · Accessibility", "What does it take to trust an AI suggestion?", "Calibrated trust, transparency and control in AI-assisted services."],
    ["Inclusive design · Social design", "Designing with, not for.", "Participatory methods that bring lived experience into service decisions."],
    ["Design strategy · Transformation", "Where design sits in the organisation.", "How design management shapes whether research actually changes decisions."]
  ];
  function Thinking() {
    return html`<section className="think" id="thinking" aria-labelledby="think-h">
      <p className="kicker mono">Research & thinking</p>
      <h2 id="think-h" className="mid-h">Questions I'm <em>working through.</em></h2>
      <p className="think-note">Selected threads from my MA research and practice. Writing to follow.</p>
      <ul className="threads">
        ${THREADS.map(function (t, i) {
          return html`<li key=${i} className=${"th th" + i} data-speed=${[-0.05, 0.08, -0.1, 0.05][i]}>
            <p className="mono">${t[0]}</p><h3>${t[1]}</h3><p>${t[2]}</p></li>`;
        })}
      </ul>
    </section>`;
  }

  var SKILLS = [
    ["Research", ["User interviews", "Qualitative research", "Usability testing", "Surveys", "Heuristic evaluation", "Thematic analysis", "Participatory research", "Journey mapping"]],
    ["UX / Product", ["Information architecture", "Interaction design", "Wireframing", "Prototyping", "Design systems", "Accessibility", "Content hierarchy"]],
    ["Service / Strategy", ["Service design", "Systems thinking", "Service blueprints", "Stakeholder mapping", "Problem framing", "Design strategy", "Co-design"]],
    ["Tools", ["Figma", "Miro", "Adobe Creative Cloud", "Notion", "Framer", "Power BI", "Microsoft 365"]]
  ];
  function Skills() {
    return html`<section className="skills-sec" id="skills" aria-labelledby="skills-h">
      <h2 id="skills-h" className="big-h small"><span>Methods</span> <em>& tools</em></h2>
      <div className="skills" data-progress="read">
        ${SKILLS.map(function (g, gi) {
          return html`<div key=${gi} className=${"sk sk" + gi}>
            <h3 className="mono">${g[0]}</h3>
            <ul>${g[1].map(function (s, i) {
              var r = (((gi * 7 + i * 13) % 11) - 5) * 2.2;
              return html`<li key=${s} style=${{ "--r": r + "deg", "--dx": (((i * 17 + gi * 5) % 9) - 4) * 6 + "px" }}>${s}</li>`;
            })}</ul>
          </div>`;
        })}
      </div>
    </section>`;
  }

  /* ================================================================
     Contact
  ================================================================ */
  function Contact() {
    var cs = useState("Copy"), copyLabel = cs[0], setCopy = cs[1];
    var emailRef = useRef(null);
    var copy = function () {
      var fallback = function () {
        var r = document.createRange(); r.selectNodeContents(emailRef.current);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); setCopy("Selected, press Ctrl/⌘ C");
      };
      try { navigator.clipboard.writeText(S.email).then(function () { setCopy("Copied"); setTimeout(function () { setCopy("Copy"); }, 1800); }, fallback); }
      catch (e) { fallback(); }
    };
    var linkedin = S.linkedin || "https://www.linkedin.com/search/results/people/?keywords=" + encodeURIComponent(S.name + " designer");
    return html`<section className="contact" id="contact" aria-labelledby="contact-h">
      <div className="marquee contact-mq" aria-hidden="true"><div className="mq-track" data-marquee="-1">
        ${[0, 1, 2, 3, 4, 5].map(function (i) { return html`<span key=${i}>Let's explore it<i>●</i></span>`; })}
      </div></div>
      <h2 id="contact-h" className="contact-h">Working on something complex? <em>Let's explore it.</em></h2>
      <ul className="contact-list">
        <li className="c-mail"><span className="mono">Email</span><span className="c-val" ref=${emailRef}>${S.email}</span>
          <button type="button" className="copy" onClick=${copy}>${copyLabel}</button></li>
        <li><span className="mono">LinkedIn</span><a className="c-val" href=${linkedin} target="_blank" rel="noopener">${S.name} ↗</a></li>
        <li><span className="mono">CV</span>${S.cv
          ? html`<a className="c-val" href=${S.cv} target="_blank" rel="noopener">Download CV ↗</a>`
          : html`<span className="c-val">On request</span><span className="c-sub">Email me for the latest version</span>`}</li>
        <li><span className="mono">Selected work</span>${S.portfolioPdf
          ? html`<a className="c-val" href=${S.portfolioPdf} target="_blank" rel="noopener">Portfolio PDF ↗</a>`
          : html`<a className="c-val" href="#work">Browse projects</a><span className="c-sub">Full PDF on request</span>`}</li>
      </ul>
      <p className="foot mono">© ${new Date().getFullYear()} Yashvi Jain · London</p>
    </section>`;
  }

  /* ================================================================
     Case study
  ================================================================ */
  function Case(props) {
    var p = props.p, idx = P.indexOf(p);
    var prev = P[(idx - 1 + P.length) % P.length], next = P[(idx + 1) % P.length];
    var as = useState("context"), active = as[0], setActive = as[1];
    useEffect(function () {
      if (!("IntersectionObserver" in window)) return;
      var io = new IntersectionObserver(function (en) {
        en.forEach(function (e) { if (e.isIntersecting) setActive(e.target.getAttribute("data-sec")); });
      }, { rootMargin: "-30% 0px -60% 0px" });
      document.querySelectorAll(".cs").forEach(function (s) { io.observe(s); });
      return function () { io.disconnect(); };
    }, [p.id]);
    var go = function (e, id) {
      e.preventDefault();
      var t = document.getElementById(p.id + "-" + id);
      if (t) t.scrollIntoView({ behavior: REDUCE ? "auto" : "smooth" });
    };
    return html`<article className="case" aria-labelledby="case-h">
      <header className="case-top">
        <a className="back mono" href="#work">← All work</a>
        <span className="case-num" aria-hidden="true">${p.num}</span>
        <p className="case-kicker mono"><b>${p.kind}</b><span>${p.client}</span><span>${p.via}</span></p>
        <h1 id="case-h" className="case-title" tabIndex="-1">${p.title}</h1>
        <p className="case-sum">${p.summary}</p>
        <ol className="flowline" aria-label="Project arc">
          ${p.flow.map(function (f, i) { return html`<li key=${i}>${f}</li>`; })}
        </ol>
      </header>
      <dl className="case-meta">
        ${Object.keys(p.meta).map(function (k, i) { return html`<div key=${k} data-speed=${[0.04, -0.03, 0.06, -0.05][i]}><dt className="mono">${k}</dt><dd>${p.meta[k]}</dd></div>`; })}
      </dl>
      <figure className="case-vis">
        <div data-speed="-0.05"><${Vis} kind=${p.visual} /></div>
        <figcaption className="mono">Reconstructed artefact. Client details removed.</figcaption>
      </figure>
      <div className="split">
        <div className="sp sp-mine"><p className="mono">My contribution</p><p>${p.split.mine}</p></div>
        <div className="sp sp-team"><p className="mono">Team contribution</p><p>${p.split.team}</p></div>
        <div className="sp sp-out"><p className="mono">Outcome</p><p>${p.split.outcome}</p></div>
      </div>
      <div className="case-body">
        <nav className="toc" aria-label="Case study sections">
          ${CS.map(function (s, i) {
            return html`<a key=${s[0]} href=${"#" + p.id + "-" + s[0]} aria-current=${active === s[0] ? "true" : null} onClick=${function (e) { go(e, s[0]); }}>
              <span className="mono">${pad(i + 1)}</span>${s[1]}</a>`;
          })}
        </nav>
        <div className="cs-col">
          ${CS.map(function (s, i) {
            var v = p.sections[s[0]];
            var big = s[0] === "opportunity" || s[0] === "outcome";
            return html`<section key=${s[0]} id=${p.id + "-" + s[0]} data-sec=${s[0]} className=${"cs" + (big ? " cs-big" : "")}>
              <p className="cs-k mono"><b>${pad(i + 1)}</b> ${s[1]} <span>— ${s[2]}</span></p>
              ${Array.isArray(v)
                ? html`<ol className="insights">${v.map(function (x, k) { return html`<li key=${k}><span className="mono">I${k + 1}</span>${x}</li>`; })}</ol>`
                : html`<p className="cs-t">${v}</p>`}
            </section>`;
          })}
        </div>
      </div>
      <p className="confidential mono">Selected project details and visuals have been adapted or anonymised to respect client confidentiality.</p>
      <nav className="next" aria-label="More projects">
        <a href=${"#case-" + prev.id}><span className="mono">← Previous</span><span className="nx-t">${prev.title}</span></a>
        <a href=${"#case-" + next.id}><span className="mono">Next →</span><span className="nx-t">${next.title}</span></a>
      </nav>
    </article>`;
  }

  /* ================================================================
     App + hash routing (#case-<id> opens a case study)
  ================================================================ */
  function readRoute() {
    var hh = location.hash.slice(1);
    if (hh.indexOf("case-") === 0) {
      var id = hh.slice(5);
      for (var i = 0; i < P.length; i++) if (P[i].id === id) return { caseId: id, anchor: null };
    }
    return { caseId: null, anchor: hh || null };
  }
  function App() {
    var rs = useState(readRoute), route = rs[0], setRoute = rs[1];
    var prevCase = useRef(route.caseId);
    useEffect(function () {
      var on = function () { setRoute(readRoute()); };
      window.addEventListener("hashchange", on);
      return function () { window.removeEventListener("hashchange", on); };
    }, []);
    useEffect(function () {
      Engine.refresh();
      var wasCase = prevCase.current; prevCase.current = route.caseId;
      if (route.caseId) {
        window.scrollTo(0, 0);
        document.title = P.filter(function (x) { return x.id === route.caseId; })[0].title + " · Yashvi Jain";
        var t = document.getElementById("case-h"); if (t) t.focus({ preventScroll: true });
      } else {
        document.title = "Yashvi Jain Portfolio";
        if (route.anchor) {
          var el = document.getElementById(route.anchor);
          if (el) setTimeout(function () { el.scrollIntoView(); Engine.refresh(); }, wasCase ? 30 : 0);
        } else if (wasCase) window.scrollTo(0, 0);
      }
    }, [route.caseId, route.anchor]);

    var cp = route.caseId && P.filter(function (x) { return x.id === route.caseId; })[0];
    return html`<${React.Fragment}>
      <a className="skip" href="#main">Skip to content</a>
      <${Header} />
      <main id="main">
        ${cp ? html`<${Case} key=${cp.id} p=${cp} />` : html`<${React.Fragment}>
          <${Hero} /><${Intro} /><${Work} /><${Transfer} /><${Approach} /><${Principles} />
          <${Experience} /><${About} /><${Thinking} /><${Skills} />
        <//>`}
        <${Contact} />
      </main>
    <//>`;
  }

  var root = document.getElementById("root");
  if (ReactDOM.createRoot) ReactDOM.createRoot(root).render(html`<${App} />`);
  else ReactDOM.render(html`<${App} />`, root);
})();
