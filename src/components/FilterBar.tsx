'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, X, LayoutGrid, List, SlidersHorizontal } from 'lucide-react';
import { ProjectCategoryId } from '@/types/project';
import { CATEGORIES } from '@/data/portfolio.config';
import { cn } from '@/lib/utils';

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
  return (
    <div className="space-y-4">
      {/* Top Controls Row: Search Input + View Mode Switcher */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Real-time Search Input */}
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por título, tecnología (ej. Stripe, Next.js) o palabra clave..."
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 py-2.5 pl-10 pr-10 text-sm text-zinc-100 placeholder-zinc-500 shadow-inner backdrop-blur-sm transition-colors focus:border-emerald-500/60 focus:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
              title="Limpiar búsqueda"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* View Mode Toggle (Grid vs Table/Directory) */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-xs text-zinc-500 hidden md:inline">Vista:</span>
          <div className="flex items-center rounded-xl border border-zinc-800 bg-zinc-900/90 p-1 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => onViewModeChange('grid')}
              className={cn(
                'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all',
                viewMode === 'grid'
                  ? 'bg-zinc-800 text-emerald-400 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              )}
              title="Vista de cuadrícula visual"
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span>Cards</span>
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange('table')}
              className={cn(
                'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all',
                viewMode === 'table'
                  ? 'bg-zinc-800 text-emerald-400 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              )}
              title="Vista compacta de directorio / tabla (Brittany Chiang v4 style)"
            >
              <List className="h-3.5 w-3.5" />
              <span>Directorio</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills Slider (vCard / codewithsadee inspired with Framer Motion) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-zinc-800">
        <div className="flex items-center gap-1.5">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = categoryCounts[cat.id] ?? 0;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onCategoryChange(cat.id)}
                className={cn(
                  'relative flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2 text-xs font-medium transition-colors',
                  isActive
                    ? 'text-zinc-950 font-semibold'
                    : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
                )}
              >
                {/* Active Pill background animation */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-xl bg-emerald-400 shadow-lg shadow-emerald-500/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
                <span
                  className={cn(
                    'relative z-10 rounded-full px-1.5 py-0.5 text-[10px] font-mono',
                    isActive
                      ? 'bg-zinc-950/15 text-zinc-950'
                      : 'bg-zinc-800/80 text-zinc-400'
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sub-bar: Active search summary if filtered */}
      {(searchQuery || activeCategory !== 'all') && (
        <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
          <span>
            Mostrando <strong className="text-zinc-200">{totalResults}</strong> proyectos encontrados
            {searchQuery && (
              <> para &ldquo;<span className="text-emerald-400">{searchQuery}</span>&rdquo;</>
            )}
          </span>
          <button
            type="button"
            onClick={() => {
              onCategoryChange('all');
              onSearchChange('');
            }}
            className="text-xs text-emerald-400 hover:underline"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
}
