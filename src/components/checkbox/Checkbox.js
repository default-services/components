import { CheckAltIcon } from 'src/assets/icons/CheckAltIcon';
import { CheckIcon } from 'src/assets/icons/CheckIcon';
import PropTypes from 'prop-types';
import React from 'react';
import setClassName from 'utilities/setClassName';

/**
 * @namespace Checkbox
 * @description Default styled checkbox component.
 * @property {string} label - Label (text) for checkbox.
 * @property {string} type - If provided, discarded and replaced with "checkbox".
 * @property {string} variant - Variant of checkbox to use (e.g., "alt-icons").
 * @tutorial `src\stories\Checkbox.stories.js`.
 */

export const Checkbox = props => {
  const {
    className, // Intentionally excluded from inputProps
    label,
    type,
    variant,
    ...inputProps
  } = props;

  if(type && type !== 'checkbox')
    return console.warn(
      `\`Checkbox\` can only accept a \`type\` prop of "checkbox". Received "${props.type}", which was discarded and replaced by "checkbox".`
    );

  return (
    <label className={ setClassName(props, 'checkbox') }>
      <span>{ label || '' }</span>
      <input { ...inputProps } type='checkbox' />
      { variant === 'alt-icons' ? <CheckAltIcon /> : <CheckIcon /> }
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string
};