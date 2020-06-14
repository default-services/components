import React, { useState } from 'react';
import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';
import { ChevronDownAltIcon } from 'assets/icons/ChevronDownAltIcon';

export const Select = props => {
  const { options, title } = props;
  const [ currentOption, setCurrentOption ] = useState(title);
  const [ showOptions, setShowOptions ] = useState(false);
  const transform = `scaleY(${showOptions ? '-1' : '1'})`;

  const longestOptionWidth = options.reduce((acc, option) => {
    if(option.length > acc) acc = option.length;
    return acc;
  }, 0);

  const handleClick = () => setShowOptions(!showOptions);
  const optionList = (
    <ul className={ undefined }>
      {
        options.map((option, index) => {
          const handleOptionClick = () => {
            setCurrentOption(option);
            setShowOptions(false);
          };
          const key = `${option.replace(/ /g, '-')}-${index}`;
          return (
            <li
              key={ key }
              onClick={ handleOptionClick }
              style={ { paddingRight: `calc(${longestOptionWidth - option.length + 4 + 'ch'} + 1.5rem)` } }
            >
              { option }
            </li>
          );
        })
      }
    </ul>
  );


  return (
    <article { ...props } className={ setClassName(props, 'select') }>
      <div onClick={ handleClick } style={ { width: `${longestOptionWidth + 5}ch` } }>
        <span style={ { paddingRight: longestOptionWidth - currentOption.length } }>{ currentOption }</span>
        <ChevronDownAltIcon style={ { transform } } />
      </div>
      { showOptions ? optionList : undefined }
    </article>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired
};