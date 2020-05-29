import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

// Rollup alias paths
const path = require('path');
const components = path.resolve(__dirname, 'src', 'components');
const utilities = path.resolve(__dirname, 'src', 'utilities');
const src = path.resolve(__dirname, 'src');

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
        { find: 'components', replacement: components },
        { find: 'utilities', replacement: utilities },
        { find: 'src', replacement: src }
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