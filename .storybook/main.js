const path = require('path');
const src = path.resolve(__dirname, '../src');

// Webpack config
const webpack = config => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      modules: [ ...config.resolve.modules, src ],
      alias: { ...config.resolve.alias, src }
    },

    // Limit console "noise"
    performance: { hints: false }
  }
};


module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/preset-create-react-app',
  ],

  // Webpack for Storybook "manager"
  managerWebpack: config => webpack(config),

  // Webpack for Storybook "stories"
  webpackFinal: config => webpack(config)
};