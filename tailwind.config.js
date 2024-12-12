module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-white': '#FFFFFF',
        'neo-black': '#000000',
        'neo-gray': '#F0F0F0',
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'neo': '4px 4px 0px #000000',
      },
    },
  },
  plugins: [],
}