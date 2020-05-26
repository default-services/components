import React from 'react';
import { action } from '@storybook/addon-actions';
import { Container as DefaultContainer } from 'index';

export default {
  title: 'Container',
  component: DefaultContainer
};

export const Container = () => (
  <DefaultContainer onClick={ action('clicked') }>
    <p>This is the container contents</p>
  </DefaultContainer>
);