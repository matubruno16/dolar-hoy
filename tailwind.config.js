/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gris': '#bac3d0',
        'purple': '#3A1D87',
        'purple-dark': '#12092A',

      }
    },
    backgroundImage:{
      'hero':"url('./src/assets/dolares.avif')",
    }
  },
  plugins: [],
}