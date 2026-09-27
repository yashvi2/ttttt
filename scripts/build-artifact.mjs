// Bundles the game into a single HTML page body (no <html>/<head> wrapper) that
// loads three.js from jsdelivr through an import map. Everything else is inlined.
// Usage: ENTRY=<index|last-seen> node scripts/build-artifact.mjs [output file]
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const root = join(dirname(new URL(import.meta.url).pathname), '..');
const entry = process.env.ENTRY || 'index';
const PAGES = {
  index: { title: 'London-Newyork', file: 'london-newyork.html', fonts: 'family=Bungee&family=Fredoka:wght@400;500;600;700&family=Patrick+Hand&display=swap' },
  'last-seen': { title: 'Last Seen', file: 'last-seen.html', fonts: 'family=Anton&family=Barlow:wght@400;500;600;700&family=Special+Elite&family=Reenie+Beanie&display=swap' },
};
const page = PAGES[entry];
const outDir = join(root, 'dist-artifact', entry);
const out = process.argv[2] || join(root, 'dist-artifact', page.file);
const threeVersion = JSON.parse(readFileSync(join(root, 'node_modules/three/package.json'), 'utf8')).version;

const assets = readdirSync(join(outDir, 'assets'));
const js = assets.filter((f) => f.endsWith('.js')).map((f) => readFileSync(join(outDir, 'assets', f), 'utf8'));
const css = assets.filter((f) => f.endsWith('.css')).map((f) => readFileSync(join(outDir, 'assets', f), 'utf8'));
if (js.length !== 1) throw new Error(`expected one JS bundle, found ${js.length}`);

const cdn = `https://cdn.jsdelivr.net/npm/three@${threeVersion}`;
const importMap = { imports: { three: `${cdn}/build/three.module.js`, 'three/addons/': `${cdn}/examples/jsm/` } };
const fonts = `https://fonts.googleapis.com/css2?${page.fonts}`;

const html = `<title>${page.title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${fonts}">
<style>
${css.join('\n')}
</style>
<div id="app">
  <canvas id="scene"></canvas>
  <div id="labels"></div>
  <div id="ui"></div>
</div>
<script type="importmap">${JSON.stringify(importMap)}</script>
<script type="module">
${js[0].replace(/<\/script/gi, '<\\/script')}
</script>
`;
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, html);
console.log(`wrote ${out} (${(html.length / 1024).toFixed(0)} KB, three@${threeVersion} from jsdelivr)`);
