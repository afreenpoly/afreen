/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#1A0B2E",
        backfill: "#200d3b",
        projectcard: "#251043",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins"],
        "bebas-neue": ['"Bebas Neue"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
