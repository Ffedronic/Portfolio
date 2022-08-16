/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        green: "#64ffda",
      },
      fontFamily: {
        montserrat: "Montserrat",
        lato: "Lato",
      },
    },
  },
  plugins: [],
};
