import { Loader as DefaultLoader } from 'components/loader/Loader';
import React from 'react';

export default {
  title: 'Loader',
  component: DefaultLoader
};

export const Atomic_Loader = () => (
  <DefaultLoader variant="atomic" show />
);

export const Bouncy_Loader = () => (
  <DefaultLoader variant="bouncy" show />
);

export const Default_Loader = () => (
  <DefaultLoader variant="default" show />
);