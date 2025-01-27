// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: './postcss.config.js', // This ensures Vite uses your PostCSS config
  },
});
