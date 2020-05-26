import React from 'react';
import PropTypes from 'prop-types';

const Container = props => <section { ...props }>{ props.children }</section>;

Container.propTypes = {
  className: PropTypes.string.isRequired
};

export default Container;