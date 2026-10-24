import { GitHubActivitySection } from '@/components/GitHubActivitySection';
import { PROJECTS_DATA } from '@/data/projects';
import { CATEGORIES } from '@/data/portfolio.config';
import { StatsSummary } from '@/components/StatsSummary';
import { ShowcaseGrid } from '@/components/ShowcaseGrid';
import {
  FeaturedProjects,
  Services,
  About,
  Training,
  Contact,
  SectionHeading,
} from '@/components/PortfolioSections';

/**
 * Arquitectura UX optimizada y verificada:
 * 1. Propuesta de valor & identidad (inicio: StatsSummary + 3D Phoenix + Métricas)
 * 2. Proyectos destacados (destacados: 3 casos de estudio de alta complejidad)
 * 3. Servicios y soluciones para clientes/empresas (servicios)
 * 4. Trayectoria, mentalidad pedagógica y stack tecnológico (sobre-mi)
 * 5. Catálogo completo de proyectos (catalogo: ShowcaseGrid interactivo)
 * 6. Taller Fénix (formacion)
 * 7. Contacto directo y canales de comunicación (contacto)
 */
export default function HomePage() {
  return (
    <main id="contenido" className="page-width my-6 space-y-12 sm:my-10 sm:space-y-16">
      <StatsSummary totalProjects={PROJECTS_DATA.length} totalCategories={CATEGORIES.length - 1} />

      <FeaturedProjects />

      <Training />

      <GitHubActivitySection />

      <Services />

      <About />

      {/* Catálogo integral de sistemas en producción */}
      <section
        id="catalogo"
        aria-labelledby="catalog-title"
        className="relative overflow-hidden rounded-[2rem] border-2 border-orange-300/80 bg-gradient-to-br from-white via-indigo-50/50 to-violet-50/60 p-6 shadow-bevel-elevated dark:border-orange-400/45 dark:from-[#2c1654] dark:via-[#381c68] dark:to-[#491e56] sm:p-10 lg:p-12"
      >
        <SectionHeading
          id="catalog-title"
          eyebrow="Explora mi trabajo"
          title={
            <>
              {PROJECTS_DATA.length} proyectos en el catálogo{' '}
              <span className="text-phoenix-gradient">de la educación a los negocios</span>
            </>
          }
          intro={`Explora casos para aprender a construir con IA: simuladores, aplicaciones y herramientas para negocios. Solo se incluyen proyectos con código, historial comprobado y captura real de su sitio publicado.`}
        />
        <ShowcaseGrid initialProjects={PROJECTS_DATA} />
      </section>

      <Contact />
    </main>
  );
}
