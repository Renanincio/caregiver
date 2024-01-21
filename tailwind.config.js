/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{tsx,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'header': '#DBD5CD',
        'greenPrimary': '#2F3D44',
        'greenSecondary': '#687F80',
        'about': '#EDE9E6',
        'services': '#C5B5AC',
      },
      borderRadius: {
        'btn': '3px',
      }
    },
  },
  plugins: [],
};
