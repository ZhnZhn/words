import React from 'react'

const Button = ({
  className,
  style,
  tabIndex='0',
  caption='',
  title,
  onClick
}) => (
  <button
     className={className}
     style={style}
     tabIndex={tabIndex}
     title={title}
     onClick={onClick}
  >
     {caption}
  </button>
);


export default Button
