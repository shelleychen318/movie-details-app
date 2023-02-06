module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      md: { max: "767px" },
    },
    colors: {
      primary: "#fAF9F6",
      secondary: "#af9c9d",
      button: {
        DEFAULT: "#479760",
        dark: "#277945",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
