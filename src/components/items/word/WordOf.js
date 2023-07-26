import OpenClose from '../../zhn-atoms/OpenClose';
import ListSpan from '../../zhn-atoms/ListSpan';

const COLOR_FILL_OPEN = "#80c040"
, S_OPEN_CLOSE = {
  marginLeft: -16
}
, S_OPEN_CLOSE_CAPTION = {
  color: '#0c7abf'
}
, S_OPEN_CLOSE_CHILDREN = {
  marginLeft: -6,
  paddingRight: 16
}
, S_LIST = {
  lineHeight: 1.5,
  paddingBottom: 6
}
, S_LIST_CAPTION = {
  color: '#0c7abf',
  paddingRight: 8,
  fontWeight: 800
};

const _isItems = (
  items
) => items && items.length !== 0;

const _crCaption = (
  isCount,
  caption,
  items
) => isCount
 ? `${caption} (${items.length})`
 : caption;

const WordOf = ({
  caption,
  items,
  isCount=false,
  fillOpen,
  captionStyle,
  childrenStyle
}) => _isItems(items) ? (
  <OpenClose
    isClose={true}
    caption={_crCaption(isCount, caption, items)}
    style={S_OPEN_CLOSE}
    fillOpen={COLOR_FILL_OPEN}
    captionStyle={S_OPEN_CLOSE_CAPTION}
    childrenStyle={S_OPEN_CLOSE_CHILDREN}
  >
    <ListSpan
      caption=""
      style={S_LIST}
      captionStyle={S_LIST_CAPTION}
      items={items}
    />
  </OpenClose>
) : null;

export default WordOf
