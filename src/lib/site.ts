// Datos del sitio — única fuente de verdad para contenido y configuración

export const SITE = {
  name: 'Dani Coding',
  url: 'https://www.dani-coding.com',
  title: 'Dani Coding — Funciones Ocultas & Codificación BMW y VAG | Remoto Todo México',
  description:
    'Codificación, funciones ocultas y activaciones para BMW y VAG — servicio remoto en todo México, presencial en CDMX y Área Metropolitana. ODIS, ISTA-D, E-Sys y VCDS. Software de agencia, precio de taller.',
  phone: '+525542868902',
} as const;

const WHATSAPP_NUMBER = '525542868902';
export const WHATSAPP_MESSAGE = 'Hola, me interesa una cotización para programación automotriz.';

// `src` marca desde qué botón llegó el lead (ej. "Ref: web-hero") — visible en el chat de WhatsApp
export const waUrl = (message: string, src: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${message}

Ref: web-${src}`)}`;

export interface Service {
  code: string;
  brand: string;
  models: string;
  software: string;
  description: string;
  tags: readonly string[];
}

export const SERVICES: readonly Service[] = [
  {
    code: 'BMW·001',
    brand: 'BMW',
    models: 'F-series · NBT Evo',
    software: 'ISTA-D · E-SYS',
    description:
      'Coding y diagnóstico para BMW F-series y Mini. CarPlay en NBT Evo — incluyendo firmware fuera de rango N–Y vía PSdZ Lite (servicio que la mayoría de talleres rechaza). Funciones ocultas, FDL coding y retrofits.',
    tags: ['CarPlay NBT Evo', 'FDL Coding', 'ISTA Diagnóstico', 'Funciones ocultas'],
  },
  {
    code: 'VAG·002',
    brand: 'Grupo VAG',
    models: 'Volkswagen · Audi · Seat · Skoda',
    software: 'ODIS Engineering',
    description:
      'Diagnóstico, codificación, adaptaciones y programación de módulos con el mismo software que usa la red oficial de concesionarios VAG.',
    tags: ['Codificación', 'Adaptaciones', 'Flash ECU', 'Activación de funciones'],
  },
] as const;

export interface NavItem {
  code: string;
  label: string;
  href: string;
  sub?: boolean;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { code: '000-00', label: 'INICIO', href: '#hero' },
  { code: '001-00', label: 'SERVICIOS', href: '#servicios' },
  { code: '002-00', label: 'PRECIOS', href: '#precios' },
  { code: '003-00', label: 'PROCESO', href: '#proceso' },
  { code: '004-00', label: 'PREGUNTAS FRECUENTES', href: '#faq' },
  { code: '005-00', label: 'CONTACTO', href: '#contacto' },
] as const;

export interface IndexItem {
  code: string;
  label: string;
  section: string;
}

export const INDEX_ITEMS: readonly IndexItem[] = [
  { code: '000-00', label: 'INICIO', section: 'hero' },
  { code: '001-00', label: 'SERVICIOS', section: 'servicios' },
  { code: '001C-00', label: 'PRECIOS', section: 'precios' },
  { code: '002-00', label: 'GALERÍA', section: 'galeria' },
  { code: '003-00', label: 'PROCESO', section: 'proceso' },
  { code: '004-00', label: 'POR QUÉ', section: 'diferenciadores' },
  { code: '005-00', label: 'COBERTURA', section: 'cobertura' },
  { code: '006-00', label: 'FAQ', section: 'faq' },
  { code: '007-00', label: 'CONTACTO', section: 'contacto' },
] as const;

export interface GalleryItem {
  src: string;
  caption: string;
}

export const GALLERY: readonly GalleryItem[] = [
  { src: '/images/ista-bmw.jpg', caption: 'ISTA · BMW F22 Coupé' },
  { src: '/images/vcds-vag.jpg', caption: 'VCDS · Grupo VAG' },
  { src: '/images/ista-diagnostico.jpg', caption: 'ISTA+ · Árbol de módulos' },
] as const;

export const STATS: readonly [string, string][] = [
  ['50+', 'Vehículos sin un solo incidente'],
  ['2', 'Marcas · VAG · BMW'],
  ['7', 'Días a la semana'],
] as const;

export const DIFFERENTIATORS: readonly [string, string, string][] = [
  ['01', 'Software oficial de fábrica', 'ODIS, ISTA-D y E-SYS — no herramientas genéricas'],
  ['02', 'Sin viaje al concesionario', 'Diagnóstico preciso sin costos de traslado'],
  ['03', 'Activación de funciones', 'Features bloqueados de fábrica habilitados vía software'],
  ['04', 'Más marcas próximamente', 'Expansión continua a otras marcas premium'],
] as const;

export const PROCESS_PARTICULARES: readonly string[] = [
  'Agenda tu cita por WhatsApp',
  'Llega a nuestro taller en Texcoco',
  'Conectamos el equipo de diagnóstico',
  'Programación y verificación final',
] as const;

export const PROCESS_TALLERES: readonly string[] = [
  'Contáctanos con el caso específico',
  'Coordinamos fecha y lugar',
  'Llegamos con equipo completo',
  'Servicio in-situ con verificación',
] as const;

export const PROCESS_REMOTO: readonly [string, string][] = [
  [
    'Agenda y verifica compatibilidad',
    'Envíanos el VIN corto y la versión de firmware del head unit. Confirmamos qué features aplican a tu vehículo.',
  ],
  [
    'Conecta el ENET',
    'Enchufa el cable ENET al puerto OBD y a tu laptop, con el cargador de batería puesto. Nos das acceso por AnyDesk/TeamViewer.',
  ],
  [
    'Codificamos en vivo',
    'Tomamos el control y aplicamos la codificación mientras tú observas. Verificamos fault codes antes y después. Terminado en la misma sesión.',
  ],
] as const;

export const REMOTE_SERVICES: readonly string[] = [
  'Apple CarPlay en NBT Evo (firmware N–Y)',
  'CarPlay fullscreen',
  'Video in Motion (VIM)',
  'Android screen mirroring',
  'FDL coding: LEDs, welcome light, angel eyes, digital speed, video jack, cierre por control, menús ocultos',
  'Lectura y borrado de fault codes',
  'Ajustes de VO coding dentro de rangos seguros',
] as const;

export const REMOTE_REQUIREMENTS: readonly string[] = [
  'Cable ENET (OBD a Ethernet) — te lo recomendamos o facilitamos',
  'Laptop con Windows e internet estable',
  'Cargador/mantenedor de batería conectado durante la sesión',
  'Vehículo cerca de la laptop con acceso al puerto OBD',
] as const;

export const REMOTE_LIMITS: readonly string[] = [
  'Flasheo/programación completa de módulos — requiere voltaje ≥70A y recuperación física',
  'Firmware fuera de rango que necesite PSdZ Lite — se evalúa, puede requerir taller',
  'Diagnóstico mecánico o eléctrico físico',
] as const;

export interface PricingItem {
  service: string;
  range: string;
  tier: 1 | 2 | null; // null = diagnóstico / anzuelo
  wa: string;          // texto prellenado para WhatsApp
}

export const PRICING_BMW: readonly PricingItem[] = [
  // Tier 1 — features sueltos (1–2 codificaciones), precio fijo, F-series + NBT Evo
  { service: 'LED / retrofit lights F-series',          range: '$600', tier: 1,    wa: 'Hola, quiero cotizar coding de LED / retrofit lights para mi BMW F-series.' },
  { service: 'Anti-dazzle (vidrio antideslumbrante)',   range: '$600', tier: 1,    wa: 'Hola, quiero activar anti-dazzle en mi BMW.' },
  { service: 'Digital speed',                           range: '$600', tier: 1,    wa: 'Hola, quiero activar digital speed en mi BMW.' },
  { service: 'Video in Motion (VIM)',                   range: '$600', tier: 1,    wa: 'Hola, quiero activar Video in Motion en mi BMW.' },
  { service: 'Welcome light / angel eyes',              range: '$600', tier: 1,    wa: 'Hola, quiero activar welcome light o angel eyes en mi BMW.' },
  { service: 'Cierre por control (single lock/unlock)', range: '$600', tier: 1,    wa: 'Hola, quiero activar cierre por control en mi BMW.' },
  { service: 'Menús ocultos',                           range: '$600', tier: 1,    wa: 'Hola, quiero activar menús ocultos en mi BMW.' },
  { service: 'Paquete FDL (hasta 6 codificaciones · +$150 por extra)', range: '$1,200', tier: 1, wa: 'Hola, quiero cotizar el paquete FDL completo para mi BMW.' },
  // Diagnóstico
  { service: 'Diagnóstico ISTA completo — acreditable si contratas el trabajo', range: '$600', tier: null, wa: 'Hola, quiero un diagnóstico ISTA completo para mi BMW.' },
  // Tier 2 — CarPlay (fullscreen incluido), paquetes, retrofits
  { service: 'CarPlay Fullscreen — NBT Evo en rango (solo coding)',            range: '$6,500',     tier: 2, wa: 'Hola, quiero activar CarPlay Fullscreen en mi BMW NBT Evo. El firmware está en rango (N–Y). ¿También puedo agregar Video in Motion por $300 adicional?' },
  { service: 'CarPlay Fullscreen — NBT Evo fuera de rango (firmware update + coding)', range: '$7,600', tier: 2, wa: 'Hola, quiero activar CarPlay Fullscreen en mi BMW NBT Evo. El firmware está fuera de rango y necesita actualización. ¿También puedo agregar Video in Motion por $300 adicional?' },
  { service: 'Funciones ocultas / cockpit premium',                            range: '$2,900',     tier: 2, wa: 'Hola, quiero cotizar el paquete de funciones ocultas y cockpit para mi BMW.' },
  { service: 'Retrofit coding (tras instalar hardware)',                        range: 'Desde $1,500', tier: 2, wa: 'Hola, quiero cotizar retrofit coding para mi BMW. Ya tengo el hardware instalado.' },
] as const;

export const PRICING_VAG: readonly PricingItem[] = [
  { service: 'Toggle / adaptación individual',          range: '$400',       tier: 1,    wa: 'Hola, quiero cotizar una adaptación/toggle en mi VAG.' },
  { service: 'Video in Motion / menús ocultos',         range: '$450',       tier: 1,    wa: 'Hola, quiero activar Video in Motion o menús ocultos en mi VAG.' },
  { service: 'Paquete funciones ocultas (Sport, ambient, coming home…)', range: '$700', tier: 1, wa: 'Hola, quiero el paquete de funciones ocultas para mi VAG.' },
  { service: 'Diagnóstico VCDS completo',               range: '$500',       tier: null, wa: 'Hola, quiero un diagnóstico VCDS para mi VAG.' },
  { service: 'CarPlay / Android Auto / App-Connect (MIB2+)', range: 'Desde $2,000', tier: 2, wa: 'Hola, quiero activar CarPlay/Android Auto en mi VAG.' },
  { service: 'Virtual Cockpit — coding/activación (hardware ya instalado)', range: '$1,800', tier: 2, wa: 'Hola, quiero cotizar coding/activación de Virtual Cockpit en mi VAG. El hardware ya está instalado.' },
  { service: 'Retrofit coding (tras instalar hardware)', range: 'Desde $1,500', tier: 2, wa: 'Hola, quiero cotizar retrofit coding en mi VAG.' },
] as const;

export interface FaqItem {
  q: string;
  a: string;
}

// Objeciones reales de coding BMW/VAG. Edítalas con tu voz — son un punto de partida honesto.
export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    q: '¿La codificación puede dañar mi auto o dejarlo inservible?',
    a: 'No. Trabajamos con el software oficial de fábrica (ISTA, E-Sys, ODIS, VCDS) y todo cambio es reversible. Leemos y verificamos los fault codes antes y después de cada sesión. Llevamos 50+ vehículos sin un solo incidente.',
  },
  {
    q: '¿Pierdo la garantía de agencia?',
    a: 'La activación de funciones ocultas usa parámetros que el propio vehículo ya soporta de fábrica; no se modifica hardware. Como todo es reversible, puedes dejar el auto en configuración original antes de una visita a la agencia si lo necesitas.',
  },
  {
    q: '¿El servicio remoto funciona de verdad?',
    a: 'Sí. Con un cable ENET conectado al puerto OBD y acceso por AnyDesk/TeamViewer, tomamos el control y codificamos en vivo mientras tú observas — terminado en la misma sesión. El flasheo completo de módulos y algunos casos fuera de rango sí requieren visita al taller.',
  },
  {
    q: '¿Qué necesito para una sesión remota?',
    a: 'Cable ENET (te lo recomendamos o facilitamos), una laptop con Windows e internet estable, un cargador/mantenedor de batería conectado durante la sesión, y el vehículo cerca de la laptop con acceso al puerto OBD.',
  },
  {
    q: '¿Pueden activar CarPlay en mi BMW aunque el firmware esté fuera de rango?',
    a: 'Sí. En NBT Evo hacemos CarPlay incluso con firmware fuera de rango N–Y vía actualización con PSdZ Lite — un servicio que la mayoría de talleres rechaza. Nos envías el VIN corto y la versión de firmware del head unit y confirmamos compatibilidad antes de agendar.',
  },
  {
    q: '¿Cómo cotizo y cuánto tarda?',
    a: 'Escríbenos por WhatsApp con el modelo, año y lo que buscas activar; confirmamos precio y compatibilidad. La mayoría de los trabajos de coding se resuelven en una sola sesión.',
  },
] as const;

export interface FeaturedService {
  title: string;
  badge: string;
  blurb: string;
  price: string; // solo el monto — la etiqueta "Desde" es fija en la UI
  img?: string; // opcional: swap por foto real del auto/trabajo cuando la tengas
  ghost?: boolean; // botón secundario (diagnóstico)
  wa: string;
}

// Los 4 servicios estrella que se muestran como tarjetas arriba de la tabla completa.
export const FEATURED_PRICING: readonly FeaturedService[] = [
  {
    title: 'CarPlay Fullscreen',
    badge: 'BMW · NBT Evo',
    blurb: 'Apple CarPlay a pantalla completa. Incluso con firmware fuera de rango vía PSdZ.',
    price: '$6,500',
    img: '/images/ista-bmw.jpg',
    wa: 'Hola, quiero cotizar CarPlay Fullscreen para mi BMW NBT Evo.',
  },
  {
    title: 'Paquete FDL',
    badge: 'BMW · FDL',
    blurb: 'Hasta 6 funciones ocultas: LEDs, welcome light, digital speed, menús ocultos…',
    price: '$1,200',
    wa: 'Hola, quiero cotizar el paquete FDL completo para mi BMW.',
  },
  {
    title: 'Funciones ocultas VAG',
    badge: 'VW · Audi · Seat · Skoda',
    blurb: 'Sport display, ambient, coming/leaving home, Video in Motion y más.',
    price: '$700',
    img: '/images/vcds-vag.jpg',
    wa: 'Hola, quiero el paquete de funciones ocultas para mi VAG.',
  },
  {
    title: 'Diagnóstico completo',
    badge: 'ISTA · VCDS',
    blurb: 'ISTA / VCDS. Acreditable al costo del trabajo si contratas el servicio.',
    price: '$500',
    img: '/images/ista-diagnostico.jpg',
    ghost: true,
    wa: 'Hola, quiero un diagnóstico completo para mi vehículo.',
  },
] as const;

export const TRUST_BADGES: readonly [string, string][] = [
  ['Software oficial de agencia', 'ODIS · ISTA-D · E-Sys · VCDS'],
  ['Trabajo garantizado', 'Proceso reversible, sin riesgo de brick'],
  ['50+ vehículos', 'Sin un solo incidente'],
] as const;
