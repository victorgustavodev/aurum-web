/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      colors: {
        'gray': '#fbfbfb',
        'yellow': '#DAA520',
        'white': '#FFFFFF',
        'black': '#000000',
        'dark-gray': '#868686',
      },
    extend: {},
  },
  plugins: [],
}