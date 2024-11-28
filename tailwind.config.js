/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      lato:["lato", "sans-serif"], 
      montserrat:['montserrat', 'sans-serif'],
      Poppins:['Poppins', 'sans-serif'],
      Mixed:['Mixed' , 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}