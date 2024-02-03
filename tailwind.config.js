/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ('poppins'),
        'roboto': ('roboto'),
        'Josefin': ['Josefin Sans', 'sans '],
      },
      boxShadow: {
        'card-1-shadow': '23px 44px 47px 0px #00000033',
        'card-shadow': ' 0px 5px 20.571px 0px #000',
        'nav-shadow': ' 0px 2px 13px 0px #0000001A',

      }
    },
  },
  plugins: [],
}
