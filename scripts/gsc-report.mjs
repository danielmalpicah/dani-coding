// Reporte de Search Console (solo lectura) — sin dependencias.
// Uso: node scripts/gsc-report.mjs [días=28]
// Llave: cuenta de servicio en ~/.config/gsc-key.json (o GSC_KEY_PATH). Nunca dentro del repo.
import { createSign } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const SITE = 'sc-domain:dani-coding.com';
const PAGES = [
  '/',
  '/inspeccion-precompra-bmw-mini/',
  '/carplay-bmw/',
  '/codificacion-bmw/',
  '/codificacion-vag/',
].map((p) => `https://www.dani-coding.com${p}`);
const DAYS = Number(process.argv[2] ?? 28);

const key = JSON.parse(readFileSync(process.env.GSC_KEY_PATH ?? join(homedir(), '.config', 'gsc-key.json'), 'utf8'));

// Token OAuth con JWT firmado (flujo de cuenta de servicio)
async function getToken() {
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  })}`;
  const sig = createSign('RSA-SHA256').update(unsigned).sign(key.private_key, 'base64url');
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${unsigned}.${sig}` }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`Token: ${JSON.stringify(json)}`);
  return json.access_token;
}

const token = await getToken();
const api = async (url, body) => {
  const res = await fetch(url, {
    method: body ? 'POST' : 'GET',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: body && JSON.stringify(body),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`${url}: ${json.error?.message ?? res.status}`);
  return json;
};
const enc = encodeURIComponent(SITE);
const day = (d) => new Date(Date.now() - d * 864e5).toISOString().slice(0, 10);
const range = { startDate: day(DAYS + 2), endDate: day(2) }; // GSC va ~2 días atrasado
const fmt = (r) => `${r.clicks} clics · ${r.impressions} impr · CTR ${(r.ctr * 100).toFixed(1)}% · pos ${r.position.toFixed(1)}`;

// 1. Sitemaps
console.log('## Sitemaps');
const { sitemap = [] } = await api(`https://www.googleapis.com/webmasters/v3/sites/${enc}/sitemaps`);
for (const s of sitemap) {
  const sub = s.contents?.map((c) => `${c.submitted} enviadas`).join(', ') ?? '';
  console.log(`- ${s.path} · última lectura ${s.lastDownloaded ?? '—'} · errores ${s.errors ?? 0} · ${sub}`);
}
if (!sitemap.length) console.log('- (ninguno)');

// 2. Indexación de cada página
console.log('\n## Indexación');
for (const url of PAGES) {
  try {
    const { inspectionResult: r } = await api('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
      inspectionUrl: url,
      siteUrl: SITE,
    });
    const i = r.indexStatusResult;
    console.log(`- ${url.replace('https://www.dani-coding.com', '')} · ${i.coverageState} · último rastreo ${i.lastCrawlTime ?? '—'}`);
  } catch (e) {
    console.log(`- ${url} · error: ${e.message}`);
  }
}

// 3. Rendimiento por página y por búsqueda
const query = (dimensions, rowLimit) =>
  api(`https://www.googleapis.com/webmasters/v3/sites/${enc}/searchAnalytics/query`, { ...range, dimensions, rowLimit });

console.log(`\n## Rendimiento ${range.startDate} → ${range.endDate}`);
const [byPage, byQuery] = await Promise.all([query(['page'], 25), query(['query'], 25)]);
console.log('\n### Por página');
for (const r of byPage.rows ?? []) console.log(`- ${r.keys[0].replace('https://www.dani-coding.com', '')} · ${fmt(r)}`);
if (!byPage.rows) console.log('- (sin datos aún)');
console.log('\n### Búsquedas');
for (const r of byQuery.rows ?? []) console.log(`- "${r.keys[0]}" · ${fmt(r)}`);
if (!byQuery.rows) console.log('- (sin datos aún)');
