import { crMenuItemRole } from '../a11yFn';
import useDnDHandlers from '../hooks/useDnDHandlers';

import SvgClose from '../zhn/SvgClose';

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
    /*
    onDragStart,
    onDragEnter,
    onDragOver,
    onDragLeave,
    onDrop
    */
  } = props
  , _draggableOptions = useDnDHandlers(props)
  , _onClick = () => props.onClick(item);

  return (
     <div
       {...crMenuItemRole(_onClick, "0")}
       className={props.className}
       style={S_ITEM_DIV}
       {..._draggableOptions}
     >
       <span style={S_ITEM_SPAN}>
         {(item || {}).caption}
       </span>
       {
         props.isDraggable
           ? <SvgClose
                style={S_SVG_CLOSE}
                onClose={evt => props.onClose(props.option, evt)}
             />
           : null
       }
    </div>
  );
};

export default WatchItem
