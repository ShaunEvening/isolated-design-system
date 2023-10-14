/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

const reducePalette = (palette) => ({
  background: palette[50],
  border: palette[200],
  base: palette[500],
  hover: palette[600],
  active: palette[700],
  text: palette[900],
});

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        grayscale: reducePalette(colors.gray),
        primary: reducePalette(colors.pink),
        secondary: reducePalette(colors.sky),
      },
    },
  },
  plugins: [],
};
