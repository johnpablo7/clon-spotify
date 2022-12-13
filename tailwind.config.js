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
          greenplay: "#1ed760",
          graytext: "#a7a7a7",
          appgray: "#121212",
          shadowcard: "#181818",
          hovercard: "#2f2f2f",
          grayheader: "#010101",
          lightgray: "#B3B3B3",
          orangeheader: "#672B17",
        },
      },
    },
  },
  plugins: [],
};
