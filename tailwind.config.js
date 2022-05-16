module.exports = {
  content: [
    './views/*.{html,js,handlebars}',
    './views/**/*.{html,js,handlebars}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
   
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
}