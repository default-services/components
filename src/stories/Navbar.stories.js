import React from 'react';
import { action } from '@storybook/addon-actions';
import { Navbar as DefaultNavbar } from 'components/navbar/Navbar';

export default {
  title: 'Navbar',
  component: DefaultNavbar
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
  <DefaultNavbar onClick={ action('clicked') } links={ links } />
);

export const Navbar_Underline_On_Hover = () => (
  <div>
<DefaultNavbar onClick={ action('clicked') } links={ links } variant='navbar-underline' />
<h1>test</h1>
  </div>

);

export const Navbar_Right = () => (
  <DefaultNavbar onClick={ action('clicked') } links={ links } variant='navbar-right' />
);

export const Navbar_Right_Underline_On_Hover = () => (
  <DefaultNavbar onClick={ action('clicked') } links={ links } variant='navbar-right-underline' />
);