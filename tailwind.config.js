/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customRed: '#ff3c57',
        customBlue: '#3c57ff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
