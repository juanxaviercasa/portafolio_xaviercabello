import type { Metadata } from 'next';
import { portfolioConfig } from '@/data/portfolio.config';

const { owner } = portfolioConfig;
const siteUrl = owner.siteUrl.replace(/\/$/, '');

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, `${siteUrl}/`).toString();
  const image = '/images/og-phoenix.jpg';

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} · ${owner.name}`,
      description,
      type: 'website',
      locale: 'es_PE',
      url,
      siteName: `${owner.name} (${owner.alias})`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} · ${owner.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} · ${owner.name}`,
      description,
      images: [image],
    },
  };
}
