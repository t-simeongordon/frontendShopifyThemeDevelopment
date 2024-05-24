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
        '20': '20px', // Adjust existing spacing values
        'media': '85px', // Create a new custom padding value
      },
    },
  },
  plugins: [],
}

