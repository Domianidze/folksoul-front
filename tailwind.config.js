/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'bpg-arial': ['bpg-arial', 'arial'],
        'bpg-nino-mtavruli': ['bpg-nino-mtavruli', 'arial'],
      },
      colors: {
        'primary-gold': '#FFB72D',
        'good-grey': '#535353',
        'content-white': '#FBFBFB',
        'primary-dark-blue': '#143B52',
        'primary-green': '#53C02C',
      },
      backgroundImage: {
        'primary-bg':
          'radial-gradient(circle, rgba(83,69,113,1) 0%, rgba(52,44,70,1) 100%)',
        'primary-modal-bg':
          'linear-gradient(180deg, rgba(52,81,97,1) 0%, rgba(123,90,90,1) 100%)',
      },
    },
  },
  plugins: [],
};
