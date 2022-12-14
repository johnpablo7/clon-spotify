/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: "#1ED760", // bg-play
          silverchalice: "#A7A7A7", // text
          codgray: "#121212", // bg-app
          codgrayshadow: "#181818", // card-shadow
          mineshafthover: "#2f2f2f", // card-hover
          black: "#020202", // bg-header/arrow
          espresso: "#672B17", // mobile-header
        },
      },
    },
  },
  plugins: [],
};
