import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'success' | 'secondary';
  children: React.ReactNode;
}

export function Badge({
  variant = 'default',
  className,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: 'bg-purple-100 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200 border-purple-200 dark:border-purple-800/40 font-mono text-xs font-semibold',
    outline: 'bg-transparent text-purple-700 dark:text-purple-300 border-purple-200/80 dark:border-purple-800/50 font-mono text-xs font-semibold',
    success: 'bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-300/80 dark:border-amber-500/30 font-mono text-xs font-bold',
    secondary: 'bg-purple-50 dark:bg-purple-950/20 text-purple-800 dark:text-purple-200 border-transparent text-xs',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-0.5 font-medium transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
