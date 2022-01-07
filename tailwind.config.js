const defaultTheme = require('tailwindcss/defaultTheme');

const PREFIX = 'tag-';

module.exports = {
  prefix: 'tag-',
  darkMode: false,
  important: true,
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
    },
    borderRadius: {
      4: '4px',
      8: '8px',
      12: '12px',
      20: '20px',
      none: '0',
      full: '9999px',
    },
    boxShadow: {
      0: 'none',
      10: '0px 1px 1px rgba(24, 109, 98, 0.15)',
      20: '0px 3px 6px rgba(24, 109, 98, 0.15)',
      30: '0px 7px 11px rgba(24, 109, 98, 0.15)',
      40: '0px 9px 15px rgba(24, 109, 98, 0.15)',
      50: '0px 17px 27px rgba(24, 109, 98, 0.15)',
      100: '0px 5px 5px rgba(24, 109, 98, 0.15)',
      200: '0px 15px 30px rgba(24, 109, 98, 0.15)',
      300: '0px 25px 50px rgba(24, 109, 98, 0.15)',
      400: '0px 50px 80px rgba(24, 109, 98, 0.15)',
      500: '0px 90px 140px rgba(24, 109, 98, 0.15)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        rich: '#1b1b25',
        background: '#041513',
        DEFAULT: '#000000',
      },
      white: {
        rich: '#f9f9fb',
        soft: '#fbfdff',
        background: '#f3f6f9',
        DEFAULT: '#ffffff',
      },
      grey: {
        50: '#f1f1f3',
        100: '#e2e4e8',
        200: '#c8c9d0',
        300: '#acaeb9',
        400: '#9192a1',
        500: '#75778a',
        600: '#6a6b7c',
        700: '#5e5f6e',
        800: '#464853',
        900: '#2f3037',
        1000: '#17181c',
        'rich-dark': '#6a72a0',
        'rich-medium': '#cacee5',
        'rich-light': '#dcdff2',
        'rich-extra-light': '#f6f6f9',
      },
      teal: {
        50: '#eafaf8',
        100: '#d5f6f2',
        200: '#acece5',
        300: '#82e3d8',
        400: '#58daca',
        500: '#2ed1bd',
        600: '#2abcaa',
        700: '#25a797',
        800: '#1c7d72',
        900: '#13534c',
        1000: '#092a26',
      },
      blue: {
        50: '#e9f3fc',
        100: '#d2e6f9',
        200: '#a6cdf2',
        300: '#79b5ec',
        400: '#4d9ce5',
        500: '#2083df',
        600: '#1d76c9',
        700: '#1a69b2',
        800: '#134f86',
        900: '#0d3459',
        1000: '#061a2d',
      },
      indigo: {
        50: '#eee9fc',
        100: '#dcd2f9',
        200: '#baa6f2',
        300: '#9779ec',
        400: '#754de5',
        500: '#5220df',
        600: '#4a1dc9',
        700: '#421ab2',
        800: '#311386',
        900: '#210d59',
        1000: '#10062d',
      },
      purple: {
        50: '#f5ecf8',
        100: '#ebdaf1',
        200: '#d8b5e3',
        300: '#c590d5',
        400: '#b16bc7',
        500: '#9e46b9',
        600: '#8e3fa6',
        700: '#7e3894',
        800: '#5f2a6f',
        900: '#3f1c4a',
        1000: '#200e25',
      },
      pink: {
        50: '#fde8f3',
        100: '#fad1e6',
        200: '#f8bada',
        300: '#f6a2cd',
        400: '#f174b4',
        500: '#eb3c96',
        600: '#e71882',
        700: '#d01575',
        800: '#b91368',
        900: '#8b0e4e',
        1000: '#5d0934',
      },
      red: {
        50: '#fbe9ec',
        100: '#f7d4da',
        200: '#f0a8b5',
        300: '#e87d90',
        400: '#e0526b',
        500: '#d92646',
        600: '#c3223f',
        700: '#ad1f38',
        800: '#82172a',
        900: '#570f1c',
        1000: '#2b080e',
      },
      orange: {
        50: '#fcf2e8',
        100: '#fae5d1',
        200: '#f5caa3',
        300: '#f0b075',
        400: '#eb9647',
        500: '#e68021',
        600: '#cf6f17',
        700: '#b86314',
        800: '#8a4a0f',
        900: '#5c310a',
        1000: '#2e1905',
      },
      yellow: {
        50: '#fdf8e7',
        100: '#fcf2cf',
        200: '#f8e4a0',
        300: '#f5d770',
        400: '#f2c940',
        500: '#efbc10',
        600: '#d7a90f',
        700: '#bf960d',
        800: '#8f710a',
        900: '#5f4b07',
        1000: '#302603',
      },
      'green-lime': {
        50: '#f8fbe9',
        100: '#f0f7d4',
        200: '#e1f0a8',
        300: '#d3e87d',
        400: '#c4e052',
        500: '#b5d926',
        600: '#a3c322',
        700: '#91ad1f',
        800: '#6d8217',
        900: '#48570f',
        1000: '#242b08',
      },
      'green-jade': {
        50: '#e8fcf0',
        100: '#bbf6d3',
        200: '#8ef0b5',
        300: '#61eb98',
        400: '#34e57b',
        500: '#1acb61',
        600: '#149e4b',
        700: '#0f7136',
        800: '#0c5a2b',
        900: '#094420',
        1000: '#062d16',
      },
      primary: {
        50: '#EAFAF8',
        200: '#58DACA',
        400: '#25A797',
        500: '#1C7D72',
        600: '#13534C',
      },
      secondary: {
        50: '#E0E0E0',
        200: '#BCBCBC',
        400: '#606060',
        500: '#3D3D3D',
        600: '#272727',
      },
      neutrals: {
        50: '#FBFBFB',
        100: '#F6F6F6',
        200: '#E0E0E0',
      },
    },
    fontFamily: {
      archer: ['Archer', 'Serif'],
      roboto: ['Roboto', 'Sans-Serif'],
      mono: ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New'],
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      15: '0.15',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      35: '0.35',
      40: '0.4',
      45: '0.45',
      50: '0.5',
      55: '0.55',
      60: '0.6',
      65: '0.65',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      85: '0.85',
      90: '0.9',
      95: '0.95',
      100: '1',
    },
    screens: {
      ...{ ...defaultTheme.screens, '2xl': '1440px' },
    },
  },
  plugins: [
    require(`${__dirname}/util/tw-typography-plugin`),
    require(`${__dirname}/util/tw-gradients-plugin`),
    require('tailwind-css-variables')({
      colors: 'color',
      screens: false,
      fontFamily: false,
      fontSize: false,
      fontWeight: false,
      lineHeight: false,
      letterSpacing: false,
      backgroundSize: false,
      borderWidth: false,
      borderRadius: false,
      width: false,
      height: false,
      minWidth: false,
      minHeight: false,
      maxWidth: false,
      maxHeight: false,
      padding: false,
      margin: false,
      boxShadow: false,
      zIndex: false,
      opacity: false,
    }),
  ],
  purge: ['./src/**/*.tsx'],
};