module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        font: {
          primary: "#E5989B",
          black: {
            primary: "#333333",
            secondary: "#4C4A4F",
          },
        },
        background: {
          primary: "#F6F6F6",
        },
      },
      gridTemplateRows: {
        1: "900px",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        12: "repeat(12, 120px)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
