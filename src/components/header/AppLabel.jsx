import React from 'react'

const AppLabel = ({ className, style, title, caption, onClick }) =>
<button
  className={className}
  style={style}
  title={title}
  onClick={onClick}
>
  {caption}
</button>

export default AppLabel
