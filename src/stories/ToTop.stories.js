import { ToTop as DefaultToTop } from 'components/totop/ToTop';
import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'To-top',
  component: DefaultToTop
};

const styles = `
  div[class*="to-top"][role="button"] {
    opacity: 1 !important;
    pointer-events: auto !important;
  }
`;

export const ToTop = () => (
  <div>
    <DefaultToTop onClick={ action('clicked') } />
    <style>{ styles }</style>
  </div>
);

export const ToTop_Alt_Icons = () => (
  <div>
    <DefaultToTop onClick={ action('clicked') } variant='alt-icons' />
    <style>{ styles }</style>
  </div>
);