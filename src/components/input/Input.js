import PropTypes from 'prop-types';
import React from 'react';
import setClassName from 'utilities/setClassName';
import styles from 'src/components/input/Input.module.scss';

/**
 * @namespace Input
 * @description Default styled input component.
 * @property {string} type - If provided, is reviewed for validity with this component.
 * @property {string} variant - Variant of input to use (e.g., "large").
 * @tutorial `src\stories\Input.stories.js`.
 */
export const Input = (props) => {
  const {
    className,
    variant,
    ...inputProps
  } = props;

  // Error for invalid `type` props
  const error = (component) => (
    console.error(`Type "${props.type}" used for the \`Input\` component, use the \`${component}\` component instead.`)
  );

  // Set input class name
  let inputClassName;
  switch (variant) {
    case 'large':
      inputClassName = styles['input-large'];
      break;

    default:
      inputClassName = styles.input;
      break;
  }

  // Check for wrong types, only return component if valid
  switch (props.type) {
    case 'radio':
      return error('RadioButton');

    case 'checkbox':
      return error('Checkbox');

    default:
      return (
        <label className={ setClassName(props, inputClassName) }>
          <input type="text" { ...inputProps } />
        </label>
      );
  }
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string
};

Input.defaultProps = {
  className: '',
  type: '',
  variant: ''
};
