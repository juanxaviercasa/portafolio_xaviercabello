import React from 'react';
import Image from 'next/image';
import { Sparkles, Compass, Cpu, Cloud, Mail, ArrowRight, Flame } from 'lucide-react';
import { portfolioConfig } from '@/data/portfolio.config';
import { PROJECTS_DATA } from '@/data/projects';

export function InstructorSection() {
  const { owner } = portfolioConfig;

  return (
    <section
      aria-labelledby="instructor-heading"
      className="relative overflow-hidden rounded-3xl border border-purple-200/60 dark:border-purple-800/40 bg-white/90 dark:bg-[#0d0722] p-6 sm:p-10 shadow-bevel-elevated transition-colors"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Mentor Profile Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border-2 border-purple-400/40 dark:border-amber-400/50 bg-purple-100 dark:bg-[#150c2e] shadow-bevel">
              <Image
                src="https://github.com/juanxaviercasa.png"
                alt={owner.name}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-500/30 px-3 py-1 text-xs sm:text-sm font-mono text-purple-800 dark:text-amber-300 font-bold">
                <Flame className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
                <span>Instructor · Taller Fénix</span>
              </span>
              <h2 id="instructor-heading" className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-[#fdf4ff] mt-1.5">
                {owner.name}
              </h2>
              <p className="text-sm sm:text-base text-purple-700 dark:text-purple-300 font-semibold">
                Profesor de matemáticas & desarrollador web
              </p>
            </div>
          </div>

          <p className="text-base text-slate-700 dark:text-purple-100 leading-relaxed font-medium">
            Sé exactamente lo que se siente tener una idea bloqueada por meses, esperando a que alguien más la programe o pagando hosting mensual por páginas que casi no tocas.
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-purple-300/90 leading-relaxed font-normal">
            Cada una de las aplicaciones de este portafolio fue desarrollada con asistencia de IA y publicada en la nube sin costo de servidores. Mi objetivo pedagógico es enseñarte a replicar este mismo flujo de trabajo con tus propias ideas y proyectos, bajo la templanza estoica y el poder creador de la mente enfocada.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            {owner.socials.email && (
              <a
                href={owner.socials.email}
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-amber-500 px-6 py-3 text-sm sm:text-base font-extrabold text-white shadow-bevel transition-all hover:brightness-110 active:scale-95"
              >
                <Mail className="h-4.5 w-4.5" />
                <span>Escríbeme una consulta</span>
              </a>
            )}
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 rounded-2xl border border-purple-200/80 dark:border-purple-800/40 bg-white/90 dark:bg-purple-950/30 px-5 py-3 text-sm sm:text-base font-bold text-purple-950 dark:text-purple-200 shadow-bevel transition-all hover:border-purple-400 hover:text-purple-950 dark:hover:text-white"
            >
              <span>Ver las {PROJECTS_DATA.length} aplicaciones</span>
              <ArrowRight className="h-4.5 w-4.5 text-amber-500" />
            </a>
          </div>
        </div>

        {/* 3-Step Practical Methodology Column */}
        <div className="lg:col-span-7 rounded-2xl border border-purple-200/70 dark:border-purple-800/30 bg-purple-50/50 dark:bg-[#120a2a]/80 p-6 sm:p-7 space-y-5 transition-colors">
          <div className="border-b border-purple-200/70 dark:border-purple-800/30 pb-3.5">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-purple-700 dark:text-amber-400 font-extrabold">
              El Método de 3 Pasos
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-[#fdf4ff] mt-1">
              Cómo se construyó cada proyecto de este catálogo
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            {/* Step 1 */}
            <div className="rounded-2xl border border-purple-200/80 dark:border-purple-800/40 bg-white/95 dark:bg-[#150c2e] p-4 space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-purple-100 dark:bg-purple-900/40 px-2.5 py-1 font-mono text-xs font-bold text-purple-800 dark:text-purple-300">
                  PASO 1
                </span>
                <Compass className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Define con claridad</h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-purple-200/90 leading-relaxed">
                Antes de pedirle nada a la IA, defines exactamente qué problema resuelve la web, para quién es y su estructura de contenido.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-amber-300/80 dark:border-amber-500/40 bg-white/95 dark:bg-[#150c2e] p-4 space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-amber-100 dark:bg-amber-950/40 px-2.5 py-1 font-mono text-xs font-bold text-amber-800 dark:text-amber-300">
                  PASO 2
                </span>
                <Cpu className="h-5 w-5 text-amber-500" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Construye con IA</h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-purple-200/90 leading-relaxed">
                Le das instrucciones precisas en español. Revisas el resultado visual en tiempo real e iteras hasta que responda perfecto en móvil.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-purple-200/80 dark:border-purple-800/40 bg-white/95 dark:bg-[#150c2e] p-4 space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-purple-100 dark:bg-purple-900/40 px-2.5 py-1 font-mono text-xs font-bold text-purple-800 dark:text-purple-300">
                  PASO 3
                </span>
                <Sparkles className="h-5 w-5 text-amber-400" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Publica sin costo</h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-purple-200/90 leading-relaxed">
                Despliegas en Cloudflare Pages, Vercel o GitHub a $0/mes, obteniendo tu URL pública y control total sin intermediarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
