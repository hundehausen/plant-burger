const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    colors: {
      primary: "#ACF357",
      secondary: "#39B05F",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      lime: colors.lime,
      teal: colors.teal,
    },
    extend: {},
  },
};
