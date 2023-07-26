import SafeToken from './SafeToken';

const S_ITEM = { fontWeight: 400 };

const _isArr = Array.isArray;

const ListSpan = ({
  style,
  caption,
  captionStyle,
  items,
  itemStyle
}) => (!_isArr(items) || items.length === 0)
  ? null
  : (<div style={style}>
        <SafeToken
          style={captionStyle}
          token={caption}
        />
        <SafeToken
          style={{...S_ITEM, ...itemStyle}}
          token={items.join(', ')}
        />     
     </div>
    );

export default ListSpan
