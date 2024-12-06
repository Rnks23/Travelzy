/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        spice: 'var(--color-spice)',
        marigold: 'var(--color-marigold)',
        peacock: 'var(--color-peacock)',
        saffron: 'var(--color-saffron)',
        henna: 'var(--color-henna)',
      },
      backgroundColor: {
        'warm-light': '#FDF2E9',
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      animation: {
        'scroll-slow': 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
    },
  },
  plugins: [],
};