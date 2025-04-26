/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#d0d9e8',
          200: '#a1b4d1',
          300: '#718fb9',
          400: '#426aa2',
          500: '#2d5282',
          600: '#224067',
          700: '#17304c',
          800: '#0e1f30',
          900: '#050f19',
        },
        yellow: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        green: {
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        sans: ['Ubuntu', 'system-ui', 'sans-serif'],
        heading: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};