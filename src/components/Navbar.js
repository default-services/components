import React from 'react';
import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';


export const Navbar = props => {
  const { links, variant } = props;
  // Check if there's an 'underline' variant in props
  const underline = (
    variant === 'navbar-underline' ||
    variant === 'navbar-right-underline'
  );

  return (
    <header { ...props } className={ setClassName(props, 'navbar') }>
      <nav>
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
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  variant: PropTypes.string
};