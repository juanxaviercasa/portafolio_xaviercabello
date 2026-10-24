import type { Metadata, Viewport } from 'next';
import './globals.css';
import { portfolioConfig } from '@/data/portfolio.config';
import { PROJECTS_DATA } from '@/data/projects';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

const { owner } = portfolioConfig;
const siteUrl = owner.siteUrl.replace(/\/$/, '');
const title = `${owner.name} | Desarrollador Web Full Stack`;
const description = `Xavier Cabello: desarrollo web, experiencia docente e IA aplicada. Explora ${PROJECTS_DATA.length} proyectos de educación, negocios y diseño, y conversemos sobre el tuyo.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s · ${owner.name}` },
  description,
  keywords: [
    'Xavier Cabello',
    'Fénix 357',
    'Software Engineer',
    'Full-Stack Developer',
    'Ingeniero de Software',
    'Next.js',
    'React',
    'TypeScript',
    'Python',
    'EdTech',
    'Inteligencia Artificial',
    'Simuladores Matemáticos',
    'Vaca Púrpura',
    'Arquitectura Cloud 0 costo',
    'Cloudflare Pages',
    'Lima Perú',
  ],
  authors: [{ name: owner.name, url: siteUrl }],
  creator: owner.name,
  alternates: { canonical: siteUrl },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
      { url: '/images/phoenix-logo.webp', type: 'image/webp', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'es_PE',
    url: siteUrl,
    siteName: `${owner.name} (${owner.alias})`,
    images: [
      {
        url: '/images/og-phoenix.jpg',
        width: 1200,
        height: 630,
        alt: `${owner.name} (${owner.alias}) · Software Engineer & Creador`,
      },
    ],
    videos: [
      {
        url: `${siteUrl}/videos/phoenix-hero.mp4`,
        width: 1920,
        height: 1080,
        type: 'video/mp4',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/og-phoenix.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#f5f3ff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: owner.name,
        alternateName: owner.alias,
        jobTitle: owner.role,
        url: siteUrl,
        image: `${siteUrl}/images/xavier-cabello.webp`,
        sameAs: [owner.socials.github, owner.socials.linkedin, owner.socials.tiktok].filter(Boolean),
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: `${owner.name} (${owner.alias})`,
        description,
        publisher: { '@id': `${siteUrl}/#person` },
      },
      {
        '@type': 'VideoObject',
        '@id': `${siteUrl}/#video-phoenix-flight`,
        name: 'Ave Fénix 357 en Vuelo Cósmico 3D — Xavier Cabello',
        description:
          'Simulación cinematográfica en 3D del Ave Fénix volando en el cosmos con fuego fluido y partículas estelares, representando la identidad de Xavier Cabello (Fénix 357).',
        thumbnailUrl: [
          `${siteUrl}/images/phoenix-hero-poster.jpg`,
          `${siteUrl}/images/og-phoenix.jpg`,
        ],
        uploadDate: '2026-10-17T00:00:00Z',
        contentUrl: `${siteUrl}/videos/phoenix-hero.mp4`,
        embedUrl: siteUrl,
        duration: 'PT10S',
      },
      {
        '@type': 'VideoObject',
        '@id': `${siteUrl}/#video-phoenix-rising`,
        name: 'Ave Fénix 357 Resurgiendo de las Cenizas en 3D — Xavier Cabello',
        description:
          'Obra visual en 3D del Ave Fénix emergiendo de brasas incandescentes con plumaje áureo hacia el cosmos, simbolizando la resiliencia y el renacimiento técnico de Xavier Cabello.',
        thumbnailUrl: [
          `${siteUrl}/images/phoenix-rising-poster.jpg`,
          `${siteUrl}/images/og-phoenix.jpg`,
        ],
        uploadDate: '2026-10-17T00:00:00Z',
        contentUrl: `${siteUrl}/videos/phoenix-rising.mp4`,
        embedUrl: siteUrl,
        duration: 'PT10S',
      },
      {
        '@type': 'ItemList',
        name: 'Ecosistema de Proyectos de Xavier Cabello',
        numberOfItems: PROJECTS_DATA.length,
        itemListElement: PROJECTS_DATA.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: p.title,
          url: `${siteUrl}/proyectos/${p.id}`,
        })),
      },
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false}>
          <a href="#contenido" className="skip-link">
            Saltar al contenido
          </a>
          <Header />
          {children}
          <footer className="mt-16 border-t border-[var(--line)] bg-[var(--surface)]/80 backdrop-blur-md">
            <div className="page-width flex flex-col justify-between gap-6 py-8 sm:flex-row sm:items-center">
              <div>
                <p className="font-serif text-base font-bold text-[var(--text)]">
                  © {new Date().getFullYear()} {owner.name}
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Desarrollador Web Full Stack y docente de matemáticas.
                </p>
              </div>
              <nav
                aria-label="Enlaces del pie de página"
                className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[var(--muted)]"
              >
                <a href="/#catalogo" className="hover:text-[var(--text)] transition-colors">
                  Proyectos
                </a>
                <a href="/#servicios" className="hover:text-[var(--text)] transition-colors">
                  Servicios
                </a>
                <a href="/#proyectos" className="hover:text-[var(--text)] transition-colors">
                  Catálogo ({PROJECTS_DATA.length})
                </a>
                <a href="/#sobre-mi" className="hover:text-[var(--text)] transition-colors">
                  Sobre mí
                </a>
                <a href="/#contacto" className="text-amber-500 hover:underline">
                  Contacto ↗
                </a>
                <a
                  href={owner.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text)] transition-colors"
                >
                  GitHub ↗
                </a>
              </nav>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
