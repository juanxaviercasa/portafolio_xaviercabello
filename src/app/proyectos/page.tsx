import type { Metadata } from 'next';
import { PROJECTS_DATA } from '@/data/projects';
import { ShowcaseGrid } from '@/components/ShowcaseGrid';
import { createPageMetadata } from '@/lib/page-metadata';
import { portfolioConfig } from '@/data/portfolio.config';

const description = `Explora ${PROJECTS_DATA.length} proyectos por tipo de producto y área de aplicación: simuladores, sitios, herramientas y plataformas para educación y negocios.`;
const siteUrl = portfolioConfig.owner.siteUrl.replace(/\/$/, '');

export const metadata: Metadata = createPageMetadata({
  title: 'Portafolio de proyectos',
  description,
  path: '/proyectos',
});

export default function ProjectsPage() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Proyectos de Xavier Cabello',
    numberOfItems: PROJECTS_DATA.length,
    itemListElement: PROJECTS_DATA.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: project.title,
      url: `${siteUrl}/proyectos/${project.id}`,
    })),
  };

  return (
    <main id="contenido" className="page-width my-8 space-y-7 sm:my-12 sm:space-y-9">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList).replace(/</g, '\\u003c') }}
      />
      <header className="max-w-3xl">
        <p className="font-mono text-xs font-extrabold uppercase tracking-wider text-orange-600 dark:text-amber-300">
          Casos y productos digitales
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
          Proyectos que conectan <span className="text-phoenix-gradient">educación y producto.</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
          Filtra primero por formato y luego por el área que resuelve. Cada ficha incluye evidencia del proyecto, decisiones y enlaces disponibles.
        </p>
      </header>
      <ShowcaseGrid initialProjects={PROJECTS_DATA} />
    </main>
  );
}
