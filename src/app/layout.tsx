import type { Metadata, Viewport } from 'next';
import './globals.css';
import { portfolioConfig } from '@/data/portfolio.config';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: `${portfolioConfig.owner.name} | Showcase de Proyectos Web & Subdominios`,
  description: portfolioConfig.owner.tagline,
  keywords: [
    'Portfolio',
    'Showcase',
    'Web Directory',
    'Next.js',
    'React',
    'Tailwind CSS',
    'Full Stack',
    'Xavier Cabello',
    'Subdominios',
  ],
  authors: [{ name: portfolioConfig.owner.name, url: `https://${portfolioConfig.owner.subdomainDomain}` }],
  openGraph: {
    title: `${portfolioConfig.owner.name} | Directorio de 40+ Proyectos Web`,
    description: portfolioConfig.owner.tagline,
    type: 'website',
    locale: 'es_ES',
    url: `https://${portfolioConfig.owner.subdomainDomain}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className="min-h-screen bg-zinc-950 font-sans text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <footer className="border-t border-zinc-800/80 bg-zinc-950 py-8 text-center text-xs text-zinc-500">
            <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                © {new Date().getFullYear()} {portfolioConfig.owner.name}. Todos los derechos reservados.
              </div>
              <div className="flex items-center gap-4 text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Arquitectura Data-Driven
                </span>
                <span>·</span>
                <span>Optimizado con Next.js & Tailwind CSS</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
