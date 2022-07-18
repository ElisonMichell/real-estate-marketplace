/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      'headings': 'Poppins, sans-serif',
      'body': 'Inter, sans-serif',
    },
    colors: {
      'base': {
        100: '#FFFFFF',
        200: '#767885',
        300: '#454858',
        400: '#35394B',
        500: '#2F3345',
        600: '#292D3F',
      },
      'primary': {
        100: '#4CCED9',
        200: '#259DA8',
        300: '#293547',
      }
    },
    extend: {
      backgroundImage: {
        banner: "url('/src/assets/building-banner.png')"
      }
    },
  },
  plugins: [],
}
