import React from 'react';
import { PROJECTS_DATA } from '@/data/projects';
import { CATEGORIES } from '@/data/portfolio.config';
import { StatsSummary } from '@/components/StatsSummary';
import { ShowcaseGrid } from '@/components/ShowcaseGrid';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      {/* Direct-to-Action Hero / Stats Overview (No biography fluff) */}
      <StatsSummary
        totalProjects={PROJECTS_DATA.length}
        totalCategories={CATEGORIES.length - 1} // exclude 'all'
      />

      {/* Main Interactive Showcase Catalog */}
      <ShowcaseGrid initialProjects={PROJECTS_DATA} />
    </main>
  );
}
