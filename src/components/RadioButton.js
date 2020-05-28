import React from 'react';
import PropTypes from 'prop-types';


const RadioButton = props => {
  const { ['label-text']: labelText, className, type } = props;
  const inputProps = { ...props, className: undefined };

  if(type && type !== 'radio')
    return console.warn(
      `\`RadioButton\` can only accept a \`type\` prop of "radio". Received "${props.type}", which was discarded and replaced by "radio".`
    );

  return (
    <label className={ className }>
      <span>{ labelText || '' }</span>
      <input { ...inputProps } type='radio' id='test' />
      <span />
    </label>
  );
};

RadioButton.propTypes = {
  className: PropTypes.string.isRequired
};

export default RadioButton;