import React from 'react';
import setClassName from 'utilities/setClassName';

// import PropTypes from 'prop-types';


/**
 * @namespace Footer
 * @description Default styled footer component.
 * @tutorial `src\stories\Footer.stories.js`.
 */

export const Footer = props => {
  const {
    children,
    ...componentProps
  } = props;

  return (
    <footer { ...componentProps } className={ setClassName(props, 'footer') }>
      { children }
    </footer>
  );
};

// Footer.propTypes = { };