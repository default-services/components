import React, { Component } from 'react';

import { Button } from 'components/button/Button';
import { CloseAltIcon } from 'assets/icons/CloseAltIcon';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { Input } from 'components/input/Input';
import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';

// Pass input value to user's Okay function (if prompt) and close the dialog
const userOkFunc = (context) => {

  // If Okay function exists
  if(context.props.okayFunc) {
    context.props.type === 'prompt' ?
      context.props.okayFunc(context.state.promptInputText) :
      context.props.okayFunc();

  // If no Okay function exists
  } else console.error('no okayFunc property set.');

  // Reset prompt input text and close the dialog
  context.setState({ promptInputText: '' }, context.props.setShow(false));
};


export class Notice extends Component {

  state = {
    promptInputText: '',
    okayFunc: () => userOkFunc(this)
  };

  handleClose = () => this.props.setShow(false);
  handleKeyUp = event => {
    this.setState({ promptInputText: event.target.value });
  };

  stopPropagation = event => event.stopPropagation();

  // Configure for mobile devices

  render() {
    const {
      handleClose,
      handleKeyUp,
      props,
      props: {
        cancelFunc = () => this.props.setShow(false),
        cancelText = 'Cancel',
        children,
        closeOnBackgroundClick = true,
        header,
        inputPlaceholder = 'Type here',
        okayText = 'Okay',
        type,
        variant
      },
      state: {
        okayFunc,
        promptInputText
      },
      stopPropagation
    } = this;

    const Close = iconProps => variant && variant.includes('alt-icons') ?
      <CloseAltIcon { ...iconProps } /> : <CloseIcon { ...iconProps } />;

    return (
      <div
        className={ setClassName(props, 'notice-mask') }
        onClick={ () => closeOnBackgroundClick ? handleClose() : undefined }
        style={ !this.props.show ? { display: 'none' } : undefined }
      >
        <aside { ...props } className={ setClassName(props, 'notice') } onClick={ stopPropagation }>
          <header>
            <h5>{ header || '' }</h5>
            <Close aria-label='close' onClick={ handleClose } />
          </header>
          <article>
            { children }
            {
              type === 'confirm' || type === 'prompt' ?
                <article>
                  {
                    type === 'prompt' ?
                      <Input
                        onChange={ handleKeyUp }
                        placeholder={ inputPlaceholder }
                        type='text'
                        value={ promptInputText }
                      /> :
                      undefined
                  }
                  <Button onClick={ okayFunc }>{ okayText }</Button>
                  <Button onClick={ cancelFunc }>{ cancelText }</Button>
                </article> :
                undefined
            }
          </article>
        </aside>
      </div>
    );
  }
};


Notice.propTypes = {
  cancelFunc: PropTypes.func,
  cancelText: PropTypes.string,
  closeOnBackgroundClick: PropTypes.bool,
  header: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  okayFunc: PropTypes.func.isRequired,
  okayText: PropTypes.string,
  setShow: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string
};