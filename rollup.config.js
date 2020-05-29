import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';

const path = require('path');


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