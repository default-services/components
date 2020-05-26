import React from 'react';
import { action } from '@storybook/addon-actions';
import { Navbar as DefaultNavbar } from 'index';

export default {
  title: 'Navbar',
  component: DefaultNavbar
};

const links = [
  { key: 'link_one', href: '#one', text: 'link one' },
  { key: 'link_two', href: '#two', text: 'link two' },
  { key: 'link_three', href: '#three', text: 'link three' }
];

export const Navbar = () => (
  <DefaultNavbar onClick={ action('clicked') } links={ links } />
);

export const Navbar_Underline_On_Hover = () => (
  <DefaultNavbar onClick={ action('clicked') } links={ links } variant='navbar-underline' />
);

export const Navbar_Right = () => (
  <DefaultNavbar onClick={ action('clicked') } links={ links } variant='navbar-right' />
);

export const Navbar_Right_Underline_On_Hover = () => (
  <DefaultNavbar onClick={ action('clicked') } links={ links } variant='navbar-right-underline' />
);