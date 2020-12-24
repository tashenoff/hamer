module.exports = {
  plugins: [
    require('tailwindcss-filters'),
  ],
  content: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    filter: {
      'grayscale': 'grayscale(1)'
     },

    extend: {
      maxWidth: {
        '1180': '1180px',
      
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-filter-utilities'),
  ],
}
