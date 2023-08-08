/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'purple-gradient': 'linear-gradient(40deg, #1c1249 1%, #1e2c49 55%,  #11131a 100%)',
        // 'green-gradient': 'linear-gradient(40deg, #022C22 1%, #083446 55%,  #04100e 100%)',
      },
      colors: {
        'primary': '#965CF0'
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        inter: ['Inter']
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}