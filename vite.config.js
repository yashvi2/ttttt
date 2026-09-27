import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// `vite build` builds both games into dist/: index.html (London-Newyork) and
// last-seen.html (the alternate version).
// `ENTRY=<page> vite build --mode artifact` leaves three.js external so
// scripts/build-artifact.mjs can inline one page into a single file.
const entry = process.env.ENTRY || 'index';

export default defineConfig(({ mode }) => ({
  base: './',
  build: mode === 'artifact'
    ? {
      outDir: `dist-artifact/${entry}`,
      modulePreload: false,
      cssCodeSplit: false,
      assetsInlineLimit: 100_000_000, // inline images as data URIs
      rollupOptions: { input: resolve(import.meta.dirname, `${entry}.html`), external: [/^three(\/.*)?$/] },
    }
    : {
      chunkSizeWarningLimit: 1200,
      rollupOptions: { input: { main: resolve(import.meta.dirname, 'index.html'), lastSeen: resolve(import.meta.dirname, 'last-seen.html') } },
    },
}));
