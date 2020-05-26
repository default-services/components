import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const { type } = props;

  // Error for invalid `type` props
  const error = component => console.error(`Type "${type}" used for the \`Input\` component, use the \`${component}\` component instead.`);

  switch(type) {
    case 'radio':
      return error('RadioButton');

    case 'checkbox':
      return error('Checkbox');

    // Else if valid
    default:
      return (
        <label>
          <input type='text' { ...props } />
        </label>
      );
  };
};


Input.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Input;