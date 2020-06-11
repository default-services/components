import React from 'react';
import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';

import { CheckAltIcon } from 'src/assets/icons/CheckAltIcon';


export const Checkbox = props => {
  const { text, type } = props;

  if(type && type !== 'checkbox')
    return console.warn(
      `\`Checkbox\` can only accept a \`type\` prop of "checkbox". Received "${props.type}", which was discarded and replaced by "checkbox".`
    );

  return (
    <label className={ setClassName(props, 'checkbox') }>
      <span>{ text || '' }</span>
      <input { ...props } className={ undefined } type='checkbox' />
      <CheckAltIcon />
    </label>
  );
};

Checkbox.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string
};