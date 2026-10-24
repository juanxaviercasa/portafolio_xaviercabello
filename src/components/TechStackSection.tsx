import React from 'react';
import {
  Layers,
  Server,
  Database,
  Sparkles,
  Shield,
  Terminal,
  ArrowUpRight,
  Smartphone,
} from 'lucide-react';

interface TechItem {
  name: string;
  badge: string;
  role: string;
}

interface TechLayer {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  description: string;
  items: TechItem[];
}

const TECH_LAYERS: TechLayer[] = [
  {
    id: 'frontend',
    title: 'Frontend, UI/UX & Diseño Figma',
    icon: Layers,
    tag: 'Figma & Client-Side',
    description: 'Maquetación UI/UX en Figma, diseño responsivo móvil y código frontend fluido.',
    items: [
      { name: 'Figma UI/UX & Tokens', badge: 'Diseño', role: 'Maquetación, Auto-Layout y Prototipos' },
      { name: 'TypeScript & React 19', badge: 'Core', role: 'Tipado estricto e interactividad' },
      { name: 'Next.js 14 / 15', badge: 'Framework', role: 'App Router, SSR y SEO avanzado' },
      { name: 'Astro 5 & Tailwind', badge: 'Velocidad', role: 'Diseño móvil y 95+ PageSpeed' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Motores de Cálculo',
    icon: Server,
    tag: 'APIs & Python',
    description: 'Microservicios veloces, lógica matemática y automatización de procesos.',
    items: [
      { name: 'Node.js & Express', badge: 'Runtime', role: 'APIs escalables y tiempo real' },
      { name: 'Python 3.12', badge: 'Ciencia & IA', role: 'Álgebra, cálculo y automatización' },
      { name: 'FastAPI', badge: 'Alta Velocidad', role: 'Endpoints asíncronos para IA' },
      { name: 'REST & Webhooks', badge: 'Integración', role: 'Conexión segura entre plataformas' },
    ],
  },
  {
    id: 'data',
    title: 'Bases de Datos & CMS',
    icon: Database,
    tag: 'SQL & Gestores Web',
    description: 'Bases de datos seguras, gestión de contenidos institucionales y modo offline.',
    items: [
      { name: 'PostgreSQL & MySQL', badge: 'SQL', role: 'Datos relacionales de alta integridad' },
      { name: 'WordPress & Headless CMS', badge: 'CMS', role: 'Gestión de contenidos y noticias' },
      { name: 'Prisma & Drizzle', badge: 'ORM', role: 'Consultas seguras y tipadas' },
      { name: 'Dexie / IndexedDB', badge: 'Offline', role: 'Persistencia local en celular y PC' },
    ],
  },
  {
    id: 'ai-tools',
    title: 'IA Generativa & Simulación',
    icon: Sparkles,
    tag: 'RAG, Audio & 3D',
    description: 'Tutores inteligentes, gráficas matemáticas 2D/3D y síntesis de ondas cerebrales.',
    items: [
      { name: 'Arquitectura RAG', badge: 'IA Real', role: 'Respuestas precisas con tus documentos' },
      { name: 'KaTeX, Manim & LaTeX', badge: 'Matemática', role: 'Fórmulas y teoremas interactivos' },
      { name: 'Canvas 2D & WebGL', badge: 'Gráficos', role: 'Laboratorios de física y geometría' },
      { name: 'Web Audio API', badge: 'Neuro-Audio', role: 'Frecuencias Alfa/Theta en vivo' },
    ],
  },
  {
    id: 'security-quality',
    title: 'Criptografía & Calidad',
    icon: Shield,
    tag: 'Zero-Knowledge',
    description: 'Blindaje de datos en el navegador, pruebas automatizadas y despliegues limpios.',
    items: [
      { name: 'AES-GCM 256 bits', badge: 'Blindaje', role: 'Cifrado militar directo en navegador' },
      { name: 'PBKDF2 (100k Rondas)', badge: 'Llaves', role: 'Protección total de contraseñas' },
      { name: 'Vitest & Playwright', badge: 'Calidad', role: 'Verificación automática de funciones' },
      { name: 'GitHub Actions', badge: 'CI/CD', role: 'Actualización continua sin caídas' },
    ],
  },
  {
    id: 'cloud-mobile',
    title: 'Cloud Edge, Móviles & PWA',
    icon: Smartphone,
    tag: 'Apps Instalables',
    description: 'Aplicaciones que se instalan en el celular como app nativa y servidores a $0/mes.',
    items: [
      { name: 'Cloudflare Pages', badge: 'Red Global', role: 'Velocidad extrema y SSL incluido' },
      { name: 'Progressive Web Apps', badge: 'Móvil / PC', role: 'Instalable en Android, iOS y Windows' },
      { name: 'Vercel & Docker', badge: 'Cloud', role: 'Despliegues instantáneos y estables' },
      { name: 'Arquitectura Multi-Dominio', badge: '16+ Sitios', role: 'Ecosistema completo de subdominios' },
    ],
  },
];

export function TechStackSection() {
  return (
    <section
      id="stack"
      aria-labelledby="tech-title"
      className="relative overflow-hidden rounded-[2rem] border-2 border-orange-300/80 dark:border-orange-400/45 bg-gradient-to-br from-white/95 via-orange-50/40 to-purple-50/50 dark:from-[#2c1654] dark:via-[#381c68] dark:to-[#491e56] p-6 sm:p-8 lg:p-11 shadow-bevel-elevated backdrop-blur-md"
    >
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-orange-300/60 dark:border-orange-400/35 pb-6 mb-8">
        <div className="space-y-2.5">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/60 bg-orange-500/15 dark:bg-orange-500/25 px-4 py-1 text-xs font-mono font-extrabold text-orange-900 dark:text-amber-200">
            <Terminal className="h-3.5 w-3.5 text-orange-500 dark:text-amber-300" />
            <span>03 / ARSENAL TECNOLÓGICO EN 6 CAPAS</span>
          </div>
          <h2
            id="tech-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Potencia <span className="text-phoenix-gradient">Web, Móvil &amp; Inteligencia Artificial</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-amber-50/90 max-w-2xl font-medium leading-relaxed">
            Domino todo el ciclo de vida del producto: desde el diseño visual que enamora en el celular
            hasta motores matemáticos, IA y seguridad criptográfica.
          </p>
        </div>

        <a
          href="https://github.com/juanxaviercasa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start md:self-auto rounded-xl border border-orange-400/60 bg-white/90 dark:bg-[#3d2170] px-4 py-2.5 font-mono text-xs font-extrabold text-orange-900 dark:text-amber-200 shadow-sm hover:border-amber-400 transition-all shrink-0"
        >
          <span>Ver código en GitHub</span>
          <ArrowUpRight className="h-4 w-4 text-orange-500 dark:text-amber-400" />
        </a>
      </div>

      {/* Symmetrical 6-Card Grid (1 col mobile, 2 cols tablet, 3 cols desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {TECH_LAYERS.map((layer) => {
          const Icon = layer.icon;
          return (
            <div
              key={layer.id}
              className="group flex flex-col justify-between rounded-2xl border border-orange-300/80 dark:border-orange-400/40 bg-white/95 dark:bg-[#361d66]/95 p-5 sm:p-6 shadow-md transition-all duration-300 hover:border-orange-500 dark:hover:border-amber-400 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-purple-500/20 text-orange-600 dark:text-amber-300 border border-orange-300 dark:border-orange-400/45 group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-orange-700 dark:text-amber-300">
                      {layer.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-1.5">
                  {layer.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-amber-50/90 mb-4 leading-relaxed">
                  {layer.description}
                </p>

                <div className="space-y-2 border-t border-orange-200/70 dark:border-purple-400/35 pt-3.5">
                  {layer.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between gap-2 rounded-xl p-2 bg-orange-50/60 dark:bg-[#432378]/75 hover:bg-orange-100/70 dark:hover:bg-[#4e298c] transition-colors"
                    >
                      <div className="min-w-0">
                        <span className="block text-xs font-mono font-bold text-slate-900 dark:text-white truncate">
                          {item.name}
                        </span>
                        <span className="block text-[11px] text-slate-600 dark:text-amber-100/85 truncate">
                          {item.role}
                        </span>
                      </div>
                      <span className="shrink-0 rounded-md border border-orange-300/80 dark:border-amber-400/45 bg-white dark:bg-[#2f1859] px-2 py-0.5 font-mono text-[10px] font-extrabold text-orange-800 dark:text-amber-300">
                        {item.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
