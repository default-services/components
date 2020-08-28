import React from 'react';
import setClassName from 'utilities/setClassName';

// import PropTypes from 'prop-types';


/**
 * @namespace Container
 * @description Default styled container component.
 * @tutorial `src\stories\Container.stories.js`.
 */

export const Container = props => {

  const {
    children,
    ...componentProps
  } = props;

  return (
    <section { ...componentProps } className={ setClassName(props, 'container') }>
      { children }
    </section>
  );
};

// Container.propTypes = { };