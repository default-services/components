import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import multi from '@rollup/plugin-multi-entry';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';

// Rollup alias paths
const path = require('path');
const components = path.resolve(__dirname, './src/components');
const src = path.resolve(__dirname, './src');
const utilities = path.resolve(__dirname, './src/utilities');

// Post CSS plugins
const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');

// Helper function to create config
export default {
  input: 'src/components/*.js',
  output: [{
    name: 'default-component-library',
    sourcemap: true,
    file: 'dist/index.js',
    format: 'umd',
    globals: { react: 'React' }
  }],
  plugins: [
    alias({
      entries: [
        { find: 'components', replacement: components },
        { find: 'src', replacement: src },
        { find: 'utilities', replacement: utilities }
      ]
    }),
    babel({
      babelHelpers: 'bundled',
      compact: true,
      exclude: 'node_modules/**'
    }),
    commonjs(),
    multi(),
    postcss({
      extract: false,
      modules: true,
      plugins: [
        autoprefixer(),
        postcssPresetEnv({ stage: 0 })
      ],
      use: [ 'sass' ]
    }),
    resolve()
  ]
};