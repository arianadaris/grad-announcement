/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      ogg: ["Ogg", ...defaultTheme.fontFamily.ogg],
      feminine: ["Feminine", ...defaultTheme.fontFamily.feminine]
    },
    extend: {
      keyframes: {
        upDown: {
          '0%, 100%': {
            transform: 'translateY(-100%)'
          },
          '50%': {
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        upDown: 'upDown 3s infinite'
      },
      screens: {
        'xs': '0px'
      },
    },
  },
  plugins: [],
}