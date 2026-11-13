import { ProjectPreview } from '@/components/ProjectPreview';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  Layers,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Sparkles,
  Figma,
} from 'lucide-react';
import { PROJECTS_DATA } from '@/data/projects';
import { CASE_STUDIES } from '@/data/case-studies';
import { portfolioConfig } from '@/data/portfolio.config';
import {
  getCategoryLabel,
  getAvailabilityLabel,
  getHostingLabel,
} from '@/lib/utils';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS_DATA.find((p) => p.id === id);
  if (!project) return { title: 'Proyecto no encontrado', robots: { index: false } };
  const projectUrl = `${portfolioConfig.owner.siteUrl}/proyectos/${project.id}`;
  const imageUrl = project.image || null;
  return {
    title: `${project.title.split(' — ')[0]} | Proyecto y arquitectura`,
    description: project.description,
    alternates: { canonical: projectUrl },
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      url: projectUrl,
      images: imageUrl ? [{ url: imageUrl, alt: project.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const index = PROJECTS_DATA.findIndex((p) => p.id === id);
  if (index < 0) notFound();
  const project = PROJECTS_DATA[index];
  const study = CASE_STUDIES.find((s) => s.projectId === project.id);
  const prev = PROJECTS_DATA[index - 1];
  const next = PROJECTS_DATA[index + 1];
  const site = portfolioConfig.owner.siteUrl;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: site },
      { '@type': 'ListItem', position: 2, name: 'Proyectos', item: `${site}/proyectos` },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `${site}/proyectos/${project.id}`,
      },
    ],
  };

  const facts = study
    ? [
        ['Problema', study.problem],
        ['Solución', study.contribution],
        ['Arquitectura', study.decision],
        ['Resultado', study.outcome],
        ['Alcance del proyecto', study.limitation],
      ]
    : [];

  return (
    <main id="contenido" className="page-width my-8 sm:my-12 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      {/* Navegación superior */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-xs font-bold text-[var(--text)] hover:border-amber-500/40 hover:text-amber-500 transition-colors"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          Volver a proyectos
        </Link>
        <span className="font-mono text-xs text-[var(--muted)]">
          {index + 1} de {PROJECTS_DATA.length} · {project.subdomain}
        </span>
      </div>

      {/* Cabecera del Caso de Estudio */}
      <header className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-10 lg:p-12 shadow-bevel backdrop-blur-md">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"
        />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="eyebrow">
              {getCategoryLabel(project.category)} · {project.year}
            </span>
            <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--soft)] px-3 py-0.5 text-xs font-medium text-[var(--muted)]">
              {getAvailabilityLabel(project)}
            </span>
            {getHostingLabel(project) && (
              <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-0.5 text-xs font-semibold text-purple-600 dark:text-purple-300">
                {getHostingLabel(project)}
              </span>
            )}
            {project.figmaUrl && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-0.5 text-xs font-semibold text-purple-600 dark:text-purple-300">
                <Figma size={13} aria-hidden="true" /> Maquetado en Figma
              </span>
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text)] leading-[1.12]">
            {project.title}
          </h1>

          <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-[var(--muted)]">
            {study?.summary || project.description}</p><p className="mt-3 text-sm text-[var(--muted)]">{project.repositoryReview?.verified ? 'Repositorio público comprobado · Último push: ' + project.repositoryReview.label + (project.repositoryReview.archived ? ' · Archivado' : '') : 'Repositorio no verificable con el acceso disponible. Contenido del catálogo local.'}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              {project.preview?.kind === 'live' ? 'Visitar sitio' : 'Ver código del proyecto'} <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-purple-500/40 bg-purple-500/10 px-4 py-2.5 text-xs font-bold text-purple-700 dark:text-purple-300 hover:bg-purple-500/20 transition-colors shadow-sm"
              >
                <Figma size={17} aria-hidden="true" /> Diseño en Figma
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <Github size={17} aria-hidden="true" /> Ver código
              </a>
            )}
          </div>
        </div>
      </header>

      {project.preview && <aside className="rounded-2xl border border-[var(--line)] p-5 text-sm leading-relaxed text-[var(--muted)]">
        <strong>{project.preview.kind === 'local' ? 'Vista previa local' : project.preview.kind === 'live' ? 'Captura real del sitio publicado' : 'Demo no verificada'}</strong>
        <p className="mt-2">{project.preview.note}</p>
        {project.preview.dateLabel && <p className="mt-1">Capturada el {project.preview.dateLabel}. La imagen documenta ese momento, sin garantizar disponibilidad continua.</p>}
        {project.evidence && <div className="mt-3 flex flex-wrap gap-4 text-xs underline">
          {project.evidence.readmeUrl && <a href={project.evidence.readmeUrl} target="_blank" rel="noopener noreferrer">Documentación consultada</a>}
          {project.evidence.manifestUrl && <a href={project.evidence.manifestUrl} target="_blank" rel="noopener noreferrer">Tecnologías comprobadas</a>}
          <a href={project.evidence.latestCommitUrl} target="_blank" rel="noopener noreferrer">Commit consultado</a>
        </div>}
      </aside>}

      {/* Vista previa visual del proyecto */}
      <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[#0f0a1c] shadow-bevel">
        <div className="relative aspect-[16/9] w-full">
          <ProjectPreview project={project} sizes="(max-width: 1200px) 100vw, 1200px" priority />
        </div>
      </div>

      {/* Grilla de Arquitectura, Caso de Estudio y Aprendizajes */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Caso de estudio o Contexto Principal (12 columnas) */}
        {study ? (
          <section
            aria-labelledby="case-title"
            className="lg:col-span-12 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-9 shadow-bevel"
          >
            <p className="eyebrow mb-2">ANÁLISIS DEL PROYECTO</p>
            <h2
              id="case-title"
              className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6"
            >
              {study.title}
            </h2>
            <dl className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {facts.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[var(--line)] bg-[var(--soft)]/45 p-5"
                >
                  <dt className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
                    {label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-[var(--text)]/90">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : (
          <section className="lg:col-span-12 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-9 shadow-bevel">
            <p className="eyebrow mb-2">SOBRE EL PROYECTO</p>
            <h2 className="font-serif text-2xl font-bold text-[var(--text)] mb-4">
              Contexto y propósito
            </h2>
            <p className="text-base leading-relaxed text-[var(--muted)]">
              {project.about || project.description}
            </p>
            {project.simpleExplanation && (
              <div className="mt-5 rounded-2xl border border-amber-500/25 bg-amber-500/5 p-4 text-sm leading-relaxed text-[var(--text)]">
                <strong className="text-amber-600 dark:text-amber-400">En resumen: </strong>
                {project.simpleExplanation}
              </div>
            )}
          </section>
        )}

        {/* Qué hace / Highlights (6 columnas) */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="lg:col-span-6 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8 shadow-bevel flex flex-col">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-500">
                <Sparkles size={18} />
              </span>
              <h2 className="font-serif text-xl font-bold text-[var(--text)]">
                Funcionalidades principales
              </h2>
            </div>
            <ul className="space-y-3 mt-2">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--muted)]"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-amber-500"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Cómo está construido / Arquitectura (6 columnas) */}
        <section
          className={`${
            project.highlights && project.highlights.length > 0
              ? 'lg:col-span-6'
              : 'lg:col-span-12'
          } rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8 shadow-bevel flex flex-col justify-between`}
        >
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400">
                <Cpu size={18} />
              </span>
              <h2 className="font-serif text-xl font-bold text-[var(--text)]">
                Arquitectura y stack
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[var(--muted)] mb-6">
              {project.architecture ||
                'Arquitectura modular optimizada para despliegue continuo, baja latencia y mantenibilidad de código.'}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-2.5">
              Tecnologías y etiquetas del catálogo
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-purple-500/25 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-[var(--text)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Aprendizajes y retos técnicos */}
        {project.whatILearned && project.whatILearned.length > 0 && (
          <section className="lg:col-span-12 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8 shadow-bevel">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                <Layers size={18} />
              </span>
              <h2 className="font-serif text-xl font-bold text-[var(--text)]">
                Retos técnicos y aprendizajes
              </h2>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.whatILearned.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[var(--line)] bg-[var(--soft)]/40 p-4 text-sm leading-relaxed text-[var(--muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Qué enseño con este proyecto */}
        {project.whatITeach && project.whatITeach.length > 0 && (
          <details className="lg:col-span-12 group rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8 shadow-bevel">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold text-[var(--text)]">
              <span className="flex items-center gap-2.5">
                <GraduationCap size={20} className="text-amber-500" />
                <span>Aprende a crear un proyecto como este en el Taller Fénix</span>
              </span>
              <span className="rounded-full border border-[var(--line)] bg-[var(--soft)] px-3 py-1 font-sans text-xs font-semibold text-[var(--muted)] group-open:bg-amber-500/15 group-open:text-amber-400">
                Ver temas formativos
              </span>
            </summary>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Estos conceptos forman parte de mis sesiones prácticas de desarrollo web y arquitectura:
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {project.whatITeach.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-[var(--text)]/90"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <a href="/taller-fenix/" className="text-link">
                Conocer Taller Fénix <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </details>
        )}
      </div>

      {/* CTA de cierre */}
      <section className="rounded-[2rem] border border-amber-500/30 bg-gradient-to-br from-purple-950/35 via-[var(--surface)] to-amber-950/20 p-6 sm:p-10 text-center shadow-bevel">
        <p className="eyebrow justify-center mb-2">CONTACTO</p>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text)]">
          Conversemos sobre tu proyecto.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-[var(--muted)]">
          ¿Necesitas una plataforma como esta para tu negocio o tu comunidad? Cuéntame quién la usará y qué debe permitirle hacer. Podemos conversar sobre el proyecto y definir cómo construirlo.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3.5">
          <a
            href={portfolioConfig.owner.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Cuéntame tu proyecto por WhatsApp <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <Link href="/proyectos" className="button-secondary">
            Ver todos los proyectos
          </Link>
        </div>
      </section>

      {/* Paginación entre proyectos */}
      <nav
        aria-label="Otros proyectos"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        {prev ? (
          <Link
            href={`/proyectos/${prev.id}`}
            className="group rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 hover:border-amber-500/40 transition-all"
          >
            <span className="block text-xs font-bold uppercase tracking-wider text-[var(--muted)] group-hover:text-amber-500">
              ← Proyecto anterior
            </span>
            <span className="mt-1 block font-serif text-lg font-bold text-[var(--text)]">
              {prev.title.split(' — ')[0]}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next && (
          <Link
            href={`/proyectos/${next.id}`}
            className="group rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 text-right hover:border-amber-500/40 transition-all"
          >
            <span className="block text-xs font-bold uppercase tracking-wider text-[var(--muted)] group-hover:text-amber-500">
              Siguiente proyecto →
            </span>
            <span className="mt-1 block font-serif text-lg font-bold text-[var(--text)]">
              {next.title.split(' — ')[0]}
            </span>
          </Link>
        )}
      </nav>
    </main>
  );
}
