import React from 'react';
import { Globe, Layers, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { portfolioConfig } from '@/data/portfolio.config';

interface StatsSummaryProps {
  totalProjects: number;
  totalCategories: number;
}

export function StatsSummary({ totalProjects, totalCategories }: StatsSummaryProps) {
  const { owner } = portfolioConfig;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/90 via-zinc-900/40 to-zinc-950 p-6 sm:p-8 backdrop-blur-xl">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: Punchy title & purpose */}
        <div className="max-w-2xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>GitHub @juanxaviercasa</span>
            </span>
            <span className="text-xs text-zinc-500">·</span>
            <span className="text-xs font-mono text-zinc-400">
              38 Proyectos en Producción
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
            Directorio de Aplicaciones Web y Sitios Desplegados
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            {owner.tagline}
          </p>

          {/* Quick Domain Anchors */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="text-zinc-500 font-mono">Dominios activos:</span>
            <a
              href="https://todolima.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900/90 px-2.5 py-1 text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
            >
              <Globe className="h-3 w-3 text-emerald-400" />
              <span>todolima.com</span>
            </a>
            <a
              href="https://nubeparapymes.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900/90 px-2.5 py-1 text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
            >
              <Globe className="h-3 w-3 text-blue-400" />
              <span>nubeparapymes.online</span>
            </a>
            <a
              href="https://mundossimulados.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900/90 px-2.5 py-1 text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
            >
              <Globe className="h-3 w-3 text-purple-400" />
              <span>mundossimulados.online</span>
            </a>
          </div>
        </div>

        {/* Right: Metric Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="rounded-2xl border border-zinc-800/90 bg-zinc-950/60 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-zinc-400 text-xs mb-1">
              <Globe className="h-3.5 w-3.5 text-emerald-400" />
              <span>Despliegues</span>
            </div>
            <div className="text-2xl font-extrabold text-white font-mono">{totalProjects}</div>
            <div className="text-[11px] text-zinc-500">Subdominios activos</div>
          </div>

          <div className="rounded-2xl border border-zinc-800/90 bg-zinc-950/60 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-zinc-400 text-xs mb-1">
              <Layers className="h-3.5 w-3.5 text-blue-400" />
              <span>Categorías</span>
            </div>
            <div className="text-2xl font-extrabold text-white font-mono">{totalCategories}</div>
            <div className="text-[11px] text-zinc-500">PyMEs, EdTech, IA...</div>
          </div>

          <div className="col-span-2 sm:col-span-1 rounded-2xl border border-zinc-800/90 bg-zinc-950/60 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-zinc-400 text-xs mb-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>Estado</span>
            </div>
            <div className="text-2xl font-extrabold text-white font-mono">100%</div>
            <div className="text-[11px] text-zinc-500">Verificado en vivo</div>
          </div>
        </div>
      </div>
    </div>
  );
}
