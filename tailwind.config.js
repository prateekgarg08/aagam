/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{png,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // run
      backgroundImage: {
        br: "url('./regbg.png')",
      },
      height: {
        extra: '32rem',
      },
      fontSize: {
        no: '0rem',
      },
      borderRadius: {
        extraLarge: '12rem',
      },
      screens: {
        sm: { max: '800px' },
        msm: { max: '1000px' },
        esm: { max: '540px' },
      },
      colors: {
        primary: '#EF542D',
        secondary: '#F1781F',
        tertiary: '#DB3232',
        bgBlack: '#0A0A0A',
      },
    },
  },
  plugins: [],
}
