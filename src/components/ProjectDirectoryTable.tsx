import Link from 'next/link';
import { ArrowUpRight, Github, Figma } from 'lucide-react';
import { Project } from '@/types/project';
import { getCategoryLabel, getAvailabilityLabel } from '@/lib/utils';

export function ProjectDirectoryTable({ projects }: { projects: Project[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[var(--line)] bg-[var(--soft)]/30 backdrop-blur-sm">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">
          Directorio de proyectos, tecnologías, repositorios y enlaces
        </caption>
        <thead className="border-b border-[var(--line)] bg-[var(--soft)]/80 text-[11px] font-bold uppercase tracking-wider text-[var(--muted)]">
          <tr>
            <th scope="col" className="p-4">
              Proyecto
            </th>
            <th scope="col" className="hidden p-4 md:table-cell">
              Categoría
            </th>
            <th scope="col" className="hidden p-4 lg:table-cell">
              Stack Principal
            </th>
            <th scope="col" className="p-4 text-right">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--line)]/60">
          {projects.map((project) => {
            return (
              <tr
                key={project.id}
                className="transition-colors hover:bg-purple-500/[0.04]"
              >
                <th scope="row" className="p-4 font-semibold">
                  <Link
                    href={`/proyectos/${project.id}`}
                    className="font-serif text-base text-[var(--text)] hover:text-amber-500 transition-colors"
                  >
                    {project.title.split(' — ')[0]}
                  </Link>
                  <span className="mt-1 block text-xs font-normal text-[var(--muted)] line-clamp-1">
                    {project.subdomain}
                  </span>
                </th>
                <td className="hidden p-4 text-xs font-medium text-[var(--muted)] md:table-cell">
                  {getCategoryLabel(project.category)}
                </td>
                <td className="hidden p-4 lg:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-2 py-0.5 text-[10px] font-medium text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4 text-right">
                  <div className="inline-flex items-center justify-end gap-2">
                    {project.figmaUrl && (
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg border border-purple-500/35 bg-purple-500/10 px-2.5 py-1.5 text-xs font-bold text-purple-600 dark:text-purple-300 hover:bg-purple-500/20 transition-colors"
                        aria-label={`Diseño en Figma de ${project.title}`}
                        title="Ver Diseño UI/UX en Figma"
                      >
                        <Figma size={13} aria-hidden="true" />
                        <span className="hidden sm:inline">Figma</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-2.5 py-1.5 text-xs font-semibold text-[var(--muted)] hover:border-purple-500/40 hover:text-[var(--text)] transition-colors"
                        aria-label={`Código fuente de ${project.title}`}
                      >
                        <Github size={13} aria-hidden="true" />
                        <span className="hidden sm:inline">Código</span>
                      </a>
                    )}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-amber-500/35 bg-amber-500/10 px-2.5 py-1.5 text-xs font-bold text-amber-600 dark:text-amber-300 hover:bg-amber-500/20 transition-colors"
                      aria-label={`${getAvailabilityLabel(project)}: ${project.title}`}
                    >
                      {project.preview?.kind === 'live' ? 'Visitar' : 'Código'} <ArrowUpRight size={13} aria-hidden="true" />
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
