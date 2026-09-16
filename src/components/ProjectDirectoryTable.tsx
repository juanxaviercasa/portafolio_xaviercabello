'use client';

import React from 'react';
import { ExternalLink, Github, Eye, Globe } from 'lucide-react';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/Badge';
import { getDisplayUrl } from '@/lib/utils';

interface ProjectDirectoryTableProps {
  projects: Project[];
  onPreviewClick?: (project: Project) => void;
}

/**
 * Vista de Directorio Compacto / Tabla de Archivo
 * Extraído y adaptado de las mejores prácticas de bchiang7/v4 (Brittany Chiang)
 */
export function ProjectDirectoryTable({
  projects,
  onPreviewClick,
}: ProjectDirectoryTableProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-800 p-12 text-center text-zinc-500">
        No se encontraron proyectos en esta vista con los filtros seleccionados.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm">
      <table className="w-full text-left text-sm text-zinc-300">
        <thead className="border-b border-zinc-800 bg-zinc-950/70 text-xs font-semibold uppercase tracking-wider text-zinc-400">
          <tr>
            <th scope="col" className="py-4 pl-6 pr-3 font-mono">Año</th>
            <th scope="col" className="px-4 py-4">Proyecto / Subdominio</th>
            <th scope="col" className="hidden sm:table-cell px-4 py-4">Categoría</th>
            <th scope="col" className="hidden md:table-cell px-4 py-4">Stack Tecnológico</th>
            <th scope="col" className="py-4 pl-3 pr-6 text-right">Destino</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800/60 font-normal">
          {projects.map((project) => {
            const isCustomDomain = !project.liveUrl.includes('github.com');
            const displayUrl = isCustomDomain
              ? getDisplayUrl(project.liveUrl)
              : `github.com/juanxaviercasa/${project.id}`;

            return (
              <tr
                key={project.id}
                className="group transition-colors hover:bg-zinc-800/30"
              >
                {/* Year */}
                <td className="whitespace-nowrap py-4 pl-6 pr-3 font-mono text-xs text-zinc-500">
                  {project.year ?? '—'}
                </td>

                {/* Title & Subdomain */}
                <td className="px-4 py-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-zinc-100 hover:text-emerald-400 transition-colors block"
                    title={isCustomDomain ? `Lanzar ${project.title}` : `Ver en GitHub: ${project.title}`}
                  >
                    {project.title}
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-mono mt-0.5 transition-colors ${
                      isCustomDomain
                        ? 'text-emerald-400 hover:underline'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isCustomDomain ? 'bg-emerald-500' : 'bg-zinc-500'
                      }`}
                    />
                    <span>{displayUrl}</span>
                  </a>
                </td>

                {/* Category */}
                <td className="hidden sm:table-cell px-4 py-4">
                  <span className="inline-block rounded-md bg-zinc-800/80 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-zinc-300">
                    {project.category}
                  </span>
                </td>

                {/* Tech Badges */}
                <td className="hidden md:table-cell px-4 py-4">
                  <div className="flex flex-wrap gap-1 max-w-sm">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-zinc-800/50 px-1.5 py-0.5 text-[11px] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>

                {/* Action Links */}
                <td className="whitespace-nowrap py-4 pl-3 pr-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    {onPreviewClick && isCustomDomain && (
                      <button
                        type="button"
                        onClick={() => onPreviewClick(project)}
                        className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                        title="Vista previa rápida"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    )}

                    {isCustomDomain ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-1.5 text-xs font-bold text-zinc-950 hover:bg-emerald-400 transition-colors shadow-sm"
                        title={`Lanzar ${project.title}`}
                      >
                        <span>Lanzar App</span>
                        <ExternalLink className="h-3 w-3 stroke-[2.5]" />
                      </a>
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
                        title="Ruta de respaldo: Ver en GitHub"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>GitHub</span>
                        <ExternalLink className="h-3 w-3 opacity-60" />
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
