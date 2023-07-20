/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'brown': '#573C27',
        'green': '#1A936F',
        'cream': '#FDEED9',
        'light-pink': '#FFC2D4',
        'dark-pink': '#E34989',
        'purple': '#460B5B'
      }
    },
    fontFamily: {
      'pixel': ['VT323', 'monospace']
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

