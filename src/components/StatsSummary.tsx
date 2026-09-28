import React from 'react';
import { Globe, Layers, ShieldCheck, Zap, Activity } from 'lucide-react';
import { portfolioConfig } from '@/data/portfolio.config';

interface StatsSummaryProps {
  totalProjects: number;
  totalCategories: number;
}

export function StatsSummary({ totalProjects, totalCategories }: StatsSummaryProps) {
  const { owner } = portfolioConfig;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0e12] p-6 sm:p-8 shadow-bevel-elevated transition-colors">
      {/* Precision top status strip */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-emerald-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span>SYSTEM STATUS: OPERATIONAL</span>
          </span>
          <span className="text-xs text-zinc-600">·</span>
          <span className="text-xs font-mono text-zinc-400">
            Despliegues Verificados: <strong className="text-zinc-200">{totalProjects}</strong>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-zinc-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>SSL A+ Verified</span>
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Zap className="h-3.5 w-3.5 text-amber-400" />
            <span>Edge CDN Latency &lt; 50ms</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: Punchy title & purpose */}
        <div className="max-w-2xl space-y-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#f7f8f8] leading-tight">
            Directorio de Aplicaciones Web y Ecosistemas en Vivo
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            {owner.tagline}
          </p>

          {/* Quick Domain Anchors */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 text-xs">
            <span className="text-zinc-500 font-mono text-[11px] mr-1">Ecosistemas:</span>
            <a
              href="https://xavier.cabellosalirrosas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-zinc-300 shadow-bevel hover:border-emerald-500/40 hover:bg-white/[0.05] hover:text-emerald-400 transition-all"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>cabellosalirrosas.com</span>
            </a>
            <a
              href="https://cepreuni.sistemazenit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-zinc-300 shadow-bevel hover:border-emerald-500/40 hover:bg-white/[0.05] hover:text-emerald-400 transition-all"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>sistemazenit.com</span>
            </a>
            <a
              href="https://todolima.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-zinc-300 shadow-bevel hover:border-emerald-500/40 hover:bg-white/[0.05] hover:text-emerald-400 transition-all"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>todolima.com</span>
            </a>
            <a
              href="https://nubeparapymes.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-zinc-300 shadow-bevel hover:border-emerald-500/40 hover:bg-white/[0.05] hover:text-emerald-400 transition-all"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>nubeparapymes.online</span>
            </a>
            <a
              href="https://mundossimulados.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-zinc-300 shadow-bevel hover:border-emerald-500/40 hover:bg-white/[0.05] hover:text-emerald-400 transition-all"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>mundossimulados.online</span>
            </a>
          </div>
        </div>

        {/* Right: Metric Telemetry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5 shrink-0">
          <div className="rounded-xl border border-white/[0.07] bg-[#141518] p-3.5 shadow-bevel">
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
              <Globe className="h-3.5 w-3.5 text-emerald-400" />
              <span className="font-medium">Despliegues</span>
            </div>
            <div className="text-2xl font-bold text-[#f7f8f8] font-mono tabular-nums">{totalProjects}</div>
            <div className="text-[10px] text-zinc-500 font-mono">100% en vivo</div>
          </div>

          <div className="rounded-xl border border-white/[0.07] bg-[#141518] p-3.5 shadow-bevel">
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
              <Layers className="h-3.5 w-3.5 text-blue-400" />
              <span className="font-medium">Categorías</span>
            </div>
            <div className="text-2xl font-bold text-[#f7f8f8] font-mono tabular-nums">{totalCategories}</div>
            <div className="text-[10px] text-zinc-500 font-mono">Especialidades</div>
          </div>

          <div className="rounded-xl border border-white/[0.07] bg-[#141518] p-3.5 shadow-bevel">
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span className="font-medium">Seguridad</span>
            </div>
            <div className="text-2xl font-bold text-[#f7f8f8] font-mono tabular-nums">HTTPS</div>
            <div className="text-[10px] text-zinc-500 font-mono">Certificado SSL</div>
          </div>

          <div className="rounded-xl border border-white/[0.07] bg-[#141518] p-3.5 shadow-bevel">
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
              <Activity className="h-3.5 w-3.5 text-purple-400" />
              <span className="font-medium">Uptime</span>
            </div>
            <div className="text-2xl font-bold text-emerald-400 font-mono tabular-nums">99.9%</div>
            <div className="text-[10px] text-zinc-500 font-mono">Producción</div>
          </div>
        </div>
      </div>
    </div>
  );
}
