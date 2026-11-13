import { About } from '@/components/PortfolioSections';
import { GitHubActivitySection } from '@/components/GitHubActivitySection';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata({
  title: 'Perfil y trayectoria',
  description: 'Trayectoria de Xavier Cabello: educación matemática, desarrollo full stack, productos digitales e inteligencia artificial aplicada.',
  path: '/sobre-mi',
});

export default function AboutPage() {
  return (
    <main id="contenido" className="page-width my-8 space-y-7 sm:my-12 sm:space-y-9">
      <header className="max-w-3xl">
        <p className="font-mono text-xs font-extrabold uppercase tracking-wider text-orange-600 dark:text-amber-300">
          Perfil y método
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-[var(--text)] sm:text-4xl">
          Sobre Xavier Cabello
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
          Una práctica que une matemática, docencia y desarrollo de software para construir productos que resuelven necesidades reales.
        </p>
      </header>
      <About />
      <GitHubActivitySection />
    </main>
  );
}
