// DEV: Work in progress

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
  'third option'
];

export const Select = () => (
  <div>
    <h2 style={{ color: 'var(--secondary-color)'}}>Development in-progress</h2>
    <DefaultSelect options={ options } onClick={ action('clicked') } title='My options' />
  </div>
);