/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        150: '37.5rem',
        168: '42rem',
        190: '47.5rem',
      },
      fontFamily: {
        'bpg-arial': ['bpg-arial', 'arial'],
        'bpg-nino-mtavruli': ['bpg-nino-mtavruli', 'arial'],
      },
      colors: {
        'custom-black': '#333333',
        'primary-gold': '#F2C94C',
        'good-grey': '#535353',
        'content-white': '#FBFBFB',
        'primary-dark-blue': '#143B52',
        'primary-green': '#53C02C',
      },
      backgroundImage: {
        primary:
          'radial-gradient(circle, rgba(83,69,113,1) 0%, rgba(52,44,70,1) 100%)',
        'primary-modal':
          'linear-gradient(180deg, rgba(52,81,97,1) 0%, rgba(123,90,90,1) 100%)',
      },
      boxShadow: {
        primary: '2px 4px 14px 0 #000000',
      },
    },
  },
  plugins: [],
};
