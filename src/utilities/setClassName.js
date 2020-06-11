import styles from 'src/assets/scss/styles.module.scss';

// Allow for variants, and additional user-specified classes
const setClassName = (props, name) => {
  const { className } = props;
  return className ? `${styles[name]} ${className}` : styles[name];
};

export default setClassName;