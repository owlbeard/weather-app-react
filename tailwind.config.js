/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '0.5rem',
    },
    extend: {
      backgroundColor: {
        chan: 'rgb(72, 72, 72, 0.7)',
      },
    },
  },
  plugins: [],
};
