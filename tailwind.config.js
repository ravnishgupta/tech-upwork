module.exports = {
  content: [
    './views/*.{html,js,handlebars}',
    './views/**/*.{html,js,handlebars}'
  ],
  theme: {
   
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}