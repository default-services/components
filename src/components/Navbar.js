import React from 'react';
import PropTypes from 'prop-types';

const Navbar = props => {
  const { links, variant } = props;

  // Check if there's an 'underline' variant in props
  const underline = (
    variant === 'navbar-underline' ||
    variant === 'navbar-right-underline'
  );

  return (
    <header { ...props }>
      <nav>
        <ul>
          {
            links.map(link => {
              const { href, key, text } = link;

              return (
                <li key={ key }>
                  <a href={ href }>{ text }</a>
                  { underline ? <span /> : undefined }
                </li>
              );
            })
          }
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  variant: PropTypes.string
};

export default Navbar;