import React from 'react';
import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';


export const Input = props => {
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
        <label className={ setClassName(props, 'input') }>
          <input type='text' className={ undefined } { ...props } />
        </label>
      );
  };
};


Input.propTypes = {
  type: PropTypes.string.isRequired
};