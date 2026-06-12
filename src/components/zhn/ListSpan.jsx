import { isArrNotEmpty } from '../../utils/isTypeFn';
import { joinByComma } from '../../utils/fnArr';

const S_ITEM = { fontWeight: 400 };

const ListSpan = ({
  style,
  caption,
  captionStyle,
  items,
  itemStyle
}) => isArrNotEmpty(items)
  ? (
    <div style={style}>
       <span style={captionStyle}>
          {caption}
       </span>
       <span style={{...S_ITEM, ...itemStyle}}>
          {joinByComma(items)}
       </span>
    </div>
  ) : null;

export default ListSpan
