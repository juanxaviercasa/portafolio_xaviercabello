'use client';

import { useEffect, useRef } from 'react';
import { Search, X, LayoutGrid, List } from 'lucide-react';
import type { ProjectCategoryId } from '@/types/project';
import {
  FacetOption,
  PROJECT_AREAS,
  PROJECT_FORMATS,
  ProjectAreaFilter,
  ProjectFormatFilter,
} from '@/data/project-facets';

interface FilterBarProps {
  activeFormat: ProjectFormatFilter;
  onFormatChange: (format: ProjectFormatFilter) => void;
  activeArea: ProjectAreaFilter;
  onAreaChange: (area: ProjectAreaFilter) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: 'grid' | 'table';
  onViewModeChange: (mode: 'grid' | 'table') => void;
  categoryCounts: Record<ProjectCategoryId, number>;
  totalResults: number;
  onReset: () => void;
}

const toggleClass = (active: boolean) =>
  `inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
    active
      ? 'bg-amber-500/20 text-[var(--text)] border border-amber-500/40'
      : 'text-[var(--muted)] hover:text-[var(--text)]'
  }`;

function FacetOptions<T extends ProjectFormatFilter | ProjectAreaFilter>({
  options,
  value,
  onChange,
  counts,
  label,
}: {
  options: FacetOption<T>[];
  value: T;
  onChange: (value: T) => void;
  counts: Record<ProjectCategoryId, number>;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options
        .filter((option) => option.id === 'all' || counts[option.id as ProjectCategoryId] > 0)
        .map((option) => {
          const active = value === option.id;
          return (
            <button
              type="button"
              key={option.id}
              aria-pressed={active}
              title={option.description}
              onClick={() => onChange(option.id)}
              className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors ${
                active
                  ? 'border-amber-500/60 bg-amber-500/20 text-[var(--text)]'
                  : 'border-[var(--line)] bg-[var(--surface)]/80 text-[var(--muted)] hover:border-amber-500/40 hover:text-[var(--text)]'
              }`}
            >
              <span>{option.label}</span>
              <span className="font-mono text-[10px] opacity-70">
                {option.id === 'all' ? counts.all : counts[option.id as ProjectCategoryId] ?? 0}
              </span>
            </button>
          );
        })}
    </div>
  );
}

export function FilterBar({
  activeFormat,
  onFormatChange,
  activeArea,
  onAreaChange,
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  categoryCounts,
  totalResults,
  onReset,
}: FilterBarProps) {
  const searchRef = useRef<HTMLInputElement>(null);

  // Atajo «/» para buscar y «Esc» para limpiar o salir del buscador.
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (
        event.key === '/' &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey &&
        !target.closest('input, textarea, select, [contenteditable="true"]')
      ) {
        event.preventDefault();
        searchRef.current?.focus();
      }
      if (event.key === 'Escape' && document.activeElement === searchRef.current) {
        if (searchQuery) onSearchChange('');
        else searchRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [searchQuery, onSearchChange]);

  const filtered = Boolean(searchQuery) || activeFormat !== 'all' || activeArea !== 'all';

  return (
    <div className="mb-8 space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex min-w-0 flex-1 items-center">
          <Search
            size={17}
            className="pointer-events-none absolute left-3.5 text-[var(--muted)]"
            aria-hidden="true"
          />
          <input
            ref={searchRef}
            type="search"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar por nombre o tecnología…"
            aria-label="Buscar proyectos"
            aria-controls="project-results"
            className="min-h-11 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] py-2.5 pl-10 pr-10 text-sm text-[var(--text)] placeholder:text-[var(--muted)]/75 transition-all focus:border-amber-500/60 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Limpiar búsqueda"
              className="absolute right-2 inline-flex h-9 w-9 items-center justify-center rounded-lg text-[var(--muted)] transition-colors hover:bg-[var(--soft)] hover:text-[var(--text)]"
            >
              <X size={15} aria-hidden="true" />
            </button>
          )}
        </div>

        <div
          role="group"
          aria-label="Vista del catálogo"
          className="inline-flex w-fit self-end items-center gap-1 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-1 sm:self-auto"
        >
          <button
            type="button"
            onClick={() => onViewModeChange('grid')}
            aria-pressed={viewMode === 'grid'}
            aria-label="Ver como tarjetas"
            title="Tarjetas"
            className={toggleClass(viewMode === 'grid')}
          >
            <LayoutGrid size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange('table')}
            aria-pressed={viewMode === 'table'}
            aria-label="Ver como lista"
            title="Lista"
            className={toggleClass(viewMode === 'table')}
          >
            <List size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="grid gap-x-8 gap-y-5 lg:grid-cols-2">
        <section aria-labelledby="format-filters-title" className="min-w-0">
          <h2 id="format-filters-title" className="mb-2 font-mono text-[11px] font-extrabold uppercase tracking-wider text-[var(--muted)]">
            Tipo de producto
          </h2>
          <FacetOptions
            options={PROJECT_FORMATS}
            value={activeFormat}
            onChange={onFormatChange}
            counts={categoryCounts}
            label="Filtrar por tipo de producto"
          />
        </section>
        <section aria-labelledby="area-filters-title" className="min-w-0">
          <h2 id="area-filters-title" className="mb-2 font-mono text-[11px] font-extrabold uppercase tracking-wider text-[var(--muted)]">
            Área de aplicación
          </h2>
          <FacetOptions
            options={PROJECT_AREAS}
            value={activeArea}
            onChange={onAreaChange}
            counts={categoryCounts}
            label="Filtrar por área de aplicación"
          />
        </section>
      </div>

      {filtered && (
        <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
          <span role="status" aria-live="polite">
            {totalResults} {totalResults === 1 ? 'resultado' : 'resultados'}
          </span>
          <button
            type="button"
            onClick={onReset}
            className="min-h-9 font-semibold text-amber-600 hover:underline dark:text-amber-400"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
}
