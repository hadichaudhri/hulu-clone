/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // bgcolorlight: '#0B3D50',
        // bgcolor: '#06202A',
        // bgcolordark: '#041820',
        turquoise: {
          100: '#ced8dc',
          200: '#9db1b9',
          300: '#6d8b96',
          400: '#3c6473',
          500: '#0b3d50',
          600: '#093140',
          700: '#06202a',
          800: '#041820',
          900: '#010608',
        },
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
    },
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/line-clamp')],
}
