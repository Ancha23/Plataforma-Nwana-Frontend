/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "verde-100": "#20BF55",
        "amarelo-100": "#F0C808",
        "vermelho-100": "#BG1C1A",
        "verde-200": "#3F7D20",
        "cinza-100": "#EDF2F4",
        "cinza-200": "#505051",
        "preto-100": "#161A1D",
        "branco-100": "#FFFFFF",
        "azul-100": "#62B6CB",

      },
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}

