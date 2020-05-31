import React from 'react';
import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';


export const Select = props => {
  const { options } = props;

  return (
    <label className={ setClassName(props, 'select') }>
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