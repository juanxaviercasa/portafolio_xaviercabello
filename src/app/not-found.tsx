import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function NotFound() {
  return <main id="contenido" className="page-width py-24"><div className="detail-block mx-auto max-w-xl text-center"><p className="eyebrow justify-center">404 / PÁGINA NO ENCONTRADA</p><h1 className="mt-5 text-4xl">Esta página no está aquí.</h1><p className="mt-5">El enlace puede haber cambiado. Puedes volver al catálogo para explorar los proyectos.</p><Link href="/#catalogo" className="button-primary mt-7"><ArrowLeft size={17} aria-hidden="true" /> Volver al catálogo</Link></div></main>;
}
