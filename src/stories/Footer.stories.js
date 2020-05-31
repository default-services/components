import React from 'react';
import { action } from '@storybook/addon-actions';
import { Footer as DefaultFooter } from 'components/footer/Footer';

export default {
  title: 'Footer',
  component: DefaultFooter
};

export const Footer = () => (
  <DefaultFooter onClick={ action('clicked') }>
    <p>© { new Date().getFullYear() } Default</p>
  </DefaultFooter>
);
