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
      <body className="min-h-screen bg-canvas font-sans text-[#d0d6e0] antialiased selection:bg-brand-500/20 selection:text-brand-300 relative">
        {/* Subtle dot-matrix engineered texture */}
        <div
          className="pointer-events-none fixed inset-0 bg-dot-matrix opacity-40 z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <footer className="border-t border-white/[0.06] bg-canvas py-8 text-center text-xs text-zinc-500">
            <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-zinc-400">© {new Date().getFullYear()}</span>
                <span className="text-zinc-300 font-medium">{portfolioConfig.owner.name}</span>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-500 font-mono text-[11px]">Directorio de 21 Aplicaciones</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 font-mono text-[11px]">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400">100% Despliegues Verificados</span>
                </span>
                <span className="text-zinc-700">·</span>
                <span>Open Design Linear Spec</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
