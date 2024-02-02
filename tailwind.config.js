/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primario: "#1d1c1c",
        secundario: "#3b3c3d",
        divisa: "#26A69A",
        background: "#fffefb",
      },
    },
    backgroundImage: {
      hero: "url('./src/assets/dolares.png')",
      divisa: "linear-gradient(90deg, #d4eaf7 0%, #b6ccd8 100%);",
      textHeading: "linear-gradient(90deg, rgb(22 163 74) 0%, rgb(56 189 248) 100%);",
    },
  },
  plugins: [],
};
