import React from 'react';
import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';

import { CheckIcon } from 'src/assets/icons/CheckIcon';


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
      <CheckIcon />
    </label>
  );
};

Checkbox.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string
};