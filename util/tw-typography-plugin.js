/* eslint-disable sonarjs/no-duplicate-string */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities, theme }) {
  const classes = {};

  classes['.text-header-1'] = {
    'font-family': theme('fontFamily.archer'),
    'font-weight': theme('fontWeight.bold'),
    'font-size': '64px',
    'line-height': '77px',
  };

  classes['.text-header-2'] = {
    'font-family': theme('fontFamily.archer'),
    'font-weight': theme('fontWeight.bold'),
    'font-size': '40px',
    'line-height': '48px',
    'letter-spacing': '0.015em',
  };

  classes['.text-header-3'] = {
    'font-family': theme('fontFamily.archer'),
    'font-weight': theme('fontWeight.bold'),
    'font-size': '28px',
    'line-height': '34px',
    'letter-spacing': '0.015em',
  };

  classes['.text-header-4'] = {
    'font-family': theme('fontFamily.roboto'),
    'font-weight': theme('fontWeight.extrabold'),
    'font-size': '28px',
    'line-height': '120%',
  };

  classes['.text-header-5'] = {
    'font-family': theme('fontFamily.roboto'),
    'font-weight': theme('fontWeight.extrabold'),
    'font-size': '20px',
    'line-height': '120%',
    'letter-spacing': '0.025em',
    'text-transform': 'uppercase',
  };

  classes['.text-header-6'] = {
    'font-family': theme('fontFamily.roboto'),
    'font-weight': theme('fontWeight.extrabold'),
    'font-size': '16px',
    'line-height': '120%',
    'letter-spacing': '0.025em',
    'text-transform': 'uppercase',
  };

  // subtitles

  classes['.text-subtitle-1'] = {
    'font-family': theme('fontFamily.roboto'),
    'font-weight': theme('fontWeight.normal'),
    'font-size': '18px',
    'line-height': '25px',
  };

  classes['.text-subtitle-2'] = {
    'font-family': theme('fontFamily.roboto'),
    'font-weight': theme('fontWeight.bold'),
    'font-size': '18px',
    'line-height': '120%',
    'letter-spacing': '0.02em',
  };

  classes['.text-subtitle-3'] = {
    'font-family': theme('fontFamily.roboto'),
    'font-weight': theme('fontWeight.bold'),
    'font-size': '22px',
    'line-height': '30px',
  };

  // body

  [16, 14, 12].forEach((fontSize) => {
    ['normal', 'light', 'bold', 'extrabold'].forEach((twFontWeight) => {
      classes[`.text-body-${twFontWeight}-${fontSize}`] = {
        'font-family': theme('fontFamily.roboto'),
        'font-weight': theme(`fontWeight.${twFontWeight}`),
        'font-size': `${fontSize}px`,
        'line-height': '140%',
      };
    });
  });

  // caption

  ['', 'light', 'bold', 'extrabold'].forEach((twFontWeight) => {
    classes[`.text-caption${twFontWeight ? '-' : ''}${twFontWeight}`] = {
      'font-family': theme('fontFamily.roboto'),
      'font-weight': theme(
        `fontWeight.${twFontWeight ? twFontWeight : 'normal'}`,
      ),
      'font-size': `10px`,
      'line-height': '140%',
    };
  });

  // tagline

  classes['.text-tagline-small'] = {
    'font-family': theme('fontFamily.roboto'),
    'font-weight': theme('fontWeight.extrabold'),
    'font-size': '10px',
    'line-height': '200%',
    'letter-spacing': '0.2em',
    'text-transform': 'uppercase',
  };

  classes['.text-tagline-xsmall'] = {
    'font-family': theme('fontFamily.roboto'),
    'font-weight': theme('fontWeight.extrabold'),
    'font-size': '8px',
    'line-height': '120%',
    'letter-spacing': '0.1em',
    'text-transform': 'uppercase',
  };

  // hyperlinks

  [16, 14, 12].forEach((fontSize) => {
    classes[`.text-hyperlink-${fontSize}`] = {
      'font-family': theme('fontFamily.roboto'),
      'font-weight': theme('fontWeight.normal'),
      'font-size': `${fontSize}px`,
      'text-decoration': 'underline',
      color: theme('colors.teal.800'),
      '&:hover': {
        'font-weight': theme('fontWeight.bold'),
      },
    };
  });

  // buttons

  classes['.text-button-14'] = {
    'font-family': theme('fontFamily.roboto'),
    'font-weight': theme('fontWeight.bold'),
    'font-size': '14px',
    'line-height': '20px',
    'letter-spacing': '0.04em',
  };

  classes['.text-button-16'] = {
    'font-family': theme('fontFamily.roboto'),
    'font-weight': theme('fontWeight.bold'),
    'font-size': '16px',
    'line-height': '20px',
    'letter-spacing': '0.04em',
  };

  classes['.text-button-18'] = {
    'font-family': theme('fontFamily.roboto'),
    'font-weight': theme('fontWeight.bold'),
    'font-size': '18px',
    'line-height': '24px',
    'letter-spacing': '0.04em',
  };

  // labels

  classes['.text-label-small'] = {
    'font-family': theme('fontFamily.roboto'),
    'font-weight': theme('fontWeight.extrabold'),
    'font-size': '8px',
    'line-height': '10px',
    'letter-spacing': '0.1em',
    'text-transform': 'uppercase',
  };

  classes['.text-label-large'] = {
    'font-family': theme('fontFamily.roboto'),
    'font-weight': theme('fontWeight.extrabold'),
    'font-size': '10px',
    'line-height': '14px',
    'letter-spacing': '0.2em',
    'text-transform': 'uppercase',
  };

  // table

  classes['.text-table-header'] = {
    'font-family': theme('fontFamily.roboto'),
    'font-weight': theme('fontWeight.extrabold'),
    'font-size': '12px',
    'line-height': '16px',
    'letter-spacing': '0.08em',
    'text-transform': 'uppercase',
  };

  addUtilities(classes, ['responsive']);
});
