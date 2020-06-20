import React, { Component } from 'react';

import setClassName from 'utilities/setClassName';

// import PropTypes from 'prop-types';


export class Switch extends Component {
  state = { status: false };
  toggle = () => this.setState({ status: !this.state.status });

  render() {

    return (
      <article
        onClick={ this.toggle }
        data-active={ this.state.status }
        { ...this.props }
        className={ setClassName(this.props, 'switch') }
      >
        <span />
      </article>
    );
  }
};

// Switch.propTypes = {};