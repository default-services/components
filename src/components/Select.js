import React from 'react';
import PropTypes from 'prop-types';

const Select = props => {
  const { className, options } = props;

  return (
    <label className={ className }>
      <select { ...props } className={ undefined }>
        {
          options.map(option => {
            const { text, value } = option;
            return <option value={ value } key={ value }>{ text }</option>;
          })
        }
      </select>
    </label>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired
};

export default Select;