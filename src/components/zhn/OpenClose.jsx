//import PropTypes from 'prop-types';
import { bindTo } from '../../utils/bindTo';
import { useMemo } from '../uiApi';

import useToggle from '../hooks/useToggle';
import Svg from './svg/Svg';

const CL_CAPTION = 'open-close not-selected'
, S_BT = {
  paddingTop: 2,
  paddingLeft: 8,
  paddingBottom: 2,
  lineHeight: 2.2
}
, S_SVG = {
  display: 'inline-block',
  width: 16,
  height: 16,
  position: 'relative',
  top: 3
}
, S_CAPTION = {
  color: '#9e9e9e',
  paddingLeft: 4
}
, S_BLOCK = { display: 'block' }
, S_NONE = { display: 'none' }

, FILL_OPEN = '#9e9e9e'
, FILL_CLOSE = 'transparent'
, PATH_OPEN = "M 2,14 L 14,14 14,2 2,14"
, PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";

const OpenClose = ({
  isClose=true,
  fillOpen=FILL_OPEN,
  fillClose=FILL_CLOSE,
  style,
  itemStyle,
  captionStyle,
  childrenStyle,
  caption,
  afterCaptionComp,
  isDraggable,
  option,
  onDragStart,
  onDragEnter,
  onDragOver,
  onDragLeave,
  onDrop,
  children
}) => {
  const [
    isOpen,
    toggleIsOpen
  ] = useToggle(!isClose)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hKeyDown = useMemo(() => (evt) => {
    const { keyCode } = evt;
    if (keyCode === 13 || keyCode === 27) {
      toggleIsOpen()
    }
  }, [])
  // toggleIsOpen
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  ,  _dndOption = useMemo(() => isDraggable
       ? {
           draggable: true,
           onDragStart: bindTo(onDragStart, option),
           onDrop: bindTo(onDrop, option),
           onDragEnter,
           onDragOver,
           onDragLeave
         }
      : void 0
    , [isDraggable, option])
    // onDragStart, onDrop, onDragEnter, onDragOver, onDragLeave
  /*eslint-enable react-hooks/exhaustive-deps */
  , [
    _pathV,
    _fillV,
    _styleCollapse,
    _classShow,
    _itemStyle
  ] = isOpen
    ? [PATH_OPEN, fillOpen, S_BLOCK, 'show-popup', null]
    : [PATH_CLOSE, fillClose, S_NONE, null, itemStyle];

  return (
    <>
      <div
         role="button"
         className={CL_CAPTION}
         tabIndex="0"
         style={{...S_BT, ...style, ..._itemStyle}}
         onClick={toggleIsOpen}
         onKeyDown={_hKeyDown}
         {..._dndOption}
      >
         <Svg
            style={S_SVG}
            w="16"
         >
           <path
             d={_pathV}
             fill={_fillV}
             strokeWidth="1"
             stroke={fillOpen}
           />
         </Svg>
         <span style={{...S_CAPTION, ...captionStyle}} >
           {caption}
         </span>
         {afterCaptionComp}
      </div>
      <div
        className={_classShow}
        style={{ ...childrenStyle, ..._styleCollapse }}
      >
       {children}
      </div>
   </>
  );
};

/*
OpenClose.propTypes = {
  isClose: PropTypes.bool,

  style: PropTypes.object,
  styleNotSelected: PropTypes.object,
  captionStyle: PropTypes.object,
  childrenStyle: PropTypes.object,

  caption: PropTypes.string,
  fillOpen: PropTypes.string,
  fillClose: PropTypes.string,

  isDraggable: PropTypes.bool,
  option: PropTypes.object,
  onDragStart: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDrop: PropTypes.func,

  children: PropTypes.oneOfType([
     PropTypes.arrayOf(PropTypes.node),
     PropTypes.node
  ])
}
*/

export default OpenClose
