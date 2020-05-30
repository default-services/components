import styles from 'src/assets/scss/styles.module.scss';

// Allow for variants, and additional user-specified classes
const setClassName = (props, name) => {
  const { className, variant } = props;

  // If variant is selected, use the variant's class name
  const selection = variant || name;

  return className ? `${styles[selection]} ${className}` : styles[selection];
};

export default setClassName;