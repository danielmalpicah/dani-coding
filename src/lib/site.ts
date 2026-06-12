// Datos del sitio — única fuente de verdad para contenido y configuración

export const SITE = {
  name: 'Dani Coding',
  // TODO: actualizar al conectar dominio propio
  url: 'https://dani-coding.vercel.app',
  title: 'Dani Coding — Programación Automotriz Nivel Concesionario | Texcoco, EDOMEX',
  description:
    'Programación automotriz nivel concesionario en Texcoco, Estado de México. ODIS para Volkswagen, Audi, Seat y Skoda. ISTA + E-SYS para BMW. Servicio a domicilio en CDMX y Área Metropolitana.',
  phone: '+525542868902',
} as const;

const WHATSAPP_NUMBER = '525542868902';
const WHATSAPP_MESSAGE = 'Hola, me interesa una cotización para programación automotriz.';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
    code: 'VAG·001',
    brand: 'Grupo VAG',
    models: 'Volkswagen · Audi · Seat · Skoda',
    software: 'ODIS Engineering',
    description:
      'Diagnóstico, codificación, adaptaciones y programación de módulos con el mismo software que usa la red oficial de concesionarios VAG.',
    tags: ['Codificación', 'Adaptaciones', 'Flash ECU', 'Activación de funciones'],
  },
  {
    code: 'BMW·002',
    brand: 'BMW',
    models: 'BMW · Mini',
    software: 'ISTA-D · E-SYS',
    description:
      'Diagnóstico integral con ISTA y programación/codificación profunda de módulos con E-SYS. Funciones ocultas, retrofits y actualizaciones de software.',
    tags: ['E-SYS Coding', 'ISTA Diagnóstico', 'Retrofits', 'Hidden Features'],
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
  { code: '001A-00', label: 'GRUPO VAG', href: '#servicios', sub: true },
  { code: '001B-00', label: 'BMW', href: '#servicios', sub: true },
  { code: '002-00', label: 'GALERÍA', href: '#galeria' },
  { code: '003-00', label: 'PROCESO', href: '#proceso' },
  { code: '004-00', label: 'POR QUÉ DANI CODING', href: '#diferenciadores' },
  { code: '005-00', label: 'COBERTURA', href: '#cobertura' },
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
  { code: '002-00', label: 'GALERÍA', section: 'galeria' },
  { code: '003-00', label: 'PROCESO', section: 'proceso' },
  { code: '004-00', label: 'POR QUÉ', section: 'diferenciadores' },
  { code: '005-00', label: 'COBERTURA', section: 'cobertura' },
  { code: '006-00', label: 'CONTACTO', section: 'contacto' },
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
  ['50+', 'Vehículos programados'],
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
