import { defineConfig } from 'vite';

// `vite build` produces a normal static site in dist/.
// `vite build --mode artifact` leaves three.js external (loaded from a CDN via an
// import map) so scripts/build-artifact.mjs can inline everything else into one page.
export default defineConfig(({ mode }) => ({
  base: './',
  build: mode === 'artifact'
    ? {
      outDir: 'dist-artifact',
      modulePreload: false,
      cssCodeSplit: false,
      rollupOptions: { external: [/^three(\/.*)?$/] },
    }
    : { chunkSizeWarningLimit: 1200 },
}));
