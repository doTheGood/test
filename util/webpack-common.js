const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const imageInlineSizeLimit = parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT || '10000',
);

const iconsFolderPath = path.resolve(__dirname, '..', 'src/assets/icons');
const logosFolderPath = path.resolve(__dirname, '..', 'src/assets/logos');

const getStyleRule = (
  {
    isEnvProduction,
    shouldUseSourceMap,
    generatePseudoClasses,
    tailwindConfigPath,
  },
  { test, additionalUseItems },
) => {
  const useItems = [
    !isEnvProduction && 'style-loader',
    isEnvProduction && {
      loader: MiniCssExtractPlugin.loader,
      // css is located in `static/css`, use '../../' to locate index.html folder
      // in production `paths.publicUrlOrPath` can be a relative path
      // 2021-04-07: publicPath option taken out here, I found no need for it. fn.
      options: {},
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: shouldUseSourceMap,
        modules: {
          localIdentName: '[local]', // disable CSS modules for all webpack work (as bundled with rollup)
        },
      },
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          config: true,
          plugins: [
            require('tailwindcss')({
              config:
                tailwindConfigPath ?? `${__dirname}/../tailwind.config.js`,
            }),
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
            // Adds PostCSS Normalize as the reset css with default options,
            // so that it honors browserslist config in package.json
            // which in turn let's users customize the target behavior as per their needs.
            generatePseudoClasses &&
              require('postcss-pseudo-classes')({
                // (optional) create classes for a restricted list of selectors
                // N.B. the colon (:) is optional
                restrictTo: ['active', 'focus', 'focus-visible', 'hover'],
              }),
          ].filter(Boolean),
        },
        sourceMap: shouldUseSourceMap,
      },
    },
  ].filter(Boolean);

  useItems.push(...(additionalUseItems ?? []));

  return {
    test,
    // Don't consider CSS imports dead code even if the
    // containing package claims to have no side effects.
    // Remove this when webpack adds a warning or an error for this.
    // See https://github.com/webpack/webpack/issues/6571,
    use: useItems,
    sideEffects: true,
  };
};

const getRules = (params) => {
  const rules = [
    {
      type: 'asset',
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
      exclude: [iconsFolderPath],
      generator: {
        filename: 'static/media/[name].[hash:8][ext]',
      },
      parser: {
        dataUrlCondition: {
          maxSize: imageInlineSizeLimit,
        },
      },
    },
    {
      type: 'asset/resource',
      test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      generator: {
        filename: 'fonts/[name][ext]',
      },
    },
    {
      type: 'javascript/auto',
      test: /\.svg$/,
      include: [iconsFolderPath, logosFolderPath],
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    },
  ];

  rules.push(getStyleRule(params, { test: /\.css$/ }));
  rules.push(
    getStyleRule(params, {
      test: /\.scss$/,
      additionalUseItems: [
        {
          loader: 'resolve-url-loader',
          options: {
            sourceMap: params.shouldUseSourceMap,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            // source map should be enabled to use resolve-url-loader
            sourceMap: true,
          },
        },
      ],
    }),
  );

  return rules;
};

module.exports.mergeCommonConfig = (config, params) => {
  config.module.rules.push(...getRules(params));
  config.plugins.push(new ForkTsCheckerWebpackPlugin());
};
