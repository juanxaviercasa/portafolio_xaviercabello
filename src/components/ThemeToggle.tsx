'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isReady = resolvedTheme !== undefined;
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      disabled={!isReady}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Modo Claro' : 'Modo Oscuro Luminoso'}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-300/80 dark:border-orange-400/50 bg-white/90 dark:bg-[#3d2170] text-orange-700 dark:text-amber-300 shadow-sm transition-all hover:border-amber-400 hover:scale-105"
    >
      {isDark ? (
        <Sun className="h-4.5 w-4.5 text-amber-300" aria-hidden="true" />
      ) : (
        <Moon className="h-4.5 w-4.5 text-orange-600" aria-hidden="true" />
      )}
    </button>
  );
}
