'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronDown, Menu, MessageCircle } from 'lucide-react';
import { portfolioConfig } from '@/data/portfolio.config';
import { assetPath } from '@/lib/utils';

type NavItem = { href: string; label: string; isStatic?: boolean };

const NAV_LINKS: NavItem[] = [
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/taller-fenix/', label: 'Taller Fénix', isStatic: true },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto' },
];

function PhoenixBrandCrest() {
  return (
    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-amber-300/90 bg-[#1e0f3d] p-0.5 shadow-[0_0_22px_rgba(249,115,22,0.65)] transition-transform duration-300 group-hover:scale-105">
      <Image
        src={assetPath('/images/phoenix-logo.webp')}
        alt="Emblema de Fénix 357"
        width={44}
        height={44}
        className="h-full w-full rounded-full object-cover"
        priority
      />
    </div>
  );
}

function NavigationLink({
  item,
  mobile = false,
}: {
  item: (typeof NAV_LINKS)[number];
  mobile?: boolean;
}) {
  const className = mobile
    ? 'block rounded-xl px-4 py-3 text-sm font-bold text-[var(--text)] transition-colors hover:bg-amber-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500'
    : 'rounded-lg px-2.5 py-2 text-sm font-bold text-slate-800 transition-colors hover:bg-orange-500/15 hover:text-orange-700 dark:text-purple-100 dark:hover:text-amber-300';

  return item.isStatic ? (
    <a href={item.href} className={className}>
      {item.label}
    </a>
  ) : (
    <Link href={item.href} prefetch={false} className={className}>
      {item.label}
    </Link>
  );
}

export function Header() {
  const projectContact = portfolioConfig.owner.socials.whatsapp;
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const closeMobileMenu = () => {
    if (mobileMenuRef.current) mobileMenuRef.current.open = false;
  };

  return (
    <header className="site-header">
      <div className="page-width">
        <div className="flex min-h-[72px] items-center justify-between gap-2 py-2 sm:min-h-[80px] sm:gap-3">
          <Link
            href="/"
            prefetch={false}
            className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
            aria-label="Xavier Cabello, inicio"
          >
            <PhoenixBrandCrest />
            <span className="min-w-0">
              <span className="block truncate text-sm font-black tracking-tight text-slate-900 transition-colors group-hover:text-orange-600 dark:text-amber-50 sm:text-base">
                Xavier Cabello
              </span>
              <span className="hidden truncate font-mono text-[10px] font-semibold text-purple-800 dark:text-amber-200/90 min-[360px]:block sm:text-xs">
                Vibecoding con IA · Educación
              </span>
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <nav aria-label="Navegación principal" className="hidden items-center gap-0.5 xl:flex">
              {NAV_LINKS.map((item) => (
                <NavigationLink key={item.href} item={item} />
              ))}
            </nav>

            <a
              href={projectContact}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-2.5 py-2 text-xs font-extrabold text-white shadow-[0_4px_16px_rgba(249,115,22,0.35)] transition hover:brightness-110 sm:px-4"
              aria-label="Cuéntame sobre tu proyecto por WhatsApp"
            >
              <span className="hidden sm:inline">Hablemos</span>
              <span className="hidden min-[400px]:inline sm:hidden">Chat</span>
              <MessageCircle className="h-4 w-4 sm:hidden min-[400px]:hidden" aria-hidden="true" />
              <ArrowUpRight className="hidden h-3.5 w-3.5 sm:block" aria-hidden="true" />
            </a>

            <details ref={mobileMenuRef} className="relative xl:hidden">
              <summary className="inline-flex min-h-10 cursor-pointer list-none items-center gap-1 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-2 text-xs font-bold text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500 [&::-webkit-details-marker]:hidden sm:gap-1.5 sm:px-3">
                <Menu size={16} aria-hidden="true" />
                <span>Menú</span>
                <ChevronDown className="hidden sm:block" size={13} aria-hidden="true" />
              </summary>
              <nav
                aria-label="Navegación principal"
                onClick={closeMobileMenu}
                className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-52 rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-2 shadow-xl"
              >
                {NAV_LINKS.map((item) => (
                  <NavigationLink key={item.href} item={item} mobile />
                ))}
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
