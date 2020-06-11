import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';


export const Switch = props => {
  const [ status, setStatus ] = useState(false);
  const toggle = () => setStatus(!status);

  return (
    <article
      { ...props }
      className={ setClassName(props, 'switch') }
      onClick={ toggle }
      data-active={ status }
    >
      <span />
    </article>
  );
};

// Switch.propTypes = {};