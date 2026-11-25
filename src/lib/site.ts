// Datos del sitio — única fuente de verdad para contenido y configuración

export const SITE = {
  name: 'Dani Coding',
  url: 'https://www.dani-coding.com',
  title: 'Dani Coding — Inspección Precompra, CarPlay y Codificación BMW, MINI y VAG | CDMX',
  description:
    'Especialistas BMW y MINI con software de agencia: inspección precompra, Apple CarPlay en NBT Evo y codificación de funciones ocultas. También Grupo VAG. CDMX, Edomex y remoto en todo México.',
  phone: '+525542868902',
} as const;

const WHATSAPP_NUMBER = '525542868902';
export const WHATSAPP_MESSAGE = 'Hola, me interesa una cotización para programación automotriz.';

// `src` marca desde qué botón llegó el lead (ej. "Ref: web-hero") — visible en el chat de WhatsApp
export const waUrl = (message: string, src: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${message}

Ref: web-${src}`)}`;

export interface ServicePage {
  code: string;
  href: string;
  title: string;
  kicker: string;
  description: string;
  tags: readonly string[];
}

// Una página por intención de búsqueda. La home las enlaza todas.
export const SERVICE_PAGES: readonly ServicePage[] = [
  {
    code: 'PC·001',
    href: '/inspeccion-precompra-bmw-mini/',
    title: 'Inspección precompra BMW y MINI',
    kicker: 'ISTA · todos los módulos',
    description:
      'Antes de comprar un BMW o MINI usado: escaneo de agencia de todos los módulos, cruce de kilometraje, equipamiento de fábrica por VIN y veredicto claro.',
    tags: ['Kilometraje alterado', 'Historial de choques', 'Batería alto voltaje', 'Desde $3,500'],
  },
  {
    code: 'CP·002',
    href: '/carplay-bmw/',
    title: 'Apple CarPlay BMW',
    kicker: 'NBT Evo · fullscreen',
    description:
      'CarPlay a pantalla completa en BMW y MINI con NBT Evo — incluso con firmware fuera de rango N–Y vía PSdZ Lite, el caso que la mayoría de talleres rechaza.',
    tags: ['Fullscreen', 'Video in Motion', 'Firmware fuera de rango', 'Remoto'],
  },
  {
    code: 'BMW·003',
    href: '/codificacion-bmw/',
    title: 'Codificación BMW y MINI',
    kicker: 'ISTA-D · E-Sys',
    description:
      'Funciones ocultas, paquete FDL, retrofits y diagnóstico ISTA para BMW F-series y MINI. En taller, a domicilio o remoto.',
    tags: ['FDL coding', 'Retrofits', 'Diagnóstico ISTA', 'Funciones ocultas'],
  },
  {
    code: 'VAG·004',
    href: '/codificacion-vag/',
    title: 'Codificación VW, Audi, Seat y Skoda',
    kicker: 'ODIS · VCDS',
    description:
      'Funciones ocultas, CarPlay / Android Auto en MIB2+, Virtual Cockpit y adaptaciones con el software de la red oficial de concesionarios VAG.',
    tags: ['Funciones ocultas', 'CarPlay MIB2', 'Virtual Cockpit', 'Adaptaciones'],
  },
] as const;

export interface NavItem {
  code: string;
  label: string;
  href: string;
  sub?: boolean;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { code: '000-00', label: 'INICIO', href: '/' },
  { code: '001-00', label: 'PRECOMPRA BMW / MINI', href: '/inspeccion-precompra-bmw-mini/' },
  { code: '002-00', label: 'CARPLAY BMW', href: '/carplay-bmw/' },
  { code: '003-00', label: 'CODIFICACIÓN BMW', href: '/codificacion-bmw/' },
  { code: '004-00', label: 'CODIFICACIÓN VAG', href: '/codificacion-vag/' },
  { code: '005-00', label: 'PRECIOS', href: '/#precios' },
  { code: '006-00', label: 'CONTACTO', href: '#contacto' },
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
  { service: 'Paquete FDL (hasta 6 codificaciones · +$150 por extra)', range: '$2,500', tier: 1, wa: 'Hola, quiero cotizar el paquete FDL completo para mi BMW.' },
  // Diagnóstico
  { service: 'Diagnóstico ISTA completo — acreditable si contratas el trabajo', range: '$600', tier: null, wa: 'Hola, quiero un diagnóstico ISTA completo para mi BMW.' },
  // Tier 2 — CarPlay (fullscreen incluido), paquetes, retrofits
  // CarPlay: una sola fila "Desde" — las capas (FSC, flasheo, antena) se explican al cotizar
  { service: 'Apple CarPlay — NBT Evo (fullscreen incluido)',             range: 'Desde $6,500', tier: 2, wa: 'Hola, quiero activar CarPlay Fullscreen en mi BMW NBT Evo. ¿También puedo agregar Video in Motion por $300 adicional?' },
  { service: 'Fullscreen para CarPlay ya activo',                               range: 'Desde $1,500', tier: 2, wa: 'Hola, mi BMW ya tiene CarPlay y quiero activarlo a pantalla completa (fullscreen).' },
  { service: 'Funciones ocultas / cockpit premium',                            range: '$2,900',     tier: 2, wa: 'Hola, quiero cotizar el paquete de funciones ocultas y cockpit para mi BMW.' },
  { service: 'Retrofit coding simple (hardware ya instalado y reconocido)',      range: 'Desde $1,500', tier: 2, wa: 'Hola, quiero cotizar retrofit coding para mi BMW. Ya tengo el hardware instalado.' },
  { service: 'Retrofit / integración (módulos no reconocidos o multi-módulo · diagnóstico incluido)', range: 'Desde $4,500', tier: 2, wa: 'Hola, tengo un retrofit en mi BMW que no quedó funcionando (módulo no reconocido o varios módulos). Quiero cotizar la integración.' },
] as const;

// Filas de BMW que van en /carplay-bmw/ (el resto va en /codificacion-bmw/)
const isCarplay = (i: PricingItem) => /CarPlay|Video in Motion/.test(i.service);
export const PRICING_CARPLAY = PRICING_BMW.filter(isCarplay);
export const PRICING_BMW_CODING = PRICING_BMW.filter((i) => !isCarplay(i));

export const PRICING_VAG: readonly PricingItem[] = [
  { service: 'Toggle / adaptación individual',          range: '$400',       tier: 1,    wa: 'Hola, quiero cotizar una adaptación/toggle en mi VAG.' },
  { service: 'Video in Motion / menús ocultos',         range: '$450',       tier: 1,    wa: 'Hola, quiero activar Video in Motion o menús ocultos en mi VAG.' },
  { service: 'Paquete funciones ocultas (Sport, ambient, coming home…)', range: '$700', tier: 1, wa: 'Hola, quiero el paquete de funciones ocultas para mi VAG.' },
  { service: 'Diagnóstico VCDS completo',               range: '$500',       tier: null, wa: 'Hola, quiero un diagnóstico VCDS para mi VAG.' },
  { service: 'CarPlay / Android Auto / App-Connect (MIB2+)', range: 'Desde $2,000', tier: 2, wa: 'Hola, quiero activar CarPlay/Android Auto en mi VAG.' },
  { service: 'Virtual Cockpit — coding/activación (hardware ya instalado)', range: '$1,800', tier: 2, wa: 'Hola, quiero cotizar coding/activación de Virtual Cockpit en mi VAG. El hardware ya está instalado.' },
  { service: 'Retrofit coding (tras instalar hardware)', range: 'Desde $1,500', tier: 2, wa: 'Hola, quiero cotizar retrofit coding en mi VAG.' },
] as const;

// Inspección precompra — solo BMW y MINI. Precios fijos, cerrados, sin extras.
export const PRICING_PRECOMPRA: readonly PricingItem[] = [
  { service: 'Combustión · en taller (Texcoco)', range: '$3,500', tier: null, wa: 'Hola, quiero agendar una inspección precompra en taller para un BMW/MINI de combustión. Modelo y año: ' },
  { service: 'Combustión · en sitio (lote o agencia CDMX/Edomex, traslado incluido)', range: '$4,500', tier: null, wa: 'Hola, quiero una inspección precompra en sitio para un BMW/MINI de combustión. Modelo, año y ubicación: ' },
  { service: 'Híbrido / eléctrico (PHEV / EV) · en sitio', range: '$6,000', tier: null, wa: 'Hola, quiero una inspección precompra para un BMW/MINI híbrido o eléctrico. Modelo, año y ubicación: ' },
  { service: 'Lotes y agencias · precio especial por volumen', range: 'Contáctanos', tier: null, wa: 'Hola, tengo un lote/agencia y quiero inspección precompra para 3 o más BMW/MINI el mismo día.' },
] as const;

export const PRECOMPRA_INCLUDES: readonly [string, string][] = [
  ['Escaneo ISTA de todos los módulos', 'Con el software de agencia y el kilometraje en que ocurrió cada falla.'],
  ['Cruce de kilometraje entre módulos', 'Comparamos lo que guarda cada módulo contra el tablero: detecta tablero alterado o cambiado.'],
  ['Equipamiento real vs. de fábrica', 'Por VIN: retrofits, swaps y piezas de otro coche.'],
  ['Historial de choques', 'Lo que quedó registrado en el módulo de airbag.'],
  ['Batería y campañas', 'Historial de cambio de batería y campañas pendientes por VIN.'],
  ['Revisión física', 'Fugas típicas de BMW/MINI, frenos, llantas (DOT), suspensión y carrocería.'],
  ['Alto voltaje (PHEV / EV)', 'Estado de la batería: energía, delta de celdas y temperaturas.'],
  ['Reporte escrito + llamada', 'Te explicamos cada hallazgo y qué significa en dinero.'],
] as const;

export interface FaqItem {
  q: string;
  a: string;
}

// Objeciones reales. Cada página arma su lista (y su schema FAQPage) con estos bloques.
export const FAQ_GENERAL: readonly FaqItem[] = [
  {
    q: '¿La codificación puede dañar mi auto o dejarlo inservible?',
    a: 'No. Trabajamos con el software oficial de fábrica (ISTA, E-Sys, ODIS, VCDS) y todo cambio es reversible. Leemos y verificamos los fault codes antes y después de cada sesión. Llevamos 50+ vehículos sin un solo incidente.',
  },
  {
    q: '¿Pierdo la garantía de agencia?',
    a: 'La activación de funciones ocultas usa parámetros que el propio vehículo ya soporta de fábrica; no se modifica hardware. Como todo es reversible, puedes dejar el auto en configuración original antes de una visita a la agencia si lo necesitas.',
  },
  {
    q: '¿Cómo cotizo y cuánto tarda?',
    a: 'Escríbenos por WhatsApp con el modelo, año y lo que buscas activar; confirmamos precio y compatibilidad. La mayoría de los trabajos de coding se resuelven en una sola sesión.',
  },
] as const;

export const FAQ_REMOTE: readonly FaqItem[] = [
  {
    q: '¿El servicio remoto funciona de verdad?',
    a: 'Sí. Con un cable ENET conectado al puerto OBD y acceso por AnyDesk/TeamViewer, tomamos el control y codificamos en vivo mientras tú observas — terminado en la misma sesión. El flasheo completo de módulos y algunos casos fuera de rango sí requieren visita al taller.',
  },
  {
    q: '¿Qué necesito para una sesión remota?',
    a: 'Cable ENET (te lo recomendamos o facilitamos), una laptop con Windows e internet estable, un cargador/mantenedor de batería conectado durante la sesión, y el vehículo cerca de la laptop con acceso al puerto OBD.',
  },
] as const;

export const FAQ_CARPLAY: readonly FaqItem[] = [
  {
    q: '¿Cuánto cuesta activar CarPlay en un BMW?',
    a: 'Apple CarPlay en NBT Evo cuesta desde $6,500 MXN con pantalla completa (fullscreen) incluida. Si tu BMW ya tiene CarPlay y solo quieres fullscreen, desde $1,500 MXN. El precio final depende del firmware y de si hace falta licencia o actualización; lo confirmamos con tu VIN antes de agendar.',
  },
  {
    q: '¿Pueden activar CarPlay en mi BMW aunque el firmware esté fuera de rango?',
    a: 'Sí. En NBT Evo hacemos CarPlay incluso con firmware fuera de rango N–Y vía actualización con PSdZ Lite — un servicio que la mayoría de talleres rechaza. Nos envías el VIN corto y la versión de firmware del head unit y confirmamos compatibilidad antes de agendar.',
  },
  {
    q: '¿Cómo sé si mi BMW es compatible con CarPlay?',
    a: 'Envíanos por WhatsApp los últimos 7 caracteres del VIN y una foto de la versión de software del head unit. Con eso confirmamos si tiene NBT Evo, qué firmware trae y qué hace falta, antes de cobrarte nada.',
  },
] as const;

export const FAQ_VAG: readonly FaqItem[] = [
  {
    q: '¿Qué marcas y modelos del Grupo VAG codifican?',
    a: 'Volkswagen, Audi, Seat y Skoda. Usamos ODIS Engineering (el software de la red oficial de concesionarios) y VCDS. Para CarPlay / Android Auto, el auto debe tener head unit MIB2 o posterior.',
  },
  {
    q: '¿Cuánto cuesta activar funciones ocultas en un VW o Audi?',
    a: 'Una adaptación individual cuesta $400 MXN y el paquete de funciones ocultas (Sport display, ambient, coming/leaving home y más) $700 MXN. CarPlay / Android Auto en MIB2+ desde $2,000 MXN.',
  },
] as const;

export const FAQ_PRECOMPRA: readonly FaqItem[] = [
  {
    q: '¿Cuánto cuesta una inspección precompra de BMW o MINI?',
    a: 'Precio fijo, sin extras: $3,500 MXN en nuestro taller de Texcoco, $4,500 MXN en el lote o agencia (CDMX y Edomex, traslado incluido) y $6,000 MXN para híbridos y eléctricos (PHEV / EV) en sitio. Para lotes y agencias con varios autos hay precio especial.',
  },
  {
    q: '¿Qué detecta que no detecte una revisión mecánica normal?',
    a: 'Un escáner genérico lee sobre todo el motor. Con ISTA, el software de agencia BMW, leemos todos los módulos y el kilometraje en que ocurrió cada falla, cruzamos el kilometraje guardado en varios módulos contra el tablero, comparamos el equipamiento real contra el de fábrica por VIN y revisamos el historial de choques del módulo de airbag. Además hacemos la revisión física.',
  },
  {
    q: '¿La inspección precompra modifica algo del coche?',
    a: 'No. Es solo lectura: no se borra ni se modifica nada en ningún módulo. El coche queda exactamente como lo encontramos.',
  },
  {
    q: '¿Trabajan para el comprador o para el vendedor?',
    a: 'Para el comprador, siempre. Nuestro cliente es quien va a comprar; el veredicto (comprar, comprar negociando o no comprar) es para ti.',
  },
  {
    q: '¿Qué pasa si el vendedor no deja conectar al OBD?',
    a: 'Se cobra el traslado y se entrega una inspección incompleta: revisión visual, fotos y equipamiento de fábrica por VIN. Si un vendedor no deja escanear el coche, eso ya es información.',
  },
  {
    q: '¿En qué zonas dan el servicio?',
    a: 'En nuestro taller en Texcoco, Estado de México, o en el lote, agencia o domicilio del vendedor en CDMX y Estado de México, con el traslado incluido en el precio.',
  },
  {
    q: '¿Hacen precompra de otras marcas?',
    a: 'No. Solo BMW y MINI — es donde tenemos el software de agencia y el criterio para leer lo que el coche no dice a simple vista.',
  },
] as const;

export const COMPAT_NOTE = 'Revisión de compatibilidad gratis antes de pagar';

// Schema.org BreadcrumbList: Google muestra "dani-coding.com › <página>" en vez de la URL
export const breadcrumbLd = (name: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
    { '@type': 'ListItem', position: 2, name, item: new URL(path, SITE.url).href },
  ],
});

// Schema.org Service + Offer por página (precio numérico solo si la fila lo tiene)
export const serviceLd = (name: string, path: string, items: readonly PricingItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  url: new URL(path, SITE.url).href,
  provider: { '@id': `${SITE.url}/#business` },
  areaServed: ['Ciudad de México', 'Estado de México', 'México'],
  offers: items.map((i) => {
    const n = i.range.replace(/[^\d]/g, '');
    const offer: Record<string, unknown> = { '@type': 'Offer', name: i.service, priceCurrency: 'MXN' };
    if (n) {
      offer.priceSpecification = {
        '@type': 'PriceSpecification',
        priceCurrency: 'MXN',
        [i.range.startsWith('Desde') ? 'minPrice' : 'price']: Number(n),
      };
    }
    return offer;
  }),
});

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
    price: '$2,500',
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
