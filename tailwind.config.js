/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      '2xl': '1388px',
      '3xl': '1622px',
    },
    extend: {
      spacing: {
        112: '30rem',
        130: '32.5rem',
        150: '37.5rem',
        160: '40rem',
        168: '42.5rem',
        190: '47.5rem',
        200: '50rem',
        300: '77.5rem',
      },
      fontFamily: {
        'bpg-arial': ['bpg-arial', 'arial'],
        'nino-mtavruli': ['nino-mtavruli', 'arial'],
        'nino-mtavruli-bold': ['nino-mtavruli-bold', 'arial'],
      },
      colors: {
        'primary-gold': '#F2C94C',
        'good-grey': '#535353',
        'content-white': '#FBFBFB',
        'primary-dark-blue': '#143B52',
        'primary-green': '#53C02C',
        'custom-black': '#333333',
        'custom-gray': '#898989',
        'custom-beige': '#C3B6B2',
        'light-gray': '#E5E5E5',
        'light-red': '#EB5757',
        'light-blue': '#3A7DA3',
        'lighter-blue': '#2F80ED',
        'dark-gray': '#444444',
        'dark-blue': '#042639',
        'navy-green': '#345161',
      },
      backgroundImage: {
        primary:
          'radial-gradient(circle, rgba(83,69,113,1) 0%, rgba(52,44,70,1) 100%)',
        'primary-modal':
          'linear-gradient(180deg, rgba(52,81,97,1) 0%, rgba(192,0,0,1) 100%)',
      },
      boxShadow: {
        primary: '2px 4px 14px 0 #000000',
        'primary-inner': 'inset 2px 4px 14px 0 #000000',
      },
      maxWidth: {
        '4.5xl': '60rem',
      },
      skew: {
        32: '32deg',
      },
    },
  },
};
