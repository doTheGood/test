import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import cssImport from 'postcss-import';
import purgecss from '@fullhuman/postcss-purgecss';
import comments from 'postcss-discard-comments';
import autoExternal from 'rollup-plugin-auto-external';
import tailwindcss from 'tailwindcss';
import env from 'postcss-preset-env';

export default {
  input: './src/index.ts',
  output: [
    {
      dir: './dist/',
      format: 'esm',
    },
  ],
  plugins: [
    autoExternal(),
    peerDepsExternal(),
    postcss({
      extract: false,
      modules: false, // automatically for .modules. files
      autoModules: true,
      extensions: ['.scss'],
      use: ['sass'],
      plugins: [
        cssImport(),
        tailwindcss('./tailwind.config.js'),
        env({
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
        }),
        purgecss({
          content: ['./src/**/*.tsx'],
        }),
        comments({ removeAllButFirst: true }),
      ],
    }),
    typescript({
      tsconfig: './tsconfig.build.json',
    }),
    svgr(),
  ],
};
