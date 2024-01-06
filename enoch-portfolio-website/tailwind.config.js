const { default: Header } = require('./src/Components/Header/Header');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}", "./src/*.{html,jsx,js}", "./src/**/**/*.{html,jsx,js}"
],
  theme: {
    extend: {},
    safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]']
  },
  plugins: [],
}

