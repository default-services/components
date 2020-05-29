const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],

  // Webpack for Storybook "manager"
  managerWebpack: config => {
    return {
      ...(config || []),
      module: {
        rules: [{
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' }, // creates style nodes from JS strings
            { loader: 'css-loader' },   // translates CSS into CommonJS
            {
              loader: 'sass-loader', // compiles Sass to CSS
              options: { implementation: require('sass') } // Prefer `dart-sass`
            }
          ]
        }]
      },
      resolve: {
        ...(config.resolve || []),
        modules: [
          ...(config.resolve.modules || []),

          // Allow absolute file paths in Storybook "manager"
          path.resolve(__dirname, '../src')
        ],
        alias: {
          ...(config.resolve.alias || []),
          components: path.resolve(__dirname, '../src/components'),
          dist: path.resolve(__dirname, '../dist')
        }
      }
    }
  },

  // Webpack for Storybook "stories"
  webpackFinal: config => {
    return {
      ...(config || []),

      resolve: {
        ...(config.resolve || []),
        modules: [
          ...(config.resolve.modules || []),

          // Allow absolute file paths in Storybook "stories"
          path.resolve(__dirname, '../src')
        ],
        alias: {
          ...(config.resolve.alias || []),
          components: path.resolve(__dirname, '../src/components')
        }
      },

      // Limit console noise during build
      performance: {
        hints: false
      }
    }
  }
};