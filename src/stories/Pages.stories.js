import { FileNotFound as FileNotFoundPage } from 'components/pages/404/FileNotFound';
import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Pages',
  component: 'Pages'
};

export const Page_404 = () => (
  <FileNotFoundPage  />
);