import { PortfolioConfig, ProjectCategory } from '@/types/project';

export const portfolioConfig: PortfolioConfig = {
  owner: {
    name: 'Xavier Cabello',
    alias: 'Fénix 357',
    role: 'Instructor de vibecoding con IA · Desarrollo y educación',
    tagline:
      'Desarrollador full stack y licenciado en Educación Matemática. Creo plataformas educativas, simuladores, herramientas para negocios y sistemas con IA aplicada.',
    siteUrl: 'https://xavier.cabellosalirrosas.com',
    brandMark: '/images/phoenix-brand-mark.png',
    socials: {
      github: 'https://github.com/juanxaviercasa',
      linkedin: 'https://www.linkedin.com/in/xaviercabello/',
      email: 'mailto:xavier@cabellosalirrosas.com',
      tiktok: 'https://www.tiktok.com/@sistemazenit',
      whatsapp:
        'https://wa.me/51925475034?text=' +
        encodeURIComponent('Hola Xavier, quiero aprender a crear aplicaciones con IA. Me interesa conocer tu taller.'),
    },
  },
  showcase: {
    itemsPerPage: 6,
    defaultView: 'grid',
  },
  training: {
    url: '/taller-fenix/',
  },
};

export const CATEGORIES: ProjectCategory[] = [
  { id: 'all', label: 'Todos', description: 'Todos los proyectos' },
  { id: 'webapp', label: 'Web apps', description: 'Aplicaciones interactivas y simuladores' },
  { id: 'web', label: 'Sitios web', description: 'Sitios, landings y portales' },
  { id: 'mobile', label: 'Móvil', description: 'Experiencias para smartphone y PWA' },
  { id: 'ai', label: 'IA y seguridad', description: 'Inteligencia artificial, cifrado y automatización' },
  { id: 'edtech', label: 'Educación', description: 'Matemáticas, ciencias y preparación preuniversitaria' },
  { id: 'pymes', label: 'Negocios', description: 'Herramientas y directorios para pequeñas empresas' },
  { id: 'tools', label: 'Herramientas', description: 'Utilidades técnicas y de productividad' },
  { id: 'templates', label: 'Diseño UI', description: 'Interfaces y prototipos en Figma' },
  { id: 'leisure', label: 'Personales', description: 'Proyectos personales y de bienestar' },
];
