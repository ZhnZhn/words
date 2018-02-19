import React from 'react'

const ListSpan = ({
  rootStyle,
  caption, captionStyle,
  items=[], itemStyle
}) => {
  if (items.length === 0) {
    return null;
  }
  
  return (
    <div style={rootStyle}>
       <span style={captionStyle}>
         {caption}
       </span>
       <span>
         {items.join(', ')}
       </span>
    </div>
  );
};

export default ListSpan
