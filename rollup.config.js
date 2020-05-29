import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

const path = require('path');

// Post CSS plugins
const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');

export default {
  input: 'src/index.js',

  output: [
    {
      name: 'default',
      sourcemap: true,
      file: 'dist/index.js',
      format: 'umd',
      globals: { react: 'React' }
    }
  ],

  plugins: [
    alias({
      entries: [
        { find: 'components', replacement: path.resolve(__dirname, 'src', 'components') },
        { find: 'utilities', replacement: path.resolve(__dirname, 'src', 'utilities') },
        { find: 'src', replacement: path.resolve(__dirname, 'src') }
      ]
    }),
    postcss({
      extract: false,
      modules: true,
      plugins: [
        autoprefixer(),
        postcssPresetEnv({ stage: 0 })
      ],
      use: [ 'sass' ]
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ],

  external: [ 'react', 'react-dom' ]
};