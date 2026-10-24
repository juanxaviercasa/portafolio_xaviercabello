'use client';

import { ProjectPreview } from '@/components/ProjectPreview';
import Link from 'next/link';
import { Github, ExternalLink, Figma } from 'lucide-react';
import { Project } from '@/types/project';
import { getCategoryLabel } from '@/lib/utils';

export function ProjectCard({ project }: { project: Project }) {
  const cleanTitle = project.title.split(' — ')[0];

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-orange-300/80 dark:border-orange-400/40 bg-white/95 dark:bg-[#361d66]/95 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500 dark:hover:border-amber-400 hover:shadow-xl h-full">
      <div>
        {/* Image Header */}
        <Link
          href={`/proyectos/${project.id}`}
          className="relative block aspect-[16/9] w-full overflow-hidden bg-[#2b1550]"
          aria-label={`Ver detalles de ${cleanTitle}`}
        >
          <ProjectPreview project={project} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" />

        </Link>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-2.5">
          <p className="truncate font-mono text-[11px] font-extrabold text-orange-600 dark:text-amber-300">
            {getCategoryLabel(project.category)}
          </p>

          <h3 className="text-lg font-black leading-snug text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-amber-300 transition-colors">
            <Link href={`/proyectos/${project.id}`}>{cleanTitle}</Link>
          </h3>

          <p className="text-sm text-slate-700 dark:text-amber-50/90 leading-relaxed line-clamp-2">
            {project.summary || project.description}
          </p>

          <p className="text-xs text-slate-600 dark:text-amber-100/80">{project.repositoryReview?.verified ? <>GitHub · {project.repositoryReview.archived ? 'Archivado · ' : ''}Último push: {project.repositoryReview.label}</> : 'Repositorio pendiente de verificar'}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-orange-300/75 dark:border-orange-400/40 bg-orange-50/80 dark:bg-[#432378]/80 px-2 py-0.5 font-mono text-[10px] font-bold text-purple-950 dark:text-amber-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 sm:px-6 py-3.5 border-t border-orange-200/70 dark:border-purple-400/35 bg-orange-50/40 dark:bg-[#2f1859]/80 flex items-center justify-between gap-2">
        <Link
          href={`/proyectos/${project.id}`}
          className="text-xs font-extrabold text-orange-800 dark:text-amber-200 hover:text-orange-600 dark:hover:text-amber-300 hover:underline transition-colors"
        >
          Ver detalles
        </Link>

        <div className="flex items-center gap-2">
          {project.figmaUrl && (
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Diseño en Figma de ${cleanTitle}`}
              title="Diseño en Figma"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-purple-400/80 dark:border-purple-400/60 bg-purple-50 dark:bg-[#432378] text-purple-700 dark:text-purple-200 hover:border-purple-500 hover:bg-purple-100 dark:hover:bg-[#522b93] transition-colors"
            >
              <Figma size={15} aria-hidden="true" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Código de ${cleanTitle} en GitHub`}
              title="Código en GitHub"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-orange-300/80 dark:border-orange-400/45 bg-white dark:bg-[#3d2170] text-slate-700 dark:text-amber-100 hover:border-amber-400 hover:text-orange-600 dark:hover:text-amber-300 transition-colors"
            >
              <Github size={15} aria-hidden="true" />
            </a>
          )}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${cleanTitle}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1.5 text-xs font-extrabold text-white dark:text-slate-950 shadow-sm hover:brightness-110 transition-all"
          >
            <span>{project.preview?.kind === 'live' ? 'Visitar sitio' : 'Ver código'}</span>
            <ExternalLink size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
