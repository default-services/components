import React from 'react';
import { action } from '@storybook/addon-actions';
import { RadioButton as DefaultRadioButton } from 'index';

export default {
  title: 'Radio Button',
  component: DefaultRadioButton
};

export const Radio = () => (
  <DefaultRadioButton onClick={ action('clicked') } label-text="Radio button" />
);