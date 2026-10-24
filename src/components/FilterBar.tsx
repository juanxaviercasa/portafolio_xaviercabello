'use client';

import { useEffect, useRef } from 'react';
import { Search, X, LayoutGrid, List } from 'lucide-react';
import { ProjectCategoryId } from '@/types/project';
import { CATEGORIES } from '@/data/portfolio.config';

interface FilterBarProps {
  activeCategory: ProjectCategoryId;
  onCategoryChange: (category: ProjectCategoryId) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: 'grid' | 'table';
  onViewModeChange: (mode: 'grid' | 'table') => void;
  categoryCounts: Record<ProjectCategoryId, number>;
  totalResults: number;
}

const toggleClass = (active: boolean) =>
  `inline-flex h-8 w-8 items-center justify-center rounded-lg transition-all ${
    active
      ? 'bg-amber-500/20 text-[var(--text)] border border-amber-500/40'
      : 'text-[var(--muted)] hover:text-[var(--text)]'
  }`;

export function FilterBar({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  categoryCounts,
  totalResults,
}: FilterBarProps) {
  const searchRef = useRef<HTMLInputElement>(null);

  // Atajo "/" para buscar y "Esc" para limpiar.
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

  const filtered = !!searchQuery || activeCategory !== 'all';

  return (
    <div className="mb-8 space-y-4">
      {/* Buscador + vista */}
      <div className="flex items-center gap-3">
        <div className="relative flex flex-1 items-center">
          <Search
            size={17}
            className="pointer-events-none absolute left-3.5 text-[var(--muted)]"
            aria-hidden="true"
          />
          <input
            ref={searchRef}
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por nombre o tecnología…"
            aria-label="Buscar proyectos"
            aria-controls="project-results"
            className="w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] py-2.5 pl-10 pr-10 text-sm text-[var(--text)] placeholder:text-[var(--muted)]/75 focus:border-amber-500/60 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Limpiar búsqueda"
              className="absolute right-2.5 inline-flex h-7 w-7 items-center justify-center rounded-lg text-[var(--muted)] hover:bg-[var(--soft)] hover:text-[var(--text)] transition-colors"
            >
              <X size={15} />
            </button>
          )}
        </div>

        <div
          role="group"
          aria-label="Vista del catálogo"
          className="inline-flex items-center gap-1 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-1"
        >
          <button
            type="button"
            onClick={() => onViewModeChange('grid')}
            aria-pressed={viewMode === 'grid'}
            aria-label="Ver como tarjetas"
            title="Tarjetas"
            className={toggleClass(viewMode === 'grid')}
          >
            <LayoutGrid size={15} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange('table')}
            aria-pressed={viewMode === 'table'}
            aria-label="Ver como lista"
            title="Lista"
            className={toggleClass(viewMode === 'table')}
          >
            <List size={15} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Categorías */}
      <div role="group" aria-label="Filtrar por tema" className="flex flex-wrap gap-2">
        {CATEGORIES.filter((c) => c.id === 'all' || categoryCounts[c.id] > 0).map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              type="button"
              key={category.id}
              aria-pressed={isActive}
              title={category.description}
              onClick={() => onCategoryChange(category.id)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${
                isActive
                  ? 'border-amber-500/60 bg-amber-500/20 text-[var(--text)]'
                  : 'border-[var(--line)] bg-[var(--surface)]/80 text-[var(--muted)] hover:border-amber-500/40 hover:text-[var(--text)]'
              }`}
            >
              {category.label}
              <span className="font-mono text-[10px] opacity-70">{categoryCounts[category.id] ?? 0}</span>
            </button>
          );
        })}
      </div>

      {/* Resultado + limpiar (solo cuando hay filtros) */}
      {filtered && (
        <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
          <span role="status" aria-live="polite">
            {totalResults} {totalResults === 1 ? 'resultado' : 'resultados'}
          </span>
          <button
            type="button"
            onClick={() => {
              onCategoryChange('all');
              onSearchChange('');
            }}
            className="font-semibold text-amber-600 hover:underline dark:text-amber-400"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
}
