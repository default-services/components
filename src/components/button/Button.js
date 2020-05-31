import React from 'react';
import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';


export const Button = props => (
  <a { ...props } className={ setClassName(props, 'button') }>
    { props.children }
  </a>
);

Button.propTypes = {
  variant: PropTypes.string
};