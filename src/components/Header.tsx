import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, ExternalLink, Flame } from 'lucide-react';
import { portfolioConfig } from '@/data/portfolio.config';
import { PROJECTS_DATA } from '@/data/projects';

export function Header() {
  const { owner } = portfolioConfig;

  return (
    <header className="border-b border-white/[0.08] bg-[#08090a]/85 backdrop-blur-xl sticky top-0 z-40 transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand & Author with GitHub Avatar */}
        <div className="flex items-center gap-3.5">
          <a
            href={owner.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-xl border border-white/[0.12] bg-[#141518] shadow-bevel transition-transform duration-200 hover:scale-105 active:scale-95"
            title="Ver perfil de GitHub @juanxaviercasa"
          >
            <Image
              src="https://github.com/juanxaviercasa.png"
              alt={owner.name}
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
          </a>

          <div>
            <div className="flex items-center gap-2">
              <a
                href={owner.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-bold tracking-tight text-[#f7f8f8] hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <span>{owner.name}</span>
                <span className="text-xs font-mono font-normal text-zinc-500">@juanxaviercasa</span>
              </a>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 text-[11px] font-mono text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span>{PROJECTS_DATA.length} Despliegues en Vivo</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 truncate max-w-[260px] sm:max-w-md">
              {owner.role}
            </p>
          </div>
        </div>

        {/* Action & Social Links (Open Design Linear Button Styles) */}
        <div className="flex items-center gap-2">
          {owner.socials.github && (
            <a
              href={owner.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300 shadow-bevel transition-all duration-150 hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-[#f7f8f8] active:scale-95"
              title="GitHub juanxaviercasa"
            >
              <Github className="h-3.5 w-3.5 text-[#f7f8f8]" />
              <span className="hidden md:inline font-mono">GitHub</span>
            </a>
          )}
          {owner.socials.linkedin && (
            <a
              href={owner.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 text-zinc-400 shadow-bevel transition-all duration-150 hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-[#f7f8f8] active:scale-95"
              title="LinkedIn"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          )}
          {owner.socials.tiktok && (
            <a
              href={owner.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 text-zinc-400 shadow-bevel transition-all duration-150 hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-purple-300 active:scale-95"
              title="TikTok @sistemazenit"
            >
              <Flame className="h-3.5 w-3.5 text-purple-400" />
            </a>
          )}
          {owner.socials.email && (
            <a
              href={owner.socials.email}
              className="hidden sm:flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-[#08090a] shadow-bevel transition-all duration-150 hover:bg-emerald-400 active:scale-95"
              title="Contacto Directo"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Contactar</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
