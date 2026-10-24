import { ProjectPreview } from '@/components/ProjectPreview';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers,
  GraduationCap,
  Zap,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from 'lucide-react';
import { portfolioConfig } from '@/data/portfolio.config';
import { PROJECTS_DATA } from '@/data/projects';
import { CASE_STUDIES } from '@/data/case-studies';
import { assetPath } from '@/lib/utils';

const { owner } = portfolioConfig;

/** Contenedor visual común a todas las secciones de la portada. */
const SECTION_SHELL =
  'relative overflow-hidden rounded-[2rem] border-2 border-orange-300/80 dark:border-orange-400/45 bg-gradient-to-br from-white/95 via-indigo-50/45 to-violet-50/60 dark:from-[#2c1654] dark:via-[#381c68] dark:to-[#491e56] p-6 sm:p-10 lg:p-12 shadow-bevel-elevated';

const CARD =
  'rounded-2xl border border-orange-300/80 dark:border-orange-400/40 bg-white/95 dark:bg-[#361d66]/95 shadow-md';

/** Encabezado de sección: etiqueta corta + título + (opcional) una línea de apoyo. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  action,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div className="max-w-2xl space-y-2">
        <p className="font-mono text-xs font-extrabold uppercase tracking-wider text-orange-600 dark:text-amber-300">
          {eyebrow}
        </p>
        <h2
          id={id}
          className="text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl"
        >
          {title}
        </h2>
        {intro && (
          <p className="text-sm font-medium leading-relaxed text-slate-700 dark:text-amber-50/90 sm:text-base">
            {intro}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Proyectos destacados                                                */
/* ------------------------------------------------------------------ */

export function FeaturedProjects() {
  return (
    <section id="destacados" aria-labelledby="featured-title" className={SECTION_SHELL}>
      <SectionHeading
        id="featured-title"
        eyebrow="Proyectos destacados"
        title={
          <>
            De la necesidad <span className="text-phoenix-gradient">al producto.</span>
          </>
        }
        intro="Tres puntos de partida para aprender: construir una interacción, organizar datos y presentar una identidad. Explora el problema, las decisiones y los límites de cada caso."
        action={
          <a href="#catalogo" className="text-link shrink-0">
            Ver los {PROJECTS_DATA.length} proyectos <ArrowRight size={15} aria-hidden="true" />
          </a>
        }
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CASE_STUDIES.map((study) => {
          const project = PROJECTS_DATA.find((p) => p.id === study.projectId);
          if (!project) return null;
          return (
            <article
              key={project.id}
              className={`group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 dark:hover:border-amber-400 ${CARD}`}
            >
              <Link
                href={`/proyectos/${project.id}`}
                className="relative block aspect-[16/10] w-full overflow-hidden bg-[#2b1550]"
                aria-label={`Ver proyecto: ${project.title}`}
              >
                <ProjectPreview project={project} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px" />
              </Link>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-orange-600 dark:text-amber-300">
                  {study.area}
                </p>
                <h3 className="mt-2 text-lg font-black leading-snug text-slate-900 dark:text-white">
                  <Link href={`/proyectos/${project.id}`}>{study.title}</Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-purple-100/90">
                  {study.summary}
                </p>
                <div className="mt-5 flex items-center justify-between gap-2 border-t border-orange-200/60 pt-4 dark:border-purple-500/30">
                  <Link
                    href={`/proyectos/${project.id}`}
                    className="text-xs font-extrabold text-orange-700 hover:underline dark:text-amber-300"
                  >
                    Ver detalles
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-orange-600 dark:text-amber-100 dark:hover:text-amber-300"
                  >
                    Visitar sitio <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Servicios                                                           */
/* ------------------------------------------------------------------ */

const SERVICES_LIST = [
  {
    icon: Code2,
    title: 'Dale a tu negocio su propia herramienta',
    text: 'Si tu operación depende de tareas manuales o información dispersa, puedo convertir ese proceso en una aplicación: directorios, calculadoras, paneles y herramientas para tu equipo.',
    example: 'todo-lima',
    label: 'Ver cómo lo planteé en Todo Lima',
  },
  {
    icon: GraduationCap,
    title: 'Convierte lo que enseñas en una plataforma',
    text: 'Lleva tus contenidos a simuladores, evaluaciones y laboratorios interactivos. Mi experiencia como docente me permite trabajar contigo tanto la lógica del aprendizaje como el desarrollo.',
    example: 'funciones-lab',
    label: 'Explorar Funciones Lab',
  },
  {
    icon: Zap,
    title: 'Pon la IA a trabajar en tus procesos',
    text: 'Integro asistentes y automatizaciones para consultar documentos, organizar información y apoyar tareas repetitivas. Definimos qué delegar a la IA y cómo revisar sus respuestas.',
    example: 'hazlo-crecer',
    label: 'Conocer Hazlo Crecer',
  },
  {
    icon: Layers,
    title: 'Haz visible lo que una fórmula no muestra',
    text: 'Convierto modelos matemáticos y físicos en simuladores para experimentar. Desarrollo experiencias visuales donde puedes cambiar condiciones y observar cómo responde el sistema.',
    example: 'mundos-simulados',
    label: 'Explorar Mundos Simulados',
  },
];

export function Services() {
  return (
    <section id="servicios" aria-labelledby="services-title" className={SECTION_SHELL}>
      <SectionHeading
        id="services-title"
        eyebrow="Servicios"
        title={
          <>
            Tu próximo proyecto <span className="text-phoenix-gradient">puede empezar aquí.</span>
          </>
        }
        intro="¿Quieres lanzar un producto, digitalizar un proceso o ampliar tu plataforma educativa? Puedo encargarme del desarrollo o aportar a tu equipo."
        action={
          <a
            href={owner.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary shrink-0 self-start md:self-auto"
          >
            Cuéntame tu proyecto <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        }
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {SERVICES_LIST.map(({ icon: Icon, ...service }) => (
          <article key={service.title} className={`flex flex-col p-6 ${CARD}`}>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-orange-300 bg-orange-500/10 text-orange-600 dark:border-orange-400/40 dark:text-amber-300">
              <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white">{service.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700 dark:text-amber-50/90">
              {service.text}
            </p>
            <Link href={`/proyectos/${service.example}`} className="text-link mt-5">
              {service.label} <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sobre mí (incluye stack y forma de trabajo)                         */
/* ------------------------------------------------------------------ */

const PRINCIPLES = [
  {
    title: 'La necesidad define el producto',
    text: 'Empiezo por las personas, la tarea que necesitan resolver y lo que debe permitirles hacer la herramienta. Esa definición guía el diseño y el código.',
  },
  {
    title: 'La docencia aporta método',
    text: 'Descompongo problemas, ordeno procesos y conecto conceptos. Es la misma forma de trabajar que aplico al enseñar matemáticas y al desarrollar software.',
  },
  {
    title: 'La IA forma parte del trabajo',
    text: 'Uso IA para explorar, diseñar y desarrollar. Mi trabajo es dirigir ese proceso, revisar lo que produce y decidir cómo encaja en el producto.',
  },
];

const STACK = [
  { group: 'Frontend', items: ['TypeScript', 'React', 'Next.js', 'Astro', 'Tailwind', 'Figma'] },
  { group: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Prisma'] },
  { group: 'IA y automatización', items: ['RAG', 'LLMs', 'Manim', 'FFmpeg'] },
  { group: 'Computación visual', items: ['Canvas', 'WebGL', 'KaTeX', 'Web Audio API'] },
  { group: 'Infraestructura', items: ['Cloudflare', 'Vercel', 'Docker', 'GitHub Actions', 'PWA'] },
];

export function About() {
  return (
    <section id="sobre-mi" aria-labelledby="about-title" className={SECTION_SHELL}>
      <SectionHeading
        id="about-title"
        eyebrow="Sobre mí"
        title={
          <>
            La base es matemática. <span className="text-phoenix-gradient">El campo de acción es digital.</span>
          </>
        }
        action={
          <div className="flex shrink-0 flex-wrap gap-2.5">
            <a href={owner.socials.linkedin} target="_blank" rel="noopener noreferrer" className="button-secondary">
              <Linkedin size={15} aria-hidden="true" /> LinkedIn
            </a>
            <a href={owner.socials.github} target="_blank" rel="noopener noreferrer" className="button-secondary">
              <Github size={15} aria-hidden="true" /> GitHub
            </a>
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Bio + forma de trabajo */}
        <div className="space-y-6 lg:col-span-7">
          <p className="text-base leading-relaxed text-slate-700 dark:text-amber-50/90 sm:text-lg">
            Soy licenciado en Educación Matemática y desarrollador web full stack. Mi trayectoria
            docente se conecta con laboratorios como Funciones Lab y con proyectos de generación
            de videos matemáticos, simulación e IA educativa. También construyo herramientas para
            negocios a través de Todo Lima, Hazlo Crecer y Nube para Pymes. Aquí reúno{' '}
            <strong className="text-slate-900 dark:text-white">{PROJECTS_DATA.length} proyectos</strong>{' '}
            que conectan educación, negocios, diseño e inteligencia artificial.
          </p>
          <p className="text-base leading-relaxed text-slate-700 dark:text-amber-50/90">
            Trabajo desde la lógica del producto hasta su interfaz, sus datos y su publicación.
            Esa visión conecta proyectos distintos: un simulador necesita un modelo; una herramienta
            de negocio, un proceso; un asistente, información que pueda consultar.
          </p>
          <p className="text-base leading-relaxed text-slate-700 dark:text-amber-50/90">
            En el Taller Fénix comparto ese proceso y enseño a otras personas a desarrollar
            sus propias aplicaciones con IA, desde la definición de la idea hasta su publicación.
          </p>

          <ul className="space-y-4">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 font-mono text-sm font-black text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-black text-slate-900 dark:text-white">{p.title}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-700 dark:text-amber-50/85">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-amber-50/90">
            Fénix 357 representa mi forma de avanzar: aprender, poner a prueba lo construido
            y reconstruirlo con más criterio en cada versión.
          </p>
        </div>

        {/* Stack */}
        <div className={`p-6 lg:col-span-5 ${CARD}`}>
          <h3 className="font-mono text-xs font-extrabold uppercase tracking-wider text-orange-700 dark:text-amber-300">
            Tecnología con la que construyo
          </h3>
          <dl className="mt-4 space-y-4">
            {STACK.map((layer) => (
              <div key={layer.group}>
                <dt className="text-xs font-bold text-slate-500 dark:text-purple-200">{layer.group}</dt>
                <dd className="mt-1.5 flex flex-wrap gap-1.5">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-orange-300/75 bg-orange-50/80 px-2 py-0.5 font-mono text-[11px] font-bold text-purple-950 dark:border-orange-400/40 dark:bg-[#432378]/80 dark:text-amber-100"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Taller Fénix (banner compacto)                                      */
/* ------------------------------------------------------------------ */

export function Training() {
  const trainingUrl = assetPath(portfolioConfig.training.url);
  return (
    <section
      id="formacion"
      aria-labelledby="training-title"
      className="flex flex-col items-start justify-between gap-5 rounded-[2rem] border-2 border-amber-400/80 bg-gradient-to-r from-amber-50/95 to-purple-50/85 p-6 shadow-bevel-elevated dark:border-amber-400/50 dark:from-[#3b1c63] dark:to-[#63243b] sm:p-8 lg:flex-row lg:items-center"
    >
      <div className="space-y-1.5">
        <p className="font-mono text-xs font-extrabold uppercase tracking-wider text-orange-600 dark:text-amber-300">
          También puedes aprender a construir
        </p>
        <h2 id="training-title" className="text-xl font-black text-slate-900 dark:text-white sm:text-2xl">
          Tu idea también merece llegar a la web.
        </h2>
        <p className="text-sm text-slate-700 dark:text-amber-50/90">
          En el Taller Fénix te enseño el proceso que aplico a mis proyectos: definir una idea, desarrollarla con IA y publicar tu aplicación con dominio propio.
        </p>
      </div>
      <figure className="w-full max-w-md shrink-0 lg:w-56"><Image src={assetPath('/projects/captures/taller-web-cero.webp')} alt="Captura real del sitio del Taller Fénix" width={1440} height={1000} className="aspect-video w-full rounded-xl object-cover object-top" /><figcaption className="mt-1 text-[10px] text-slate-600 dark:text-amber-100">Captura real del taller publicado</figcaption></figure>
      <a href={trainingUrl} className="button-primary shrink-0">
        Conocer el Taller Fénix <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contacto                                                            */
/* ------------------------------------------------------------------ */

export function Contact() {
  const email = owner.socials.email?.replace('mailto:', '');
  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className={SECTION_SHELL}
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Retrato de Xavier Cabello */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-[1.75rem] border-2 border-amber-300/70 bg-gradient-to-b from-[#3d1a66] via-[#592159] to-[#7c2d12] shadow-[0_0_40px_rgba(249,115,22,0.40)] lg:max-w-none">
            <div className="relative aspect-[4/4.5] w-full">
              <Image
                src={assetPath('/images/xavier-cabello.webp')}
                alt="Xavier Cabello, Desarrollador Web Full Stack"
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#200c3b]/90 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex flex-col gap-1">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-400/50 bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-300 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Disponible para nuevos proyectos
                </span>
                <p className="text-xl font-black leading-tight text-white mt-1">Xavier Cabello</p>
                <p className="font-mono text-xs font-semibold text-amber-300">Desarrollador Web Full Stack</p>
              </div>
            </div>
          </div>
        </div>

        {/* Información y Vías de Contacto */}
        <div className="space-y-6 lg:col-span-7">
          <div className="space-y-3">
            <p className="font-mono text-xs font-extrabold uppercase tracking-wider text-orange-600 dark:text-amber-300">
              Contacto
            </p>
            <h2
              id="contact-title"
              className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
            >
              ¿Qué quieres <span className="text-phoenix-gradient">poner en marcha?</span>
            </h2>
            <p className="text-base font-medium leading-relaxed text-slate-700 dark:text-amber-50/90 sm:text-lg">
              Una plataforma educativa, un sistema para tu negocio, un simulador o una integración con IA. Puedo desarrollar el proyecto o sumarme a tu equipo. Cuéntame qué quieres construir y en qué punto estás.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={owner.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary px-7 py-3.5 text-base"
            >
              Hablemos de tu proyecto <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            {email && (
              <a href={owner.socials.email} className="button-secondary px-6 py-3.5 text-sm">
                <Mail size={17} aria-hidden="true" /> {email}
              </a>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-6 border-t border-orange-200/60 dark:border-purple-500/30 pt-6 text-xs font-bold text-slate-700 dark:text-amber-100">
            <a href={owner.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-orange-600 dark:hover:text-amber-300 transition-colors">
              <Linkedin size={15} aria-hidden="true" /> LinkedIn
            </a>
            <a href={owner.socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-orange-600 dark:hover:text-amber-300 transition-colors">
              <Github size={15} aria-hidden="true" /> GitHub
            </a>
            {owner.socials.tiktok && (
              <a href={owner.socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 dark:hover:text-amber-300 transition-colors">
                TikTok
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

