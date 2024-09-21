/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'sm-mobile': '320px',
        'md-mobile': '375px',
        'lg-mobile': '425px',
        tablet: '768px',
        laptop: '1024px',
        'large-laptop': '1440px',
        '4k': '2560px',
      },
      colors: {
        'custom-black': '#0D1117',
        'custom-white': '#EEDDEC',
        'custom-blue': '#17408B',
        'custom-red': 'C9082A',
      },
      fontFamily: {
        head: 'Impact',
        body: 'Bahnschrift',
      },
    },
  },
  plugins: [require('daisyui')],
};
