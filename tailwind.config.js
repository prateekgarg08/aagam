/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // run 
      height:{
        extra:'32rem'
      },
      borderRadius :{
          extraLarge:'12rem'
      },
      screens:{
        'sm':{'max':'800px'}
      }
    
    },
  },
  plugins: [],
}
