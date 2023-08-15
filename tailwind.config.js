/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': {'max' :'1262px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'}
    },
    container: {
      padding: '20px',
    },
    extend: {
      colors: {
        beige: '#DCC1AB',
        black: '#111111',
        green: '#1B5B31',
        grey: '#F5F0EC',
        white: '#FFFFFF'

      }
    },
  },
  plugins: [],
}