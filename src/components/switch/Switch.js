import React, { Component } from 'react';

import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';
import styles from 'src/assets/scss/styles.module.scss';

/**
 * @namespace Switch
 * @description Default styled switch/toggle component.
 * @property {function} onClick - Parent onClick function.
 *
 * @tutorial `src\stories\Switch.stories.js`
 */

export class Switch extends Component {
  state = { status: false };

  toggle = (callback) => this.setState({ status: !this.state.status }, () => callback || null);

  handleClick = () => this.toggle(this.props.onClick());

  render() {

    return (
      <article
        { ...this.props }
        onClick={ this.handleClick }
        data-active={ this.state.status }
        className={ setClassName(this.props, styles.switch) }
      >
        <span />
      </article>
    );
  }
}

Switch.propTypes = {
  onClick: PropTypes.func
};

Switch.defaultProps = {
  onClick: () => {}
};