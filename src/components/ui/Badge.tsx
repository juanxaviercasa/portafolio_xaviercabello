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
    default: 'bg-zinc-800/80 text-zinc-300 border-zinc-700/60',
    outline: 'bg-transparent text-zinc-400 border-zinc-800',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    secondary: 'bg-zinc-800 text-zinc-200 border-transparent',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-medium transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
