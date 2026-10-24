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
        canvas: '#090514',
        panel: '#0f0722',
        phoenix: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          fire: '#ea580c',
          magma: '#dc2626',
        },
        amethyst: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        cosmic: {
          obsidian: '#090514',
          deep: '#0f0722',
          card: '#150c2e',
          elevated: '#1d103f',
          border: 'rgba(168, 85, 247, 0.2)',
          light: '#fdf4ff',
          pearl: '#faf5ff',
        },
        surface: {
          DEFAULT: '#141517',
          elevated: '#191a1d',
          hover: '#222328',
        },
        linear: {
          accent: '#7c3aed',
          interactive: '#8b5cf6',
          hover: '#a855f7',
          active: '#6d28d9',
        },
        brand: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          accent: '#f59e0b',
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
          'var(--font-sans)',
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
