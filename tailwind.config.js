module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#313866'
      },

      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },

  },
  plugins: [
        require('tailwind-scrollbar'),
  ],
}
