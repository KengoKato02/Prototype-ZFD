/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,html,hbs,css,scss}'],
  plugins: [],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
  safelist: [
    {
      pattern: /./, // the "." means "everything"
    },
  ],
};
