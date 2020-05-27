import React from 'react';

import DefaultButton from './components/Button';
import DefaultCheckbox from './components/Checkbox';
import DefaultContainer from './components/Container';
import DefaultInput from './components/Input';
import DefaultNavbar from './components/Navbar';
import DefaultRadioButton from './components/RadioButton';

import styles from './styles.module.scss';


// Allow for variants, and additional user-specified classes
const setClassName = (props, name) => {
  const { className, variant } = props;

  // If variant is selected, use the variant's class name
  const selection = variant || name;

  return className ? `${styles[selection]} ${props.className}` : styles[selection];
};


// COMPONENTS (listed alphabetically)

// Button
export const Button = props => (
  <DefaultButton { ...props } className={ setClassName(props, 'button') } />
);

// Checkbox
export const Checkbox = props => (
  <DefaultCheckbox { ...props } className={ setClassName(props, 'checkbox') } />
);

// Container
export const Container = props => (
  <DefaultContainer { ...props } className={ setClassName(props, 'container') } />
);

// Input
export const Input = props => (
  <DefaultInput { ...props } className={ setClassName(props, 'input') } />
);

// Navbar
export const Navbar = props => (
  <DefaultNavbar { ...props } className={ setClassName(props, 'navbar') } />
);

// Radio button
export const RadioButton = props => (
  <DefaultRadioButton
    { ...props }
    className={ setClassName(props, 'radio') }
    data-radio-label-class={ styles['radio-button-label'] }
  />
);