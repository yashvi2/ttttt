import { inlinedStyles } from './resources.js';

// Screens inject their stylesheets the first time they render, in render
// order, so the cascade matches the design (later screens win ties).
const mounted = new Set();

function once(key, create) {
  if (mounted.has(key) || typeof document === 'undefined') return;
  mounted.add(key);
  document.head.appendChild(create());
}

export function injectScreenAssets(screen) {
  for (const href of screen.screenLinks || []) {
    once('link|' + href, () => {
      if (inlinedStyles && inlinedStyles[href] != null) {
        const el = document.createElement('style');
        el.textContent = inlinedStyles[href];
        return el;
      }
      const el = document.createElement('link');
      el.rel = 'stylesheet';
      el.href = href;
      return el;
    });
  }
  if (screen.screenCss) {
    once('css|' + screen.screenName, () => {
      const el = document.createElement('style');
      el.dataset.screen = screen.screenName;
      el.textContent = screen.screenCss;
      return el;
    });
  }
}
