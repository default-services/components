import { ToTop as DefaultToTop } from 'components/totop/ToTop';
import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'To-top',
  component: DefaultToTop
};

export const ToTop = () => (
  <DefaultToTop onClick={ action('clicked') } />
);

export const ToTop_Alt_Icons = () => (
  <DefaultToTop onClick={ action('clicked') } variant='alt-icons' />
);