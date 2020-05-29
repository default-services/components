import setClassName from 'utilities/setClassName';

const setProps = (props, name) => ({ ...props, className: setClassName(props, name) });

export default setProps;