import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Página no encontrada',
  description: 'La ruta solicitada no existe en el portafolio de Xavier Cabello.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="contenido" className="page-width py-24">
      <div className="detail-block mx-auto max-w-xl text-center">
        <p className="eyebrow justify-center">404 / PÁGINA NO ENCONTRADA</p>
        <h1 className="mt-5 text-4xl">Esta página no está aquí.</h1>
        <p className="mt-5">
          El enlace puede haber cambiado. Puedes volver al catálogo para explorar los proyectos.
        </p>
        <Link href="/proyectos" className="button-primary mt-7">
          <ArrowLeft size={17} aria-hidden="true" /> Volver al catálogo
        </Link>
      </div>
    </main>
  );
}
