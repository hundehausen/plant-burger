/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    colors: {
      'primary': '#ACF357',
      'secondary': '#39B05F'
    },
    extend: {},
  },
};
