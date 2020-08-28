import React, { Component } from 'react';

import { Button } from 'src/components/button/Button';
import { CloseAltIcon } from 'assets/icons/CloseAltIcon';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { Input } from 'src/components/input/Input';
import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';

/**
 * @namespace Notice
 * @description Default styled alert, confirm, and prompt notification components.
 * @property {function} cancelFunc - Cancel button function.
 * @property {string} cancelText - Cancel button text.
 * @property {{ children: JSX.Element}} - Child elements to nest in notice (e.g., the message).
 * @property {string} header - Header text for notice component.
 * @property {string} inputPlaceholder - Placeholder for input of notice component.
 * @property {function} okayFunc - Okay button function.
 * @property {string} okayText - Okay button text.
 * @property {function} setShow - Function which accepts a boolean of whether to show notice.
 * @property {boolean} show - Boolean associated with the setShow function described above.
 * @property {string} type - type of notice being used (e.g., "alert", "confirm", or "prompt").
 * @property {string} variant - Variant of notices to use (e.g., "alt-icons").
 * @tutorial `src\stories\Notice.stories.js`.
 */


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
    stateOkayFunc: () => userOkFunc(this)
  };

  handleClose = () => this.props.setShow(false);
  handleKeyUp = event => {
    this.setState({ promptInputText: event.target.value });
  };

  stopPropagation = event => event.stopPropagation();

  // Configure for mobile devices

  render() {
    var {
      handleClose,
      handleKeyUp,
      props,
      props: {
        cancelFunc,
        cancelText,
        children: message,
        header,
        inputPlaceholder = 'Type here',
        okayFunc,
        okayText,
        setShow,
        show,
        type,
        variant = '',
        ...drilledProps
      },
      state: {
        stateOkayFunc,
        promptInputText
      },
      stopPropagation
    } = this;

    const Close = iconProps => variant.includes('alt-icons') ?
      <CloseAltIcon { ...iconProps } /> : <CloseIcon { ...iconProps } />;

    const handleCancel = () => {
      if(props.cancelFunc) cancelFunc();
      this.props.setShow(false);
    };

    if(!show)
      return (<></>);

    return (
      <div
        className={ setClassName(props, 'notice-mask') }
        onClick={ handleClose }
      >
        <aside
          { ...drilledProps }
          className={ setClassName(props, 'notice') }
          onClick={ stopPropagation }
          variant={ variant }
        >
          <header>
            <h5>{ header || '' }</h5>
            <Close aria-label='close' onClick={ handleClose } />
          </header>
          <article>
            <p>{ message }</p>
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
                  <Button onClick={ stateOkayFunc }>{ okayText || 'Okay' }</Button>
                  <Button onClick={ handleCancel }>{ cancelText || 'Cancel' }</Button>
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
  header: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  okayFunc: PropTypes.func,
  okayText: PropTypes.string,
  setShow: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string
};