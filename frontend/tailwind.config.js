/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      screens: {
        'sm-mobile': '320px',
        'md-mobile': '375px',
        'lg-mobile': '425px',
        'tablet': '768px',
        'laptop': '1024px',
        'large-laptop': '1440px',
        '4k': '2560px',
      },
      colors: {
        'facebook': '#3b5999',
        'google': '#dd4b39',
        'instagram': '#c13584',
      },
      fontFamily: {
        head: 'Impact',
        body: 'Bahnschrift',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}