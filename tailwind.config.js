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
          green: "#1DB954",
          black: "#000000",
          white: "#FFFFFF",
          gray: "#B3B3B3",
          lightgray: "#282828",
        },
      },
    },
  },
  plugins: [],
};
