import { Navbar as DefaultNavbar } from 'components/navbar/Navbar';
import React from 'react';
import { action } from '@storybook/addon-actions';
import defaultLogo from 'assets/images/default-logo.png';

export default {
  title: 'Navbar (mobile)',
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
  <DefaultNavbar
    onClick={ action('clicked') }
    links={ links }
    logo={ defaultLogo }
    logoLink='https://default.services'
    logoTitle='Default Services'
  />
);

export const Navbar_On_Mobile_Alt_Icons = () => (
  <DefaultNavbar
    onClick={ action('clicked') }
    links={ links }
    variant='alt-icons'
    logo={ defaultLogo }
    logoTitle='Default Services'
  />
);

export const Navbar_On_Mobile_Arrow_Close = () => (
  <DefaultNavbar
    onClick={ action('clicked') }
    links={ links }
    variant='arrow-close'
    logo={ defaultLogo }
    logoLink='https://default.services'
  />
);

export const Navbar_On_Mobile_Arrow_Close_Alt_Icons = () => (
  <DefaultNavbar
    onClick={ action('clicked') }
    links={ links }
    variant='arrow-close alt-icons'
    logo={ defaultLogo }
  />
);