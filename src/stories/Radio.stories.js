import React from 'react';
import { action } from '@storybook/addon-actions';
import { RadioButton as DefaultRadioButton } from 'components/RadioButton';

export default {
  title: 'Radio Button',
  component: DefaultRadioButton
};

export const Radio = () => (
  <DefaultRadioButton onClick={ action('clicked') } text='Radio button' />
);