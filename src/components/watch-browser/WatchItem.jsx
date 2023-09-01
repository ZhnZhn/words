import useDnDHandlers from '../hooks/useDnDHandlers';
import isKeyEnter from '../zhn-atoms/isKeyEnter';
import SvgClose from '../zhn-atoms/SvgClose';

const S_ITEM_DIV = {
  position: 'relative',
  padding: '5px 40px 5px 0',
  lineHeight: 1.4
}
, S_ITEM_SPAN = {
  display: 'inline-block',
  width: '100%',
  maxWidth: 250,
  paddingLeft: 8,
  verticalAlign: 'middle',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  fontWeight: 'bold',
  cursor: 'pointer'
}
, S_SVG_CLOSE = {
  position: 'absolute',
  right: 0
};

const WatchItem = (props) => {
  const {
    item,
    className,
    isDraggable,
    option,
    onClick,
    onClose,
    /*
    onDragStart,
    onDragEnter,
    onDragOver,
    onDragLeave,
    onDrop
    */
  } = props
  , _draggableOptions = useDnDHandlers(props)
  , { caption } = item
  , _onClick = () => onClick(item)
  , _onKeyDown = evt => {
      if (isKeyEnter(evt)) {
        _onClick()
      }
  };

  return (
     <div
       tabIndex={0}
       role="menuitem"
       className={className}
       style={S_ITEM_DIV}
       onClick={_onClick}
       onKeyDown={_onKeyDown}
       {..._draggableOptions}
     >
       <span style={S_ITEM_SPAN}>
         {caption}
       </span>
       {
         isDraggable
           ? <SvgClose
                style={S_SVG_CLOSE}
                onClose={evt => onClose(option, evt)}
             />
           : null
       }
    </div>
  );
};

export default WatchItem
