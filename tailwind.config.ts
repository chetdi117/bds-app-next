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
        primary: 'var(--pg-brand-primary)',
        secondary: 'var(--secondary)',
        light: 'var(--light)',
        dark: 'var(--pg-black)',
        blue: 'var(--pg-blue)',
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
        'grey-lighter': 'var(--pg-grey-lighter)',
        bs: {
          primary: 'var(--bs-primary)',
          secondary: 'var(--bs-secondary)',
          success: 'var(--bs-success)',
          gray: {
            100: 'var(--bs-gray-100)',
            200: 'var(--bs-gray-200)',
            300: 'var(--bs-gray-300)',
            400: 'var(--bs-gray-400)',
            500: 'var(--bs-gray-500)',
            600: 'var(--bs-gray-600)',
            700: 'var(--bs-gray-700)',
            800: 'var(--bs-gray-800)',
            900: 'var(--bs-gray-900)',
          },
          body: {
            'font-size': 'var(--bs-body-font-size)',
            'line-height': 'var(--bs-body-line-height)',
            'font-weight': 'var(--bs-body-font-weight)',
            color: 'var(--bs-body-color)',
          },
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
