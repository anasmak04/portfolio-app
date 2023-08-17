module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#313866'
      },
    },
  },
  plugins: [
        require('tailwind-scrollbar'),
  ],
}
