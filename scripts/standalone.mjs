// Builds dist-standalone/index.html: the whole site as ONE self-contained
// HTML file (JS, CSS and every image inlined as data: URIs). Netlify's
// Claude Design importer takes this format. Run after `npm run build`.
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const OUT = 'dist-standalone';
const PDF_URL = process.env.CV_URL ||
  'https://github.com/yashvi2/ttttt/raw/claude/design-implementation-9gfgqf/public/uploads/assets-1790874602631-0p68.pdf';
const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.gif': 'image/gif' };

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
  d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]);
const rel = (f) => path.relative(DIST, f).split(path.sep).join('/');
const dataUri = (f) => `data:${MIME[path.extname(f).toLowerCase()]};base64,${fs.readFileSync(f).toString('base64')}`;

const assets = {};
const styles = {};
for (const f of walk(DIST)) {
  const r = rel(f);
  if (r.startsWith('_app/') || r === 'index.html') continue;
  if (MIME[path.extname(f).toLowerCase()]) assets[r] = dataUri(f);
}
assets['uploads/assets-1790874602631-0p68.pdf'] = PDF_URL;
for (const f of walk(DIST)) {
  const r = rel(f);
  if (!r.endsWith('.css') || r.startsWith('_app/')) continue;
  const dir = path.posix.dirname(r);
  styles[r] = fs.readFileSync(f, 'utf8').replace(/url\((['"]?)(\.\/[^'")]+|[^'"):]+\.(?:png|jpe?g|webp|svg))\1\)/g, (m, q, p) => {
    const key = path.posix.normalize(path.posix.join(dir, p));
    return assets[key] ? `url("${assets[key]}")` : m;
  });
}

let html = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
const js = html.match(/<script type="module" crossorigin src="\.\/([^"]+)"><\/script>/);
const css = html.match(/<link rel="stylesheet" crossorigin href="\.\/([^"]+)">/);
const esc = (s) => s.replace(/<\/script/gi, '<\\/script');
html = html
  .replace(css[0], () => `<style>${fs.readFileSync(path.join(DIST, css[1]), 'utf8')}</style>`)
  .replace(js[0], '')
  .replace('</body>', () =>
    `<script>window.__INLINE_ASSETS__=${esc(JSON.stringify(assets))};window.__INLINE_STYLES__=${esc(JSON.stringify(styles))};</script>\n` +
    `<script type="module">${esc(fs.readFileSync(path.join(DIST, js[1]), 'utf8'))}</script>\n</body>`);

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'index.html'), html);
console.log(`${OUT}/index.html`, (html.length / 1e6).toFixed(1), 'MB,', Object.keys(assets).length, 'assets inlined');
