/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#800020',
          light: '#a0052d',
          dark: '#5c0017',
        },
        silver: {
          DEFAULT: '#c0c0c0',
          light: '#d9d9d9',
          dark: '#8c8c8c',
        },
      },
    },
  },
  plugins: [],
}
