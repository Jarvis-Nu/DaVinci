/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textColor: {
        "purple": "#6927FF",
        "ink": "#16004A",
        "ash": "#7B7A7A"
      },
      backgroundColor: {
        "purple": "#6927FF",
        "ash": "#6927FF0D"
      }
    },
  },
  plugins: [],
}
