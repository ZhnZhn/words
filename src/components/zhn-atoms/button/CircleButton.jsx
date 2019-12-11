import React from 'react'

const CL = 'bt-circle';

const CircleButton = React.forwardRef(({
  style,
  tabIndex='-1',
  caption='',
  title,
  onClick
}, ref) => (
  <button
     ref={ref}
     className={CL}
     style={style}
     tabIndex={tabIndex}
     title={title}
     onClick={onClick}
  >
     {caption}
  </button>
));

export default CircleButton
