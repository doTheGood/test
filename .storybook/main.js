const { mergeCommonConfig } = require('../util/webpack-common');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  features: {
    postcss: false, // deactivate implicit one to use custom below
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // base webpack by storybook needs overwrites for our webpack:
  // https://github.com/storybookjs/storybook/blob/master/lib/builder-webpack4/src/preview/base-webpack.config.ts
  webpackFinal: async (config) => {
    rules = config.module.rules;

    const fileLoaderRuleSVG = rules.find((rule) => rule.test.test('.svg'));
    fileLoaderRuleSVG.exclude = /\.svg$/;

    const fileLoaderRuleCSS = rules.find((rule) => rule.test.test('.css'));
    fileLoaderRuleCSS.exclude = /\.css$/;

    mergeCommonConfig(config, {
      isEnvProduction: false,
      shouldUseSourceMap: true,
      generatePseudoClasses: true,
      tailwindConfigPath: `${__dirname}/../tailwind.config.storybook.js`,
    });

    return config;
  },
};
