/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        chan: 'rgb(72, 72, 72, 0.7)',
      },
    },
  },
  plugins: [],
};
