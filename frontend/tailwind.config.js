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
        '2xl': '1888px',
        '4k': '2560px',
      },
      colors: {
        'custom-black': '#0D1117',
        'custom-white': '#f0f0f0',
        'custom-blue': '#17408B',
        'custom-red': '#C9082A',
        'custom-RedHue': '#dd0930',
        'custom-BlueHue': '#1e54b8',
      },
      fontFamily: {
        head: 'Impact',
        body: 'Bahnschrift',
      },
    },
  },
  plugins: [require('daisyui')],
};
