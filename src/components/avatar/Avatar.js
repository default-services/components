import PropTypes from 'prop-types';
import React from 'react';
import setClassName from 'utilities/setClassName';

/**
 * @namespace Avatar
 * @description Avatar component. For example, to be represent a user.
 * @property {string} variant - Variant of avatar to use (e.g., "large", "medium", or "small").
 * @property {children} - Image to use as avatar.
 * @tutorial `src\stories\Avatar.stories.js`.
 */

export const Avatar = (props) => {
  const {
    children,
    ...componentProps
  } = props;

  return (
    <article { ...componentProps } className={ setClassName(props, 'avatar') }>
      { children }
    </article>
  );
};

Avatar.propTypes = {
  children: PropTypes.node.isRequired
};