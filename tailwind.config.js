module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: _ => ({
        primary: "#EBE4C9",
      }),
      fontFamily : {
        forward: ["forward", "sans-serif"],
        roboto: ["roboto", "sans-serif"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
