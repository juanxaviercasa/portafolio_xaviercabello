import { MetadataRoute } from 'next';
import { portfolioConfig } from '@/data/portfolio.config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = portfolioConfig.owner.siteUrl.replace(/\/$/, '');
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
