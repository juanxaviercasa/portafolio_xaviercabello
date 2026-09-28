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
    <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0d0e11] shadow-bevel">
      <table className="w-full text-left text-sm text-zinc-300">
        <thead className="border-b border-white/[0.08] bg-[#121316] text-[11px] font-mono uppercase tracking-wider text-zinc-400">
          <tr>
            <th scope="col" className="py-3.5 pl-6 pr-3 font-mono">Año</th>
            <th scope="col" className="px-4 py-3.5">Aplicación / Subdominio</th>
            <th scope="col" className="hidden sm:table-cell px-4 py-3.5">Categoría</th>
            <th scope="col" className="hidden md:table-cell px-4 py-3.5">Stack Tecnológico</th>
            <th scope="col" className="py-3.5 pl-3 pr-6 text-right">Lanzamiento</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.04] font-normal">
          {projects.map((project) => {
            const isCustomDomain = !project.liveUrl.includes('github.com');
            const displayUrl = isCustomDomain
              ? getDisplayUrl(project.liveUrl)
              : `github.com/juanxaviercasa/${project.id}`;

            return (
              <tr
                key={project.id}
                className="group transition-colors hover:bg-white/[0.02]"
              >
                {/* Year */}
                <td className="whitespace-nowrap py-3.5 pl-6 pr-3 font-mono text-xs text-zinc-500 tabular-nums">
                  {project.year ?? '—'}
                </td>

                {/* Title & Subdomain */}
                <td className="px-4 py-3.5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#f7f8f8] hover:text-emerald-400 transition-colors block text-sm"
                    title={`Lanzar ${project.title}`}
                  >
                    {project.title}
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono mt-0.5 text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                    <span>{displayUrl}</span>
                  </a>
                </td>

                {/* Category */}
                <td className="hidden sm:table-cell px-4 py-3.5">
                  <span className="inline-block rounded border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[11px] font-mono text-zinc-300">
                    {project.category}
                  </span>
                </td>

                {/* Tech Badges */}
                <td className="hidden md:table-cell px-4 py-3.5">
                  <div className="flex flex-wrap gap-1 max-w-sm">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-white/[0.05] bg-white/[0.02] px-1.5 py-0.5 font-mono text-[10px] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>

                {/* Action Links */}
                <td className="whitespace-nowrap py-3.5 pl-3 pr-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    {onPreviewClick && (
                      <button
                        type="button"
                        onClick={() => onPreviewClick(project)}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-1.5 text-zinc-400 shadow-bevel hover:bg-white/[0.06] hover:text-[#f7f8f8] transition-colors"
                        title="Vista previa rápida"
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </button>
                    )}

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-bold text-[#08090a] hover:bg-emerald-400 transition-all shadow-bevel active:scale-95"
                      title={`Lanzar ${project.title}`}
                    >
                      <span>Lanzar App</span>
                      <ExternalLink className="h-3 w-3 stroke-[2.5]" />
                    </a>
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
