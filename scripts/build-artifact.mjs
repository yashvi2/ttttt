// Bundles the game into a single HTML page body (no <html>/<head> wrapper) that
// loads three.js from jsdelivr through an import map. Everything else is inlined.
// Usage: npm run build:artifact [-- <output file>]
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const root = join(dirname(new URL(import.meta.url).pathname), '..');
const outDir = join(root, 'dist-artifact');
const out = process.argv[2] || join(outDir, 'sisters-apart.html');
const threeVersion = JSON.parse(readFileSync(join(root, 'node_modules/three/package.json'), 'utf8')).version;

const assets = readdirSync(join(outDir, 'assets'));
const js = assets.filter((f) => f.endsWith('.js')).map((f) => readFileSync(join(outDir, 'assets', f), 'utf8'));
const css = assets.filter((f) => f.endsWith('.css')).map((f) => readFileSync(join(outDir, 'assets', f), 'utf8'));
if (js.length !== 1) throw new Error(`expected one JS bundle, found ${js.length}`);

const cdn = `https://cdn.jsdelivr.net/npm/three@${threeVersion}`;
const importMap = { imports: { three: `${cdn}/build/three.module.js`, 'three/addons/': `${cdn}/examples/jsm/` } };
const fonts = 'https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,500;0,7..72,600;1,7..72,400&family=Overpass:wght@300;400;600;700&display=swap';

const html = `<title>Sisters Apart</title>
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
