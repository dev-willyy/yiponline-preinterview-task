/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'fira-reg': 'fira regular',
      'fira-md': 'fira medium',
      'fira-semi': 'fira semibold',
      'fira-bold': 'fira bold',
      'fira-extrabold': 'fira extrabold',
    },
    extend: {
      colors: {
        purple: 'rgb(128, 1, 144)',
        white: 'rgb(241, 241, 241)',
        dark: 'rgb(16, 16, 16)',
      },
      boxShadow: {
        generalShadow: '2px 2px 3px rgb(153, 153, 153)',
        headerShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
        cardsShadow: '0px 0px 8px rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [],
};
