import React from 'react';
import { action } from '@storybook/addon-actions';
import { Input as DefaultInput } from 'components/Input';

export default {
  title: 'Input',
  component: DefaultInput
};

export const Input = () => (
  <div style={ { padding: '.5rem .25rem' } }>
    <DefaultInput onClick={ action('clicked') } placeholder='Type here' type='text' />
  </div>
);