/** @type {import('tailwindcss').Config} */
module.exports = {
  node: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow'),
    // Tailwind CSS Scrollbar Hide
    require('tailwind-scrollbar-hide'),
    // Tailwind CSS Scrollbar
    require('tailwind-scrollbar'),
  ],
}
