import PropTypes from 'prop-types';
import React from 'react';
import setClassName from 'utilities/setClassName';
import styles from 'src/components/button/Button.module.scss';

/**
 * @namespace Button
 * @description Default styled button component.
 * @property {string} componentProps.variant - Variant of button to use (e.g., "round").
 * @property {children} - Child elements to nest in button.
 * @property {string} variant - Variant of button to use (e.g., "large" or "round").
 * @tutorial `src\stories\Button.stories.js`.
 */

export const Button = (props) => {
  const {
    children,
    variant,
    ...componentProps
  } = props;

  let buttonClassName;
  switch (variant) {
    case 'large':
      buttonClassName = styles['button-large'];
      break;

    case 'large-round':
      buttonClassName = styles['button-large-round'];
      break;

    case 'round':
      buttonClassName = styles['button-round'];
      break;

    default:
      buttonClassName = styles.button;
      break;
  }


  return (
    <a
      role="button"
      { ...componentProps }
      className={ setClassName(props, buttonClassName) }
    >
      { children }
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  variant: PropTypes.string
};

Button.defaultProps = {
  variant: ''
};