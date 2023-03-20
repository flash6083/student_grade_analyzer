/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      colors:{
        primary: "#2680EB",
        secondary: "#2668DB",
        customGray: "#8D8D8D",
        lightBg: "#EAEEF7"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],
}
