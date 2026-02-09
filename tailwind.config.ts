import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary color palette (Indigo)
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        // Secondary color (Teal)
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#0c2f2a',
        },
      },
      boxShadow: {
        'elegant': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'admin-card': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'admin-hover': '0 20px 40px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'gradient-admin': 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
        'gradient-admin-dark': 'linear-gradient(135deg, #4338ca 0%, #3730a3 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
