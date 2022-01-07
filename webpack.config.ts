import * as dotenv from 'dotenv';
import * as path from 'path';
import * as webpack from 'webpack';

dotenv.config({
  path: '../.env.default',
});
dotenv.config({
  path: '../.env',
});
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const paths = require('./util/paths');
const { mergeCommonConfig } = require('./util/webpack-common');

const isEnvProduction = process.env.NODE_ENV === 'production';
const shouldUseSourceMap =
  isEnvProduction && process.env.GENERATE_SOURCEMAP === 'true';

// Variable used for enabling profiling in Production
// passed into alias object. Uses a flag if passed into the build command
const isEnvProductionProfile =
  isEnvProduction && process.argv.includes('--profile');

const ENVIRONMENT_SCRIPT = !isEnvProduction
  ? '--><script src="/environment.js"></script><!--'
  : '';

const getConfiguration = (): webpack.Configuration => {
  const configuration: webpack.Configuration = {
    target: 'web',
    bail: isEnvProduction,
    entry: './src/index.tsx',
    output: {
      publicPath: '/',
      filename: isEnvProduction ? '[name].[contenthash:8].js' : 'main.js',
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: isEnvProduction
        ? '[name].[contenthash:8].chunk.js'
        : '[name].chunk.js',

      // this defaults to 'window', but by setting it to 'this' then
      // module chunks which are built will work in web workers as well.
      globalObject: 'this',
    },
    mode: isEnvProduction ? 'production' : 'development',
    resolve: {
      // This allows you to set a fallback for where webpack should look for modules.
      // We placed these paths second because we want `node_modules` to "win"
      // if there are any conflicts. This matches Node resolution mechanism.
      // https://github.com/facebook/create-react-app/issues/253
      modules: ['node_modules', paths.appNodeModules],
      // These are the reasonable defaults supported by the Node ecosystem.
      // We also include JSX as a common component filename extension to support
      // some tools, although we do not recommend using it, see:
      // https://github.com/facebook/create-react-app/issues/290
      // `web` extension prefixes have been added for better support
      // for React Native Web.
      extensions: paths.moduleFileExtensions.map((ext) => `.${ext}`),
      alias: {
        // Support React Native Web
        // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
        'react-native': 'react-native-web',
        // Allows for better profiling with ReactDevTools
        ...(isEnvProductionProfile && {
          'react-dom$': 'react-dom/profiling',
          'scheduler/tracing': 'scheduler/tracing-profiling',
        }),
        //   ...(modules.webpackAliases || {}),
      },
    },
    devtool: isEnvProduction
      ? shouldUseSourceMap
        ? 'source-map'
        : false
      : 'cheap-module-source-map',
    module: {
      strictExportPresence: true,
      rules: [
        {
          type: 'javascript/auto',
          test: /\.(js|jsx|ts|tsx)$/,
          include: paths.appSrc,
          loader: 'babel-loader',
          options: {
            babelrc: true,
            plugins: [
              !isEnvProduction && [require.resolve('react-refresh/babel')],
            ].filter(Boolean),
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            // See #6846 for context on why cacheCompression is disabled
            cacheCompression: false,
            compact: isEnvProduction,
          },
        },
        {
          type: 'javascript/auto',
          test: /\.mdx?$/,
          use: [
            'babel-loader',
            {
              loader: '@mdx-js/loader',
            },
          ],
        },
      ],
    },
    plugins: [
      isEnvProduction &&
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash:8].css',
          chunkFilename: '[name].[contenthash].chunk.css',
        }),
      !isEnvProduction && new ReactRefreshWebpackPlugin({}),
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: paths.appHtml,
            favicon: 'public/favicon.svg',
          },
          isEnvProduction
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
            : undefined,
        ),
      ),
      new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
        ...process.env,
        ENVIRONMENT_SCRIPT,
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: isEnvProduction ? 'production' : process.env.NODE_ENV,
        BUILD_VERSION_HASH: 'not set',
        BUILD_DATE: 'not set',
      }),
      !isEnvProduction && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),

    optimization: {
      minimize: isEnvProduction,
      minimizer: [
        // This is only used in production mode
        new TerserPlugin({
          terserOptions: {
            parse: {
              // We want terser to parse ecma 8 code. However, we don't want it
              // to apply any minification steps that turns valid ecma 5 code
              // into invalid ecma 5 code. This is why the 'compress' and 'output'
              // sections only apply transformations that are ecma 5 safe
              // https://github.com/facebook/create-react-app/pull/4234
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              // Disabled because of an issue with Uglify breaking seemingly valid code:
              // https://github.com/facebook/create-react-app/issues/2376
              // Pending further investigation:
              // https://github.com/mishoo/UglifyJS2/issues/2011
              comparisons: false,
              // Disabled because of an issue with Terser breaking valid code:
              // https://github.com/facebook/create-react-app/issues/5250
              // Pending further investigation:
              // https://github.com/terser-js/terser/issues/120
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            // Added for profiling in devtools
            keep_classnames: isEnvProductionProfile,
            keep_fnames: isEnvProductionProfile,
            output: {
              ecma: 5,
              comments: false,
              // Turned on because emoji and regex is not minified properly using default
              // https://github.com/facebook/create-react-app/issues/2488
              ascii_only: true,
            },
          },
        }),
        // This is only used in production mode
        new CssMinimizerPlugin(),
      ],
    },
  };

  if (!isEnvProduction) {
    configuration.devServer = {
      onBeforeSetupMiddleware(devServer) {
        devServer.app.get('/environment.js', (req, res) => {
          const context =
            require('./util/environment.ts').getContextFromEnvironment();
          res.send(`window.spContext = ${JSON.stringify(context)}`);
        });
      },
      static: [
        {
          directory: path.resolve(__dirname, 'public'),
          watch: true,
        },
      ],
      devMiddleware: {
        stats: 'errors-only',
      },
      compress: true,
      hot: true,
      historyApiFallback: true,
      port: process.env.FRONT_PORT_2
        ? parseInt(process.env.FRONT_PORT_2, 10)
        : 3000,
    };
  }

  mergeCommonConfig(configuration, {
    isEnvProduction,
    shouldUseSourceMap,
  });

  return configuration;
};

module.exports = [getConfiguration()];
