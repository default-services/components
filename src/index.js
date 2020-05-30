import React from 'react';

import DefaultButton from 'components/Button';
import DefaultCheckbox from 'components/Checkbox';
import DefaultContainer from 'components/Container';
import DefaultInput from 'components/Input';
import DefaultNavbar from 'components/Navbar';
import DefaultRadioButton from 'components/RadioButton';
import DefaultSelect from 'components/Select';

import setProps from 'utilities/setProps';

// Button
export const Button = props => (
  <DefaultButton { ...setProps(props, 'button') } />
);

// Checkbox
export const Checkbox = props => (
  <DefaultCheckbox { ...setProps(props, 'checkbox') } />
);

// Container
export const Container = props => (
  <DefaultContainer { ...setProps(props, 'container') } />
);

// Input
export const Input = props => (
  <DefaultInput { ...setProps(props, 'input') } />
);

// Navbar
export const Navbar = props => (
  <DefaultNavbar { ...setProps(props, 'navbar') } />
);

// Radio button
export const RadioButton = props => (
  <DefaultRadioButton { ...setProps(props, 'radio') } />
);

// Radio button
export const Select = props => (
  <DefaultSelect { ...setProps(props, 'select') } />
);