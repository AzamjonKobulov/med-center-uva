/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      maxWidth: {
        base: '84.5rem',
        nav: '90rem',
      },
      screens: {
        xs: '30rem',
        sm: '40rem',
        md: '48rem',
        lg: '64rem',
        xl: '80rem',
        '2xl': '90rem',
      },
      fontFamily: {
        cofo: ['CoFo Sans', 'sans-serif'],
        villula: ['Villula', 'sans-serif'],
      },
      fontSize: {
        'brand-xs': '0.625rem',
        'brand-3xl': '2rem',
        'brand-4xl': '2.5rem',
      },
      colors: {
        brand: {
          orange: {
            DEFAULT: '#FF8F0D',
            100: '#FFAB42',
            200: '#FF8F0D',
            300: '#FA941B',
          },
          dark: '#343A47',
          sky: '#20BCFF',
          whitish: '#F0F3F9',
          'light-gray': '#E4ECF0',
          gray: {
            100: '#CED8DD',
          },
        },
      },
      borderRadius: {
        base: '2.5rem',
        20: '1.25rem',
        32: '2rem',
        56: '3.5rem',
      },
      boxShadow: {
        base: '0px 4px 40px 0px #D8DCE799',
      },
      backgroundImage: {
        doctor:
          'linear-gradient(132.92deg, #238CB8 -0.91%, #6DB8D9 35.19%, #C0E9FF 65.59%, #A2D9F5 75.78%, #4FACD8 94.82%)',
        direction:
          'linear-gradient(90deg, rgba(255, 255, 255, 0) 16.74%, #FFFFFF 100%)',
        'call-doctor':
          'linear-gradient(105.04deg, #238CB8 14.03%, #74BCDD 28.1%, #C0E9FF 34.43%, #90CFEF 39.66%, #238CB8 62.96%)',
        'gradient-license':
          'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)',
      },
      spacing: {
        200: '12.5rem',
      },
      lineHeight: {
        22: '1.375rem',
      },
    },
  },
  plugins: [],
};
