import { CheckAltIcon } from 'src/assets/icons/CheckAltIcon';
import { CheckIcon } from 'src/assets/icons/CheckIcon';
import PropTypes from 'prop-types';
import React from 'react';
import setClassName from 'utilities/setClassName';

export const Checkbox = props => {
  const { label, type, variant } = props;

  if(type && type !== 'checkbox')
    return console.warn(
      `\`Checkbox\` can only accept a \`type\` prop of "checkbox". Received "${props.type}", which was discarded and replaced by "checkbox".`
    );

  return (
    <label className={ setClassName(props, 'checkbox') }>
      <span>{ label || '' }</span>
      <input { ...props } className={ undefined } type='checkbox' role='checkbox' />
      { variant === 'alt-icons' ? <CheckAltIcon /> : <CheckIcon /> }
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string
};