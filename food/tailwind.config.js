/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '300px', // You can set any custom size here
        
      },
      animation: {
        slide: 'slide 6s linear infinite', // 10s for full animation cycle
      },
      
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '10%': { transform: 'translateX(0)' },  
          '20%': { transform: 'translateX(0)' },  
          '30%': { transform: 'translateX(0)' }, 
          '40%': { transform: 'translateX(0)' },     // Start from right
          '50%': { transform: 'translateX(0)' },    // Move to the left and stop
          '60%': { transform: 'translateX(0)' },    // Stay in place
          '70%': { transform: 'translateX(0)' },    // Stay in place
          '80%': { transform: 'translateX(0)' },  
          '90%': { transform: 'translateX(0)' },    // Stay in place
          '100%': { transform: 'translateX(-1%)' },  // Move out to the left
        },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  
  ],
}



}