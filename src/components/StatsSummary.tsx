'use client';

import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { portfolioConfig } from '@/data/portfolio.config';
import { Phoenix3DScene } from '@/components/Phoenix3DScene';

interface StatsSummaryProps {
  totalProjects: number;
}

/** Hero principal: propuesta clara, métricas verificables y escenario 3D bajo demanda. */
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
      className="hero-stage-3d relative overflow-hidden rounded-[2rem] border-2 border-orange-400/75 p-6 shadow-bevel-elevated sm:p-8 lg:p-10"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
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

          <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
            Soy {owner.name}, desarrollador full stack y licenciado en Educación Matemática. Creo
            plataformas educativas, simuladores y herramientas para negocios con IA aplicada. Enseño
            el proceso: definir el problema, construir, revisar el código y publicar.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link href="/proyectos" className="button-primary">
              <span>Explorar proyectos</span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a
              href={portfolioConfig.training.url}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-violet-300/80 bg-white/80 px-5 py-3 text-sm font-extrabold text-violet-950 shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-amber-300"
            >
              Conocer el taller
            </a>
          </div>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-violet-300/60 pt-5 sm:grid-cols-3 sm:gap-3">
            {proof.map((item) => (
              <li key={item.label}>
                <p className="font-mono text-lg font-black leading-tight tracking-tight text-indigo-950 sm:text-2xl">{item.value}</p>
                <p className="mt-1 text-[11px] leading-tight text-violet-800 sm:text-xs">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center p-1 sm:p-3 lg:col-span-7 lg:p-5">
          <div className="mx-auto w-full max-w-[640px]">
            <Phoenix3DScene />
          </div>
        </div>
      </div>
    </section>
  );
}
