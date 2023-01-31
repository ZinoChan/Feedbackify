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
        dark1: "#202225",
        dark2: "#1d1a23",
        gray1: "#D9D5DC",
        gray2: "#393544",
      },
    },
  },
  plugins: [],
};
