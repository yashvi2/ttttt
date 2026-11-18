# Portfolio: rules for working with this codebase and Figma (MCP)

Yashvi Jain's portfolio. A static React 18 site built with Vite. These are the
conventions to follow when turning a Figma design into code, or pushing code
back to Figma with the Figma MCP tools.

`docs/DESIGN_SYSTEM.md` still describes the older Gloock/Geist pages. The live
landing (bento) and the inner bento pages follow **this** file. Case studies
keep their own type and colour, and only borrow the shared shell.

---

## 1. Project structure

```
index.html                  root page; mounts #dc-root
vite.config.js              base './' (relative paths), bundles go to _app/
src/main.jsx                imports base.css, type.css and resources.js, renders <Portfolio/>
src/dc/                     tiny screen framework, ported from the design tool
  DCLogic.js                base class: state + renderVals() → template(vals)
  defineScreen.js           wires Logic + template + css + font links + defaults
  template.js               t(), each(), asset() helpers for templates
  resources.js              __R(path): maps design asset paths to optimised files
  resourceMap.json          old upload names → public/assets/web/*.webp
  styles.js                 injects each screen's CSS and font links once
src/pages/
  PortfolioPublish.jsx      main template (JSX against `v`, the render values)
  PortfolioPublish.logic.js all behaviour plus most UI as static components
  PortfolioPublish.states.css  global overrides, hover rules, screen states
  Case*.jsx / *.logic.js / *.css / *.states.css   one set per case study
src/styles/base.css         page shell + .image-slot
src/styles/type.css         H1–H6 scale (beats inline styles, see §6)
src/components/ImageSlot.jsx photo frame with an empty state
src/three/                  three.js scenes (stillLife, trophy); currently unused
public/assets/              all images, logos and SVGs (served as-is)
public/_ds/                 design-system stylesheet from the design source
scripts/standalone.mjs      single-file build (inlines every asset as data: URIs)
```

### How a screen renders
The screen's logic class returns a flat object from `renderVals()`. The JSX
template reads it as `v` and prints values with `t(...)`:

```jsx
// PortfolioPublish.jsx (template)
{t(v.landingHero)}
{v.isMove ? <>{t(v.moveSimple)}</> : null}
```

```js
// PortfolioPublish.logic.js
renderVals() {
  const s = this.state, h = React.createElement;
  return {
    landingHero: h(Component.BentoHome, {view: s.homeView || 'dash', onWork: () => this.go('work')}),
    // ...
  };
}
```

**New UI goes in `PortfolioPublish.logic.js` as a static component** on
`Component`, written with `React.createElement` (aliased `h`). Expose it as a
render value, then print it in the template with `{t(v.name)}`. Case studies
receive props (e.g. `glance`, `nextBanner`), and those props are merged into
their own `v` automatically.

```js
static Glance = function Glance(p) {
  const h = React.createElement;
  return h('section', {className: 'gl'}, h('style', null, `.gl{...}`), ...);
};
```

Components carry their own CSS in a `h('style', null, `…`)` child, with
class prefixes per component (`yj-`, `cvs-`, `mvs-`, `gl-`, `fb-`).

### Navigation
- Call `this.go(screen, extra)`. Screens are `home`, `work` (= home with
  `homeView:'proj'`), `approach` (About), `contact` and `case` (with `ci`).
- `document.documentElement.dataset.yjScreen` is set on every update.
  `states.css` uses it to hide the legacy layouts.
- The dock (`Component.Dock`) has only two items: Dashboard and Projects.

---

## 2. Design tokens

There is no token build step. Tokens are JS constants at the top of each
component, plus a few CSS custom properties.

| Token | Value | Use |
|---|---|---|
| `YEL` | `#FFD60A` | brand yellow: the name tile and the turntable halo only |
| `INK` | `#111111` | text and primary buttons |
| `GREY` | `#6B6B6B` | secondary text and labels |
| `LINE` | `#E3E3E0` | hairlines and chip borders |
| `BG` | `#F6F6F3` | page background, with a 24px dot grid |
| `PAPER` | `#FFFFFF` | tile background |
| ultramarine | `#2B3BFF` | **active state only**: selected tab, chip and mood; playing button; link/row hover. Also the wordmark on yellow. |
| `--yj-accent` | prop `accent` (default `#b6f23a`) | legacy accent; don't use in new UI |

Rules:
- Colour roles (UX):
  - **Yellow:** the brand, plus the single primary action per screen
    ("Let's talk over coffee", `.yj-cta`).
  - **Ultramarine:** state, meaning selected, playing, hovered or focused.
  - **Ink:** secondary actions (Read more, Copy email, Play when idle).
  - **Grey:** metadata.
  - The bottom-right tile leads with proof (an Impact list of three facts).
    The turntable is a compact player strip under it, and its shader
    (`Glow react`) only shows, in yellow, while a track plays.
  - Don't add a third hue to the shell.
- Tiles: radius 18, padding `clamp(18px, 1.8vw, 30px)`, gap 28px (20px when
  height ≤ 880px). No borders or shadows at rest; a 3D tilt on hover only.
- Case studies own their palettes. Examples: AVA red `#c8102e`, Pfizer
  `#0000c9`, CRAY purple `#7a3fc4`, Move red. Never bring those into the shell.

### Type
- Shell UI: **Schibsted Grotesk** for everything. Tile titles use
  `M = clamp(16px, min(1.4vw, 2.5vh), 21px)`, labels use `S = 14`.
- Wordmark (`h1.yj-wm`): **Bodoni Moda** italic, weight 400, ultramarine on
  yellow, styled in `states.css`. Use a high-specificity selector, because
  `type.css` forces `#dc-root h1..h6` sizes with `!important`:

```css
#dc-root .yj-bento h1.yj-wm{color:#2B3BFF !important;font-family:'Bodoni Moda',…;font-style:italic;font-weight:400 !important;…}
```

- Load fonts by adding them to the Google Fonts URL in
  `PortfolioPublish.jsx` → `defineScreen({ links: [...] })`.

---

## 3. Components (the bento shell)

| Component | Where | Notes |
|---|---|---|
| `BentoHome` | logic.js | 12×6 grid plus a logos row; `view` is `'dash'` or `'proj'` (the projects grid) |
| `tile(area, props, ...kids)` | inside BentoHome | the one tile primitive; `onClick` makes a button, `href` an anchor |
| `Dock` | logic.js | fixed pill nav, Dashboard / Projects |
| `AboutBento`, `ContactBento` | logic.js | inner pages in the same tile language |
| `CaseMoveSimple`, `CaseCraySimple`, `Glance`, `FlipBook` | logic.js | case-study structure |
| `Music` | logic.js | Web Audio engine, one generated track per mood |
| `Glow` | logic.js | **WebGL shader background**, see §8 |
| `ImageSlot` | src/components | photo frame with an empty state |

Grid areas are named with `.yj-a-*` classes, so an inline `all:unset` can't
wipe them:

```
"in in in in in in ph ph ph ab ab ab"
"in … ph … tk tk tk" ×2
"pj pj pj pj pj st st st st vn vn vn" ×3    (st = Looking for + recs stacked)
"lg × 12"
```

Phones (≤820px or height ≤560px) collapse to two columns:
`"in in" "ph ab" "tk tk" "pj pj" "st st" "vn vn" "lg lg"`.

**Fit logic:** tiles marked `data-fit` hide their `[data-drop]` children
(using `el.hidden`) when they overflow. Decorative layers must carry the
`yj-g` class so they're ignored by that check.

There is no Storybook. Check visually with the Playwright scripts (§9).

---

## 4. Assets
- Every image lives under `public/assets/…` and is referenced by a relative
  path through `__R()`:
  `h('img', {src: __R('assets/vinyl.webp'), alt: ''})`.
- Prefer **webp**. Old upload names (`uploads/*.jpg`) are remapped to webp
  by `resourceMap.json`; add an entry there when replacing a file.
- There's no CDN. The site deploys as static files (Vercel/Netlify, base
  `./`). `npm run build:standalone` produces one self-contained HTML file.
- Images from Figma: `get_screenshot` (with `enableBase64Response`) or
  `generate_image`, then crop and save as webp into `public/assets/`.
  `www.figma.com` asset URLs are blocked from the build sandbox.

## 5. Icons
- There's no icon library. Use Unicode arrows in text (`→ ↗ ↓`) and inline
  SVG paths for the few drawn marks:
  - the four-point sparkle (`viewBox 0 0 410 442`), used for the About tile,
    the favicon and markers;
  - logos in `public/assets/logos/*`.
- New icons: inline SVG with `fill="currentColor"` and `aria-hidden`.

## 6. Styling approach
- Styles are inline objects for one-offs, and per-component `<style>`
  blocks for anything with hover, media queries or animation.
- Global overrides live in `src/pages/PortfolioPublish.states.css`; it loads
  last and wins ties.
- `src/styles/type.css` fixes the H1–H6 sizes with `!important`. Override
  only with a more specific selector.
- Responsive sizes use `clamp()` with `min(vw, vh)` so the landing fits
  one screen. Breakpoints are 820px (phone), 980px, and height ≤ 880px.
- Motion budget on the landing: one ambient motion, the name-tile fluid. The record
  spins only while music plays. Everything else moves only on interaction:
  - photos auto-advance every 4 s (pause on hover); quotes change on click;
  - the logo marquee scrolls slowly (pauses on hover, still with reduced motion);
  - the turntable fluid appears only while music plays;
  - the intro flips once, at 4 s, and doesn't cycle.
- Separators in metadata lines are " / ", not "·".
- Motion is always gated by `prefers-reduced-motion`. Content is visible by
  default, and reveal animations are switched on by a JS-added class.

---

## 7. Figma ↔ code workflow
- File: `https://www.figma.com/design/NrqI1syznjNz3QfuZbqKhy`. Frame `2:11`
  is "Home — Desktop 1440" and `5:22` is the 3D version. Components are
  `Tile/Nav` (`2:3`) and `Project row` (`2:8`), which has a `Start here`
  boolean.
- Always `create_session` first, then load the figma-use skill before
  `use_figma`.
- Map Figma to code:
  - Figma tile → `tile(area, …)`
  - Figma text styles → `M` / `S` / `label()` / `title()`
  - Figma colours → the tokens in §2
  - Figma's yellow/blue gradient fills → `Component.Glow` (§8), never a static PNG.
- When code changes the landing, mirror it in frame `2:11` with `use_figma`,
  and keep the components in sync (for example, the project row's
  properties).

---

## 8. Shaders (`Component.Glow`)

Live WebGL backgrounds for tiles, after the yellow/ultramarine grainy
gradient references. One fragment shader runs domain-warped fBm noise
around an anchor point.

```js
h(Component.Glow)                                   // name tile: yellow base, ultramarine blob right-low
h(Component.Glow, {base:[1,1,1], mid:[1,.88,.3], core:[.17,.23,1],
                   cx:.5, cy:.5, cyNarrow:.5, rad:.44, radNarrow:.4})   // turntable halo
```

| Prop | Default | Meaning |
|---|---|---|
| `base` | `[1,.84,.04]` (yellow) | the tile's own colour |
| `mid` | `[.97,.95,.86]` (cream) | transition colour; keeps yellow→blue from turning muddy green |
| `core` | `[.17,.23,1]` (ultramarine) | centre of the blob |
| `cx`, `cy` | `1.06`, `.30` | anchor in UV (0–1, y up); values beyond 1 sit off the edge |
| `cyNarrow`, `radNarrow` | `-.02`, `.2` | anchor and radius on narrow tiles (aspect < 1.15), pulled into a corner away from text |
| `rad` | `.58` | radius on wide tiles |

Rules:
- Put it as the **first child** of the tile. It renders as
  `canvas.yj-g`, absolutely positioned with `border-radius: inherit` and
  z-index 0. Content sits above it through the
  `.yj-bt > :not(.yj-g)` rule.
- Keep text on the base colour. Anchor the blob away from copy, and check
  phone sizes too: dark text on deep blue fails contrast.
- Never blend yellow straight into blue; always pass through `mid`.
- At most **two** shader tiles per screen, placed diagonally for balance
  (name tile top left; the player strip in the Impact tile, bottom right).
- Performance and accessibility are built in, so keep them when you
  change it:
  - it renders at 0.6× resolution;
  - it pauses off-screen (IntersectionObserver) and in background tabs;
  - one static frame under reduced motion;
  - it hides itself if WebGL or the shader link fails, so the CSS
    gradient on `.yj-a-in` shows instead.
- Grain is a separate CSS layer (`.yj-a-in::after`, SVG `feTurbulence`,
  multiply). Add the same `::after` to any new shader tile that needs grain.

---

## 9. Build, check, publish
1. Build:
   `npx vite build --outDir <tmp>/site46 --assetsDir app --emptyOutDir`.
2. Check with Playwright, using the scripts kept in the scratchpad:
   - screenshots at desktop, laptop and phone sizes;
   - overflow at 8 viewports (`fit2.cjs`);
   - audio output level (`au2.cjs`);
   - shader render (`gl.cjs`, launched with `--use-gl=swiftshader`).
3. Commit to `claude/design-implementation-9gfgqf` and push.
4. Deploy to Vercel (project `yashvi-jain-portfolio`) **only when asked**.
