import SvgClose from '../zhn-atoms/SvgClose';

const STYLE = {
  ITEM_DIV : {
    position: 'relative',
    paddingRight: 40,
    lineHeight: 1.4,
    paddingTop: 5,
    paddingBottom: 5
  },
  ITEM_SPAN : {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '100%',
    maxWidth: 250,
    paddingLeft: 8,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontWeight: 'bold',
    cursor: 'pointer'
  },

  SVG_CLOSE : {
    position: 'absolute',
    right: 0
  }
}

const _isKeyEnter = ({ keyCode }) => keyCode === 13;

const WatchItem = ({
  item, className, isModeEdit, option,
  onClick, onClose,
  onDragStart, onDragEnter, onDragOver, onDragLeave, onDrop
}) => {
  const { caption } = item
    , _onClick = () => onClick(item)
    , _onKeyDown = event => {
      if (_isKeyEnter(event)) {
        _onClick()
      }
    }
    , _handlers = isModeEdit ? {
        onDragStart: onDragStart.bind(null, option),
        onDrop: onDrop.bind(null, option),
        onDragOver, onDragEnter, onDragLeave
    } : void 0
    , _btClose = isModeEdit
        ? (<SvgClose
             style={STYLE.SVG_CLOSE}
             onClose={() => onClose(option)}
           />)
        : null;
return (
     <div
       tabIndex={0}
       role="menuitem"
       className={className}
       style={STYLE.ITEM_DIV}
       onClick={_onClick}
       onKeyDown={_onKeyDown}
       draggable={isModeEdit}
       {..._handlers}
     >
       <span style={STYLE.ITEM_SPAN}>
         {caption}
       </span>
       {_btClose}
    </div>
  );
};

export default WatchItem
