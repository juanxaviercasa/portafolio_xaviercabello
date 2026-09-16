'use client';

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Layers, Sparkles } from 'lucide-react';
import { Project, ProjectCategoryId } from '@/types/project';
import { portfolioConfig, CATEGORIES } from '@/data/portfolio.config';
import { FilterBar } from '@/components/FilterBar';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectDirectoryTable } from '@/components/ProjectDirectoryTable';
import { ProjectPreviewModal } from '@/components/ProjectPreviewModal';

interface ShowcaseGridProps {
  initialProjects: Project[];
}

export function ShowcaseGrid({ initialProjects }: ShowcaseGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>(portfolioConfig.showcase.defaultView);
  const [visibleCount, setVisibleCount] = useState(portfolioConfig.showcase.itemsPerPage);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  // Compute category counts for the filter badges
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: initialProjects.length };
    CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = initialProjects.filter((p) => p.category === cat.id).length;
      }
    });
    return counts as Record<ProjectCategoryId, number>;
  }, [initialProjects]);

  // Filter projects by category and real-time search query
  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return initialProjects.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      if (!matchesCategory) return false;

      if (!query) return true;

      const titleMatch = project.title.toLowerCase().includes(query);
      const descMatch = project.description.toLowerCase().includes(query);
      const subdomainMatch = project.subdomain.toLowerCase().includes(query);
      const tagMatch = project.tags.some((t) => t.toLowerCase().includes(query));

      return titleMatch || descMatch || subdomainMatch || tagMatch;
    });
  }, [initialProjects, activeCategory, searchQuery]);

  // Sliced projects for pagination / progressive loading
  const displayedProjects = useMemo(() => {
    if (viewMode === 'table') {
      // Show full list in table directory view
      return filteredProjects;
    }
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount, viewMode]);

  const hasMore = viewMode === 'grid' && visibleCount < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + portfolioConfig.showcase.itemsPerPage);
  };

  const handleCategoryChange = (category: ProjectCategoryId) => {
    setActiveCategory(category);
    setVisibleCount(portfolioConfig.showcase.itemsPerPage); // reset pagination when category changes
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setVisibleCount(portfolioConfig.showcase.itemsPerPage); // reset pagination when query changes
  };

  return (
    <section className="space-y-8" id="catalogo">
      {/* Interactive Filter and Search Controller */}
      <FilterBar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        categoryCounts={categoryCounts}
        totalResults={filteredProjects.length}
      />

      {/* Main Content Area: Grid View or Table View */}
      {viewMode === 'grid' ? (
        <>
          {displayedProjects.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {displayedProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ProjectCard
                      project={project}
                      onPreviewClick={
                        portfolioConfig.showcase.enableQuickModalPreview
                          ? setPreviewProject
                          : undefined
                      }
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="rounded-3xl border border-dashed border-zinc-800 bg-zinc-950/40 p-12 text-center">
              <Sparkles className="mx-auto h-8 w-8 text-zinc-600 mb-3" />
              <h3 className="text-base font-semibold text-zinc-300">
                No se encontraron proyectos
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                Intenta ajustar tu búsqueda o selecciona otra categoría.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-zinc-800 px-4 py-2 text-xs font-medium text-emerald-400 hover:bg-zinc-700 transition-colors"
              >
                Restablecer catálogo
              </button>
            </div>
          )}

          {/* Load More Button / Pagination for Scalability (40+ projects) */}
          {hasMore && (
            <div className="flex flex-col items-center justify-center gap-3 pt-6 pb-4">
              <p className="text-xs text-zinc-500 font-mono">
                Mostrando {displayedProjects.length} de {filteredProjects.length} proyectos
              </p>
              <button
                type="button"
                onClick={handleLoadMore}
                className="group flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-200 shadow-xl transition-all duration-200 hover:border-emerald-500/50 hover:bg-zinc-800 hover:text-emerald-400 active:scale-95"
              >
                <span>Cargar más proyectos (+{portfolioConfig.showcase.itemsPerPage})</span>
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          )}
        </>
      ) : (
        /* Alternative Brittany Chiang Table/Directory View */
        <ProjectDirectoryTable
          projects={filteredProjects}
          onPreviewClick={
            portfolioConfig.showcase.enableQuickModalPreview
              ? setPreviewProject
              : undefined
          }
        />
      )}

      {/* Interactive Quick Preview Modal (Precedent style) */}
      <ProjectPreviewModal
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />
    </section>
  );
}
