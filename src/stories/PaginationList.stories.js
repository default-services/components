import { PaginationList as DefaultPaginationList } from 'components/pagination/PaginationList';
import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'PaginationList',
  component: DefaultPaginationList,
};


const links = [
  {
    li: { key: 'link_one'},
    a: { href: '#one', title: 'link one' },
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
  },
  {
    li: { key: 'link_four'},
    a: { href: '#four', title: 'link four' },
    text: 'link four'
  },
  {
    li: { key: 'link_five' },
    a: { href: '#five' },
    text: 'link five'
  },
  {
    li: { key: 'link_six' },
    a: { href: '#six' },
    text: 'link six'
  },
  {
    li: { key: 'link_seven'},
    a: { href: '#seven', title: 'link seven' },
    text: 'link seven'
  }
];

const linkMap = links.map( link => {
  return <li key={ link.li.key }><a href={ link.a }>{ link.text }</a></li>
});

export const PaginationList = () => (
  <DefaultPaginationList results='3' onClick={ action('clicked') }>
      { linkMap }
  </DefaultPaginationList>
);

export const PaginationList_Round = () => (
  <DefaultPaginationList results='3' variant='round' onClick={ action('clicked') }>
      { linkMap }
  </DefaultPaginationList>
);