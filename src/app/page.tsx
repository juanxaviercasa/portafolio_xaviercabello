import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, UserRound } from 'lucide-react';
import { PROJECTS_DATA } from '@/data/projects';
import { StatsSummary } from '@/components/StatsSummary';
import { FeaturedProjects, Training } from '@/components/PortfolioSections';

const DESTINATIONS = [
  {
    href: '/servicios',
    icon: BriefcaseBusiness,
    eyebrow: 'Para negocios y equipos',
    title: 'Construir una solución',
    text: 'Aplicaciones, procesos digitales e IA aplicada a una necesidad concreta.',
  },
  {
    href: '/sobre-mi',
    icon: UserRound,
    eyebrow: 'Para conocer el enfoque',
    title: 'Ver quién está detrás',
    text: 'Matemática, docencia y desarrollo de productos digitales.',
  },
];

export default function HomePage() {
  return (
    <main id="contenido" className="page-width my-6 space-y-8 sm:my-10 sm:space-y-12">
      <StatsSummary totalProjects={PROJECTS_DATA.length} />
      <FeaturedProjects />
      <Training />

      <section
        aria-labelledby="next-step-title"
        className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-bevel sm:p-8"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs font-extrabold uppercase tracking-wider text-orange-600 dark:text-amber-300">
              Explora por lo que necesitas
            </p>
            <h2 id="next-step-title" className="mt-1 text-2xl font-black text-[var(--text)] sm:text-3xl">
              ¿Qué te gustaría hacer?
            </h2>
          </div>
          <Link href="/proyectos" className="text-link shrink-0">
            Ver los {PROJECTS_DATA.length} proyectos <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {DESTINATIONS.map(({ href, icon: Icon, eyebrow, title, text }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 transition-colors hover:border-amber-500/60 hover:bg-amber-500/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              <Icon size={20} className="text-amber-600 dark:text-amber-300" aria-hidden="true" />
              <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]">
                {eyebrow}
              </p>
              <h3 className="mt-1 font-black text-[var(--text)] group-hover:text-amber-700 dark:group-hover:text-amber-300">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{text}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
