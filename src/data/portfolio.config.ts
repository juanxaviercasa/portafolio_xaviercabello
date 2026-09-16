import { PortfolioConfig, ProjectCategory } from '@/types/project';

export const portfolioConfig: PortfolioConfig = {
  owner: {
    name: 'Juan Xavier Cabello',
    role: 'Full-Stack Web Developer · Educador · Constructor de Productos Digitales',
    tagline: 'Construyo aplicaciones full-stack, plataformas de aprendizaje interactivo, herramientas para PyMEs y soluciones con IA aplicada que convierten ideas complejas en experiencias claras y verificables.',
    subdomainDomain: 'todolima.com',
    socials: {
      github: 'https://github.com/juanxaviercasa',
      linkedin: 'https://www.linkedin.com/in/xaviercabello/',
      email: 'mailto:josefcalefbaldur@gmail.com',
      tiktok: 'https://www.tiktok.com/@academiazenit',
    },
  },
  showcase: {
    itemsPerPage: 12,
    defaultView: 'grid',
    enableQuickModalPreview: true,
  },
};

export const CATEGORIES: ProjectCategory[] = [
  { id: 'all', label: 'Todos los Proyectos', description: 'Catálogo consolidado de proyectos en producción' },
  { id: 'pymes', label: 'Herramientas para PyMEs', description: 'Calculadoras, directorios urbanos, analítica y utilidades comerciales' },
  { id: 'edtech', label: 'Productos Educativos', description: 'Plataformas de preparación académica, matemáticas renderizadas y simuladores' },
  { id: 'tools', label: 'Seguridad & DevTools', description: 'Bóvedas Zero-Knowledge, entornos de datos y laboratorios técnicos' },
  { id: 'automation', label: 'IA Aplicada & Automatización', description: 'Tutores con IA verificable, generación procedural y agentes 24/7' },
  { id: 'culture', label: 'Cultura, Bienestar & WebGL', description: 'Mundos simulados, genealogía, psicología interactiva y shaders 3D' },
  { id: 'templates', label: 'Arquitectura Web & Templates', description: 'Fábrica de sitios ultra-rápidos con Astro 5 + Tailwind 4 y UI kits' },
];
