import PropTypes from 'prop-types';
import React from 'react';
import setClassName from 'utilities/setClassName';
import styles from 'src/components/container/Container.module.scss';

/**
 * @namespace Container
 * @description Default styled container component.
 * @tutorial `src\stories\Container.stories.js`.
 */
export const Container = (props) => {

  const {
    children,
    ...componentProps
  } = props;

  return (
    <section
      { ...componentProps }
      className={ setClassName(props, styles.container) }
    >
      { children }
    </section>
  );
};

Container.propTypes = {
  children: PropTypes.any.isRequired
};