import React from 'react';
import PropTypes from 'prop-types';


const RadioButton = props => {
  const { ['data-radio-label-class']: labelClassName, type } = props;

  if(type && type !== 'radio')
    return console.warn(
      `\`RadioButton\` can only accept a \`type\` prop of "radio". Received "${props.type}", which was discarded and replaced by "radio".`
    );

  return (
    <label className={ labelClassName }>
      <input { ...props } type='radio' />
      <span />
    </label>
  );
};

RadioButton.propTypes = {
  className: PropTypes.string.isRequired
};

export default RadioButton;