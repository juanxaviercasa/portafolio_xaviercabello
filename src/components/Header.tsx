import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, ExternalLink, Flame } from 'lucide-react';
import { portfolioConfig } from '@/data/portfolio.config';

export function Header() {
  const { owner } = portfolioConfig;

  return (
    <header className="border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand & Author with GitHub Avatar */}
        <div className="flex items-center gap-3.5">
          <a
            href={owner.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 transition-transform duration-200 hover:scale-105"
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
                className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <span>{owner.name}</span>
                <span className="text-xs font-mono font-normal text-zinc-500">@juanxaviercasa</span>
              </a>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[11px] font-mono text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>38+ Proyectos</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 truncate max-w-[280px] sm:max-w-md">
              {owner.role}
            </p>
          </div>
        </div>

        {/* Action & Social Links */}
        <div className="flex items-center gap-2.5">
          {owner.socials.github && (
            <a
              href={owner.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
              title="GitHub juanxaviercasa"
            >
              <Github className="h-4 w-4 text-white" />
              <span className="hidden md:inline font-mono">GitHub</span>
            </a>
          )}
          {owner.socials.linkedin && (
            <a
              href={owner.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-2 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {owner.socials.tiktok && (
            <a
              href={owner.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-2 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white"
              title="TikTok @academiazenit"
            >
              <Flame className="h-4 w-4 text-purple-400" />
            </a>
          )}
          {owner.socials.email && (
            <a
              href={owner.socials.email}
              className="hidden sm:flex items-center gap-1.5 rounded-xl bg-emerald-500 px-3.5 py-2 text-xs font-semibold text-zinc-950 shadow-md shadow-emerald-500/10 hover:bg-emerald-400 transition-colors"
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
