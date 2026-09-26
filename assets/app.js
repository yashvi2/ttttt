(function () {
  "use strict";

  var S = window.SITE, P = window.PROJECTS, CS = window.CASE_SECTIONS;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  /* ---------- Anonymised artefacts, drawn in HTML/CSS ---------- */
  var L = function (w) { return '<div class="ln ' + w + '"></div>'; };
  var VIS = {
    ia: function () {
      var col = function (h, hiIdx) {
        var leaves = "";
        for (var i = 0; i < 3; i++) leaves += '<div class="leaf' + (i === hiIdx ? " hi" : "") + '">' + L(i ? "m" : "l") + L("s") + "</div>";
        return '<div class="col"><div class="head">' + h + "</div>" + leaves + "</div>";
      };
      return '<div class="vis v-ia" role="img" aria-label="Reconstructed information architecture: one entry point, three task-led sections, each with a clear content hierarchy">' +
        '<div class="root">Home</div>' +
        '<div class="branches">' + col("Find", 0) + col("Understand", 1) + col("Act", 2) + "</div>" +
        '<span class="tag">Task-led structure · reconstructed</span></div>';
    },
    journey: function () {
      var lane = function (name, hand) {
        var c = "";
        for (var i = 0; i < 5; i++) c += '<div class="cell' + (hand.indexOf(i) > -1 ? " hand" : "") + '"></div>';
        return '<div class="lane"><span class="tag">' + name + "</span>" + c + "</div>";
      };
      return '<div class="vis v-journey" role="img" aria-label="Journey map across three user groups and five stages, with handover points between teams highlighted">' +
        '<div class="stages"><span></span><span>Aware</span><span>Access</span><span>Use</span><span>Hand-off</span><span>Follow-up</span></div>' +
        lane("Group A", [3]) + lane("Group B", [1, 3]) + lane("Group C", [3, 4]) +
        '<svg class="curve" viewBox="0 0 300 56" preserveAspectRatio="none" aria-hidden="true"><line x1="0" y1="28" x2="300" y2="28"/>' +
        '<path d="M8 20 C 50 14, 70 24, 96 26 S 150 18, 170 22 S 205 50, 222 46 S 270 22, 292 18"/>' +
        '<circle cx="222" cy="46" r="4"/></svg>' +
        '<span class="tag">Experience curve · handovers marked</span></div>';
    },
    dashboard: function () {
      var bars = [38, 52, 44, 60, 48, 72, 66, 84, 58, 62];
      var b = bars.map(function (h, i) { return '<i style="height:' + h + '%"' + (i === 7 ? ' class="hi"' : "") + "></i>"; }).join("");
      var row = function (s, k) { return '<div class="row">' + L(s) + '<span class="pill ' + k + '">' + (k === "w" ? "Review" : "On track") + "</span></div>"; };
      return '<div class="vis v-dash panel" role="img" aria-label="Anonymised dashboard: three summary indicators with one flagged, a trend chart with the current period highlighted, and a table of items with status">' +
        '<div class="kpis"><div class="kpi panel"><span class="tag">Indicator</span><b></b></div><div class="kpi panel alert"><span class="tag">Needs attention</span><b></b></div><div class="kpi panel"><span class="tag">Indicator</span><b></b></div></div>' +
        '<div class="chart panel">' + b + "</div>" +
        '<div class="rows panel">' + row("l", "k") + row("m", "w") + row("l", "k") + "</div></div>";
    },
    ai: function () {
      return '<div class="vis v-ai" role="img" aria-label="Concept: an AI answer that shows its sources, a confidence cue, and lets the person edit or reject it">' +
        '<div class="q">Summarise the options for me</div>' +
        '<div class="a panel">' + L("l") + L("l") + L("m") +
        '<div class="srcs"><span class="src">Source 1</span><span class="src">Source 2</span><span class="src">+1</span></div>' +
        '<div class="conf"><span class="tag">Confidence</span><div class="meter"><i></i></div><span class="tag">Medium</span></div>' +
        '<div class="acts"><span>Edit</span><span>Accept</span><span>Why?</span></div></div>' +
        '<span class="tag">Concept · person stays in control</span></div>';
    },
    blueprint: function () {
      var r = function (name, cls, cells) {
        return '<div class="r ' + cls + '"><span class="tag">' + name + "</span>" + cells.map(function (c) { return '<div class="c ' + c + '"></div>'; }).join("") + "</div>";
      };
      return '<div class="vis v-bp" role="img" aria-label="Service blueprint: student actions, front-stage and back-stage activity, support systems, with pain points and opportunities marked">' +
        r("Student", "cust", ["", "", "", ""]) +
        r("Front stage", "", ["", "pain", "", "pain"]) +
        '<div class="vline"><span>line of visibility</span></div>' +
        r("Back stage", "", ["", "", "pain", ""]) +
        r("Systems", "", ["", "e", "", ""]) +
        r("Opportunity", "opp", ["e", "", "", ""]) +
        "</div>";
    },
    participation: function () {
      var dots = [[50, 3, 0], [88, 28, 0], [92, 70, 1], [55, 97, 0], [12, 74, 0], [8, 30, 1], [70, 20, 1], [80, 50, 0], [28, 22, 0], [22, 62, 1], [60, 80, 1], [36, 82, 0]];
      var d = dots.map(function (p) { return '<i class="dot' + (p[2] ? " a" : "") + '" style="left:' + p[0] + "%;top:" + p[1] + '%"></i>'; }).join("");
      return '<div class="vis v-part" role="img" aria-label="Participation map: visitors, staff and community around the museum experience, with co-design participants highlighted">' +
        '<div class="ring"></div><div class="ring r2"></div><div class="ring r3"></div>' +
        '<div class="core">Visitor<br>experience</div>' + d +
        '<span class="lbl tag" style="left:50%;top:13%">Staff</span><span class="lbl tag" style="left:50%;top:94%">Community</span>' +
        "</div>";
    }
  };

  /* ---------- Work grid ---------- */
  var list = $("#work-list");
  list.innerHTML = P.map(function (p) {
    return '<li data-filters="' + p.filters.join(" ") + '">' +
      '<a class="card" href="#case-' + p.id + '">' +
      '<div class="card-vis"><span class="card-num">' + p.num + " / 06</span>" + VIS[p.visual]() + "</div>" +
      '<p class="card-meta"><strong>' + esc(p.client) + "</strong><span>" + esc(p.kind) + "</span></p>" +
      '<h3 class="card-title">' + esc(p.title) + "</h3>" +
      '<p class="card-sum">' + esc(p.summary) + "</p>" +
      '<p class="card-flow">' + p.flow.map(function (f) { return "<span>" + esc(f) + "</span>"; }).join("") + "</p>" +
      '<span class="card-go">Read case study <span aria-hidden="true">→</span></span>' +
      "</a></li>";
  }).join("");

  $$(".chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      var f = chip.getAttribute("data-filter");
      $$(".chip").forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
      $$("#work-list > li").forEach(function (li) {
        var on = f === "all" || li.getAttribute("data-filters").split(" ").indexOf(f) > -1;
        li.classList.toggle("dim", !on);
      });
    });
  });

  /* ---------- Hero: zoom out through the layers ---------- */
  var layers = [".l1", ".l2", ".l3", ".l4", ".l5"].map(function (c) { return $(".scale " + c); });
  var li = 0;
  function stepLayer() {
    layers.forEach(function (l, i) { l.classList.toggle("on", i === li); });
    li = (li + 1) % layers.length;
  }
  stepLayer();
  if (!reduce) setInterval(stepLayer, 1800);

  /* ---------- Approach loop ---------- */
  var modes = $$("#modes li");
  var nodes = $("#loop-nodes");
  var names = modes.map(function (m) { return m.querySelector(".mono").textContent; });
  nodes.innerHTML = names.map(function (n, i) {
    var a = (i / names.length) * Math.PI * 2 - Math.PI / 2;
    var x = 50 + Math.cos(a) * 36.9, y = 50 + Math.sin(a) * 36.9;
    return '<li style="left:' + x.toFixed(2) + "%;top:" + y.toFixed(2) + '%"><button type="button" data-i="' + i + '">' + n + "</button></li>";
  }).join("");
  var run = $(".loop-run");
  function setMode(i) {
    modes.forEach(function (m, k) { m.querySelector("button").setAttribute("aria-expanded", String(k === i)); });
    $$("#loop-nodes button").forEach(function (b, k) { if (k === i) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current"); });
    run.style.transform = "rotate(" + (-90 - 17 + i * 60) + "deg)";
  }
  modes.forEach(function (m, i) { m.querySelector("button").addEventListener("click", function () { setMode(i); }); });
  $$("#loop-nodes button").forEach(function (b, i) { b.addEventListener("click", function () { setMode(i); }); });
  setMode(0);

  /* ---------- Contact ---------- */
  var linkedin = S.linkedin || "https://www.linkedin.com/search/results/people/?keywords=" + encodeURIComponent(S.name + " designer");
  var items = [
    '<li><span class="mono">Email</span><span class="val" id="email-val">' + esc(S.email) + '</span><button class="copy" type="button" id="copy-email">Copy address</button></li>',
    '<li><span class="mono">LinkedIn</span><a href="' + esc(linkedin) + '" target="_blank" rel="noopener">' + esc(S.name) + ' ↗</a><span class="sub">Connect and message</span></li>',
    S.cv
      ? '<li><span class="mono">CV</span><a href="' + esc(S.cv) + '" target="_blank" rel="noopener">Download CV ↗</a><span class="sub">PDF</span></li>'
      : '<li><span class="mono">CV</span><span class="val">On request</span><span class="sub">Email me for the latest version</span></li>',
    S.portfolioPdf
      ? '<li><span class="mono">Selected work</span><a href="' + esc(S.portfolioPdf) + '" target="_blank" rel="noopener">Portfolio PDF ↗</a><span class="sub">Includes confidential detail</span></li>'
      : '<li><span class="mono">Selected work</span><a href="#work" data-home>Browse projects</a><span class="sub">Full PDF on request</span></li>'
  ];
  $("#contact-list").innerHTML = items.join("");
  $("#year").textContent = new Date().getFullYear();
  $("#copy-email").addEventListener("click", function () {
    var btn = this;
    var done = function () { btn.textContent = "Copied"; setTimeout(function () { btn.textContent = "Copy address"; }, 1800); };
    var fallback = function () {
      var r = document.createRange(); r.selectNodeContents($("#email-val"));
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      btn.textContent = "Selected. Press Ctrl/⌘ C";
    };
    try { navigator.clipboard.writeText(S.email).then(done, fallback); } catch (e) { fallback(); }
  });

  /* ---------- Theme ---------- */
  var root = document.documentElement;
  try { var saved = localStorage.getItem("yj-theme"); if (saved) root.setAttribute("data-theme", saved); } catch (e) {}
  $("#theme-toggle").addEventListener("click", function () {
    var cur = root.getAttribute("data-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("yj-theme", next); } catch (e) {}
  });

  /* ---------- Header state ---------- */
  var bar = $(".bar");
  window.addEventListener("scroll", function () { bar.classList.toggle("scrolled", window.scrollY > 8); }, { passive: true });

  /* ---------- Case study view ---------- */
  var home = $("#home"), caseEl = $("#case");
  var spy = null;

  function renderCase(p) {
    var idx = P.indexOf(p);
    var prev = P[(idx - 1 + P.length) % P.length], next = P[(idx + 1) % P.length];
    var meta = Object.keys(p.meta).map(function (k) { return "<div><dt>" + esc(k) + "</dt><dd>" + esc(p.meta[k]) + "</dd></div>"; }).join("");
    var flow = p.flow.map(function (f, i) { return (i ? '<li class="ar" aria-hidden="true">→</li>' : "") + "<li>" + esc(f) + "</li>"; }).join("");
    var toc = CS.map(function (s, i) {
      return '<a href="#' + p.id + "-" + s[0] + '" data-sec="' + s[0] + '"><span class="mono">' + String(i + 1).padStart(2, "0") + "</span>" + s[1] + "</a>";
    }).join("");
    var body = CS.map(function (s, i) {
      var v = p.sections[s[0]];
      var content = Array.isArray(v)
        ? '<ol class="insights">' + v.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol>"
        : '<p class="txt">' + esc(v) + "</p>";
      var pull = s[0] === "opportunity" || s[0] === "outcome" ? " pull" : "";
      return '<section class="cs' + pull + '" id="' + p.id + "-" + s[0] + '" data-sec="' + s[0] + '">' +
        '<div class="cs-h"><span class="mono">' + String(i + 1).padStart(2, "0") + "</span><h2>" + s[1] + "</h2></div>" +
        '<p class="cs-q">' + s[2] + "</p>" + content + "</section>";
    }).join("");

    caseEl.innerHTML =
      '<div class="wrap case-top">' +
      '<a class="back" href="#work" data-home><span aria-hidden="true">←</span> All work</a>' +
      '<p class="case-kicker rise"><span>' + p.num + " · " + esc(p.kind) + "</span><span>" + esc(p.client) + "</span><span>" + esc(p.via) + "</span></p>" +
      '<h1 class="case-title rise d1">' + esc(p.title) + "</h1>" +
      '<p class="lede case-sum rise d2">' + esc(p.summary) + "</p>" +
      '<ol class="flowline rise d3" aria-label="Project arc">' + flow + "</ol>" +
      '<dl class="case-meta">' + meta + "</dl>" +
      '<figure class="case-hero-vis">' + VIS[p.visual]() + "<figcaption>Reconstructed artefact. Client details removed.</figcaption></figure>" +
      '<div class="split">' +
      '<div><p class="mono">My contribution</p><p>' + esc(p.split.mine) + "</p></div>" +
      '<div><p class="mono">Team contribution</p><p>' + esc(p.split.team) + "</p></div>" +
      '<div><p class="mono">Outcome</p><p>' + esc(p.split.outcome) + "</p></div></div>" +
      '<div class="case-body"><nav class="toc" aria-label="Case study sections"><div class="progress"><i id="prog"></i></div>' + toc + "</nav>" +
      "<div>" + body + "</div></div>" +
      '<p class="confidential"><span class="mono">Note</span> Selected project details and visuals have been adapted or anonymised to respect client confidentiality.</p>' +
      '<nav class="next" aria-label="More projects">' +
      '<a href="#case-' + prev.id + '"><span class="mono">← Previous</span><span class="t">' + esc(prev.title) + "</span></a>" +
      '<a href="#case-' + next.id + '"><span class="mono">Next →</span><span class="t">' + esc(next.title) + "</span></a></nav>" +
      "</div>";

    // Scrollspy for the section index
    if (spy) spy.disconnect();
    var links = $$(".toc a", caseEl);
    if ("IntersectionObserver" in window) {
      spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var id = e.target.getAttribute("data-sec");
          links.forEach(function (a) { a.setAttribute("aria-current", String(a.getAttribute("data-sec") === id)); });
        });
      }, { rootMargin: "-30% 0px -60% 0px" });
      $$(".cs", caseEl).forEach(function (s) { spy.observe(s); });
    }
    links.forEach(function (a) {
      a.addEventListener("click", function (ev) {
        ev.preventDefault();
        var t = document.getElementById(a.getAttribute("href").slice(1));
        if (t) t.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      });
    });
  }

  function onScrollProgress() {
    if (caseEl.hidden) return;
    var prog = $("#prog"); if (!prog) return;
    var body = $(".case-body", caseEl);
    var r = body.getBoundingClientRect();
    var total = r.height - window.innerHeight * 0.5;
    var done = Math.min(1, Math.max(0, (window.innerHeight * 0.3 - r.top) / total));
    prog.style.transform = "scaleX(" + done + ")";
  }
  window.addEventListener("scroll", onScrollProgress, { passive: true });

  function route() {
    var h = location.hash.slice(1);
    var p = null;
    if (h.indexOf("case-") === 0) {
      var id = h.slice(5);
      for (var i = 0; i < P.length; i++) if (P[i].id === id) p = P[i];
    }
    if (p) {
      renderCase(p);
      home.hidden = true; caseEl.hidden = false;
      document.title = p.title + " · Yashvi Jain";
      window.scrollTo(0, 0);
      var h1 = $(".case-title", caseEl); if (h1) { h1.setAttribute("tabindex", "-1"); h1.focus({ preventScroll: true }); }
    } else {
      var wasCase = !caseEl.hidden;
      caseEl.hidden = true; home.hidden = false;
      document.title = "Yashvi Jain Portfolio";
      if (wasCase) {
        var t = h && document.getElementById(h);
        if (t) t.scrollIntoView(); else window.scrollTo(0, 0);
      }
    }
  }
  // Links back to home sections also work when the case view is open
  document.addEventListener("click", function (ev) {
    var a = ev.target.closest && ev.target.closest("a[data-home]");
    if (!a || caseEl.hidden) return;
    ev.preventDefault();
    var id = a.getAttribute("href").slice(1);
    try { history.pushState(null, "", "#" + id); } catch (e) {}
    route();
    var t = document.getElementById(id); if (t) t.scrollIntoView();
  });
  window.addEventListener("hashchange", route);
  route();
})();
