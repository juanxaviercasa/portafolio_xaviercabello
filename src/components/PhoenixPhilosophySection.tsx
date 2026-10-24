import React from 'react';
import Image from 'next/image';
import { Flame, ShieldCheck, Cpu, Sparkles, RefreshCw, Compass } from 'lucide-react';
import { assetPath } from '@/lib/utils';

const PRINCIPLES = [
  {
    number: '01',
    title: 'Mente Alfa & Rigor',
    subtitle: 'Claridad matemática antes de programar',
    icon: Compass,
    description:
      'Cada sistema nace en estado de enfoque profundo: modelo primero la lógica matemática o comercial y luego escribo código limpio, tipado y exacto.',
    highlight: 'Cero improvisación, 100% precisión.',
    accent: 'border-orange-300 dark:border-amber-400/50 text-orange-600 dark:text-amber-300',
  },
  {
    number: '02',
    title: 'Efecto Vaca Púrpura',
    subtitle: 'Ser único o ser invisible (Seth Godin)',
    icon: Sparkles,
    description:
      'Rechazo las plantillas corporativas aburridas y genéricas. Cada interfaz que construyo posee identidad magnética, personalidad y alto valor percibido.',
    highlight: 'Distingue tu marca desde el primer segundo.',
    accent: 'border-purple-300 dark:border-purple-400/50 text-purple-600 dark:text-purple-200',
  },
  {
    number: '03',
    title: 'Fluidez Pedagógica',
    subtitle: 'La mejor UI no requiere explicación',
    icon: Cpu,
    description:
      'Años de docencia universitaria y preuniversitaria me dieron un superpoder: si un usuario necesita un manual para usar una app, el error es del arquitecto.',
    highlight: 'Fricción cognitiva reducida a cero.',
    accent: 'border-amber-300 dark:border-amber-400/50 text-amber-600 dark:text-amber-300',
  },
  {
    number: '04',
    title: 'Fuego del Fénix 357',
    subtitle: 'Temple estoico y renacimiento continuo',
    icon: RefreshCw,
    description:
      'El obstáculo es el camino. Audito, refactorizo sin apego y reconstruyo cada sistema hasta que sea indestructible, rápido y económicamente soberano ($0/mes).',
    highlight: 'Evolución y resiliencia sin límites.',
    accent: 'border-orange-400 dark:border-orange-400/60 text-orange-600 dark:text-orange-300',
  },
];

export function PhoenixPhilosophySection() {
  return (
    <section
      id="filosofia"
      aria-labelledby="philosophy-title"
      className="relative overflow-hidden rounded-[2rem] border-2 border-orange-300/85 dark:border-orange-400/50 bg-gradient-to-br from-[#fffaf2] via-orange-50/55 to-purple-50/55 dark:from-[#31185a] dark:via-[#411d66] dark:to-[#57214d] p-6 sm:p-8 lg:p-11 shadow-bevel-elevated"
    >
      {/* Resplandor Solar Naranja & Amatista */}
      <div
        className="absolute -top-28 -right-28 h-96 w-96 rounded-full bg-gradient-to-br from-orange-500/25 to-amber-400/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-28 -left-28 h-96 w-96 rounded-full bg-gradient-to-tr from-purple-500/25 to-orange-500/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-8 sm:space-y-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-orange-300/60 dark:border-orange-400/35 pb-6 sm:pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/60 bg-orange-500/15 dark:bg-orange-500/25 px-4 py-1 text-xs font-mono font-extrabold text-orange-900 dark:text-amber-200 shadow-sm backdrop-blur-md">
              <Flame className="h-4 w-4 text-orange-500 dark:text-amber-300 animate-pulse" />
              <span>04 / FILOSOFÍA FÉNIX · ESTOICISMO &amp; VACA PÚRPURA</span>
            </div>
            <h2
              id="philosophy-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white"
            >
              Lo Ordinario se Olvida.{' '}
              <span className="text-phoenix-gradient">Lo Extraordinario Trasciende.</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-800 dark:text-amber-50/95 leading-relaxed font-medium">
              Mi sello une cuatro fuerzas: la calma estoica ante los retos, el enfoque mental en
              frecuencia Alfa, la audacia de la Vaca Púrpura y el fuego renovador del Ave Fénix.
            </p>
          </div>

          <div className="rounded-2xl border border-orange-300/80 dark:border-amber-400/45 bg-white/90 dark:bg-[#3d206b]/90 p-4 backdrop-blur-md max-w-sm shadow-sm">
            <p className="text-xs sm:text-sm text-purple-950 dark:text-amber-100 italic font-medium leading-relaxed">
              &ldquo;Cuando combinas alta vibración creativa con disciplina matemática, tus proyectos dejan de competir: crean su propia categoría.&rdquo;
            </p>
            <span className="block mt-2 text-[11px] font-mono font-extrabold text-orange-700 dark:text-amber-300">
              — Xavier Cabello (Fénix 357)
            </span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRINCIPLES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-orange-300/80 dark:border-orange-400/40 bg-white/95 dark:bg-[#391e68]/95 p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-orange-500 dark:hover:border-amber-300 backdrop-blur-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-orange-500 dark:text-amber-300">
                      {item.number}
                    </span>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border bg-orange-50/80 dark:bg-[#49257d] ${item.accent}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-orange-700 dark:text-amber-200/90 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-amber-50/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-orange-200/70 dark:border-purple-400/30">
                  <span className="text-[11px] font-mono font-extrabold text-orange-700 dark:text-amber-300 flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
                    <span>{item.highlight}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Showcase Cinematográfico 3D: El Renacimiento del Fénix 357 */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-amber-400/60 bg-gradient-to-br from-[#271249] via-[#371960] to-[#4e1c4b] p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Reproductor de Video 3D Cinematográfico */}
            <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-amber-300/60 shadow-[0_0_35px_rgba(249,115,22,0.35)] group bg-[#1e0f38]">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={assetPath('/images/phoenix-rising-poster.webp')}
                className="h-full w-full object-cover object-center filter saturate-[1.5] brightness-110 contrast-110 group-hover:scale-105 transition-transform duration-700"
                aria-label="Obra visual en 3D del Ave Fénix emergiendo de brasas incandescentes con plumaje áureo hacia el cosmos"
              >
                <source src={assetPath('/videos/phoenix-rising.mp4')} type="video/mp4" media="(min-width: 769px)" />
                <source src={assetPath('/videos/phoenix-rising-720p.mp4')} type="video/mp4" media="(max-width: 768px)" />
                <source src={assetPath('/videos/phoenix-rising.mp4')} type="video/mp4" />
                <Image
                  src={assetPath('/images/phoenix-rising-poster.webp')}
                  alt="Ave Fénix 357 Resurgiendo de las Cenizas"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#200e3a]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-lg border border-amber-300/60 bg-[#28134d]/90 px-3 py-1 font-mono text-[11px] font-bold text-amber-200 backdrop-blur-md">
                <Flame className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                <span>Renacimiento Fénix 357 · Video 3D en Vivo</span>
              </div>
            </div>

            {/* Manifiesto Explicativo de la Filosofía */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/60 bg-amber-500/20 px-3 py-1 font-mono text-xs font-extrabold text-amber-200">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <span>EL OBSTÁCULO ES EL COMBUSTIBLE</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                De las Cenizas al Fuego:{' '}
                <span className="text-phoenix-gradient">Resiliencia &amp; Soberanía Técnica</span>
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-amber-50/90 leading-relaxed font-medium">
                En el desarrollo de software y la ingeniería moderna, los desafíos más complejos no se evitan: se deconstruyen con rigor matemático y se reconstruyen con arquitectura inquebrantable. Cada crisis técnica es la semilla de un sistema 10 veces más rápido, seguro y rentable.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl border border-orange-300/40 bg-purple-950/60 p-3 backdrop-blur-sm">
                  <p className="font-mono text-xs font-extrabold text-amber-300">Nube a $0 / mes</p>
                  <p className="text-[11px] text-amber-100/80 mt-0.5">Soberanía de infraestructura en Cloudflare &amp; Edge</p>
                </div>
                <div className="rounded-xl border border-orange-300/40 bg-purple-950/60 p-3 backdrop-blur-sm">
                  <p className="font-mono text-xs font-extrabold text-amber-300">Vaca Púrpura</p>
                  <p className="text-[11px] text-amber-100/80 mt-0.5">Diferenciación estética y funcionalidad memorable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
