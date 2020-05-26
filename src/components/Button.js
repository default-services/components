import React from 'react';
import PropTypes from 'prop-types';

const Button = props => <a { ...props }>{ props.children }</a>;

Button.propTypes = {
  className: PropTypes.string.isRequired,
  variant: PropTypes.string
};

export default Button;