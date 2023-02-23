/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary:'#1A3950'
      }),
      textColor: (theme) => ({
        primary:'#1A3950'
      }),
      borderColor: (theme) => ({
        primary:'#1A3950'
      })
    },
  },
  plugins: [],
}
