import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',

    // Main colors
    colorPrimary: '#57a9a9',
    colorSecondary: '#773d3d',

    // UI
    appBg: '#f5f5f5',
    appContentBg: '#f5f5f5',
    appBorderColor: '#773d3d',
    appBorderRadius: 4,

    // Typography
    fontBase: 'Roboto',
    fontCode: 'monospace',

    // Text colors
    textColor: '#050505',
    textInverseColor: '#f5f5f5',

    // Toolbar colors
    barTextColor: '#773d3d',
    barSelectedColor: '#773d3d',
    barBg: '#e0e0e0',

    // Brand
    brandTitle: 'Default Component Library',
    brandUrl: 'https://github.com/default-services/components#readme',
    brandImage: 'https://avatars3.githubusercontent.com/u/65836493?s=132'
  })
});