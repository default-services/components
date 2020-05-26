const path = require('path');

module.exports = {
  entry: './index.js',
  module: {
    rules: [ {
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' }, // creates style nodes from JS strings
        { loader: 'css-loader' }, // translates CSS into CommonJS
        {
          loader: 'sass-loader', // compiles Sass to CSS
          options: { implementation: require('sass') } // Prefer `dart-sass`
        }
      ]
    } ]
  },
  resolve: {
    modules: [ path.resolve(__dirname, 'src') ],
    alias: {
      components: path.resolve(__dirname, 'src/components')
    }
  }
};