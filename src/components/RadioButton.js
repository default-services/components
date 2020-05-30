import React from 'react';
import PropTypes from 'prop-types';


const RadioButton = props => {
  const { className, text, type } = props;

  if(type && type !== 'radio')
    return console.warn(
      `\`RadioButton\` can only accept a \`type\` prop of "radio". Received "${props.type}", which was discarded and replaced by "radio".`
    );

  return (
    <label className={ className }>
      <span>{ text || '' }</span>
      <input { ...props } className={ undefined } type='radio' />
      <span />
    </label>
  );
};

RadioButton.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string,
  type: PropTypes.string
};

export default RadioButton;