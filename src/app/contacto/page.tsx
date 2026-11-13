import { Contact } from '@/components/PortfolioSections';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata({
  title: 'Contacto y consultas',
  description: 'Cuéntame qué quieres construir: una plataforma educativa, una herramienta para tu negocio, un simulador o una integración de IA.',
  path: '/contacto',
});

export default function ContactPage() {
  return (
    <main id="contenido" className="page-width my-8 space-y-7 sm:my-12">
      <header className="max-w-3xl">
        <p className="font-mono text-xs font-extrabold uppercase tracking-wider text-orange-600 dark:text-amber-300">
          Contacto
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-[var(--text)] sm:text-4xl">
          Hablemos de lo que quieres poner en marcha.
        </h1>
      </header>
      <Contact />
    </main>
  );
}
