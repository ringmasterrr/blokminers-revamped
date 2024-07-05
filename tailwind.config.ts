import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    maxWidth: {
      '8xl': '1440px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2md': '992px',
        '2xl': '1440px',
      },
    },
    extend: {
      screens: {
        '2md': '992px',
        '2xl': '1440px',
      },
      colors: {
        'theme-dark': '#00283C',
        'theme-light': '#274A5B',
        'blue-ribbon': '#2461FF29',
        'dodger-blue': '#24CAFF29',
        'heliotrope': '#9E62FE29',
        'limeade': '#348A0029',
        'fun-green': '#007B4029',
        'electric-violet': '#9F24FF29',
        'lochmara': '#007CC129',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar-hide'),
    addVariablesForColors,
  ],
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  )

  addBase({
    ':root': newVars,
  })
}

export default config
