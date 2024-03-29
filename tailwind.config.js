module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
  },
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
      Exo: ["Exo, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1224px",
        xl: "1224px",
        "2xl": "1224px",
      },
    },
    extend: {},
  },
  plugins: [],
}
