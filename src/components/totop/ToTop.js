import React, { Component } from 'react';

import { ArrowUpAltIcon } from 'src/assets/icons/ArrowUpAltIcon';
import { ArrowUpIcon } from 'src/assets/icons/ArrowUpIcon';
import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';

export class ToTop extends Component {

  state = {
    styles: {
      opacity: 0,
      pointerEvents: 'none'
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrolling = window.scrollY > 500;

    // If window is past 500px & icon is hidden
    if(scrolling && !this.state.styles.opacity)
      this.setState({ styles: { opacity: 1, pointerEvents: 'auto' } });

    // If window is not past 500px and icon is showing
    else if(!scrolling && this.state.styles.opacity)
      this.setState({ styles: { opacity: 0, pointerEvents: 'none' } });

  };

  handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  render() {
    const {
      handleClick,
      props,
      props: { variant = '' }
    } = this;

    const ArrowUp = () => variant.includes('alt-icons') ?
      <ArrowUpAltIcon /> :
      <ArrowUpIcon />;

    return (
      <div
        title='To-top button'
        { ...props }
        className={ setClassName(props, 'to-top') }
        role='button'
        onClick={ handleClick }
        style={ this.state.styles }
      >
        <ArrowUp />
      </div>
    );
  }
};

ToTop.propTypes = {
  variant: PropTypes.string
};