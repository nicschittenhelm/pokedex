module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  variants: { // all the following default to ['responsive']
    imageRendering: ['responsive'],
  },
  plugins: [
    require('tailwindcss-image-rendering')(),
  ],
}