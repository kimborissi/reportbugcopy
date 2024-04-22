/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'bg-color': '#FBF6F2',
        'bg-header': '#FFFEFE',
        'sidebar-color': '#001F3F',
      },
      colors: {
        'line-color': '#D1CCD1',
        'hover-color': '#FBF6F2',
        'sidebar-color': '#001F3F',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '6px': '6px',
        '8px': '8px',
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '15px': '15px',
        '24px': '24px',
      }
    },
  },
  plugins: [],
}
