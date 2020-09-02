import styles from 'src/assets/scss/styles.module.scss';

/**
 * @description - Allow for variants, and additional user-specified classes.
 * @property {Object} props - Component props.
 * @property {string} name - Class name to use (which will be processed by CSS Modules).
 */

const setClassName = (props, name) => {
  const { className } = props;
  return className ? `${styles[name]} ${className}` : styles[name];
};

export default setClassName;