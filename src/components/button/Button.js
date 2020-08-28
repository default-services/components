import PropTypes from 'prop-types';
import React from 'react';
import setClassName from 'utilities/setClassName';

/**
 * @namespace Button
 * @description Default styled button component.
 * @property {string} variant - Variant of button to use (e.g., "round").
 * @property {children} - Child elements to nest in button.
 * @tutorial `src\stories\Button.stories.js`.
 */

export const Button = (props) => {
  const {
    children,
    ...componentProps
  } = props;

  return (
    <a { ...componentProps } className={ setClassName(props, 'button') } role='button'>
      { children }
    </a>
  );
};

Button.propTypes = {
  variant: PropTypes.string
};