'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Eye, Github, Globe, Lock, Sparkles } from 'lucide-react';
import { Project } from '@/types/project';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Badge } from '@/components/ui/Badge';
import { getDisplayUrl } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  onPreviewClick?: (project: Project) => void;
}

/**
  * Tarjeta de Lanzamiento de Aplicación Web (Open Design Linear Specification)
  * Chrome de navegador, indicador SSL en vivo, tipografía de alta precisión y micro-interacciones.
  */
export function ProjectCard({ project, onPreviewClick }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isCustomDomain = !project.liveUrl.includes('github.com');
  const displayUrl = isCustomDomain
    ? getDisplayUrl(project.liveUrl)
    : `github.com/juanxaviercasa/${project.id}`;

  return (
    <SpotlightCard className="group flex h-full flex-col justify-between">
      <div>
        {/* Browser Chrome Header (Open Design Signature Viewport) */}
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0d0e11] px-3.5 py-2">
          {/* Traffic light dots */}
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/[0.12] group-hover:bg-red-500/80 transition-colors" />
            <span className="h-2 w-2 rounded-full bg-white/[0.12] group-hover:bg-amber-500/80 transition-colors" />
            <span className="h-2 w-2 rounded-full bg-white/[0.12] group-hover:bg-emerald-500/80 transition-colors" />
          </div>

          {/* Subdomain address bar with SSL lock */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded border border-white/[0.06] bg-black/40 px-2 py-0.5 font-mono text-[10px] text-zinc-400 transition-colors hover:border-emerald-500/40 hover:text-emerald-400 truncate max-w-[200px]"
            title={`Abrir https://${displayUrl}`}
          >
            <Lock className="h-2.5 w-2.5 text-emerald-400 shrink-0" />
            <span className="truncate">{displayUrl}</span>
          </a>

          {/* Live Ping Indicator */}
          <div className="flex items-center gap-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
          </div>
        </div>

        {/* Card Header: Clickable Preview Image Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#08090a]">
          {/* Skeleton placeholder while loading */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 animate-pulse bg-white/[0.03]" />
          )}

          {/* Direct link on the image itself */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full w-full"
            title={`Abrir aplicación: ${displayUrl}`}
          >
            <Image
              src={imageError ? '/placeholders/project-mockup.svg' : project.image}
              alt={`Captura de ${project.title}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className={`object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setImageError(true);
                setImageLoaded(true);
              }}
            />
          </a>

          {/* Featured Badge if applicable */}
          {project.featured && (
            <div className="absolute right-2.5 top-2.5 z-10">
              <Badge variant="success" className="bg-[#08090a]/90 font-mono text-[10px] backdrop-blur-md border-emerald-500/40">
                ★ Destacado
              </Badge>
            </div>
          )}

          {/* Quick Action Overlay on hover */}
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center gap-2 bg-black/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-1.5 text-xs font-bold text-[#08090a] shadow-bevel transition-all hover:bg-emerald-400 active:scale-95"
            >
              <span>Abrir App</span>
              <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
            </a>

            {onPreviewClick && (
              <button
                type="button"
                onClick={() => onPreviewClick(project)}
                className="pointer-events-auto flex items-center gap-1.5 rounded-lg border border-white/[0.15] bg-[#121316]/90 px-3 py-1.5 text-xs font-semibold text-[#f7f8f8] shadow-bevel hover:bg-white/[0.1] transition-colors"
                title="Vista previa rápida en ventana"
              >
                <Eye className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5">
          {/* Category & Status Row */}
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-emerald-400">
              {project.category}
            </span>
            {project.year && (
              <span className="font-mono text-[11px] text-zinc-500 tabular-nums">
                {project.year}
              </span>
            )}
          </div>

          {/* Project Title (Direct link to destination) */}
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#f7f8f8] transition-colors group-hover:text-emerald-400">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus:underline"
              title={`Lanzar: ${project.title}`}
            >
              {project.title}
            </a>
          </h3>

          {/* Project Description */}
          <p className="mt-2 line-clamp-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          {/* Tags List */}
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="outline" className="text-[10px]">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <span className="inline-flex items-center text-[10px] font-mono text-zinc-500 self-center">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Metrics / Host Badge if available */}
          {project.metrics && (
            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{project.metrics}</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: Fast App Launcher / Fallback */}
      <div className="border-t border-white/[0.06] p-3.5 flex items-center justify-between gap-2.5 bg-[#0e0f12]">
        {/* Subtle source code icon if available */}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.02] p-2 text-xs font-medium text-zinc-400 shadow-bevel transition-all hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-[#f7f8f8]"
            title="Ver código fuente en GitHub"
          >
            <Github className="h-3.5 w-3.5" />
          </a>
        ) : (
          <span className="p-2 text-zinc-600 flex items-center">
            <Globe className="h-3.5 w-3.5" />
          </span>
        )}

        {/* PRIMARY CTA: Custom Subdomain Direct Launcher */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-2 text-xs font-bold text-[#08090a] shadow-bevel transition-all duration-150 hover:bg-emerald-400 active:scale-[0.98]"
        >
          <span>Lanzar Aplicación</span>
          <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
        </a>
      </div>
    </SpotlightCard>
  );
}
