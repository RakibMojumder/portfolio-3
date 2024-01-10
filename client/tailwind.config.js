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
      },
      colors: {
        'primary': '#965CF0',
        'secondary': '#C9F31D'
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        inter: ['Inter'],
        PlaypenSans: ['Playpen Sans']
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}