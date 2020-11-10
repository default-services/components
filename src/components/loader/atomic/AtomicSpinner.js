import React from 'react';
import setClassName from 'utilities/setClassName';
import styles from 'src/components/loader/atomic/AtomicSpinner.module.scss';

/**
 * @namespace AtomicSpinner
 * @description Atomic variant loader component.
 * @tutorial `src\stories\Loader.stories.js`.
 *
 * @memberof Loader
 */
export const AtomicSpinner = (props) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      { ...props }
      className={ setClassName(props, styles['atomic-spinner']) }
    >
      <defs>
        <path id="path_a" d="M50 15A15 35 0 0 1 50 85A15 35 0 0 1 50 15" fill="none" />
        <path id="path_b" d="M0 0A15 35 0 0 1 0 70A15 35 0 0 1 0 0" fill="none" />
      </defs>
      <g transform="rotate(0 50 50)">
        <use xlinkHref="#path_a" stroke="currentColor" strokeWidth="3" />
      </g>
      <g transform="rotate(60 50 50)">
        <use xlinkHref="#path_a" stroke="currentColor" strokeWidth="3" />
      </g>
      <g transform="rotate(120 50 50)">
        <use xlinkHref="#path_a" stroke="currentColor" strokeWidth="3" />
      </g>
      <g transform="rotate(0 50 50)">
        <circle cx="50" cy="14" r="6" fill="currentColor">
          <animateMotion dur="1s" repeatCount="indefinite" begin="0s">
            <mpath xlinkHref="#path_b" />
          </animateMotion>
        </circle>
      </g>
      <g transform="rotate(60 50 50)">
        <circle cx="50" cy="14" r="6" fill="currentColor">
          <animateMotion dur="1s" repeatCount="indefinite" begin="-0.16666666666666666s">
            <mpath xlinkHref="#path_b" />
          </animateMotion>
        </circle>
      </g>
      <g transform="rotate(120 50 50)">
        <circle cx="50" cy="14" r="6" fill="currentColor">
          <animateMotion dur="1s" repeatCount="indefinite" begin="-0.3333333333333333s">
            <mpath xlinkHref="#path_b" />
          </animateMotion>
        </circle>
      </g>
    </svg>
  );
};