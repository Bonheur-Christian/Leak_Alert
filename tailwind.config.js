/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["lato", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        Mixed: ["Mixed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
