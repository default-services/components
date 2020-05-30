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

// Plugin config
const plugins = [
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
    compact: true,
    exclude: 'node_modules/**'
  }),
  resolve(),
  commonjs()
];

// Helper function to create config
const createConfig = (input, name, output) => ({
  input: `${input}.js`,
  output: [ {
    name: `${name}`,
    sourcemap: true,
    file: `${output}.js`,
    format: 'umd',
    globals: { react: 'React' }
  } ],
  plugins
});

// Index file config settings
const indexConfig = {
  input: 'src/index',
  output: 'dist/index',
  name: 'default',
  plugins
};

// Brand icon file configuration
const brandIconConfig = {
  input: 'src/assets/icons/brands',
  name: 'brand-icons',
  output: 'icons/brands'
};

// Regular icon file configuration
const regularIconConfig = {
  input: 'src/assets/icons/regular',
  name: 'regular-icons',
  output: 'icons/regular'
};

// Solid icon file configuration
const solidIconConfig = {
  input: 'src/assets/icons/solid',
  name: 'solid-icons',
  output: 'icons/solid'
};

// Final configuration
const configs = [
  indexConfig,
  brandIconConfig,
  regularIconConfig,
  solidIconConfig
].map(path => createConfig(path.input, path.name, path.output));

export default configs;