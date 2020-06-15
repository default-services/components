import React from 'react';
import { action } from '@storybook/addon-actions';
import { Navbar as DefaultNavbar } from 'components/navbar/Navbar';

export default {
  title: 'Navbar',
  component: DefaultNavbar,
  parameters: {
    viewport: {
      defaultViewport: 'iphone6'
    },
  }
};


const links = [
  {
    // `li` element props
    li: { key: 'link_one'},

    // `a` element props
    a: { href: '#one', title: 'link one' },

    // link text
    text: 'link one'
  },
  {
    li: { key: 'link_two' },
    a: { href: '#two' },
    text: 'link two'
  },
  {
    li: { key: 'link_three' },
    a: { href: '#three' },
    text: 'link three'
  }
];

export const Navbar_On_Mobile = () => (
  <DefaultNavbar onClick={ action('clicked') } links={ links } />
);

export const Navbar_On_Mobile_Alt_Icons = () => (
  <DefaultNavbar onClick={ action('clicked') } links={ links } variant='alt-icons' />
);