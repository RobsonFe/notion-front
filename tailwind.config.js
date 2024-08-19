/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        white: "#f8f9fa",
        black: "#212529",
      },
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
