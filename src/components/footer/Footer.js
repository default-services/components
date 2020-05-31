import React from 'react';
// import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';


export const Footer = props => {

  return (
    <footer { ...props } className={ setClassName(props, 'footer') }>
      { props.children }
    </footer>
  );
};

// Footer.propTypes = { };