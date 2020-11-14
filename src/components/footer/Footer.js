import PropTypes from 'prop-types';
import React from 'react';
import setClassName from 'utilities/setClassName';
import styles from 'src/assets/scss/styles.module.scss';

/**
 * @namespace Footer
 * @description Default styled footer component.
 * @tutorial `src\stories\Footer.stories.js`.
 */

export const Footer = (props) => {
  const {
    children,
    ...componentProps
  } = props;

  return (
    <footer { ...componentProps } className={ setClassName(props, styles.footer) }>
      { children }
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.element.isRequired
};