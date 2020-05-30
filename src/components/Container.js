import React from 'react';
import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';


export const Container = props => (
  <section { ...props } className={ setClassName(props, 'container') }>
    { props.children }
  </section>
);

Container.propTypes = { };