/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#4AF58A",
        primary2: "#33D7EE",
        dark1: "#16171B",
        dark2: "#1E1F25",
        dark3: "#2A2A2C",
        gray1: "#D9D5DC",
        gray2: "#393544",
      },
    },
  },
  plugins: [],
};
