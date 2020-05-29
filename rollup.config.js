import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',

  output: [
    {
      name: 'comlib',
      sourcemap: true,
      file: 'dist/index.js',
      format: 'umd',
      globals: { react: 'React' }
    }
  ],

  plugins: [
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