module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          "blue": "#164E63",
          "red": "#7F1D1D",
          "green": "#134E4A",
          "orange": "#FED7AA",
          "gray": "#D1D5DB",
          "brown": "#713F12",
        }
      }
    },
  },
  plugins: [],
}
