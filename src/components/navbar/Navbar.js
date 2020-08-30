import React, { Component, Fragment } from 'react';

import { ArrowLeftAltIcon } from 'assets/icons/ArrowLeftAltIcon';
import { ArrowLeftIcon } from 'assets/icons/ArrowLeftIcon';
import { CloseAltIcon } from 'assets/icons/CloseAltIcon';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { MenuAltIcon } from 'assets/icons/MenuAltIcon';
import { MenuIcon } from 'assets/icons/MenuIcon';
import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';

/**
 * @namespace Navbar
 * @description Default styled navbar component.
 * @property {Array.<Object>} links - Array of navigation link objects.
 * @property {string} logo - "src" attribute for logo <img />.
 * @property {string} logoLink - Link navbar logo/icon directs to.
 * @property {string} logoTitle - Title text for logo/icon.
 * @property {string} variant - Variant of navbar to use (e.g., "navbar-underline").
 * @tutorial `src\stories\Navbar.stories.js`.
 */

export class Navbar extends Component {

  state = { menuOpen: false };

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  render() {
    const {
      props: {
        links,
        logo,
        logoLink,
        logoTitle,
        variant = '',
        ...drilledProps
      }
    } = this;

    const { state: { menuOpen } } = this;
    const { toggleMenu } = this;

    const className = menuOpen ? 'navbar-open' : 'navbar';

    // Check if there's an 'underline' variant in props
    const underline = (
      variant.includes('navbar-underline') ||
      variant.includes('navbar-right-underline')
    );

    // Determining which menu icon to serve & menu offset
    const Close = props => variant.includes('alt-icons') ?
      variant.includes('arrow-close') ?
        <ArrowLeftAltIcon { ...props } /> :
        <CloseAltIcon { ...props } /> :

      variant.includes('arrow-close') ?
        <ArrowLeftIcon { ...props } /> :
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
          { ...drilledProps }
          variant={ variant }
          className={ setClassName(this.props, className) }
        >
          <aside role='dialog' />
          <nav>
            <div role='dialog'>
              <Icon onClick={ toggleMenu } aria-label={ labelText } />
            </div>
            <section>
              { logoTitle ? <h3>{ logoTitle }</h3> : undefined }
              {
                logo ?
                  <aside>
                    {
                      logoLink ?
                        <a href={ logoLink } title={ logoTitle || null }>
                          <img src={ logo } alt={ logoTitle || 'logo' } />
                        </a> :
                        <img src={ logo } alt={ logoTitle || 'logo' } />
                    }
                  </aside> :
                  undefined
              }
              <ul>
                {
                  links.map(link => {
                    const { a, li, text } = link;
                    const { key } = li;

                    return (
                      <li { ...li } key={ key } onClick={ toggleMenu }>
                        <a { ...a }>{ text }</a>
                        { underline ? <span /> : undefined }
                      </li>
                    );
                  })
                }
              </ul>

            </section>
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