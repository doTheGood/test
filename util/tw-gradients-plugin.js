// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

const GRADIENT_VARIANTS_2COLORS = ['info', 'success', 'warning', 'error'];
const GRADIENT_VARIANTS_3COLORS = ['teal-indigo-purple'];

module.exports = plugin(function ({ addUtilities }) {
  const classes = {};

  const getColor = (gradientVariant, index) => {
    return `var(--gradient-${gradientVariant}-color${index})`;
  };

  const get2ColorsGradient = (gradientVariant) => {
    return `linear-gradient(128.23deg, ${getColor(
      gradientVariant,
      1,
    )} 19.24%, ${getColor(gradientVariant, 2)} 143.89%)`;
  };

  const get3ColorsGradient = (gradientVariant) => {
    return `linear-gradient(216.67deg, ${getColor(
      gradientVariant,
      1,
    )} 13.75%, ${getColor(gradientVariant, 2)} 48.06%, ${getColor(
      gradientVariant,
      3,
    )} 77.51%)`;
  };

  const addClass = (
    gradientVariant,
    classNamePrefix,
    cssProperty,
    gradient,
  ) => {
    classes[`.${classNamePrefix}-gradient-${gradientVariant}`] = {
      [cssProperty]: gradient,
    };
  };

  const addClasses = (variant, getGradientFn) => {
    addClass(variant, 'bg', 'background', getGradientFn(variant));
  };

  GRADIENT_VARIANTS_2COLORS.forEach((gradientVariant) => {
    addClasses(gradientVariant, get2ColorsGradient);
  });

  GRADIENT_VARIANTS_3COLORS.forEach((gradientVariant) => {
    addClasses(gradientVariant, get3ColorsGradient);
  });

  addUtilities(classes);
});
