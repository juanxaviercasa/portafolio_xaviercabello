'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Project, ProjectCategoryId } from '@/types/project';
import { portfolioConfig, CATEGORIES } from '@/data/portfolio.config';
import {
  isAreaCategory,
  isFormatCategory,
  isProjectArea,
  isProjectFormat,
  projectHasCategory,
  ProjectAreaFilter,
  ProjectFormatFilter,
} from '@/data/project-facets';
import { FilterBar } from '@/components/FilterBar';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectDirectoryTable } from '@/components/ProjectDirectoryTable';
import { normalizeSearch } from '@/lib/utils';

const PAGE_SIZE = portfolioConfig.showcase.itemsPerPage;
const DEFAULT_VIEW = portfolioConfig.showcase.defaultView;

export function ShowcaseGrid({ initialProjects }: { initialProjects: Project[] }) {
  const [activeFormat, setActiveFormat] = useState<ProjectFormatFilter>('all');
  const [activeArea, setActiveArea] = useState<ProjectAreaFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>(DEFAULT_VIEW);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [ready, setReady] = useState(false);

  // Restaura enlaces compartidos; `categoria` mantiene compatibilidad con enlaces antiguos.
  useEffect(() => {
    const restore = () => {
      const params = new URLSearchParams(window.location.search);
      const legacyCategory = params.get('categoria');
      const format = params.get('formato');
      const area = params.get('area');

      setActiveFormat(
        isProjectFormat(format)
          ? format
          : isFormatCategory(legacyCategory)
            ? legacyCategory
            : 'all',
      );
      setActiveArea(
        isProjectArea(area)
          ? area
          : isAreaCategory(legacyCategory)
            ? legacyCategory
            : 'all',
      );
      setSearchQuery(params.get('q') || '');
      setViewMode(params.get('vista') === 'table' ? 'table' : DEFAULT_VIEW);
      setVisibleCount(PAGE_SIZE);
      setReady(true);
    };

    restore();
    window.addEventListener('popstate', restore);
    return () => window.removeEventListener('popstate', restore);
  }, []);

  // Sincroniza filtros con URL sin añadir entradas artificiales al historial.
  useEffect(() => {
    if (!ready) return;
    const url = new URL(window.location.href);
    const values = {
      q: searchQuery,
      formato: activeFormat === 'all' ? '' : activeFormat,
      area: activeArea === 'all' ? '' : activeArea,
      vista: viewMode === DEFAULT_VIEW ? '' : viewMode,
    };
    Object.entries(values).forEach(([key, value]) =>
      value ? url.searchParams.set(key, value) : url.searchParams.delete(key),
    );
    url.searchParams.delete('categoria');
    url.searchParams.delete('estado');
    window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
  }, [ready, searchQuery, activeFormat, activeArea, viewMode]);

  const categoryCounts = useMemo(
    () =>
      Object.fromEntries(
        CATEGORIES.map((category) => [
          category.id,
          category.id === 'all'
            ? initialProjects.length
            : initialProjects.filter((project) => projectHasCategory(project, category.id)).length,
        ]),
      ) as Record<ProjectCategoryId, number>,
    [initialProjects],
  );

  const filteredProjects = useMemo(() => {
    const query = normalizeSearch(searchQuery);
    return initialProjects.filter((project) => {
      if (activeFormat !== 'all' && !projectHasCategory(project, activeFormat)) return false;
      if (activeArea !== 'all' && !projectHasCategory(project, activeArea)) return false;
      return (
        !query ||
        [
          project.title,
          project.description,
          project.subdomain,
          project.subcategory || '',
          ...project.tags,
        ].some((text) => normalizeSearch(text).includes(query))
      );
    });
  }, [initialProjects, activeFormat, activeArea, searchQuery]);

  const displayed = filteredProjects.slice(0, visibleCount);
  const remaining = filteredProjects.length - visibleCount;

  const reset = () => {
    setActiveFormat('all');
    setActiveArea('all');
    setSearchQuery('');
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div>
      <FilterBar
        activeFormat={activeFormat}
        onFormatChange={(format) => {
          setActiveFormat(format);
          setVisibleCount(PAGE_SIZE);
        }}
        activeArea={activeArea}
        onAreaChange={(area) => {
          setActiveArea(area);
          setVisibleCount(PAGE_SIZE);
        }}
        searchQuery={searchQuery}
        onSearchChange={(value) => {
          setSearchQuery(value);
          setVisibleCount(PAGE_SIZE);
        }}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        categoryCounts={categoryCounts}
        totalResults={filteredProjects.length}
        onReset={reset}
      />

      <div id="project-results" aria-label="Resultados del catálogo">
        {filteredProjects.length === 0 ? (
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--soft)]/40 p-10 text-center">
            <h2 className="text-xl font-bold text-[var(--text)]">Sin resultados</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Prueba con otra palabra, como «React», «IA» o «PWA».
            </p>
            <button type="button" onClick={reset} className="button-secondary mt-5">
              Ver todos los proyectos
            </button>
          </div>
        ) : viewMode === 'table' ? (
          <ProjectDirectoryTable projects={filteredProjects} />
        ) : (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {displayed.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            {remaining > 0 && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  className="button-secondary"
                  onClick={() => setVisibleCount((value) => value + PAGE_SIZE)}
                >
                  Ver más ({remaining}) <ArrowDown size={16} aria-hidden="true" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
