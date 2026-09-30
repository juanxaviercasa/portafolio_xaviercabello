import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Lock,
  Sparkles,
  Lightbulb,
  GraduationCap,
  Cpu,
  CheckCircle2,
  Calendar,
  Layers,
  Globe,
  Home,
  Info,
} from 'lucide-react';
import { PROJECTS_DATA } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { getDisplayUrl } from '@/lib/utils';
import type { Metadata } from 'next';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = PROJECTS_DATA.find((p) => p.id === params.id);
  if (!project) {
    return { title: 'Proyecto no encontrado' };
  }
  return {
    title: `${project.title} | Ficha Técnica & Aprendizajes · Xavier Cabello`,
    description: project.about || project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === params.id);
  if (currentIndex === -1) {
    notFound();
  }

  const project = PROJECTS_DATA[currentIndex];
  const prevProject = currentIndex > 0 ? PROJECTS_DATA[currentIndex - 1] : null;
  const nextProject =
    currentIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[currentIndex + 1] : null;

  const isCustomDomain = !project.liveUrl.includes('github.com');
  const displayUrl = isCustomDomain
    ? getDisplayUrl(project.liveUrl)
    : `github.com/juanxaviercasa/${project.id}`;

  return (
    <div className="min-h-screen bg-canvas text-[#d0d6e0] pb-24">
      {/* Top Floating Control Bar */}
      <div className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#09090b]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Back to Home / Catalogue */}
          <Link
            href="/#catalogo"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold text-zinc-300 shadow-bevel transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            <span>Volver a la pantalla principal</span>
          </Link>

          {/* Breadcrumb / Title Snippet */}
          <div className="hidden md:flex items-center gap-2 font-mono text-xs text-zinc-400">
            <Link href="/" className="hover:text-zinc-200 transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-zinc-500">Proyectos</span>
            <span>/</span>
            <span className="text-emerald-400 font-medium truncate max-w-[240px]">
              {project.title}
            </span>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300 shadow-bevel transition-all hover:border-white/[0.18] hover:text-[#f7f8f8]"
              >
                <Github className="h-3.5 w-3.5" />
                <span>Código</span>
              </a>
            )}

            {/* Direct Web App Launcher */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-1.5 text-xs font-bold text-[#08090a] shadow-bevel transition-all hover:bg-emerald-400 active:scale-95"
            >
              <span>Ver Web App</span>
              <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Page Container */}
      <main className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 space-y-10">
        {/* Project Header Summary */}
        <section className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <Badge variant="success" className="font-mono uppercase tracking-wider text-[11px]">
              {project.category}
            </Badge>

            {project.year && (
              <Badge variant="outline" className="font-mono text-zinc-400 text-[11px]">
                Año {project.year}
              </Badge>
            )}

            {/* SSL Subdomain badge */}
            <div className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-black/40 px-2.5 py-1 font-mono text-[11px] text-zinc-300">
              <Lock className="h-3 w-3 text-emerald-400" />
              <span>https://{displayUrl}</span>
            </div>

            {project.metrics && (
              <span className="font-mono text-[11px] text-zinc-500">
                · {project.metrics}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#f7f8f8] leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-4xl">
            {project.description}
          </p>
        </section>

        {/* High-Resolution Project Showcase Container (Open Design Browser Frame) */}
        <section className="overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0d0e11] shadow-2xl shadow-black">
          {/* Browser Chrome Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#121316] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            </div>

            <div className="flex items-center gap-2 rounded border border-white/[0.06] bg-black/60 px-3 py-1 font-mono text-xs text-zinc-300">
              <Lock className="h-3 w-3 text-emerald-400 shrink-0" />
              <span>https://{displayUrl}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="hidden sm:inline font-mono text-[10px] text-emerald-400">En Vivo</span>
            </div>
          </div>

          {/* Full High-Resolution Visual Showcase (Direct image view, no sandbox iframe) */}
          <div className="relative aspect-video w-full bg-[#08090a]">
            <Image
              src={project.image}
              alt={`Vista en producción de ${project.title}`}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1200px) 100vw, 1152px"
            />
          </div>

          {/* Showcase Banner / Action Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] bg-[#121316] p-4 sm:px-6">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span>Despliegue verificado en producción</span>
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-xs font-bold text-[#08090a] shadow-bevel transition-all hover:bg-emerald-400 active:scale-95"
            >
              <span>Ver en vivo</span>
              <ExternalLink className="h-4 w-4 stroke-[2.5]" />
            </a>
          </div>
        </section>

        {/* Detailed Sections: About & Pedagogical Value */}
        <section className="space-y-6">
          {/* 1. ¿De qué trata el proyecto? */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0f1013] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              <Sparkles className="h-4 w-4" />
              <span>¿De qué trata este proyecto?</span>
            </div>

            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
              {project.about || project.description}
            </p>

            {/* Explicación Sencilla */}
            {project.simpleExplanation && (
              <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
                <div className="flex items-center gap-2 mb-3 text-sm font-bold text-blue-400">
                  <Info className="h-4 w-4" />
                  <span>En palabras sencillas</span>
                </div>
                <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
                  {project.simpleExplanation}
                </p>
              </div>
            )}

            {/* Cómo aplicarlo a tu negocio */}
            {project.howToApply && project.howToApply.length > 0 && (
              <div className="mt-4 rounded-xl border border-purple-500/20 bg-purple-500/5 p-5">
                <div className="flex items-center gap-2 mb-3 text-sm font-bold text-purple-400">
                  <Lightbulb className="h-4 w-4" />
                  <span>Ideas para aplicarlo en tu negocio</span>
                </div>
                <ul className="space-y-2">
                  {project.howToApply.map((idea, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm sm:text-base text-purple-100/90 leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                      <span>{idea}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Highlights Chips */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 font-mono text-xs text-emerald-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>{highlight}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* 2. Qué aprendí como desarrollador & Qué puedo enseñar a los estudiantes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card A: Qué aprendí como desarrollador */}
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-b from-amber-500/[0.05] via-[#0f1013] to-[#0f1013] p-6 sm:p-7 space-y-4 shadow-bevel">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-2.5 text-amber-400">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-[#f7f8f8]">
                    Qué aprendí como desarrollador
                  </h2>
                  <span className="font-mono text-xs text-amber-400/80">
                    Retos técnicos, arquitectura y buenas prácticas
                  </span>
                </div>
              </div>

              <ul className="space-y-3 pt-2">
                {project.whatILearned && project.whatILearned.length > 0 ? (
                  project.whatILearned.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-zinc-400">
                    Diseño e implementación de arquitectura full-stack optimizada para producción.
                  </li>
                )}
              </ul>
            </div>

            {/* Card B: Qué puedo enseñar a los estudiantes */}
            <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-indigo-500/[0.05] via-[#0f1013] to-[#0f1013] p-6 sm:p-7 space-y-4 shadow-bevel">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-2.5 text-indigo-400">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-[#f7f8f8]">
                    Qué puedo enseñar a los estudiantes
                  </h2>
                  <span className="font-mono text-xs text-indigo-400/80">
                    Habilidades prácticas, Vibe Coding y monetización
                  </span>
                </div>
              </div>

              <ul className="space-y-3 pt-2">
                {project.whatITeach && project.whatITeach.length > 0 ? (
                  project.whatITeach.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-zinc-400">
                    Metodologías de desarrollo rápido y publicación con costo cero de infraestructura.
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* 3. Arquitectura Técnica & Tecnologías */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0f1013] p-6 sm:p-7 space-y-5">
            {project.architecture && (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 font-semibold">
                  <Cpu className="h-4 w-4" />
                  <span>Arquitectura Técnica & Despliegue</span>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-black/50 p-4 font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.architecture}
                </div>
              </div>
            )}

            <div>
              <span className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2.5 font-semibold">
                Tecnologías y Librerías Utilizadas:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-200 hover:border-emerald-500/30 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Adjacent Navigation: Prev & Next Project */}
        <section className="border-t border-white/[0.08] pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevProject ? (
              <Link
                href={`/proyectos/${prevProject.id}`}
                className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#0e0f12] p-4 hover:border-emerald-500/40 hover:bg-white/[0.02] transition-all"
              >
                <span className="flex items-center gap-1 font-mono text-xs text-zinc-500 group-hover:text-emerald-400 transition-colors">
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Proyecto Anterior</span>
                </span>
                <span className="mt-2 text-sm font-bold text-[#f7f8f8] truncate">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {nextProject && (
              <Link
                href={`/proyectos/${nextProject.id}`}
                className="group flex flex-col justify-between items-end rounded-xl border border-white/[0.08] bg-[#0e0f12] p-4 hover:border-emerald-500/40 hover:bg-white/[0.02] transition-all text-right"
              >
                <span className="flex items-center gap-1 font-mono text-xs text-zinc-500 group-hover:text-emerald-400 transition-colors">
                  <span>Siguiente Proyecto</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
                <span className="mt-2 text-sm font-bold text-[#f7f8f8] truncate">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>
        </section>

        {/* Bottom Return Banner */}
        <section className="rounded-2xl border border-white/[0.08] bg-gradient-to-r from-emerald-500/[0.08] via-transparent to-indigo-500/[0.08] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-bold text-[#f7f8f8]">
              ¿Quieres explorar el resto de proyectos?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Catálogo completo con 21 aplicaciones verificadas en producción.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/#catalogo"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-[#121316] px-4 py-2.5 text-xs font-semibold text-[#f7f8f8] shadow-bevel hover:bg-white/[0.08] transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Volver a la pantalla principal</span>
            </Link>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-xs font-bold text-[#08090a] shadow-bevel hover:bg-emerald-400 transition-all"
            >
              <span>Ver Web App</span>
              <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
