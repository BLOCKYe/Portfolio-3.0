module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        justDark: {
          black: '#111111',
          light: '#1f1f1f',
        },
        justWhite: {
          light: '#EAEAEA',
          dark: '#969696',
        },
        extra: {
          color: '#FACF87',
        },
      },
    },
  },
  plugins: [],
};
