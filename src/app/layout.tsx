import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import './globals.css';
import { portfolioConfig } from '@/data/portfolio.config';
import { PROJECTS_DATA } from '@/data/projects';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

const { owner } = portfolioConfig;
const siteUrl = owner.siteUrl.replace(/\/$/, '');
const title = `${owner.name} | Desarrollador Web Full Stack`;
const description = `Soy Xavier Cabello, desarrollador y docente de matemática. Explora ${PROJECTS_DATA.length} proyectos de educación, producto digital e IA aplicada, o cuéntame tu idea.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s · ${owner.name}` },
  description,
  keywords: [
    'Xavier Cabello',
    'Fénix 357',
    'desarrollo web',
    'educación matemática',
    'inteligencia artificial',
    'plataformas educativas',
    'simuladores matemáticos',
    'Lima, Perú',
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
                <Link href="/proyectos" className="hover:text-[var(--text)] transition-colors">
                  Proyectos ({PROJECTS_DATA.length})
                </Link>
                <Link href="/servicios" className="hover:text-[var(--text)] transition-colors">
                  Servicios
                </Link>
                <a href="/taller-fenix/" className="hover:text-[var(--text)] transition-colors">
                  Taller Fénix
                </a>
                <Link href="/sobre-mi" className="hover:text-[var(--text)] transition-colors">
                  Sobre mí
                </Link>
                <Link href="/contacto" className="text-amber-500 hover:underline">
                  Contacto ↗
                </Link>
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
