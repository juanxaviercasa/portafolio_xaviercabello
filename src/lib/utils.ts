import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
