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
      boxShadow:{
        sxl : '5px 20px 25px 0px rgb(0 0 0 / 0.1), 6px 8px 10px 0px rgb(0 0 0 / 0.1);'
      },
      backgroundImage: {
        br: "url('./regbg.png')",
      },
      height: {
        extra: '32rem',
        none:'0rem',
        fit:'20rem',
        large:'30rem'
      },
      fontSize: {
        no: '0rem',
      },
      borderRadius: {
        extraLarge: '12rem',
      },
      screens: {
        sm: { max: '800px' },
        smm:{min:'540px'},
        msm: { max: '1000px' },
        esm: { max: '540px' },
      },
      colors: {
        back:'#C7D3DC',
        primary: '#EF542D',
        secondary: '#F1781F',
        tertiary: '#DB3232',
        bgBlack: '#0A0A0A',
      },
    },
  },
  plugins: [],
}
