import React, { useState } from 'react';
import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';
import { ChevronDownAltIcon } from 'assets/icons/ChevronDownAltIcon';

export const Select = props => {
  const { options, title } = props;
  const [ currentOption, setCurrentOption ] = useState(title);
  const [ showOptions, setShowOptions ] = useState(false);

  // Helps determine the longest option which allows CSS
  // calculations to be made utilizing the "ch" (character) unit
  const longestOptionWidth = options.reduce((acc, option) => {
    if(option.length > acc) acc = option.length;
    return acc;
  }, 0);

  // Toggle displaying the options
  const handleDropdownClick = () => setShowOptions(!showOptions);

  // Switch selected option to current option
  const handleOptionClick = option => {
    setCurrentOption(option);
    setShowOptions(false);
  };

  // Configure option padding based on longest option width
  const setOptionStyles = option => {
    const paddingRight = `calc(${longestOptionWidth - option.length + 3 + 'ch'} + 1.5rem)`;
    return { paddingRight };
  };

  // Unorganized List of options provided from props
  const optionList = (
    <ul>
      {
        options.map((option, index) => {
          const key = `${option.replace(/ /g, '-')}-${index}`;

          return (
            <li
              key={ key }
              onClick={ () => handleOptionClick(option) }
              style={ setOptionStyles(option) }
              title={ option }
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

      <div onClick={ handleDropdownClick } style={ { width: `${longestOptionWidth + 4}ch` } }>
        <span style={ { paddingRight: longestOptionWidth - currentOption.length } }>{ currentOption }</span>
        <span>|</span>
        <ChevronDownAltIcon style={ { transform: `scaleY(${showOptions ? '-1' : '1'})` } } />
      </div>

      { showOptions ? optionList : undefined }
    </article>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};