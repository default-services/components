import React, { Component } from 'react';

import { CloseAltIcon } from 'assets/icons/CloseAltIcon';
import { CloseIcon } from 'assets/icons/CloseIcon';
import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';

export class Notice extends Component {

  state = {
    show: this.props.show
  };

  handleClose = () => this.state.show = false;

  render() {
    const {
      handleClose,
      props,
      props: {
        children,
        header,
        type,
        variant
      },
      state: {
        show
      }
    } = this;

    const Close = iconProps => variant.includes('alt-icons') ?
      <CloseAltIcon { ...iconProps } /> : <CloseIcon { ...iconProps } />;


    if(show) {
      return (
        <div className={ setClassName(props, 'notice-mask') }>
          <aside { ...props } className={ setClassName(props, 'notice') }>
            <header className={ type }>
              <h5>{ header || '' }</h5>
              <Close aria-label='close' onClick={ handleClose } />
            </header>
            <article>
              { children }
            </article>
          </aside>
        </div>
      );
    }
    return false;
  };
};


Notice.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string
};