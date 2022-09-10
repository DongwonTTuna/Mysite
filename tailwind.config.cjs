/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      "sm" : "0px",
      "md" : "768px",
      "lg" : "1024px",
      "xl" : "1280px",
      "larm": "1536px",
      "bigm": "2600px",
      "widem": "3400px",
    }
  },
  plugins: [],
}