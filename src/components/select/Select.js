import React, { Component } from 'react';

import { ChevronDownAltIcon } from 'assets/icons/ChevronDownAltIcon';
import { ChevronDownIcon } from 'assets/icons/ChevronDownIcon';
import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';
import styles from 'src/components/select/Select.module.scss';

/**
 * @namespace Select
 * @description Default styled select drop down component.
 * @property {Array.<string>} options - Array of strings that are select options.
 * @property {string} title - Placeholder title for select drop down.
 * @property {string} variant - Variant of select component to use (e.g., "alt-icons").
 * @tutorial `src\stories\Select.stories.js`
 */
export class Select extends Component {

  state = {
    currentOption: this.props.title,
    showOptions: false
  };

  render() {

    const {
      props: {
        options,
        variant = ''
      },
      state: {
        currentOption,
        showOptions
      }
    } = this;

    // Helps determine the longest option which allows CSS
    // calculations to be made utilizing the "ch" (character) unit
    const longestOptionWidth = options.reduce((acc, option) => {
      if (option.length > acc) acc = option.length;
      return acc;
    }, 0);

    // Toggle displaying the options
    const handleDropdownClick = () => this.setState({ showOptions: !this.state.showOptions });

    // Switch selected option to current option
    const handleOptionClick = (option) => {
      this.setState({
        currentOption: option,
        showOptions: false
      });
    };

    // Configure option padding based on longest option width
    const setOptionStyles = (option) => {
      const paddingRight = `calc(${`${longestOptionWidth - option.length + 4}ch`} + 1.2rem)`;
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

    const ChevronDown = (props) => (variant.includes('alt-icons')
      ? <ChevronDownAltIcon { ...props } />
      : <ChevronDownIcon { ...props } />);

    return (
      <article { ...this.props } className={ setClassName(this.props, styles.select) }>

        <div
          onClick={ handleDropdownClick }
          role="listbox"
          style={ { width: `${longestOptionWidth + 1}ch` } }
        >
          <span
            style={ { paddingRight: longestOptionWidth - currentOption.length } }
          >
            { currentOption }
          </span>
          <span>|</span>
          <ChevronDown style={ { transform: `scaleY(${showOptions ? '-1' : '1'})` } } />
        </div>

        { showOptions ? optionList : undefined }
      </article>
    );
  }
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.string
};

Select.defaultProps = {
  variant: ''
};