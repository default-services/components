import { Avatar as DefaultAvatar } from 'components/avatar/Avatar';
import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Avatar',
  component: DefaultAvatar
};

const image = `https://robohash.org/${Date.now()}?size=400x400`;

export const Avatar_Small = () => (
  <DefaultAvatar variant="small" onClick={ action('clicked') }>
    <img src={ image } alt="avatar" />
  </DefaultAvatar>
);

export const Avatar_Medium = () => (
  <DefaultAvatar variant="medium" onClick={ action('clicked') }>
    <img src={ image } alt="avatar" />
  </DefaultAvatar>
);

export const Avatar_Default = () => (
  <DefaultAvatar onClick={ action('clicked') }>
    <img src={ image } alt="avatar" />
  </DefaultAvatar>
);

export const Avatar_Large = () => (
    <DefaultAvatar variant="large" onClick={ action('clicked') }>
      <img src={ image } alt="avatar" />
    </DefaultAvatar>
);