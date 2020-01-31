import React from 'react'

const CL = 'bt-clear';

const ButtonClear = ({ style, onClick }) => (
  <button
    className={CL}
    style={style}
    onClick={onClick}
  >x</button>
);

export default ButtonClear
