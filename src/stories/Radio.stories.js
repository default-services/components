import React from 'react';
import { action } from '@storybook/addon-actions';
import { RadioButton as DefaultRadioButton } from 'components/radiobutton/RadioButton';

export default {
  title: 'Radio Button',
  component: DefaultRadioButton
};

export const Radio = () => (
  <DefaultRadioButton onClick={ action('clicked') } text='Radio button' />
);

export const Radio_Filled = () => (
  <DefaultRadioButton
    onClick={ action('clicked') }
    text='Radio button filled'
    variant='filled'
  />
);