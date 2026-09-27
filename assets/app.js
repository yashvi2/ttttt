/* Portfolio app: React (via htm, no build step) + Three.js + a small scroll engine. */
(function () {
  "use strict";

  var S = window.SITE, P = window.PROJECTS, CS = window.CASE_SECTIONS;
  var CATS = window.CATEGORIES, EXP = window.EXPERIMENTS, MOMENTS = window.MOMENTS;
  var h = window.React.createElement;
  var html = window.htm.bind(h);
  var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef;
  var mq = function (q) { return !!(window.matchMedia && window.matchMedia(q).matches); };
  var REDUCE = mq("(prefers-reduced-motion: reduce)");
  var FINE = mq("(hover: hover) and (pointer: fine)");
  var pad = function (n) { return String(n).padStart(2, "0"); };
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };

  /* ================================================================
     Scroll engine: writes CSS variables straight to the DOM.
       data-progress="pin"  --p = 0..1 while a tall section is pinned
       data-progress="read" --p = 0..1 as an element is read through
       data-marquee="1|-1"  endless strip, nudged by scroll velocity
       data-track           horizontal track inside a pinned section;
                            the section is sized so vertical scroll
                            drives it sideways
  ================================================================ */
  var Engine = {
    prog: [], marq: [], lastY: 0, vel: 0, running: false,
    refresh: function () {
      var q = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
      this.prog = q("[data-progress]");
      this.para = REDUCE ? [] : q("[data-parallax]");
      this.marq = q("[data-marquee]").map(function (el) { return { el: el, x: 0 }; });
      var bar = document.querySelector(".bar"), barH = bar ? bar.offsetHeight : 0;
      document.documentElement.style.setProperty("--bar-h", barH + "px");
      q('[data-progress="pin"]').forEach(function (sec) { sec.__top = barH; });
      q("[data-track]").forEach(function (track) {
        var sec = track.closest("[data-progress]");
        if (!sec) return;
        sec.__top = barH;
        if (window.innerWidth < 820) { sec.style.height = ""; track.style.transform = ""; sec.__track = null; return; }
        var extra = Math.max(0, track.scrollWidth - window.innerWidth);
        sec.style.height = (window.innerHeight - barH + extra * 0.7) + "px";
        sec.__track = track; sec.__extra = extra;
      });
      if (!this.running) { this.running = true; this.loop(); }
    },
    loop: function () {
      var self = this;
      var tick = function () {
        var vh = window.innerHeight, y = window.scrollY, doc = document.documentElement;
        self.vel = self.vel * 0.85 + (y - self.lastY) * 0.15;
        self.lastY = y;
        doc.style.setProperty("--scroll", (y / Math.max(1, doc.scrollHeight - vh)).toFixed(4));
        for (var j = 0; j < self.prog.length; j++) {
          var e = self.prog[j], rr = e.getBoundingClientRect(), mode = e.getAttribute("data-progress"), p;
          if (rr.bottom < -vh || rr.top > vh * 2) continue;
          if (mode === "pin") { var top = e.__top || 0; p = (top - rr.top) / Math.max(1, rr.height - (vh - top)); }
          else p = (vh * 0.9 - rr.top) / (rr.height + vh * 0.35);
          p = clamp(p, 0, 1);
          e.style.setProperty("--p", p.toFixed(4));
          if (e.__track) e.__track.style.transform = "translate3d(" + (-p * e.__extra).toFixed(1) + "px,0,0)";
          if (e.__onProgress) e.__onProgress(p);
        }
        // Parallax: the element drifts relative to the viewport centre (uses the CSS translate property)
        for (var n = 0; n < self.para.length; n++) {
          var el = self.para[n], br = el.getBoundingClientRect();
          if (br.bottom < -100 || br.top > vh + 100) continue;
          var off = (br.top + br.height / 2 - vh / 2) * parseFloat(el.getAttribute("data-parallax"));
          el.style.setProperty("--py", off.toFixed(1) + "px");
        }
        for (var k = 0; k < self.marq.length; k++) {
          var m = self.marq[k], dir = parseFloat(m.el.getAttribute("data-marquee"));
          var half = m.el.scrollWidth / 2;
          if (!REDUCE) m.x -= dir * (0.45 + Math.min(Math.abs(self.vel), 60) * 0.22);
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
     Smooth scroll: gentle inertia for mouse wheels on desktop.
     Keyboard, scrollbar, touch and anchor jumps stay native.
  ================================================================ */
  var Smooth = {
    on: !REDUCE && FINE, target: 0, cur: 0, running: false,
    init: function () {
      if (!this.on) return;
      var self = this;
      self.cur = self.target = window.scrollY;
      window.addEventListener("wheel", function (e) {
        if (e.ctrlKey || e.defaultPrevented || document.documentElement.classList.contains("menu-open")) return;
        var dy = e.deltaY * (e.deltaMode === 1 ? 40 : e.deltaMode === 2 ? window.innerHeight : 1);
        if (Math.abs(e.deltaX) > Math.abs(dy)) return;
        e.preventDefault();
        if (!self.running) self.cur = self.target = window.scrollY;
        var max = document.documentElement.scrollHeight - window.innerHeight;
        self.target = clamp(self.target + dy, 0, max);
        if (!self.running) { self.running = true; requestAnimationFrame(function step() {
          self.cur += (self.target - self.cur) * 0.12;
          if (Math.abs(self.target - self.cur) < 0.5) { self.cur = self.target; self.running = false; }
          window.scrollTo(0, self.cur);
          if (self.running) requestAnimationFrame(step);
        }); }
      }, { passive: false });
    },
    stop: function () { this.running = false; this.cur = this.target = window.scrollY; }
  };
  Smooth.init();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { Engine.refresh(); });

  /* ================================================================
     Reveal: content below the fold eases in as it arrives
  ================================================================ */
  var REVEAL_SEL = [".sec-head", ".feat-head", ".pcard", ".xcard", ".note-card", ".like", ".tl > li", ".glance", ".split .sp",
    ".cs", ".sign", ".collage .polaroid", ".p-bake", ".moment", ".letter", ".facts > div", ".recipe", ".xfer li", ".threads li",
    ".sk", ".contact-card", ".case-img", ".poster-copy", ".wrow", ".windex-filters", ".me-story > *", ".group-head", ".mode-card", ".loop"].join(",");
  var Reveal = {
    io: null,
    scan: function () {
      if (REDUCE || !("IntersectionObserver" in window)) return;
      var self = this;
      document.documentElement.classList.add("reveal-on");
      if (!self.io) self.io = new IntersectionObserver(function (en) {
        en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); self.io.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
      var vh = window.innerHeight;
      Array.prototype.forEach.call(document.querySelectorAll(REVEAL_SEL), function (el) {
        if (el.hasAttribute("data-rv") || el.closest(".hz-track")) return;
        if (el.getBoundingClientRect().top < vh * 0.92) return; // already on screen: leave it be
        var i = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
        el.style.setProperty("--rv", Math.min(i, 5) * 70 + "ms");
        el.setAttribute("data-rv", "");
        self.io.observe(el);
      });
    }
  };

  /* ================================================================
     Cursor: a small ring that follows the pointer, trailing particles
  ================================================================ */
  function CursorTrail() {
    var cv = useRef(null);
    useEffect(function () {
      if (!FINE || REDUCE) return;
      var c = cv.current, ctx = c.getContext("2d"), dpr = Math.min(2, window.devicePixelRatio || 1);
      var parts = [], mx = -100, my = -100, fx = -100, fy = -100, big = 0, bigT = 0, raf = 0, idle = true;
      var COLS = ["#D9432E", "#F3B63F", "#2B2320", "#E88B6A"];
      var size = function () { c.width = innerWidth * dpr; c.height = innerHeight * dpr; c.style.width = innerWidth + "px"; c.style.height = innerHeight + "px"; };
      size(); window.addEventListener("resize", size);
      var wake = function () { if (idle) { idle = false; raf = requestAnimationFrame(draw); } };
      var onMove = function (e) {
        var dx = e.clientX - mx, dy = e.clientY - my;
        mx = e.clientX; my = e.clientY;
        var n = Math.min(3, 1 + Math.floor(Math.hypot(dx, dy) / 18));
        for (var i = 0; i < n; i++) parts.push({ x: mx, y: my, vx: (Math.random() - 0.5) * 1.4 - dx * 0.03, vy: (Math.random() - 0.5) * 1.4 - dy * 0.03 + 0.2, r: 1.2 + Math.random() * 2.6, life: 1, c: COLS[(Math.random() * COLS.length) | 0] });
        if (parts.length > 160) parts.splice(0, parts.length - 160);
        var t = e.target.closest && e.target.closest("a, button, [data-cursor]");
        bigT = t ? 1 : 0;
        wake();
      };
      var onLeave = function () { mx = my = -100; };
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
      function draw() {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        fx += (mx - fx) * 0.18; fy += (my - fy) * 0.18; big += (bigT - big) * 0.15;
        for (var i = parts.length - 1; i >= 0; i--) {
          var p = parts[i];
          p.x += p.vx; p.y += p.vy; p.vy += 0.025; p.vx *= 0.98; p.life -= 0.022;
          if (p.life <= 0) { parts.splice(i, 1); continue; }
          ctx.globalAlpha = p.life * 0.85; ctx.fillStyle = p.c;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2); ctx.fill();
        }
        ctx.globalAlpha = 1;
        var rad = 14 + big * 16;
        ctx.strokeStyle = "#2B2320"; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(fx, fy, rad, 0, Math.PI * 2); ctx.stroke();
        if (big > 0.05) { ctx.globalAlpha = big * 0.18; ctx.fillStyle = "#D9432E"; ctx.fill(); ctx.globalAlpha = 1; }
        var moving = parts.length || Math.abs(mx - fx) > 0.3 || Math.abs(my - fy) > 0.3 || Math.abs(bigT - big) > 0.01;
        if (moving) raf = requestAnimationFrame(draw); else idle = true;
      }
      return function () { cancelAnimationFrame(raf); window.removeEventListener("pointermove", onMove); document.removeEventListener("pointerleave", onLeave); window.removeEventListener("resize", size); };
    }, []);
    return html`<canvas ref=${cv} className="cursor-trail" aria-hidden="true"></canvas>`;
  }

  /* ================================================================
     Three.js: particles that reorganise from people to systems.
     Lives in one framed window on the page, only renders when visible.
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
    var C = [[-2.3, 0.9, 0], [1.7, 1.4, -0.6], [0.1, -1.3, 0.5], [-1.3, -1.1, -1.1], [2.4, -0.7, 0.8], [-0.2, 1.9, 0.9]];
    for (i = 0; i < N; i++) { o = i * 3; var c = C[i % C.length];
      st[0][o] = c[0] + gauss(r) * 0.32; st[0][o + 1] = c[1] + gauss(r) * 0.32; st[0][o + 2] = c[2] + gauss(r) * 0.32; }
    var cols = Math.ceil(Math.sqrt(N));
    for (i = 0; i < N; i++) { o = i * 3; var cx = i % cols, cy = Math.floor(i / cols);
      st[1][o] = (cx - cols / 2) * 0.2; st[1][o + 1] = (cy - cols / 2) * 0.2; st[1][o + 2] = Math.sin(cx * 0.35) * 0.25; }
    for (i = 0; i < N; i++) { o = i * 3; var L = i % 4, a = r() * Math.PI * 2, rad = Math.sqrt(r()) * 2.1;
      st[2][o] = Math.cos(a) * rad; st[2][o + 1] = (L - 1.5) * 0.85; st[2][o + 2] = Math.sin(a) * rad; }
    for (i = 0; i < N; i++) { o = i * 3; var u = (i / N) * Math.PI * 2, v = r() * Math.PI * 2, rr = 0.28 + r() * 0.1;
      st[3][o] = (2.1 + rr * Math.cos(v)) * Math.cos(u); st[3][o + 1] = (2.1 + rr * Math.cos(v)) * Math.sin(u); st[3][o + 2] = rr * Math.sin(v); }
    var g = Math.PI * (3 - Math.sqrt(5));
    for (i = 0; i < N; i++) { o = i * 3; var y = 1 - (i / (N - 1)) * 2, rad2 = Math.sqrt(1 - y * y) * 2.4, th = g * i;
      st[4][o] = Math.cos(th) * rad2; st[4][o + 1] = y * 2.4; st[4][o + 2] = Math.sin(th) * rad2; }
    return st;
  }
  function initScene(canvas, getP, opts) {
    opts = opts || {};
    var T = window.THREE;
    if (!T) return function () {};
    var renderer;
    try { renderer = new T.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); }
    catch (e) { canvas.style.display = "none"; return function () {}; }
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    var scene = new T.Scene(), camera = new T.PerspectiveCamera(38, 1, 0.1, 100), group = new T.Group();
    scene.add(group);
    var N = window.innerWidth < 700 ? 380 : 640, states = buildStates(N);
    var pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
    var PAL = opts.light
      ? [[0.17, 0.14, 0.13], 0, 0, [0.85, 0.26, 0.18], [0.91, 0.66, 0.16]]
      : [[0.96, 0.93, 0.87], 0, 0, [0.85, 0.26, 0.18], [0.95, 0.71, 0.25]];
    for (var i = 0; i < N; i++) { var cc = PAL[i % 11 === 0 ? 3 : i % 17 === 0 ? 4 : 0]; col[i * 3] = cc[0]; col[i * 3 + 1] = cc[1]; col[i * 3 + 2] = cc[2]; }
    var geo = new T.BufferGeometry();
    geo.setAttribute("position", new T.BufferAttribute(pos, 3));
    geo.setAttribute("color", new T.BufferAttribute(col, 3));
    var dot = document.createElement("canvas"); dot.width = dot.height = 64;
    var dc = dot.getContext("2d"); dc.beginPath(); dc.arc(32, 32, 28, 0, Math.PI * 2); dc.fillStyle = "#fff"; dc.fill();
    var tex = new T.CanvasTexture(dot);
    var mat = new T.PointsMaterial({ size: 0.07, vertexColors: true, map: tex, alphaTest: 0.5, transparent: true, sizeAttenuation: true });
    group.add(new T.Points(geo, mat));
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
    var lmat = new T.LineBasicMaterial({ color: opts.light ? 0x2b2320 : 0xf5eee2, transparent: true, opacity: 0 });
    group.add(new T.LineSegments(lgeo, lmat));

    var mouse = { x: 0, y: 0 }, rot = { x: 0, y: 0 };
    var onMove = function (e) {
      var r = canvas.getBoundingClientRect();
      mouse.x = clamp((e.clientX - r.left) / r.width - 0.5, -0.6, 0.6); mouse.y = clamp((e.clientY - r.top) / r.height - 0.5, -0.6, 0.6);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    var size = function () {
      var w = canvas.clientWidth, hh = canvas.clientHeight;
      renderer.setSize(w, hh, false); camera.aspect = w / Math.max(1, hh); camera.updateProjectionMatrix();
      group.position.y = w > 800 ? 0 : -0.8;
    };
    size(); window.addEventListener("resize", size);
    var visible = false, raf = 0, t0 = performance.now(), spin = 0;
    var io = new IntersectionObserver(function (en) { visible = en[0].isIntersecting; });
    io.observe(canvas);
    var smooth = function (x) { return x * x * (3 - 2 * x); };
    var frame = function (now) {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      var t = (now - t0) / 1000, p = getP();
      var s = clamp(p * 1.1, 0, 1) * 4, a = Math.floor(Math.min(s, 3.999)), f = smooth(s - a);
      var A = states[a], B = states[a + 1], w = REDUCE ? 0 : 0.05;
      for (var k = 0; k < N * 3; k += 3) {
        var ph = k * 0.013;
        pos[k] = A[k] + (B[k] - A[k]) * f + Math.sin(t * 0.9 + ph) * w;
        pos[k + 1] = A[k + 1] + (B[k + 1] - A[k + 1]) * f + Math.cos(t * 0.8 + ph) * w;
        pos[k + 2] = A[k + 2] + (B[k + 2] - A[k + 2]) * f;
      }
      geo.attributes.position.needsUpdate = true;
      var lo = clamp((s - 2.6) / 1.2, 0, 1) * (opts.light ? 0.16 : 0.25);
      var wide = canvas.clientWidth > 800;
      group.position.x = !wide ? 0 : opts.drift ? 2.4 - p * 4.8 : 1.6;
      lmat.opacity = lo;
      if (lo > 0) {
        for (var q = 0; q < pairs.length; q++) { var src = pairs[q] * 3, dst = q * 3; lpos[dst] = pos[src]; lpos[dst + 1] = pos[src + 1]; lpos[dst + 2] = pos[src + 2]; }
        lgeo.attributes.position.needsUpdate = true;
      }
      if (!REDUCE) spin += 0.0018;
      rot.x += (mouse.y * 0.6 - rot.x) * 0.06; rot.y += (mouse.x * 0.9 - rot.y) * 0.06;
      group.rotation.set(rot.x + (a === 1 ? -0.35 * (1 - f) : 0), spin + rot.y, 0);
      camera.position.z = 7.4 + s * 0.6;
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
     Doodles: small hand-drawn SVG marks
  ================================================================ */
  // Split a headline into masked words so each can rise into place
  var Rise = function (p) {
    return p.text.split(" ").map(function (w, i) {
      return html`<span key=${i} className="w-mask"><span className="w-in" style=${{ "--i": i }}>${w}</span></span>${" "}`;
    });
  };
  var Squiggle = function () { return html`<svg className="doodle squiggle" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true"><path d="M3 12 C 30 2, 50 20, 80 10 S 130 2, 160 11 S 215 20, 245 9 S 285 6, 297 10" /></svg>`; };
  var Arrow = function (p) { return html`<svg className=${"doodle arrow " + (p.className || "")} viewBox="0 0 120 80" aria-hidden="true"><path d="M8 10 C 40 6, 90 20, 100 64" /><path d="M86 54 L100 66 L108 48" /></svg>`; };
  var Star = function (p) { return html`<svg className=${"doodle star " + (p.className || "")} viewBox="0 0 40 40" aria-hidden="true"><path d="M20 3 L23 16 L37 18 L25 24 L28 37 L20 28 L11 37 L14 24 L3 18 L17 16 Z" /></svg>`; };
  var Circle = function (p) { return html`<svg className=${"doodle circ " + (p.className || "")} viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden="true"><path d="M150 8 C 90 -2, 12 10, 8 40 C 5 70, 120 80, 180 62 C 205 54, 196 18, 130 12" /></svg>`; };

  /* ================================================================
     Anonymised artefacts used as placeholder project images
  ================================================================ */
  var L = function (w) { return '<div class="ln ' + w + '"></div>'; };
  var VIS = {
    ia: function () {
      var col = function (hd, hi) { var s = ""; for (var i = 0; i < 3; i++) s += '<div class="leaf' + (i === hi ? " hi" : "") + '">' + L(i ? "m" : "l") + L("s") + "</div>";
        return '<div class="col"><div class="head">' + hd + "</div>" + s + "</div>"; };
      return '<div class="vis v-ia" role="img" aria-label="Reconstructed information architecture: one entry point and three task-led sections"><div class="root">Home</div><div class="branches">' + col("Find", 0) + col("Understand", 1) + col("Act", 2) + "</div></div>";
    },
    journey: function () {
      var lane = function (n, hd) { var c = ""; for (var i = 0; i < 5; i++) c += '<div class="cell' + (hd.indexOf(i) > -1 ? " hand" : "") + '"></div>'; return '<div class="lane"><span class="tag">' + n + "</span>" + c + "</div>"; };
      return '<div class="vis v-journey" role="img" aria-label="Journey map across three user groups and five stages, with handovers highlighted"><div class="stg"><span></span><span>Aware</span><span>Access</span><span>Use</span><span>Handover</span><span>Follow-up</span></div>' +
        lane("Group A", [3]) + lane("Group B", [1, 3]) + lane("Group C", [3, 4]) +
        '<svg class="curve" viewBox="0 0 300 56" preserveAspectRatio="none" aria-hidden="true"><path d="M8 20 C 50 14, 70 24, 96 26 S 150 18, 170 22 S 205 50, 222 46 S 270 22, 292 18"/><circle cx="222" cy="46" r="4"/></svg></div>';
    },
    dashboard: function () {
      var b = [38, 52, 44, 60, 48, 72, 66, 84, 58, 62].map(function (v, i) { return '<i style="height:' + v + '%"' + (i === 7 ? ' class="hi"' : "") + "></i>"; }).join("");
      var row = function (s, k) { return '<div class="row">' + L(s) + '<span class="pill ' + k + '">' + (k === "w" ? "Review" : "On track") + "</span></div>"; };
      return '<div class="vis v-dash panel" role="img" aria-label="Anonymised dashboard: summary indicators with one flagged, a trend chart and a status table"><div class="kpis"><div class="kpi panel"><span class="tag">Indicator</span><b></b></div><div class="kpi panel alert"><span class="tag">Needs attention</span><b></b></div><div class="kpi panel"><span class="tag">Indicator</span><b></b></div></div><div class="chart panel">' + b + '</div><div class="rows panel">' + row("l", "k") + row("m", "w") + row("l", "k") + "</div></div>";
    },
    ai: function () {
      return '<div class="vis v-ai" role="img" aria-label="Concept: an AI answer showing sources and confidence, which the person can edit or reject"><div class="q">Summarise the options for me</div><div class="a panel">' + L("l") + L("l") + L("m") +
        '<div class="srcs"><span class="src">Source 1</span><span class="src">Source 2</span></div><div class="conf"><span class="tag">Confidence</span><div class="meter"><i></i></div></div><div class="acts"><span>Edit</span><span>Accept</span><span>Why?</span></div></div></div>';
    },
    blueprint: function () {
      var r = function (n, cls, cells) { return '<div class="r ' + cls + '"><span class="tag">' + n + "</span>" + cells.map(function (c) { return '<div class="c ' + c + '"></div>'; }).join("") + "</div>"; };
      return '<div class="vis v-bp" role="img" aria-label="Service blueprint with pain points and opportunities marked">' + r("Student", "cust", ["", "", "", ""]) + r("Front stage", "", ["", "pain", "", "pain"]) + '<div class="vline"><span>line of visibility</span></div>' + r("Back stage", "", ["", "", "pain", ""]) + r("Systems", "", ["", "e", "", ""]) + r("Ideas", "opp", ["e", "", "", ""]) + "</div>";
    },
    participation: function () {
      var d = [[50, 3, 0], [88, 28, 0], [92, 70, 1], [55, 97, 0], [12, 74, 0], [8, 30, 1], [70, 20, 1], [80, 50, 0], [28, 22, 0], [22, 62, 1], [60, 80, 1], [36, 82, 0]]
        .map(function (p) { return '<i class="dot' + (p[2] ? " a" : "") + '" style="left:' + p[0] + "%;top:" + p[1] + '%"></i>'; }).join("");
      return '<div class="vis v-part" role="img" aria-label="Participation map: visitors, staff and community around the museum experience"><div class="ring"></div><div class="ring r2"></div><div class="ring r3"></div><div class="core">Visitors</div>' + d + "</div>";
    }
  };
  function ProjectImage(p) {
    if (p.p.image) return html`<img className="proj-img" src=${p.p.image} alt="" loading="lazy" />`;
    return html`<div className=${"proj-ph tint-" + p.p.category} dangerouslySetInnerHTML=${{ __html: VIS[p.p.visual]() }}></div>`;
  }

  /* ================================================================
     Header + menu
  ================================================================ */
  var PAGES = [
    ["home", "Home", "Yashvi Jain Portfolio"],
    ["work", "Work", "Work · Yashvi Jain"],
    ["approach", "Approach", "Approach · Yashvi Jain"],
    ["about", "About", "About · Yashvi Jain"],
    ["contact", "Say hello", "Contact · Yashvi Jain"]
  ];
  // Sections that live on a page, so old in-page links still land in the right place
  var SECTION_PAGE = {
    top: "home", zoom: "approach", process: "approach", transfer: "work", me: "about", baking: "about",
    experience: "about", thinking: "about", "out-loud": "about", skills: "about", "work-physical": "work", "work-digital": "work", "work-experiments": "work"
  };
  function Header(props) {
    var os = useState(false), open = os[0], setOpen = os[1];
    var btn = useRef(null), panel = useRef(null);
    useEffect(function () {
      document.documentElement.classList.toggle("menu-open", open);
      if (!open) return;
      var first = panel.current && panel.current.querySelector("a"); if (first) first.focus();
      var onKey = function (e) { if (e.key === "Escape") { setOpen(false); if (btn.current) btn.current.focus(); } };
      window.addEventListener("keydown", onKey);
      return function () { window.removeEventListener("keydown", onKey); };
    }, [open]);
    useEffect(function () {
      var close = function () { setOpen(false); };
      window.addEventListener("hashchange", close);
      return function () { window.removeEventListener("hashchange", close); };
    }, []);
    return html`<${React.Fragment}>
      <header className="bar">
        <a className="brand" href="#home" aria-current=${props.page === "home" ? "page" : null}><span className="brand-name">Yashvi Jain</span><span className="brand-sub hand">product designer</span></a>
        <nav className="nav" aria-label="Primary">
          ${PAGES.slice(1).map(function (n) {
            return html`<a key=${n[0]} href=${"#" + n[0]} className=${n[0] === "contact" ? "nav-hello" : ""} aria-current=${props.page === n[0] ? "page" : null}>${n[1]}</a>`;
          })}
        </nav>
        <button ref=${btn} type="button" className="bar-menu" aria-expanded=${open} aria-controls="menu" onClick=${function () { setOpen(!open); }}>${open ? "Close" : "Menu"}</button>
      </header>
      <nav id="menu" ref=${panel} className="menu" aria-label="Site" hidden=${!open}>
        <ol>${PAGES.map(function (m, i) { return html`<li key=${m[0]} style=${{ "--d": i * 35 + "ms" }}><a href=${"#" + m[0]} aria-current=${props.page === m[0] ? "page" : null}><span className="menu-n hand">${i + 1}.</span>${m[0] === "contact" ? "Contact" : m[1]}</a></li>`; })}</ol>
        <p className="menu-foot">${S.email} · <a href=${S.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a> · London, United Kingdom</p>
      </nav>
    <//>`;
  }

  /* ================================================================
     Hero: illustrated me + hello
  ================================================================ */
  function Hero() {
    return html`<section className="hero" id="top" aria-labelledby="hero-h">
      <div className="hero-copy">
        <p className="hand hero-hi">hi there, nice to meet you</p>
        <h1 id="hero-h" className="hero-h"><${Rise} text="I'm Yashvi." /></h1>
        <p className="hero-p">A product designer who's spent years shaping interfaces, and is now just as focused on the decisions behind them. UX craft meets strategic thinking, with a service design edge.</p>
        <p className="hero-line">Designing better experiences for <span className="mark">complex systems<${Squiggle} /></span></p>
        <div className="ctas">
          <a className="btn btn-red" href="#work">See my work</a>
          <a className="btn" href="#about">Get to know me</a>
        </div>
      </div>
      <figure className="hero-art">
        <img data-parallax="0.06" src=${S.illustration} alt="Illustration of Yashvi sitting on a chair, chin resting on her hand, smiling" width="911" height="1045" />
        <figcaption className="hand note n1">that's me, thinking about systems<br />(or cake)<${Arrow} className="a1" /></figcaption>
      </figure>
    </section>`;
  }

  var FEATURED = ["pfizer", "jnj", "data"];
  function FeaturedWork() {
    var list = FEATURED.map(function (id) { return P.filter(function (x) { return x.id === id; })[0]; }).filter(Boolean);
    return html`<section className="featured wrap" aria-labelledby="feat-h">
      <div className="feat-head">
        <h2 id="feat-h" className="feat-h">Selected work</h2>
        <a href="#work" className="feat-all">See all work →</a>
      </div>
      <ul className="cards feat-cards">
        ${list.map(function (p) { return html`<${ProjectCard} key=${p.id} p=${p} rot=${0} />`; })}
      </ul>
    </section>`;
  }

  /* ================================================================
     Poster home: centred, a giant word cut from the same photo that
     continues below it, with crop marks, labels and colour chips.
  ================================================================ */
  var Birds = function () {
    return html`<svg className="doodle birds" viewBox="0 0 70 34" aria-hidden="true">
      <path d="M4 14 q5 -6 10 0 q5 -6 10 0" /><path d="M30 6 q4 -5 8 0 q4 -5 8 0" /><path d="M46 24 q3 -4 6 0 q3 -4 6 0" />
    </svg>`;
  };
  // Same blue-grey wash on the word and the top of the photo, so they read as one surface
  var POSTER_TINT = "linear-gradient(rgba(84, 118, 142, .5), rgba(84, 118, 142, .5))";
  var POSTER_FADE = "linear-gradient(rgba(84, 118, 142, .5), rgba(84, 118, 142, 0) 45%)";
  function PosterHero() {
    return html`<section className="poster" id="top" aria-labelledby="poster-h">
      <span className="crop c-tl" aria-hidden="true"></span><span className="crop c-tr" aria-hidden="true"></span>
      <span className="crop c-bl" aria-hidden="true"></span><span className="crop c-br" aria-hidden="true"></span>
      <dl className="poster-meta">
        <div><dt>Name</dt><dd>Yashvi Jain</dd></div>
        <div><dt>Role</dt><dd>Product designer</dd></div>
        <div><dt>Based in</dt><dd>London</dd></div>
        <div><dt>Focus</dt><dd>Complex systems</dd></div>
      </dl>
      <div className="poster-art">
        <p className="poster-word" aria-hidden="true" style=${{ backgroundImage: POSTER_TINT + ', url("' + S.portraitFull + '")' }}>hello</p>
        <div className="poster-photo" role="img" aria-label="Yashvi sitting on a chair against a pale blue wall, smiling" style=${{ backgroundImage: POSTER_FADE + ', url("' + S.portraitFull + '")' }}>
          <ul className="swatches" aria-hidden="true"><li></li><li></li><li></li></ul>
          <${Birds} />
        </div>
      </div>
      <div className="poster-copy">
        <p className="hand poster-hi">hi, nice to meet you</p>
        <h1 id="poster-h" className="poster-h"><${Rise} text="I'm Yashvi, a product designer who shapes interfaces and the decisions behind them." /></h1>
        <p className="poster-p">UX craft meets strategic thinking, with a service design edge. Designing better experiences for <span className="mark">complex systems<${Squiggle} /></span></p>
        <div className="ctas">
          <a className="btn btn-red" href="#work">See my work</a>
          <a className="btn" href="#about">Get to know me</a>
        </div>
      </div>
    </section>`;
  }

  /* ================================================================
     Chapter: scroll grows a framed photo to full bleed while the
     statement is written over it, line by line.
  ================================================================ */
  function Chapter() {
    return html`<section className="chapter" data-progress="pin" aria-labelledby="chap-h">
      <div className="chap-pin">
        <div className="chap-frame">
          <img src=${S.portraitFull} alt="" loading="lazy" />
          <div className="chap-shade" aria-hidden="true"></div>
        </div>
        <div className="chap-copy">
          <p className="kicker kicker-light chap-l0">What I do</p>
          <h2 id="chap-h" className="chap-h">
            <span className="chap-l1">I design for the moments</span>
            <span className="chap-l2">where people, products</span>
            <span className="chap-l3">and systems meet.</span>
          </h2>
          <p className="chap-l4">Research, product and service design, from one person's task to the organisation around it.</p>
        </div>
      </div>
    </section>`;
  }

  function Hello() {
    return html`<section className="hello wrap" aria-label="Introduction">
      <div className="letter">
        <p className="hand letter-k">a quick hello</p>
        <p className="letter-t">I'm a product designer with 3+ years of experience across complex digital products and services, with a background in research and service design. I combine user research, interaction design, service design and systems thinking to understand difficult problems and turn them into clear, evidence-led experiences.</p>
        <p className="letter-t">I've worked on enterprise projects for Pfizer and Johnson & Johnson at TCS, and I'm now doing an MA in Design Management at London College of Communication. Outside work I bake, travel, read, and turn up at design hackathons.</p>
        <p className="hand sig">— Yashvi</p>
      </div>
      <dl className="facts">
        <div><dt>Experience</dt><dd>3+ years in enterprise UX</dd></div>
        <div><dt>Worked with</dt><dd>Pfizer · Johnson & Johnson, via TCS</dd></div>
        <div><dt>Studying</dt><dd>MA Design Management, LCC</dd></div>
        <div><dt>Elsewhere</dt><dd><a href=${S.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a></dd></div>
      </dl>
    </section>`;
  }

  /* ================================================================
     Work: three groups
  ================================================================ */
  function ProjectCard(props) {
    var p = props.p;
    return html`<li className="pcard" style=${{ "--rot": props.rot + "deg" }}>
      <a href=${"#case-" + p.id} className="pcard-a">
        <div className="pcard-img"><${ProjectImage} p=${p} /></div>
        <p className="pcard-meta"><b>${p.client}</b> · ${p.kind}</p>
        <h4 className="pcard-title">${p.title}</h4>
        <p className="pcard-sum">${p.summary}</p>
        <span className="pcard-go">Read the story <i aria-hidden="true">→</i></span>
      </a>
    </li>`;
  }
  function ExperimentCard(props) {
    var x = props.x;
    return html`<li className="xcard" style=${{ "--rot": props.rot + "deg" }}>
      <div className="polaroid">
        <span className="tape" aria-hidden="true"></span>
        ${x.video
          ? html`<video src=${x.video} poster=${x.poster} autoPlay=${!REDUCE} muted loop playsInline preload="metadata" aria-label=${x.title}></video>`
          : html`<img src=${x.image} alt=${x.title} loading="lazy" />`}
        <p className="hand pol-cap">${x.title}</p>
      </div>
      <p className="xcard-note">${x.note}</p>
      <p className="xcard-tags">${x.tags.join(" · ")}</p>
    </li>`;
  }
  var ROTS = [-1.6, 1.2, -0.6, 1.8, -1.2, 0.8];

  /* Index view: big typographic rows, a preview follows the cursor */
  function WorkIndex(props) {
    var fs = useState("all"), f = fs[0], setF = fs[1];
    var hs = useState(null), hover = hs[0], setHover = hs[1];
    var prev = useRef(null);
    useEffect(function () {
      if (!FINE || REDUCE) return;
      var el = prev.current, x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y, raf = 0;
      var onMove = function (e) { tx = e.clientX; ty = e.clientY; };
      var step = function () {
        x += (tx - x) * 0.14; y += (ty - y) * 0.14;
        el.style.transform = "translate3d(" + (x + 28).toFixed(1) + "px," + (y - 110).toFixed(1) + "px,0) rotate(" + clamp((tx - x) * 0.05, -6, 6).toFixed(2) + "deg)";
        raf = requestAnimationFrame(step);
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(step);
      return function () { cancelAnimationFrame(raf); window.removeEventListener("pointermove", onMove); };
    }, []);
    var list = P.filter(function (p) { return f === "all" || p.category === f; });
    var hp = hover && P.filter(function (p) { return p.id === hover; })[0];
    return html`<div className="windex">
      <div className="windex-filters" role="group" aria-label="Filter projects">
        ${[["all", "All"]].concat(CATS.map(function (c) { return [c[0], c[1]]; })).map(function (c) {
          var n = c[0] === "all" ? P.length : P.filter(function (p) { return p.category === c[0]; }).length;
          return html`<button key=${c[0]} type="button" className="wf" aria-pressed=${f === c[0]} onClick=${function () { setF(c[0]); }}>${c[1]}<sup>${n}</sup></button>`;
        })}
      </div>
      <ol className="wlist" onMouseLeave=${function () { setHover(null); }}>
        ${list.map(function (p, i) {
          var cat = CATS.filter(function (c) { return c[0] === p.category; })[0];
          return html`<li key=${p.id} className=${"wrow" + (hover && hover !== p.id ? " dim" : "")}>
            <a href=${"#case-" + p.id} onMouseEnter=${function () { setHover(p.id); }} onFocus=${function () { setHover(p.id); }}>
              <span className="wr-n">${pad(i + 1)}</span>
              <span className="wr-t">${p.title}</span>
              <span className="wr-c">${p.client}</span>
              <span className="wr-k">${cat ? cat[1] : ""}</span>
              <span className="wr-go" aria-hidden="true">→</span>
            </a>
          </li>`;
        })}
      </ol>
      <div ref=${prev} className=${"wprev" + (hp ? " on" : "")} aria-hidden="true">
        ${P.map(function (p) { return html`<div key=${p.id} className=${"wprev-i" + (hp && hp.id === p.id ? " cur" : "")}><${ProjectImage} p=${p} /></div>`; })}
      </div>
    </div>`;
  }

  function Work() {
    var vs = useState(function () { try { return localStorage.getItem("yj-work-view") || "list"; } catch (e) { return "list"; } });
    var view = vs[0], setView = function (v) { vs[1](v); try { localStorage.setItem("yj-work-view", v); } catch (e) {} };
    return html`<section className="work wrap" id="work" aria-labelledby="work-h">
      <header className="sec-head work-head">
        <p className="hand kicker">things I've worked on</p>
        <h2 id="work-h" className="h2">Selected work</h2>
        <p className="sec-note">Physical experiences, digital experiences and experiments. Every case study covers context, challenge, my role, process and outcome.</p>
        <div className="view-toggle" role="group" aria-label="Layout">
          <button type="button" aria-pressed=${view === "list"} onClick=${function () { setView("list"); }}>Index</button>
          <button type="button" aria-pressed=${view === "grid"} onClick=${function () { setView("grid"); }}>Grid</button>
        </div>
      </header>
      ${view === "list" ? html`<${WorkIndex} />
        <div className="group g-experiments" id="work-experiments">
          <div className="group-head"><span className="group-n hand">+</span><h3 className="group-h">Making & experiments</h3><p className="group-sub">Things I make to learn: materials, prototypes and new technology.</p></div>
          <ul className="cards">${EXP.map(function (x, i) { return html`<${ExperimentCard} key=${x.title} x=${x} rot=${0} />`; })}</ul>
        </div>` : CATS.map(function (c, ci) {
        var projects = P.filter(function (p) { return p.category === c[0]; });
        var exps = c[0] === "experiments" ? EXP : [];
        return html`<div key=${c[0]} className=${"group g-" + c[0]} id=${"work-" + c[0]}>
          <div className="group-head">
            <span className="group-n hand">${ci + 1}</span>
            <h3 className="group-h">${c[1]}</h3>
            <p className="group-sub">${c[2]}</p>
          </div>
          <ul className="cards">
            ${projects.map(function (p, i) { return html`<${ProjectCard} key=${p.id} p=${p} rot=${ROTS[(i + ci) % ROTS.length]} />`; })}
            ${exps.map(function (x, i) { return html`<${ExperimentCard} key=${x.title} x=${x} rot=${ROTS[(i + 3) % ROTS.length]} />`; })}
          </ul>
        </div>`;
      })}
      <p className="confidential">Selected project details and visuals have been adapted or anonymised to respect client confidentiality.</p>
    </section>`;
  }

  /* ================================================================
     Approach: one pinned, horizontal slider. Vertical scroll moves the
     panels sideways; the particles behind them follow the same scroll.
  ================================================================ */
  var STAGES = [
    ["People", "Someone trying to get something done."],
    ["Information", "What they need to know, and how it's structured."],
    ["Technology", "The tools and platforms that carry it."],
    ["Services", "The teams, processes and handovers around the tools."],
    ["Systems", "The organisations and rules shaping all of it."]
  ];
  var MODES = [
    ["Understand", "User interviews, stakeholder interviews, observation, surveys, secondary research and contextual inquiry."],
    ["Frame", "Problem definition, synthesis, thematic analysis, journey mapping, personas and opportunity areas."],
    ["Explore", "Ideation, co-design, information architecture, wireframes, prototypes and service concepts."],
    ["Test", "Usability testing, heuristic evaluation, accessibility testing and iterative research."],
    ["Deliver", "High-fidelity design, design systems, documentation, developer collaboration and design QA."],
    ["Learn", "Analytics, feedback, post-launch evaluation and iteration."]
  ];
  var PRINCIPLES = [
    ["Research-led", "I use evidence to understand what people actually need rather than designing around assumptions."],
    ["Systems thinking", "I look beyond individual touchpoints to understand the services, organisations and systems surrounding them."],
    ["Clarity", "I turn complex information, processes and requirements into experiences people can understand and use."],
    ["Collaboration", "I work across design, research, technology, business and other disciplines to move ideas towards implementation."],
    ["Accessibility", "I consider accessibility and inclusion as part of the design process, not an afterthought."]
  ];
  function Approach() {
    var sec = useRef(null), cv = useRef(null);
    var st = useState(0), stage = st[0], setStage = st[1];
    var ms = useState(0), m = ms[0], setM = ms[1];
    useEffect(function () {
      var p = 0, last = -1, el = sec.current;
      el.__onProgress = function (v) {
        p = v; var s = Math.min(4, Math.floor(clamp(v * 1.1, 0, 1) * 4.999));
        if (s !== last) { last = s; setStage(s); }
      };
      // Keyboard users: bring the focused panel into view
      var onFocus = function (e) {
        if (!el.__track || !el.__extra) return;
        var panel = e.target.closest(".hz-panel"); if (!panel) return;
        var target = clamp((panel.offsetLeft - 48) / el.__extra, 0, 1);
        var docTop = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, docTop - el.__top + target * (el.offsetHeight - (window.innerHeight - el.__top)));
      };
      el.addEventListener("focusin", onFocus);
      var stop = initScene(cv.current, function () { return p; }, { light: true, drift: true });
      return function () { el.removeEventListener("focusin", onFocus); stop(); };
    }, []);
    return html`<section className="hz" id="process" ref=${sec} data-progress="pin" aria-labelledby="hz-h">
      <div className="hz-pin">
        <canvas ref=${cv} className="hz-canvas" aria-hidden="true"></canvas>
        <div className="hz-track" data-track="">
          <div className="hz-panel hz-intro">
            <p className="hand kicker">how I work</p>
            <h1 id="hz-h" className="hz-h">From people to systems</h1>
            <p className="hz-p">I move between the details and the bigger picture. I start with one person and a task, then keep zooming out until I can see what's really shaping their experience.</p>
            <ol className="hz-stages">
              ${STAGES.map(function (s, i) {
                return html`<li key=${i} className=${i === stage ? "on" : ""} aria-current=${i === stage ? "step" : null}><span>${s[0]}</span><small>${s[1]}</small></li>`;
              })}
            </ol>
            <p className="hz-hint hand" aria-hidden="true">keep scrolling, it moves sideways →</p>
          </div>

          <div className="hz-panel hz-loop">
            <div className="hz-loop-head">
              <p className="hand kicker">six modes, one loop</p>
              <h2 className="hz-h2">I move back and forth as the evidence changes.</h2>
              <p className="hz-p">It's a loop, not a checklist. Pick a mode to see what goes into it.</p>
            </div>
            <div className="loop">
              <svg className="loop-draw" viewBox="0 0 400 400" aria-hidden="true">
                <path d="M200 42 C 300 38, 362 110, 358 200 C 354 296, 290 360, 196 358 C 104 356, 40 292, 44 196 C 48 110, 110 46, 188 44" />
                <path className="loop-arrow" d="M178 32 L192 44 L178 56" />
              </svg>
              ${MODES.map(function (x, i) {
                var a = (i / MODES.length) * Math.PI * 2 - Math.PI / 2;
                var style = { left: (50 + Math.cos(a) * 39.5) + "%", top: (50 + Math.sin(a) * 39.5) + "%" };
                return html`<button key=${i} type="button" className="loop-node" style=${style} aria-pressed=${m === i} onClick=${function () { setM(i); }}>${x[0]}</button>`;
              })}
              <p className="loop-mid hand">repeat<br />as needed</p>
            </div>
            <div className="mode-card" aria-live="polite">
              <p className="hand mode-n">${m + 1} of 6</p>
              <h3 className="mode-h">${MODES[m][0]}</h3>
              <p>${MODES[m][1]}</p>
              <div className="mode-nav">
                <button type="button" className="btn btn-small" onClick=${function () { setM((m + 5) % 6); }}>← Previous</button>
                <button type="button" className="btn btn-small" onClick=${function () { setM((m + 1) % 6); }}>Next →</button>
              </div>
            </div>
          </div>

          <div className="hz-panel hz-notes">
            <p className="hand kicker">what I bring</p>
            <h2 className="hz-h2">Five principles I work by</h2>
            <ul className="notes">
              ${PRINCIPLES.map(function (x, i) {
                return html`<li key=${i} className=${"note-card c" + i} style=${{ "--rot": [-2, 1.5, -1, 2, -1.5][i] + "deg" }}>
                  <h3 className="note-h">${x[0]}</h3><p>${x[1]}</p>
                </li>`;
              })}
            </ul>
          </div>

          <div className="hz-panel hz-end">
            <p className="hand">next page</p>
            <a href="#about" className="hz-end-a">Get to know me →</a>
            <a href="#work" className="btn btn-small">Or see the work</a>
          </div>
        </div>
        <div className="hz-bar" aria-hidden="true"><i></i></div>
      </div>
    </section>`;
  }

  /* ================================================================
     Outcome + transferability
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
    return html`<section className="transfer wrap" id="transfer" aria-labelledby="xfer-h">
      <header className="sec-head">
        <p className="hand kicker">why it travels</p>
        <h2 id="xfer-h" className="h2">Different industries. Similar design challenges.</h2>
        <p className="sec-note">I'm interested in complex problems, regardless of where they occur.</p>
      </header>
      <ul className="xfer">
        ${XFER.map(function (x, i) {
          return html`<li key=${i}><span className="xf-a">${x[0]}</span><span className="xf-arr hand" aria-hidden="true">→</span><span className="xf-b">${x[1]}<small>${x[2]}</small></span></li>`;
        })}
      </ul>
    </section>`;
  }

  /* ================================================================
     Me: who I am off the clock
  ================================================================ */
  function Me() {
    return html`<section className="me wrap" id="me" aria-labelledby="me-h">
      <header className="sec-head">
        <p className="hand kicker">off the clock</p>
        <h2 id="me-h" className="h2">I'm interested in what happens between people, products and systems.</h2>
      </header>
      <div className="me-grid">
        <div className="me-story">
          <p className="lede">I started in product design, learning how physical things get made and used. That curiosity followed me into UX and UI.</p>
          <p>At TCS I worked on enterprise projects for large healthcare and pharmaceutical organisations. The interfaces mattered, but the hardest problems usually sat around them: in handovers between teams, in regulation, in how information was produced and approved. That pulled me towards research, service design and systems thinking, and to an MA in Design Management in London.</p>
          <p>Away from the desk, I'm happiest when I'm travelling somewhere new, halfway through a book, or covered in flour.</p>
          <ol className="path" aria-label="How my practice has grown">
            ${["Product Design", "UX / UI", "Research", "Service Design", "Systems Thinking"].map(function (s, i) { return html`<li key=${i}>${s}</li>`; })}
          </ol>
          <p className="me-bring"><b>What I bring:</b> ${PRINCIPLES.map(function (x) { return x[0]; }).join(" · ")}. <a href="#approach">See how I work →</a></p>
        </div>
        <div className="collage" aria-label="Photos">
          <figure className="polaroid p-portrait" style=${{ "--rot": "-3deg" }}>
            <span className="tape" aria-hidden="true"></span>
            <div className="pol-img"><img data-parallax="-0.06" src=${S.portrait} alt="Yashvi sitting on a chair, smiling, chin on her hand" loading="lazy" /></div>
            <figcaption className="hand pol-cap">me, mid-thought</figcaption>
          </figure>
          <figure className="polaroid p-travel" style=${{ "--rot": "2.5deg" }}>
            <span className="tape" aria-hidden="true"></span>
            <div className="pol-img"><img data-parallax="-0.08" src="assets/img/travel-london.jpg" alt="Yashvi smiling on Westminster Bridge at night, with Big Ben lit up behind her" loading="lazy" /></div>
            <figcaption className="hand pol-cap">London nights</figcaption>
          </figure>
        </div>
      </div>
      <ul className="likes">
        <li className="like"><span className="like-ico" aria-hidden="true">✈</span><h3 className="like-h">Travel</h3><p>New places remind me how differently people live, move and get things done. Every trip is a little field study.</p></li>
        <li className="like"><span className="like-ico" aria-hidden="true">❦</span><h3 className="like-h">Reading</h3><p>There's usually a book in my bag. Reading is where a lot of my thinking about people and systems starts.</p></li>
        <li className="like"><span className="like-ico" aria-hidden="true">✿</span><h3 className="like-h">Baking</h3><p>My favourite way to switch off, and a place I've learned a surprising amount about design. More on that below.</p></li>
      </ul>
    </section>`;
  }

  /* ================================================================
     Design & baking
  ================================================================ */
  var RECIPE = [
    ["Know who you're baking for", "Understand what people need before designing anything."],
    ["Mise en place", "Research and framing before pixels. Preparation makes the rest calmer."],
    ["Follow the recipe, then adapt it", "Use proven methods, then adjust them to the context."],
    ["Taste as you go", "Test early and often. Don't wait for the final bake to find out."],
    ["Dough needs time to prove", "Good ideas need time to develop. Rushing shows."],
    ["Presentation matters, taste matters more", "Polish is important. Being useful is more important."],
    ["Running the bakery, not just the oven", "Orders, suppliers, timing and customers. That's service design: the system behind the product."]
  ];
  function Baking() {
    return html`<section className="baking" id="baking" aria-labelledby="bake-h">
      <div className="wrap bake-in">
        <div className="bake-side">
          <p className="hand kicker">flour on my sleeves</p>
          <h2 id="bake-h" className="h2">What baking taught me about design</h2>
          <p className="bake-intro">I've run my own bakery. It taught me that a great cake is only part of the job: the customer, the order, the timing and the delivery all have to work too. That's the same way I think about design.</p>
          <figure className="polaroid p-bake" style=${{ "--rot": "-2deg" }}>
            <span className="tape" aria-hidden="true"></span>
            <div className="pol-img"><img data-parallax="-0.07" src="assets/img/baking.jpg" alt="A homemade Victoria sponge birthday cake being shared on a wooden table" loading="lazy" /></div>
            <figcaption className="hand pol-cap">best part: sharing it</figcaption>
          </figure>
        </div>
        <div className="recipe">
          <div className="recipe-head"><span className="hand">In the kitchen</span><span className="hand">In design</span></div>
          <ol>
            ${RECIPE.map(function (r, i) {
              return html`<li key=${i}><span className="rc-n hand">${i + 1}</span><p className="rc-a">${r[0]}</p><p className="rc-b">${r[1]}</p></li>`;
            })}
          </ol>
        </div>
      </div>
    </section>`;
  }

  /* ================================================================
     Talks, sharing work and hackathons
  ================================================================ */
  function OutLoud() {
    return html`<section className="outloud wrap" id="out-loud" aria-labelledby="ol-h">
      <header className="sec-head">
        <p className="hand kicker">thinking out loud</p>
        <h2 id="ol-h" className="h2">Talks, sharing work and hackathons</h2>
        <p className="sec-note">I like giving talks and sharing work in progress, because explaining an idea to a room is the fastest way to find its gaps. Design hackathons are my favourite kind of pressure: a new team, a messy problem and not much time.</p>
      </header>
      <ul className="moments">
        ${MOMENTS.map(function (m, i) {
          return html`<li key=${i} className="polaroid moment" style=${{ "--rot": [-2, 1.5, -1, 2.2][i % 4] + "deg" }}>
            <span className="tape" aria-hidden="true"></span>
            ${m.src ? html`<img src=${m.src} alt=${m.caption} loading="lazy" />` : html`<div className="moment-ph"><span className="hand">photo coming soon</span></div>`}
            <p className="pol-cap hand">${m.caption}</p>
            <span className="moment-kind">${m.kind}</span>
          </li>`;
        })}
      </ul>
    </section>`;
  }

  /* ================================================================
     Experience, research threads and skills
  ================================================================ */
  var TAGS_TCS = ["Enterprise UX", "UX research", "Usability testing", "Accessibility / WCAG", "Design systems", "Dashboards", "Digital transformation", "Developer collaboration"];
  var TAGS_MA = ["Design research", "Systems thinking", "Service design", "Participatory design", "Strategy", "Organisational design", "Social innovation", "Critical design"];
  var tagList = function (t) { return html`<ul className="tags">${t.map(function (x) { return html`<li key=${x}>${x}</li>`; })}</ul>`; };
  function Experience() {
    return html`<section className="experience wrap" id="experience" aria-labelledby="exp-h">
      <header className="sec-head">
        <p className="hand kicker">where I've been</p>
        <h2 id="exp-h" className="h2">From interface detail to organisational systems.</h2>
      </header>
      <ol className="tl">
        <li>
          <p className="tl-when">Oct 2022 – Present · on sabbatical for my MA</p>
          <h3 className="tl-h">Tata Consultancy Services</h3>
          <p className="tl-role">UI/UX & Service Designer</p>
          <p>Enterprise UX for healthcare and pharmaceutical clients including Pfizer and Johnson & Johnson. I planned and ran discovery research, facilitated workshops and user testing, created journey maps, flows and interfaces, and worked with business analysts and developers to balance user needs with technical constraints.</p>
          ${tagList(TAGS_TCS)}
        </li>
        <li>
          <p className="tl-when">2025 – 2026</p>
          <h3 className="tl-h">London College of Communication, UAL</h3>
          <p className="tl-role">MA Design Management</p>
          <p>Expanding my practice from interface-level problem solving to organisational and systemic challenges. Alongside the course I'm a Student Ambassador and Halls Community Lead, which keeps me close to how services feel from the inside.</p>
          ${tagList(TAGS_MA)}
        </li>
        <li>
          <p className="tl-when">Jan – Aug 2022</p>
          <h3 className="tl-h">Indian Music Experience Museum</h3>
          <p className="tl-role">UI/UX Design Intern · British Council</p>
          <p>Participatory design sessions and co-design workshops with visitors, rapid prototyping, personas and low-fidelity blueprints.</p>
        </li>
        <li>
          <p className="tl-when">2018 – 2022</p>
          <h3 className="tl-h">Amity University, Noida</h3>
          <p className="tl-role">Bachelor of Design, Product Design</p>
        </li>
      </ol>
    </section>`;
  }
  // CHECK: replace or link these with your actual essays, MA papers or talks
  var THREADS = [
    ["Service design · Public services", "Who owns the journey when no single team does?"],
    ["Responsible AI · Accessibility", "What does it take to trust an AI suggestion?"],
    ["Inclusive design · Social design", "Designing with, not for."],
    ["Design strategy · Transformation", "Where design sits in the organisation."]
  ];
  var SKILLS = [
    ["Research", ["User interviews", "Qualitative research", "Usability testing", "Surveys", "Heuristic evaluation", "Thematic analysis", "Participatory research", "Journey mapping"]],
    ["UX / Product", ["Information architecture", "Interaction design", "Wireframing", "Prototyping", "Design systems", "Accessibility", "Content hierarchy"]],
    ["Service / Strategy", ["Service design", "Systems thinking", "Service blueprints", "Stakeholder mapping", "Problem framing", "Design strategy", "Co-design"]],
    ["Tools", ["Figma", "Miro", "Adobe Creative Cloud", "Notion", "Framer", "Power BI", "Microsoft 365"]]
  ];
  function Notebook() {
    return html`<section className="notebook wrap" id="thinking" aria-labelledby="nb-h">
      <div className="nb-page">
        <p className="hand kicker">questions I'm working through</p>
        <h2 id="nb-h" className="h2">Research & thinking</h2>
        <ul className="threads">
          ${THREADS.map(function (t, i) { return html`<li key=${i}><span className="th-tag">${t[0]}</span><span className="th-q">${t[1]}</span></li>`; })}
        </ul>
        <p className="nb-note hand">writing to follow ✎</p>
      </div>
      <div className="nb-page" id="skills">
        <p className="hand kicker">my toolbox</p>
        <h2 className="h2">Methods & tools</h2>
        <div className="skills" data-progress="read">
          ${SKILLS.map(function (g, gi) {
            return html`<div key=${gi} className="sk"><h3 className="sk-h">${g[0]}</h3><ul>${g[1].map(function (s, i) {
              return html`<li key=${s} style=${{ "--r": ((((gi * 7 + i * 13) % 11) - 5) * 1.3) + "deg" }}>${s}</li>`;
            })}</ul></div>`;
          })}
        </div>
      </div>
    </section>`;
  }

  /* ================================================================
     Contact
  ================================================================ */
  function Contact() {
    var cs = useState("Copy email"), copyLabel = cs[0], setCopy = cs[1];
    var emailRef = useRef(null);
    var copy = function () {
      var fallback = function () {
        var r = document.createRange(); r.selectNodeContents(emailRef.current);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); setCopy("Selected, press Ctrl/⌘ C");
      };
      try { navigator.clipboard.writeText(S.email).then(function () { setCopy("Copied!"); setTimeout(function () { setCopy("Copy email"); }, 1800); }, fallback); }
      catch (e) { fallback(); }
    };
    var linkedin = S.linkedin || "https://www.linkedin.com/search/results/people/?keywords=" + encodeURIComponent(S.name + " designer");
    return html`<section className="contact" id="contact" aria-labelledby="contact-h">
      <div className="wrap contact-in">
        <p className="hand kicker">let's talk</p>
        <h2 id="contact-h" className="contact-h">Working on something complex? <span className="mark">Let's explore it.<${Squiggle} /></span></h2>
        <p className="contact-note">(I'll bring the cake.)</p>
        <div className="contact-card">
          <p className="c-lbl">Email</p>
          <p className="c-mail" ref=${emailRef}>${S.email}</p>
          <button type="button" className="btn btn-red" onClick=${copy}>${copyLabel}</button>
        </div>
        <ul className="contact-links">
          <li><a href=${linkedin} target="_blank" rel="noopener">LinkedIn ↗</a></li>
          <li>${S.cv ? html`<a href=${S.cv} target="_blank" rel="noopener">CV ↗</a>` : html`<span>CV on request</span>`}</li>
          <li>${S.portfolioPdf ? html`<a href=${S.portfolioPdf} target="_blank" rel="noopener">Portfolio PDF ↗</a>` : html`<span>Portfolio PDF on request</span>`}</li>
        </ul>
        <p className="foot">Made with care (and a little flour) in London · © ${new Date().getFullYear()} Yashvi Jain</p>
      </div>
    </section>`;
  }

  /* ================================================================
     Case study
  ================================================================ */
  function Case(props) {
    var p = props.p, idx = P.indexOf(p);
    var prev = P[(idx - 1 + P.length) % P.length], next = P[(idx + 1) % P.length];
    var cat = CATS.filter(function (c) { return c[0] === p.category; })[0];
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
    return html`<article className="case wrap" aria-labelledby="case-h">
      <div className="read-progress" aria-hidden="true"></div>
      <a className="back" href="#work">← Back to all work</a>
      <header className="case-top">
        <p className="hand kicker">${cat ? cat[1].toLowerCase() : ""}</p>
        <h1 id="case-h" className="case-title" tabIndex="-1">${p.title}</h1>
        <p className="case-kicker"><b>${p.client}</b> · ${p.kind} · ${p.via}</p>
        <p className="lede case-sum">${p.summary}</p>
        <ol className="flowline" aria-label="Project arc">${p.flow.map(function (f, i) { return html`<li key=${i}>${f}</li>`; })}</ol>
      </header>
      <dl className="glance" aria-label="At a glance">
        <div><dt>Role</dt><dd>${p.meta.Role}</dd></div>
        ${p.timeline ? html`<div><dt>Timeline</dt><dd>${p.timeline}</dd></div>` : html`<div><dt>Context</dt><dd>${p.via}</dd></div>`}
        <div><dt>Team</dt><dd>${p.meta.Team}</dd></div>
        <div><dt>${p.tools ? "Tools" : "Methods"}</dt><dd>${p.tools || p.meta.Methods}</dd></div>
        <div className="glance-out"><dt>Outcome</dt><dd>${p.split.outcome}</dd></div>
      </dl>
      <figure className="case-img">
        <${ProjectImage} p=${p} />
        <figcaption>Reconstructed artefact. Client details removed.</figcaption>
      </figure>
      <p className="case-transfers"><b>Where this applies:</b> ${p.meta.Transfers}</p>
      <div className="split">
        <div className="sp sp-mine"><p className="sp-l">My contribution</p><p>${p.split.mine}</p></div>
        <div className="sp"><p className="sp-l">Team contribution</p><p>${p.split.team}</p></div>
        <div className="sp"><p className="sp-l">Outcome</p><p>${p.split.outcome}</p></div>
      </div>
      <div className="case-body">
        <nav className="toc" aria-label="Case study sections">
          ${CS.map(function (s, i) {
            return html`<a key=${s[0]} href=${"#" + p.id + "-" + s[0]} aria-current=${active === s[0] ? "true" : null} onClick=${function (e) { go(e, s[0]); }}><span className="toc-n">${i + 1}</span>${s[1]}</a>`;
          })}
        </nav>
        <div className="cs-col">
          ${CS.map(function (s, i) {
            var v = p.sections[s[0]];
            var big = s[0] === "opportunity" || s[0] === "outcome";
            return html`<section key=${s[0]} id=${p.id + "-" + s[0]} data-sec=${s[0]} className=${"cs" + (big ? " cs-big" : "")}>
              <p className="cs-k"><span className="hand">${i + 1}.</span> ${s[1]}</p>
              <h2 className="cs-q">${s[2]}</h2>
              ${Array.isArray(v)
                ? html`<ol className="insights">${v.map(function (x, k) { return html`<li key=${k} style=${{ "--rot": [-1, 0.8, -0.6][k] + "deg" }}>${x}</li>`; })}</ol>`
                : html`<p className="cs-t">${v}</p>`}
            </section>`;
          })}
        </div>
      </div>
      <p className="confidential">Selected project details and visuals have been adapted or anonymised to respect client confidentiality.</p>
      <nav className="next" aria-label="More projects">
        <a href=${"#case-" + prev.id}><span className="hand">← previous</span><span className="nx-t">${prev.title}</span></a>
        <a href=${"#case-" + next.id}><span className="hand">next →</span><span className="nx-t">${next.title}</span></a>
      </nav>
    </article>`;
  }

  /* ================================================================
     Home signposts and the "next page" nudge at the end of each page
  ================================================================ */
  var SIGNS = [
    ["work", "Work", "Physical experiences, digital experiences and experiments.", "sky"],
    ["approach", "Approach", "How I zoom out from people to systems, and the loop I work in.", "butter"],
    ["about", "About", "Travel, books, my bakery, talks and hackathons, and where I've worked.", "blush"]
  ];
  function Signposts() {
    return html`<section className="signs wrap" aria-labelledby="signs-h">
      <header className="sec-head">
        <p className="hand kicker">where to next?</p>
        <h2 id="signs-h" className="h2">Have a look around</h2>
      </header>
      <ul className="sign-list">
        ${SIGNS.map(function (x, i) {
          return html`<li key=${x[0]} className=${"sign sign-" + x[3]} style=${{ "--rot": [-1.5, 1.2, -0.8, 1.6][i] + "deg" }}>
            <a href=${"#" + x[0]}><span className="sign-n hand">${i + 1}</span><span className="sign-h">${x[1]}</span><span className="sign-p">${x[2]}</span><span className="sign-go">Open page →</span></a>
          </li>`;
        })}
      </ul>
    </section>`;
  }
  var NEXT = { home: "work", work: "approach", about: "contact" };
  function PageNext(props) {
    var n = NEXT[props.page];
    if (!n) return null;
    var pg = PAGES.filter(function (x) { return x[0] === n; })[0];
    return html`<nav className="page-next wrap" aria-label="Next page">
      <a href=${"#" + n}><span className="hand">next page</span><span className="pn-t">${n === "contact" ? "Let's talk" : pg[1]} →</span></a>
    </nav>`;
  }

  /* ================================================================
     App + hash routing
     #work, #approach, #about, #thinking, #contact are pages;
     #case-<id> opens a case study; empty or #home is the home page.
  ================================================================ */
  var HOME_STYLE = S.homeStyle === "poster" ? "poster" : "classic";
  function readRoute() {
    var hh = location.hash.slice(1);
    if (hh === "home-poster" || hh === "home-classic") { HOME_STYLE = hh.slice(5); return { page: "home", caseId: null, anchor: null }; }
    if (hh.indexOf("case-") === 0) {
      var id = hh.slice(5);
      for (var i = 0; i < P.length; i++) if (P[i].id === id) return { page: "work", caseId: id, anchor: null };
    }
    for (var j = 0; j < PAGES.length; j++) if (PAGES[j][0] === hh) return { page: hh, caseId: null, anchor: null };
    if (SECTION_PAGE[hh]) return { page: SECTION_PAGE[hh], caseId: null, anchor: hh === "top" ? null : hh };
    return { page: "home", caseId: null, anchor: null };
  }
  var ABOUT_CH = [["me", "Me"], ["baking", "Baking"], ["out-loud", "Talks"], ["experience", "Experience"], ["thinking", "Thinking"]];
  function ChapterDots() {
    var as = useState("me"), active = as[0], setActive = as[1];
    useEffect(function () {
      if (!("IntersectionObserver" in window)) return;
      var io = new IntersectionObserver(function (en) {
        en.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); });
      }, { rootMargin: "-40% 0px -55% 0px" });
      ABOUT_CH.forEach(function (c) { var el = document.getElementById(c[0]); if (el) io.observe(el); });
      return function () { io.disconnect(); };
    }, []);
    return html`<nav className="chdots" aria-label="On this page">
      ${ABOUT_CH.map(function (c, i) {
        return html`<a key=${c[0]} href=${"#" + c[0]} aria-current=${active === c[0] ? "true" : null}
          onClick=${function (e) { e.preventDefault(); Smooth.stop(); var t = document.getElementById(c[0]); if (t) t.scrollIntoView({ behavior: REDUCE ? "auto" : "smooth" }); }}>
          <span className="chd-l">${c[1]}</span><span className="chd-d"></span></a>`;
      })}
    </nav>`;
  }

  function PageBody(props) {
    switch (props.page) {
      case "work": return html`<${Work} /><${Transfer} />`;
      case "approach": return html`<${Approach} />`;
      case "about": return html`<${ChapterDots} /><${Me} /><${Baking} /><${OutLoud} /><${Experience} /><${Notebook} />`;
      case "contact": return html`<${Contact} />`;
      default: return HOME_STYLE === "poster"
        ? html`<${PosterHero} /><${FeaturedWork} /><${Chapter} /><${Hello} /><${Signposts} />`
        : html`<${Hero} /><${FeaturedWork} /><${Chapter} /><${Hello} /><${Signposts} />`;
    }
  }
  function App() {
    var rs = useState(readRoute), route = rs[0], setRoute = rs[1];
    useEffect(function () {
      var on = function () { setRoute(readRoute()); };
      window.addEventListener("hashchange", on);
      return function () { window.removeEventListener("hashchange", on); };
    }, []);
    var first = useRef(true);
    var cs = useState(0), curtain = cs[0], setCurtain = cs[1];
    useEffect(function () {
      Smooth.stop();
      if (first.current) first.current = false; else if (!REDUCE) setCurtain(function (n) { return n + 1; });
      Engine.refresh();
      requestAnimationFrame(function () { Reveal.scan(); });
      if (route.caseId) {
        window.scrollTo(0, 0);
        document.title = P.filter(function (x) { return x.id === route.caseId; })[0].title + " · Yashvi Jain";
        var t = document.getElementById("case-h"); if (t) t.focus({ preventScroll: true });
        return;
      }
      var pg = PAGES.filter(function (x) { return x[0] === route.page; })[0];
      document.title = pg ? pg[2] : "Yashvi Jain Portfolio";
      var el = route.anchor && document.getElementById(route.anchor);
      if (el) el.scrollIntoView(); else window.scrollTo(0, 0);
      var main = document.getElementById("main"); if (main) main.focus({ preventScroll: true });
    }, [route.page, route.caseId, route.anchor]);
    var cp = route.caseId && P.filter(function (x) { return x.id === route.caseId; })[0];
    var key = cp ? "case-" + cp.id : route.page;
    return html`<${React.Fragment}>
      <a className="skip" href="#main">Skip to content</a>
      <${Header} page=${route.page} />
      <main id="main" tabIndex="-1" key=${key} className=${"page page-" + (cp ? "case" : route.page) + (!cp && route.page === "home" ? " home-" + HOME_STYLE : "")}>
        ${cp ? html`<${Case} p=${cp} />` : html`<${PageBody} page=${route.page} />`}
        ${cp ? null : html`<${PageNext} page=${route.page} />`}
      </main>
      ${curtain ? html`<div key=${curtain} className="curtain" aria-hidden="true"><span>${cp ? cp.title : (PAGES.filter(function (x) { return x[0] === route.page; })[0] || ["", "Home"])[1]}</span></div>` : null}
      <${CursorTrail} />
    <//>`;
  }

  var root = document.getElementById("root");
  if (ReactDOM.createRoot) ReactDOM.createRoot(root).render(html`<${App} />`);
  else ReactDOM.render(html`<${App} />`, root);
})();
