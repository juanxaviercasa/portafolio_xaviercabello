import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CATEGORIES } from '@/data/portfolio.config';
import type { Project, ProjectCategoryId, ProjectHosting } from '@/types/project';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizeSearch(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

export function getDevelopmentLabel(project: Project): string {
  return project.developmentState === 'in_progress' ? 'En desarrollo' : 'Versión publicada';
}

export function getAvailabilityLabel(project: Project): string {
  if (project.preview?.kind === 'unavailable') return 'Demo no verificada';
  if (project.preview?.kind === 'local') return 'Vista previa local';
  if (project.preview?.kind === 'live') return 'Demo consultada';
  if (project.status === 'maintenance') return 'En mantenimiento';
  if (project.status === 'beta') return 'Beta pública';
  return 'En producción';
}

/**
 * Extracts a clean display hostname from a URL (e.g. "https://crm.xaviercabello.dev" -> "crm.xaviercabello.dev")
 */
export function getDisplayUrl(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.hostname + (parsed.pathname !== '/' ? parsed.pathname : '');
  } catch {
    return url.replace(/^https?:\/\//, '');
  }
}

/**
 * Prefija rutas locales ("/imagen.jpg") con el basePath del despliegue.
 * next/image con `unoptimized` NO añade el basePath automáticamente.
 * Las URLs absolutas (https://...) se devuelven sin cambios.
 */
export function assetPath(src: string): string {
  if (!src.startsWith('/')) return src;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${base}${src}`;
}

/** Etiqueta legible de una categoría ("pymes" -> "Herramientas para PyMEs"). */
export function getCategoryLabel(id: ProjectCategoryId): string {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

const HOSTING_LABELS: Record<ProjectHosting, string> = {
  cloudflare: 'Cloudflare Pages',
  siteground: 'SiteGround',
  vercel: 'Vercel',
  github: 'GitHub Pages',
};

/** Plataforma donde está publicada la versión en vivo del proyecto. */
export function getHostingLabel(project: Project): string | null {
  return project.hosting ? HOSTING_LABELS[project.hosting] : null;
}
