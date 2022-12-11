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
          graytext: "#a7a7a7",
          appgray: "#121212",
          grayheader: "#010101",
          lightgray: "#B3B3B3",
        },
      },
    },
  },
  plugins: [],
};
