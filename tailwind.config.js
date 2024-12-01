/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
