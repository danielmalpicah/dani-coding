// Genera public/og.jpg (1200×630) desde un SVG inline. Ejecutar: node scripts/gen-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'og.jpg');

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0a0a0a"/>
  <text x="1170" y="470" text-anchor="end" font-family="'IBM Plex Mono','Consolas',monospace" font-weight="700" font-size="440" fill="#141414" letter-spacing="-20">DC</text>
  <text x="80" y="110" font-family="'IBM Plex Mono','Consolas',monospace" font-weight="500" font-size="26" fill="#e8ff47" letter-spacing="8">ESPECIALISTAS</text>
  <text x="72" y="290" xml:space="preserve" font-family="'IBM Plex Mono','Consolas',monospace" font-weight="700" font-size="170" fill="#ffffff" letter-spacing="-6">BMW<tspan fill="#e8ff47"> &amp; </tspan>MINI</text>
  <text x="80" y="370" font-family="'IBM Plex Mono','Consolas',monospace" font-weight="700" font-size="44" fill="#ffffff">con software de agencia.</text>
  <text x="80" y="440" font-family="'Inter','Segoe UI',sans-serif" font-weight="400" font-size="30" fill="#888888">Inspección precompra · Apple CarPlay · Codificación</text>
  <rect x="80" y="500" width="120" height="4" fill="#e8ff47"/>
  <text x="80" y="560" font-family="'IBM Plex Mono','Consolas',monospace" font-weight="600" font-size="28" fill="#ffffff">dani-coding.com</text>
  <text x="1120" y="560" text-anchor="end" font-family="'IBM Plex Mono','Consolas',monospace" font-weight="500" font-size="24" fill="#888888" letter-spacing="4">CDMX · EDOMEX · REMOTO</text>
</svg>`;

const info = await sharp(Buffer.from(svg), { density: 150 })
  .resize(1200, 630)
  .jpeg({ quality: 88 })
  .toFile(out);
console.log('OG generado:', out, info.width + 'x' + info.height);
