/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF7',
          100: '#FDF6E3',
          200: '#FCF3D7',
          300: '#FAEDC7',
          400: '#F7E4B0',
          500: '#F4DA93',
        },
        paper: {
          light: '#F5EDE4',
          DEFAULT: '#E6D5C7',
          dark: '#C4B5A8',
        },
        accent: {
          primary: '#D4A373',
          secondary: '#967259',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'system-ui',
          'sans-serif',
        ],
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
};