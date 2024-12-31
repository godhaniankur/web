
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
          footerUrl:"url('../image/world.jpg')",
          mapImage:"url('../image/map.png')"
      },
     
    },
    
  },
  plugins: [require('tailwindcss-motion')], 
}