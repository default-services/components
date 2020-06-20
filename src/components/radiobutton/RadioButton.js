import PropTypes from 'prop-types';
import React from 'react';
import setClassName from 'utilities/setClassName';

export const RadioButton = props => {
  const { text, type } = props;

  if(type && type !== 'radio')
    return console.warn(
      `\`RadioButton\` can only accept a \`type\` prop of "radio". Received "${props.type}", which was discarded and replaced by "radio".`
    );

  return (
    <label className={ setClassName(props, 'radiobutton') }>
      <span>{ text || '' }</span>
      <input { ...props } type='radio' className={ undefined } />
      <span />
    </label>
  );
};

RadioButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string
};