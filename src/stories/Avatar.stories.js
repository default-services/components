import React from 'react';
import { action } from '@storybook/addon-actions';
import { Avatar as DefaultAvatar } from 'components/avatar/Avatar';

export default {
  title: 'Avatar',
  component: DefaultAvatar
};

const image = 'https://user-images.githubusercontent.com/8584126/84220258-38e41500-aa87-11ea-948b-150038991a67.png'

export const Avatar_Small = () => (
  <DefaultAvatar variant="small" onClick={ action('clicked') }>
    <img src={ image } />
  </DefaultAvatar>
);

export const Avatar_Medium = () => (
  <DefaultAvatar variant="medium" onClick={ action('clicked') }>
    <img src={ image } />
  </DefaultAvatar>
);

export const Avatar_Default = () => (
  <DefaultAvatar onClick={ action('clicked') }>
    <img src={ image } />
  </DefaultAvatar>
);

export const Avatar_Large = () => (
    <DefaultAvatar variant="large" onClick={ action('clicked') }>
      <img src={ image } />
    </DefaultAvatar>
);