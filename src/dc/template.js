import React from 'react';
import { __R } from './resources.js';

/** Resolve an image path to the shipped file (see resources.js). */
export function asset(path) {
  return typeof path === 'string' ? __R(path) : path;
}

/** Repeat `render` for every item of `list` (non-arrays render nothing). */
export function each(list, render) {
  if (!Array.isArray(list)) return null;
  return list.map((item, i) => React.createElement(React.Fragment, { key: i }, render(item, i)));
}

/**
 * Render a text hole: null/booleans render nothing, elements pass through.
 * Inside flex/grid containers (`boxed`), text is wrapped in its own <span> so
 * it lays out as a separate item next to the surrounding literal text.
 */
export function t(value, boxed = false) {
  if (value === null || value === undefined || typeof value === 'boolean') return null;
  if (React.isValidElement(value) || Array.isArray(value)) return value;
  return boxed ? React.createElement('span', null, String(value)) : String(value);
}

const kebabToCamel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

/** Turn a CSS declaration string into a React style object (objects pass through). */
export function css(value) {
  if (value == null || typeof value === 'object') return value ?? undefined;
  const out = {};
  let depth = 0;
  let quote = '';
  let start = 0;
  const decls = [];
  const s = String(value);
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (quote) {
      if (c === '\\') i++;
      else if (c === quote) quote = '';
    } else if (c === '"' || c === "'") quote = c;
    else if (c === '(') depth++;
    else if (c === ')') depth = Math.max(0, depth - 1);
    else if (c === ';' && depth === 0) {
      decls.push(s.slice(start, i));
      start = i + 1;
    }
  }
  decls.push(s.slice(start));
  for (const d of decls) {
    const i = d.indexOf(':');
    if (i < 0) continue;
    const prop = d.slice(0, i).trim();
    const val = d.slice(i + 1).trim().replace(/url\((['"]?)(?:\.\/)?((?:assets|uploads)\/[^'")]+)\1\)/g, (m, q, p) => {
      const to = __R(p);
      return to === p ? m : `url(${q}${to}${q})`;
    });
    out[prop.startsWith('--') ? prop : kebabToCamel(prop)] = val;
  }
  return out;
}

/** Join class names, skipping empty values. */
export function cx(...names) {
  return names.filter(Boolean).join(' ') || undefined;
}
