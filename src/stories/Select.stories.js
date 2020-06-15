import React from 'react';
import { action } from '@storybook/addon-actions';
import { Select as DefaultSelect } from 'components/select/Select';

export default {
  title: 'Select',
  component: DefaultSelect
};

const options = [
  'first option',
  'second option',
  'third option',
  'fourth option'
];

export const Select = () => (
  <div style={{ padding: '1rem'}} >
    <DefaultSelect options={ options } onClick={ action('clicked') } title='My options' />
  </div>
);

export const Select_Alt_Icons = () => (
  <div style={{ padding: '1rem'}} >
    <DefaultSelect options={ options } onClick={ action('clicked') } title='My options' variant='alt-icons' />
  </div>
);