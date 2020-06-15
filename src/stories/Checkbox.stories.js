import React from 'react';
import { action } from '@storybook/addon-actions';
import { Checkbox as DefaultCheckbox } from 'components/checkbox/Checkbox';

export default {
  title: 'Checkbox',
  component: DefaultCheckbox
};

export const Checkbox = () => (
  <DefaultCheckbox onClick={ action('clicked') } text='Checkbox' />
);

export const Checkbox_Alt_Icons = () => (
  <DefaultCheckbox onClick={ action('clicked') } text='Checkbox' variant='alt-icons' />
);