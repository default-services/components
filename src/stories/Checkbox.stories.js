import { Checkbox as DefaultCheckbox } from 'components/checkbox/Checkbox';
import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Checkbox',
  component: DefaultCheckbox
};

export const Checkbox = () => (
  <DefaultCheckbox onClick={ action('clicked') } label='Checkbox' />
);

export const Checkbox_Alt_Icons = () => (
  <DefaultCheckbox onClick={ action('clicked') } label='Checkbox' variant='alt-icons' />
);