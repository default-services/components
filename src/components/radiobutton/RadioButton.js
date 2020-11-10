import PropTypes from 'prop-types';
import React from 'react';
import setClassName from 'utilities/setClassName';
import styles from 'src/components/radiobutton/RadioButton.module.scss';

/**
 * @namespace RadioButton
 * @description Default styled radio button component.
 * @property {string} type - If provided, is discarded and "radio" is used.
 * @property {string} text - Radio button text.
 * @property {string} variant - Radio button variant to use (e.g., "alt-icons").
 * @tutorial `src\stories\Radio.stories.js`
 */

export const RadioButton = (props) => {
  const {
    className,
    text,
    type,
    ...inputProps
  } = props;

  if (type && type !== 'radio') { return console.warn(
    `\`RadioButton\` can only accept a \`type\` prop of "radio". Received "${props.type}", which was discarded and replaced by "radio".`
  ); }

  return (
    <label className={ setClassName(props, styles['radio-button']) }>
      <span>{ text || '' }</span>
      <input { ...inputProps } type="radio" />
      <span />
    </label>
  );
};

RadioButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string
};

RadioButton.defaultProps = {
  className: '',
  text: '',
  type: ''
};