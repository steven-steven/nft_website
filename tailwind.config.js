module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: _ => ({
        primary: "#EBE4C9",
      }),
      backgroundImage: {
        'mint-button': "url('/assets/Mint.svg')",
        'mint-button-hover': "url('/assets/MintHover.svg')",
      },
      fontFamily : {
        forward: ["forward", "sans-serif"],
        roboto: ["roboto", "sans-serif"],
        robotoBold: ["robotoBold", "sans-serif"],
      },
      textColor: {
        'danger': '#F26522',
      },
      maxHeight: {
        banner: '40rem',
      },
      scale: {
        '10': '.10',
        '15': '.15',
        '25': '.25',
      }
    },
  },
  variants: {
    extend: {
      // backgroundImage: ['hover']
    },
  },
  plugins: [],
};
