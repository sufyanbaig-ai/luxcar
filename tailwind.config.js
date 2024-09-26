/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        'custom': '13px 123px 13px 16px',
      },
      boxShadow: {
        'light-shadow': '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)',
      },
      rotate: {
        'custom-90': '90deg'
      },
      borderRadius: {
        'custom': '0px 20px 20px 20px'
      },
      colors: {
        mycolor: 'rgba(255, 255, 255, 0.8)',
      },
      textColor: {
      'textc': 'rgba(25, 24, 37, 0.5)'
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
