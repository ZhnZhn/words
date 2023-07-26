const S_ITEM = { fontWeight: 400 };

const _isArr = Array.isArray
, _isNotEmptyStr = v => typeof v === 'string'
  && v !== '';

const ListSpan = ({
  style,
  caption,
  captionStyle,
  items,
  itemStyle
}) => (!_isArr(items) || items.length === 0)
  ? null
  : (
  <div style={style}>
     {
       _isNotEmptyStr(caption) && <span style={captionStyle}>
         {caption}
       </span>
     }
     <span style={{...S_ITEM, ...itemStyle}}>
       {items.join(', ')}
     </span>
  </div>
);

export default ListSpan
