import React from 'react';
import setClassName from 'utilities/setClassName';
import styles from 'src/components/loader/bouncy/BouncySpinner.module.scss';

/**
 * @namespace BouncySpinner
 * @description Bouncy variant loader component.
 * @tutorial `src\stories\Loader.stories.js`.
 *
 * @memberof Loader
 */
export const BouncySpinner = (props) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      { ...props }
      className={ setClassName(props, styles['bouncy-spinner']) }
    >
      <circle cx="51.4121" cy="51.4121" r="2.53333" fill="currentColor">
        <animate attributeName="cx" values="64.14213562373095;35.85786437626905;64.14213562373095" keyTimes="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" repeatCount="indefinite" begin="-0.25s" />
        <animate attributeName="cy" values="64.14213562373095;35.85786437626905;64.14213562373095" keyTimes="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" repeatCount="indefinite" begin="-0.25s" />
        <animate attributeName="r" values="10;2;10;2;10" keyTimes="0;0.25;0.5;0.75;1" dur="1s" repeatCount="indefinite" begin="-0.25s" />
      </circle>
      <circle cx="35.9501" cy="64.0499" r="9.46667" fill="currentColor">
        <animate attributeName="cx" values="35.85786437626905;64.14213562373095;35.85786437626905" keyTimes="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" repeatCount="indefinite" begin="0s" />
        <animate attributeName="cy" values="64.14213562373095;35.85786437626905;64.14213562373095" keyTimes="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" repeatCount="indefinite" begin="0s" />
        <animate attributeName="r" values="10;2;10;2;10" keyTimes="0;0.25;0.5;0.75;1" dur="1s" repeatCount="indefinite" begin="0s" />
      </circle>
    </svg>
  );
};