/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
import { darkTheme } from "./src/config/theme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: "#0d1b47",
        blanco: "#f5f5f5",
        negro: "#000000",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "dark",
      themes: {
        ...darkTheme,
      },
    }),
  ],
};
