import React from 'react';
import { action } from '@storybook/addon-actions';
import { Switch as DefaultSwitch } from 'components/switch/Switch';

export default {
  title: 'Switch',
  component: DefaultSwitch
};

export const Switch = () => (
  <div style={{ padding: '1rem' }} >
    <DefaultSwitch onClick={ action('clicked') } />
  </div>
);