import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base: './'` keeps every asset path relative, so the built site works from
// any sub-path (GitHub Pages, a folder on a static host, or opened locally).
export default defineConfig({
  base: './',
  plugins: [react()],
  // Keep bundled files apart from the design assets in public/assets.
  build: { assetsDir: '_app', chunkSizeWarningLimit: 1200 },
});
