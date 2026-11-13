import type { MetadataRoute } from 'next';
import { PROJECTS_DATA } from '@/data/projects';
import { portfolioConfig } from '@/data/portfolio.config';

export const dynamic = 'force-static';

// Mantener esta fecha cuando cambie de forma material el contenido compartido de las páginas.
// No se usa la hora de build, que daría la impresión falsa de que cada URL cambia a diario.
const SITE_CONTENT_UPDATED = new Date('2026-11-12T00:00:00-05:00');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = portfolioConfig.owner.siteUrl.replace(/\/$/, '');
  const primaryRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/proyectos`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/servicios`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/sobre-mi`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/contacto`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'yearly', priority: 0.6 },
    // El taller es una página estática independiente publicada bajo public/taller-fenix/.
    { url: `${baseUrl}/taller-fenix/`, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS_DATA.map((project) => ({
    url: `${baseUrl}/proyectos/${project.id}`,
    changeFrequency: 'monthly',
    priority: project.featured ? 0.8 : 0.6,
  }));

  return [...primaryRoutes, ...projectRoutes];
}
