/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070B0',
        primaryLight: '#0090E3',
        secondary: '#FF8D24',
        black: '#000F17',
        gray: '#999999',
        lightgray: '#D6D7DC',
        darkGray: '#66667D',
        white: '#FFFFFF',
        lightblue: '#F5F7FD',
        lightCrimson: '#FF5F74',
        navyBlue: '#00507D',
        purple: '#6A24FF',
        dark: '#000B12',
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    }
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: {
          fontSize: '62.5%',
        },
        body: {
          fontFamily: theme('fontFamily.nunito'),
          fontSize: '1.6rem',
          fontWeight: '400',
          fontStyle: 'normal',
          lineHeight: '2.6rem',
          color: theme('colors.darkGray')
        },
        h1: {
          fontFamily: theme("fontFamily.rubik"),
          fontSize: '4.8rem',
          fontWeight: '700',
          lineHeight: '7.2rem',
          color: theme('colors.black'),
        },
        h2: {
          fontFamily: theme("fontFamily.rubik"),
          fontSize: '4rem',
          fontWeight: '700',
          lineHeight: '6rem',
          color: '#31375E',
          letterSpacing: '0.0025em',
        },
        h3: {
          fontFamily: theme("fontFamily.rubik"),
          fontSize: '3.2rem',
          fontWeight: '700',
          lineHeight: '6rem',
          color: '#31375E',
          letterSpacing: '0.0025em',
        },
        h4: {
          fontFamily: theme("fontFamily.rubik"),
          fontSize: '2.4rem',
          fontWeight: '700',
          lineHeight: '3.6rem',
          color: '#31375E',
          letterSpacing: '0.0015em',
        },
        h5: {
          fontFamily: theme("fontFamily.rubik"),
          fontSize: '1.6rem',
          fontWeight: '600',
          lineHeight: '2.4rem',
          color: '#31375E',
          letterSpacing: '0.0015em',
        },
        h6: {
          fontFamily: theme("fontFamily.rubik"),
          fontSize: '1.2rem',
          fontWeight: '600',
          lineHeight: '1.8rem',
          color: '#31375E',
          letterSpacing: '0.0015em',
        },
      })
    }),
  ],
}
