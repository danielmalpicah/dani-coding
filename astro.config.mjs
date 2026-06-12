import { defineConfig } from 'astro/config';

export default defineConfig({
  // TODO: actualizar al conectar dominio propio
  site: 'https://dani-coding.vercel.app',
  vite: {
    build: {
      // Fuerza scripts como archivos externos — requerido por la CSP (script-src 'self')
      assetsInlineLimit: 0,
    },
  },
});
