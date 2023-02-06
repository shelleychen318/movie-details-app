module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      md: { max: "767px" },
    },
    // fontFamily: {
    //   poppins: ["Poppins", "sans-serif"],
    // },
    colors: {
      // bc: "#00005C",
      primary: "#fAF9F6",
      secondary: "#a16e83",
      lightGrey: "#C9D5EE",
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
