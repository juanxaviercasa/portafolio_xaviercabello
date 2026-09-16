'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Eye, Github, Globe, Sparkles } from 'lucide-react';
import { Project } from '@/types/project';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Badge } from '@/components/ui/Badge';
import { getDisplayUrl } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  onPreviewClick?: (project: Project) => void;
}

/**
 * Tarjeta de Lanzamiento de Aplicación Web
 * - Si cuenta con dominio/subdominio personalizado, ofrece acceso directo al despliegue.
 * - Si está en desarrollo, dirige de forma segura al repositorio de GitHub como ruta de respaldo.
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
        {/* Card Header: Clickable Preview Image Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
          {/* Skeleton placeholder while loading */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 animate-pulse bg-zinc-800/60" />
          )}

          {/* Direct link on the image itself */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full w-full"
            title={isCustomDomain ? `Abrir aplicación: ${displayUrl}` : `Ver repositorio en GitHub`}
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

          {/* Subdomain Pill overlay on top-left */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-mono backdrop-blur-md transition-colors ${
              isCustomDomain
                ? 'border-emerald-500/40 bg-zinc-950/90 text-emerald-300 hover:border-emerald-400'
                : 'border-zinc-700/70 bg-zinc-950/90 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
            }`}
            title={isCustomDomain ? `Subdominio activo: https://${displayUrl}` : `Repositorio oficial en GitHub`}
          >
            <span className="relative flex h-2 w-2">
              {isCustomDomain ? (
                <>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </>
              ) : (
                <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-500" />
              )}
            </span>
            <span className="truncate max-w-[190px] font-semibold">{displayUrl}</span>
          </a>

          {/* Featured Badge if applicable */}
          {project.featured && (
            <div className="absolute right-3 top-3 z-10">
              <Badge variant="success" className="bg-emerald-950/80 font-semibold backdrop-blur-md">
                ★ Destacado
              </Badge>
            </div>
          )}

          {/* Quick Action Overlay on hover */}
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center gap-2 bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`pointer-events-auto flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold shadow-xl transition-all active:scale-95 ${
                isCustomDomain
                  ? 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400'
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}
            >
              <span>{isCustomDomain ? 'Abrir App' : 'Ver Repo'}</span>
              <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
            </a>

            {onPreviewClick && (
              <button
                type="button"
                onClick={() => onPreviewClick(project)}
                className="pointer-events-auto flex items-center gap-1.5 rounded-lg border border-white/20 bg-zinc-900/90 px-3 py-2 text-xs font-semibold text-white shadow-xl hover:bg-zinc-800 transition-colors"
                title="Vista previa rápida en ventana"
              >
                <Eye className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5">
          {/* Category & Status Row */}
          <div className="mb-2 flex items-center justify-between text-xs text-zinc-400">
            <span className="uppercase tracking-wider text-[11px] font-semibold text-emerald-400">
              {project.category}
            </span>
            {project.year && <span className="font-mono text-zinc-500">{project.year}</span>}
          </div>

          {/* Project Title (Direct link to destination) */}
          <h3 className="text-lg font-bold tracking-tight text-zinc-100 transition-colors group-hover:text-emerald-400">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus:underline"
              title={isCustomDomain ? `Lanzar: ${project.title}` : `Ver en GitHub: ${project.title}`}
            >
              {project.title}
            </a>
          </h3>

          {/* Project Description */}
          <p className="mt-2 line-clamp-2 text-sm text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          {/* Tags List */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-[11px] hover:border-zinc-700">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Metrics / Host Badge if available */}
          {project.metrics && (
            <div className="mt-3 flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>{project.metrics}</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: Fast App Launcher / Fallback */}
      <div className="border-t border-zinc-800/80 p-4 pt-3 flex items-center justify-between gap-3 bg-zinc-950/40">
        {/* Subtle source code icon if different from primary destination */}
        {isCustomDomain && project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900/60 p-2 text-xs font-medium text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200"
            title="Ver código fuente en GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        ) : (
          <span className="text-xs text-zinc-600 flex items-center gap-1">
            <Globe className="h-3.5 w-3.5" />
          </span>
        )}

        {/* PRIMARY CTA: Custom Subdomain vs Safe GitHub Fallback */}
        {isCustomDomain ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-zinc-950 shadow-md shadow-emerald-500/15 transition-all duration-200 hover:bg-emerald-400 hover:shadow-emerald-500/30 active:scale-[0.98]"
          >
            <span>Lanzar Aplicación</span>
            <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
          </a>
        ) : (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-xs font-semibold text-zinc-300 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white active:scale-[0.98]"
            title="Ruta de respaldo: Repositorio en GitHub"
          >
            <Github className="h-3.5 w-3.5" />
            <span>Ver en GitHub</span>
            <ExternalLink className="h-3 w-3 stroke-[2] opacity-60" />
          </a>
        )}
      </div>
    </SpotlightCard>
  );
}
