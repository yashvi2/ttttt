import map from './resourceMap.json';

// In the single-file build (scripts/standalone.mjs) every asset is embedded
// in the page as a data: URI; these maps hold them, keyed by public/ path.
const inlined = (typeof window !== 'undefined' && window.__INLINE_ASSETS__) || null;
export const inlinedStyles = (typeof window !== 'undefined' && window.__INLINE_STYLES__) || null;

const clean = (p) => String(p).replace(/^\.\//, '');

/**
 * Resolve a design asset path to the file shipped in `public/`. Original
 * uploads (jpg/png) were replaced by optimised webp copies; this maps the
 * old names onto them and passes every other path through unchanged.
 */
export function __R(path) {
  const mapped = map[clean(path)] || path;
  return (inlined && inlined[clean(mapped)]) || mapped;
}

if (typeof window !== 'undefined') window.__R = __R;

// Single-file build: swap asset paths written straight into markup
// (img src, inline url(...)) for their embedded copies as they render.
if (inlined && typeof document !== 'undefined') {
  const URL_RE = /url\((['"]?)(?:\.\/)?((?:assets|uploads|figma)\/[^'")]+)\1\)/g;
  const fix = (el) => {
    if (el.tagName === 'IMG') {
      const src = el.getAttribute('src');
      if (src && !src.startsWith('data:')) {
        const to = __R(src);
        if (to !== src) el.setAttribute('src', to);
      }
    }
    const style = el.getAttribute('style');
    if (style && style.includes('url(')) {
      const next = style.replace(URL_RE, (m, q, p) => {
        const to = __R(p);
        return to === p ? m : `url(${q}${to}${q})`;
      });
      if (next !== style) el.setAttribute('style', next);
    }
  };
  const sweep = (root) => {
    if (root.nodeType !== 1) return;
    if (root.matches('img,[style]')) fix(root);
    root.querySelectorAll('img,[style]').forEach(fix);
  };
  const start = () => {
    sweep(document.body);
    new MutationObserver((records) => {
      for (const r of records) {
        if (r.type === 'attributes') fix(r.target);
        else r.addedNodes.forEach(sweep);
      }
    }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'style'] });
  };
  if (document.body) start();
  else document.addEventListener('DOMContentLoaded', start);
}
