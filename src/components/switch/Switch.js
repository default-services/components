import React, { Component } from 'react';

import setClassName from 'utilities/setClassName';

// import PropTypes from 'prop-types';


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
        className={ setClassName(this.props, 'switch') }
      >
        <span />
      </article>
    );
  }
};

// Switch.propTypes = {};