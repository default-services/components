import React, { Component, Fragment } from 'react';

import { CloseAltIcon } from 'assets/icons/CloseAltIcon';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { MenuAltIcon } from 'assets/icons/MenuAltIcon';
import { MenuIcon } from 'assets/icons/MenuIcon';
import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';

export class Navbar extends Component {

  state = {
    menuOpen: false
  }

  render() {
    const { props: { links, variant = '' } } = this;
    const { state: { menuOpen } } = this;

    const toggleMenu = () => this.setState({ menuOpen: !menuOpen });
    const className = menuOpen ? 'navbar-open' : 'navbar';

    // Check if there's an 'underline' variant in props
    const underline = (
      variant.includes('navbar-underline') ||
      variant.includes('navbar-right-underline')
    );

    // Determining which menu icon to serve & menu offset
    const Close = props => variant.includes('alt-icons') ?
      <CloseAltIcon { ...props } /> :
      <CloseIcon { ...props } />;

    const Menu = props => variant.includes('alt-icons') ?
      <MenuAltIcon { ...props } /> :
      <MenuIcon { ...props } />;

    const Icon = props => menuOpen ?
      <Close { ...props } /> :
      <Menu { ...props } />;

    const labelText = menuOpen ? 'close' : 'open';
    return (
      <Fragment>
        <header
          { ...this.props }
          className={ setClassName(this.props, className) }
        >
          <aside role='dialog' />
          <nav>
            <div role='dialog'>
              <Icon onClick={ toggleMenu } aria-label={ labelText } />
            </div>
            <ul>
              {
                links.map(link => {
                  const { a, li, text } = link;
                  const { key } = li;

                  return (
                    <li { ...li } key={ key }>
                      <a { ...a }>{ text }</a>
                      { underline ? <span /> : undefined }
                    </li>
                  );
                })
              }
            </ul>
          </nav>
        </header>
        <div role='dialog' />
      </Fragment>
    );
  };
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  variant: PropTypes.string
};