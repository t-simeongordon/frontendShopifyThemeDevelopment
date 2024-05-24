/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/customers/*.liquid"
  ],
  theme: {
    extend: {
      spacing: {
        'media': '185px', // Create a new custom padding value
      },
    },
  },
  plugins: [],
}

