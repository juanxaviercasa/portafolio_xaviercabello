'use client';

import { ArrowRight, MapPin } from 'lucide-react';
import { portfolioConfig } from '@/data/portfolio.config';
import { Phoenix3DScene } from '@/components/Phoenix3DScene';

interface StatsSummaryProps {
  totalProjects: number;
  totalCategories?: number;
}

/**
 * Hero principal: propuesta clara, métricas verificables y escenario 3D cinematográfico en 16:9.
 * La secuencia visual del Ave Fénix corre en bucle sin recortes (cenizas -> vuelo cósmico).
 */
export function StatsSummary({ totalProjects }: StatsSummaryProps) {
  const { owner } = portfolioConfig;

  const proof = [
    { value: `${totalProjects}`, label: 'proyectos en el portafolio' },
    { value: 'Educación', label: 'experiencia docente aplicada' },
    { value: 'IA aplicada', label: 'al desarrollo de productos' },
  ];

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="hero-stage-3d relative overflow-hidden rounded-[2rem] border-2 border-orange-400/75 p-6 sm:p-8 lg:p-10 shadow-bevel-elevated"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Columna Izquierda: Mensaje, llamada a la acción y métricas */}
        <div className="space-y-5 sm:space-y-6 lg:col-span-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-violet-300/70 bg-white/75 px-3.5 py-1.5 font-mono text-xs font-bold text-violet-900 backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5 text-violet-600" aria-hidden="true" />
            Instructor de vibecoding con IA · Lima, Perú
          </p>

          <h1
            id="hero-title"
            className="text-3xl font-black leading-[1.12] tracking-tight text-indigo-950 sm:text-4xl xl:text-5xl"
          >
            Aprende a convertir ideas en software{' '}
            <span className="text-phoenix-gradient">con IA, criterio y práctica.</span>
          </h1>

          <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-700">
            Soy Xavier Cabello, desarrollador full stack y licenciado en Educación Matemática.
            Creo plataformas educativas, simuladores y herramientas para negocios con IA aplicada.
            Enseño el proceso: definir el problema, construir con IA, revisar el código y publicar. Explora mis proyectos para conocer qué puedes aprender conmigo.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a href="#catalogo" className="button-primary">
              <span>Explorar proyectos</span>
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              href="#formacion"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-300/80 bg-white/80 px-5 py-3 text-sm font-extrabold text-violet-950 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-amber-300 shadow-sm"
            >
              Conocer el taller
            </a>
          </div>

          <ul className="grid grid-cols-3 gap-3 border-t border-violet-300/60 pt-5">
            {proof.map((item) => (
              <li key={item.label}>
                <p className="font-mono text-xl sm:text-2xl font-black text-indigo-950">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] sm:text-xs text-violet-800 leading-tight">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna Derecha: Escenario Cinemático Ave Fénix con Espacio Flotante Seguro */}
        <div className="lg:col-span-7 xl:col-span-7 flex items-center justify-center p-1 sm:p-3 lg:p-5">
          <div className="w-full max-w-[640px] mx-auto">
            <Phoenix3DScene />
          </div>
        </div>
      </div>
    </section>
  );
}
