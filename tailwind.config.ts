import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        light: 'var(--light)',
        dark: 'var(--dark)',
        blue: 'var(--bs-blue)',
        indigo: 'var(--bs-indigo)',
        purple: 'var(--bs-purple)',
        pink: 'var(--bs-pink)',
        red: 'var(--bs-red)',
        orange: 'var(--bs-orange)',
        yellow: 'var(--bs-yellow)',
        green: 'var(--bs-green)',
        teal: 'var(--bs-teal)',
        cyan: 'var(--bs-cyan)',
        white: 'var(--bs-white)',
        gray: 'var(--bs-gray)',
        grayDark: 'var(--bs-gray-dark)',
        bs: {
          primary: 'var(--bs-primary)',
          secondary: 'var(--bs-secondary)',
          success: 'var(--bs-success)',
        },
        infor: 'var(--bs-info)',
        warning: 'var(--bs-warning)',
        danger: 'var(--bs-danger)',
        font: {
          sans: 'var(--bs-font-sans-serif)',
          mono: 'var(--bs-font-monospace)',
          main: 'var(--main-font)',
          secondary: 'var(--secondary-font)',
        },
        gradient: 'var(--bs-gradient)',
      },
    },
  },
  plugins: [],
} satisfies Config;
