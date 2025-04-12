/** @type {import('tailwindcss').Config} */

const colors = {
  transparent: "transparent",
  black: "#2E3239",
  white: "#FFFFFF",
  primary: "#FF9902",
  secondary: "#161D25",
  background: "#F2F2F5",
  aqua: "#268697"
}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: colors
    },
  },
  plugins: [],
} 