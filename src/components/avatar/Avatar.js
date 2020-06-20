import PropTypes from 'prop-types';
import React from 'react';
import setClassName from 'utilities/setClassName';

export const Avatar = props => (
  <article { ...props } className={ setClassName(props, 'avatar') }>
    { props.children }
  </article>
);

Avatar.propTypes = {
  children: PropTypes.node.isRequired
};