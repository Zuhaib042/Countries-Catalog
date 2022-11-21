/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'glowing': '#fe5395',
        'dark': '#d14277',
        'light': '#ec4c8a',
      },
    },
  },
  plugins: [],
};
