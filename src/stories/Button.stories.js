import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button as DefaultButton } from 'components/button/Button';

export default {
  title: 'Button',
  component: DefaultButton
};

export const Square = () => (
  <div style={ { padding: '1rem .25rem' } }>
    <DefaultButton onClick={ action('clicked') }>
      Square Button
    </DefaultButton>
  </div>
);

export const Round = () => (
  <div style={ { padding: '1rem .25rem' } }>
    <DefaultButton variant='button-round' onClick={ action('clicked') }>
      Round Button
    </DefaultButton>
  </div>
);