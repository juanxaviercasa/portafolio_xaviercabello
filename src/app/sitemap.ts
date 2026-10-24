import { MetadataRoute } from 'next';
import { PROJECTS_DATA } from '@/data/projects';
import { portfolioConfig } from '@/data/portfolio.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = portfolioConfig.owner.siteUrl.replace(/\/$/, '');
  const now = new Date();

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS_DATA.map((project) => ({
    url: `${baseUrl}/proyectos/${project.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: project.featured ? 0.9 : 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}
