import PropTypes from 'prop-types';
import React from 'react';
import setClassName from 'utilities/setClassName';

/**
 * @namespace Input
 * @description Default styled input component.
 * @property {string} type - If provided, is discarded and replaced with "text".
 * @tutorial `src\stories\Input.stories.js`.
 */

export const Input = (props) => {
  const {
    className,
    type,
    ...inputProps
  } = props;

  // Error for invalid `type` props
  const warn = (component) => console.warn(`Type "${type}" used for the \`Input\` component, use the \`${component}\` component instead.`);

  switch(type) {
    case 'radio':
      return warn('RadioButton');

    case 'checkbox':
      return warn('Checkbox');

    // Else if valid
    default:
      return (
        <label className={ setClassName(props, 'input') }>
          <input { ...inputProps } type='text' />
        </label>
      );
  };
};


Input.propTypes = {
  type: PropTypes.string
};