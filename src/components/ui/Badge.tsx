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
    default: 'bg-white/[0.04] text-zinc-300 border-white/[0.08] shadow-bevel font-mono text-[11px]',
    outline: 'bg-transparent text-zinc-400 border-white/[0.06] font-mono text-[11px]',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25 font-mono text-[11px]',
    secondary: 'bg-white/[0.03] text-zinc-300 border-transparent text-[11px]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-medium transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
