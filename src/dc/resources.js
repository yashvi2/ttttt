import map from './resourceMap.json';

/**
 * Resolve a design asset path to the file shipped in `public/`. Original
 * uploads (jpg/png) were replaced by optimised webp copies; this maps the
 * old names onto them and passes every other path through unchanged.
 */
export function __R(path) {
  const key = String(path).replace(/^\.\//, '');
  return map[key] || path;
}

if (typeof window !== 'undefined') window.__R = __R;
