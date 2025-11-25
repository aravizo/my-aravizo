/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          700: '#065f46',
        },
        gold: '#d4af37',
      },
    },
  },
  plugins: [],
}
