const CL = 'bt-clear';

const ButtonClear = ({
  style,
  onClick
}) => (
  <button
    type="button"
    className={CL}
    style={style}
    onClick={onClick}
  >x</button>
);

export default ButtonClear
