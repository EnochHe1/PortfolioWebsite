const { default: Header } = require('./enoch-portfolio-website/src/Components/Header/Header');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}",
  './Components/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

