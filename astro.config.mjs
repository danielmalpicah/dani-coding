import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dani-coding.com',
  vite: {
    build: {
      // Fuerza scripts como archivos externos — requerido por la CSP (script-src 'self')
      assetsInlineLimit: 0,
    },
  },
});
