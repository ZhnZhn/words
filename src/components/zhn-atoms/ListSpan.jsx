const S_ITEM = { fontWeight: 400 };

const ListSpan = ({
  style,
  caption,
  captionStyle,
  items=[],
  itemStyle
}) => {
  if (items.length === 0) {
    return null;
  }
  return (
    <div style={style}>
       {
         caption && <span style={captionStyle}>
           {caption}
         </span>
       }
       <span style={{...S_ITEM, ...itemStyle}}>
         {items.join(', ')}
       </span>
    </div>
  );
};

export default ListSpan
