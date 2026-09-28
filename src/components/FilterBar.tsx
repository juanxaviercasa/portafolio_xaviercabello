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
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por aplicación, tecnología (Stripe, Next.js, OpenAI) o palabra clave..."
            className="w-full rounded-xl border border-white/[0.08] bg-[#121316] py-2.5 pl-10 pr-20 text-sm text-[#f7f8f8] placeholder-zinc-500 shadow-bevel transition-all duration-150 focus:border-white/[0.2] focus:bg-[#16171b] focus:outline-none focus:ring-1 focus:ring-white/[0.15]"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
            {searchQuery ? (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="rounded-md p-1 text-zinc-400 hover:bg-white/[0.08] hover:text-[#f7f8f8] transition-colors"
                title="Limpiar búsqueda"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            ) : (
              <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-white/[0.08] bg-white/[0.03] px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">
                <span>/</span>
              </kbd>
            )}
          </div>
        </div>

        {/* View Mode Toggle (Grid vs Table/Directory) */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <div className="flex items-center rounded-xl border border-white/[0.08] bg-[#121316] p-1 shadow-bevel">
            <button
              type="button"
              onClick={() => onViewModeChange('grid')}
              className={cn(
                'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150',
                viewMode === 'grid'
                  ? 'bg-white/[0.08] text-[#f7f8f8] shadow-bevel font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              )}
              title="Vista de cuadrícula visual"
            >
              <LayoutGrid className="h-3.5 w-3.5 text-emerald-400" />
              <span>Cards</span>
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange('table')}
              className={cn(
                'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150',
                viewMode === 'table'
                  ? 'bg-white/[0.08] text-[#f7f8f8] shadow-bevel font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              )}
              title="Vista compacta de directorio / tabla"
            >
              <List className="h-3.5 w-3.5 text-blue-400" />
              <span>Directorio</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills Slider (Open Design Linear Filter Bar) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin">
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
                  'relative flex items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all duration-150 active:scale-95',
                  isActive
                    ? 'text-[#08090a] font-semibold'
                    : 'text-zinc-400 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:text-[#f7f8f8]'
                )}
              >
                {/* Active Pill background animation */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-xl bg-emerald-400 shadow-sm"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
                <span
                  className={cn(
                    'relative z-10 rounded-full px-1.5 py-0.2 font-mono text-[10px] tabular-nums',
                    isActive
                      ? 'bg-[#08090a]/15 text-[#08090a] font-bold'
                      : 'bg-white/[0.06] text-zinc-400'
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
