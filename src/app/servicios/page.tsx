import { Services } from '@/components/PortfolioSections';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata({
  title: 'Servicios digitales',
  description: 'Aplicaciones para negocios, experiencias educativas, simuladores e integraciones de IA planteadas desde una necesidad concreta.',
  path: '/servicios',
});

export default function ServicesPage() {
  return (
    <main id="contenido" className="page-width my-8 space-y-7 sm:my-12">
      <header className="max-w-3xl">
        <p className="font-mono text-xs font-extrabold uppercase tracking-wider text-orange-600 dark:text-amber-300">
          Servicios
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-[var(--text)] sm:text-4xl">
          Soluciones digitales para enseñar, operar y crecer.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
          El alcance parte del problema y de las personas que usarán la herramienta; después se define la experiencia, la tecnología y la forma de publicarla.
        </p>
      </header>
      <Services />
    </main>
  );
}
