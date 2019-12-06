import React from 'react'

const CL = 'bt-circle';

const CircleButton = ({
  style,
  tabIndex='-1',
  caption='',
  title,
  onClick
}) => (
  <button
     className={CL}
     style={style}
     tabIndex={tabIndex}
     title={title}
     onClick={onClick}
  >
     {caption}
  </button>
);

export default CircleButton
