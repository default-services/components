import { AtomicSpinner } from 'src/components/loader/atomic/AtomicSpinner';
import { BouncySpinner } from 'src/components/loader/bouncy/BouncySpinner';
import { DefaultSpinner } from 'src/components/loader/default/DefaultSpinner';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'src/assets/scss/styles.module.scss';

/**
 * @namespace Loader
 * @description Default styled loader component.
 * @property {boolean} [show=false] - determines whether or not to show component.
 * @property {string} variant - variant type of Loader to use.
 *
 * @tutorial `src\stories\Loader.stories.js`.
 */
export const Loader = (props) => {

  const {
    show = false,
    variant,
    ...loaderProps
  } = props;

  const Spinner = () => {
    switch (variant) {
      case 'atomic':
        return <AtomicSpinner { ...loaderProps } />;

      case 'bouncy':
        return <BouncySpinner { ...loaderProps } />;

      case 'default':
      default:
        return <DefaultSpinner { ...loaderProps } />;
    }
  };

  return show ? (
    <div className={ styles['loader-container'] }>
      <Spinner />
    </div>
  ) : null;
};

Loader.propTypes = {
  show: PropTypes.bool,
  variant: PropTypes.string
};

Loader.defaultProps = {
  show: false,
  variant: ''
};