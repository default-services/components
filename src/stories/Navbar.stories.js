import { Navbar as DefaultNavbar } from 'components/navbar/Navbar';
import React from 'react';
import { action } from '@storybook/addon-actions';
import defaultLogo from 'assets/images/default-logo.png';

export default {
  title: 'Navbar',
  component: DefaultNavbar,
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

export const Navbar = () => (
  <DefaultNavbar
    links={ links }
    logo={ defaultLogo }
    logoTitle='Default Services'
    logoLink='https://default.services'
    onClick={ action('clicked') }
  />
);

export const Navbar_Underline_On_Hover = () => (
  <DefaultNavbar
    links={ links }
    logo={ defaultLogo }
    logoTitle='Default Services'
    logoLink='https://default.services'
    onClick={ action('clicked') }
    variant='navbar-underline' />
);

export const Navbar_Right = () => (
  <DefaultNavbar
    links={ links }
    logo={ defaultLogo }
    logoTitle='Default Services'
    logoLink='https://default.services'
    onClick={ action('clicked') }
    variant='navbar-right'
  />
);

export const Navbar_Right_Underline_On_Hover = () => (
  <DefaultNavbar
    links={ links }
    logo={ defaultLogo }
    logoTitle='Default Services'
    logoLink='https://default.services'
    onClick={ action('clicked') }
    variant='navbar-right-underline'
  />
);