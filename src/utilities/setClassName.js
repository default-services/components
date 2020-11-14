/**
 * @description - Allow for variants, and additional user-specified classes.
 * @property {Object} props - Component props.
 * @property {string} props.className - User defined class name.
 * @property {string} defaultClassName - Default's class name.
 */
const setClassName = (props, defaultClassName) => {
  const { className: userClassName } = props;

  return userClassName
    ? `${defaultClassName} ${userClassName}`
    : defaultClassName;
};

export default setClassName;