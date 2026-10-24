import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { portfolioConfig } from '@/data/portfolio.config';
import { assetPath } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/#catalogo', label: 'Proyectos' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#sobre-mi', label: 'Sobre mí' },
  { href: '/#contacto', label: 'Contacto' },
];

/**
 * Emblema Oficial del Ave Fénix 357 (Auténtico fénix de fuego, plumaje áureo y silueta real)
 */
function PhoenixBrandCrest() {
  return (
    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-amber-300/90 bg-[#1e0f3d] p-0.5 shadow-[0_0_22px_rgba(249,115,22,0.65)] transition-transform duration-300 group-hover:scale-110">
      <Image
        src={assetPath('/images/phoenix-logo.webp')}
        alt="Emblema Oficial Fénix 357"
        width={44}
        height={44}
        className="h-full w-full object-cover rounded-full"
        priority
      />
    </div>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="page-width">
        {/* Main Header Row */}
        <div className="flex min-h-[72px] sm:min-h-[80px] items-center justify-between gap-3 py-2">
          {/* Brand Identity with Vector Phoenix Crest */}
          <Link
            href="/"
            className="group flex items-center gap-3 min-w-0"
            aria-label="Xavier Cabello, inicio"
          >
            <PhoenixBrandCrest />
            <div className="min-w-0">
              <span className="block truncate text-sm sm:text-base font-black tracking-tight text-slate-900 dark:text-amber-50 group-hover:text-orange-600 dark:group-hover:text-amber-300 transition-colors">
                Xavier Cabello
              </span>
              <span className="block truncate font-mono text-[10px] sm:text-xs font-semibold text-purple-800 dark:text-amber-200/90">
                Vibecoding con IA · Educación
              </span>
            </div>
          </Link>

          {/* Desktop Navigation & Actions */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-bold text-slate-800 dark:text-purple-100 hover:bg-orange-500/15 dark:hover:bg-orange-500/20 hover:text-orange-700 dark:hover:text-amber-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Availability Status Pill */}
            <div
              className="hidden lg:inline-flex items-center gap-2 rounded-full border border-emerald-400/45 bg-emerald-500/15 px-3 py-1.5 text-[11px] font-mono font-bold text-emerald-800 dark:text-emerald-200"
              title="Disponible para contratación Full-Stack y proyectos llave en mano"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>Disponible</span>
            </div>



            <a
              href={portfolioConfig.owner.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-3.5 sm:px-4 py-2.5 text-xs font-extrabold text-white dark:text-slate-950 shadow-[0_4px_16px_rgba(249,115,22,0.45)] hover:brightness-110 transition-all shrink-0"
              aria-label="Hablemos por WhatsApp"
            >
              <span>Hablemos</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Mobile & Tablet Horizontal Navigation Pill Bar */}
        <nav
          aria-label="Secciones rápidas"
          className="flex md:hidden items-center gap-1.5 overflow-x-auto pb-2.5 pt-1 no-scrollbar border-t border-orange-300/40 dark:border-orange-400/25"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-lg border border-orange-300/60 dark:border-orange-400/35 bg-white/85 dark:bg-[#382066]/85 px-3 py-1.5 text-[11px] font-bold text-slate-800 dark:text-amber-100 hover:border-orange-500 dark:hover:border-amber-300 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
