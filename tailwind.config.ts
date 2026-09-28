import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#08090a',
        panel: '#0f1011',
        surface: {
          DEFAULT: '#141517',
          elevated: '#191a1d',
          hover: '#222328',
        },
        linear: {
          accent: '#5e6ad2',
          interactive: '#7170ff',
          hover: '#828fff',
          active: '#4752c4',
        },
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          accent: '#10b981',
        },
        zinc: {
          850: '#1e1f24',
          925: '#101114',
          975: '#08090a',
        },
      },
      boxShadow: {
        'inset-bevel': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'inset-subtle': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.04)',
        'elev-raised': '0 2px 4px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'elev-modal': '0 24px 48px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      letterSpacing: {
        tightest: '-0.025em',
        tighter: '-0.018em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.25s cubic-bezier(0.2, 0, 0, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
