const CL = 'bt-clear';

const ButtonClear = (props) => (
  <button
    type="button"
    className={CL}
    style={props.style}
    onClick={props.onClick}
  >x</button>
);

export default ButtonClear
