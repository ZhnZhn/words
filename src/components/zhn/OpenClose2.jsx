import { S_NONE, S_BLOCK } from '../styleFn';
import { crMenuItemRole } from '../a11yFn';

import useToggle from '../hooks/useToggle';
import useDnDHandlers from '../hooks/useDnDHandlers';

const CL_MENU_ITEM = 'oc-item not-selected'
, S_ROOT = {
  lineHeight: 1.5
}
, S_DIV_SVG = {
  display: 'inline-block',
  width: 16,
  height: 16,
  marginLeft: 8
}
, S_SVG = { display: 'inline-block' }
, S_CAPTION = {
  paddingLeft: 4,
  verticalAlign: 'top',
  color: 'rgba(164, 135, 212, 1)',
  fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer'
};

const DF_FILL_OPEN = '#9e9e9e'
, DF_FILL_CLOSE = 'transparent'
, D_OPEN = "M 2,14 L 14,14 14,2 2,14"
, D_CLOSE = "M 2,2 L 14,8 2,14 2,2";

const _crStyleConf = ({
  isOpen,
  fillOpen,
  fillClose,
  styleNotSelected
}) => isOpen
  ? [
    D_OPEN,
    fillOpen,
    S_BLOCK,
    'show-popup',
    null
  ]
 : [
   D_CLOSE,
   fillClose,
   S_NONE,
   null,
   styleNotSelected
 ];

const OpenClose2 = (props) => {
  const {
      isInitialOpen,
      style,
      styleCaption,
      caption,
      fillOpen=DF_FILL_OPEN,
      fillClose=DF_FILL_CLOSE,
      styleNotSelected,
      /*
      isDraggable,
      option,
      onDragStart,
      onDragEnter,
      onDragOver,
      onDragLeave,
      onDrop,
      */
      children
  } = props
  , [
    isOpen,
    toggleIsOpen
  ] = useToggle(isInitialOpen)
  , _draggableOption = useDnDHandlers(props)
  , [
     _d,
     _fill,
     _divStyle,
     _classShow,
     _styleNotSelected
  ] = _crStyleConf({
    isOpen,
    fillOpen,
    fillClose,
    styleNotSelected
  });

  return (
    <div style={{...S_ROOT, ...style}}>
      <div
         {...crMenuItemRole(toggleIsOpen, "0")}
         //role="menuitem"
         //tabIndex="0"
         className={CL_MENU_ITEM}
         style={_styleNotSelected}
         //onClick={toggleIsOpen}
         //onKeyDown={_hKeyDown}
         {..._draggableOption}
       >
        <div style={S_DIV_SVG}>
           <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              style={S_SVG}
            >
             <path
                d={_d}
                fill={_fill}
                strokeWidth="1"
                stroke={fillOpen}
             />
           </svg>
       </div>
       <span style={{...S_CAPTION, ...styleCaption}} >
          {caption}
       </span>
     </div>
    <div className={_classShow} style={_divStyle}>
      {children}
    </div>
   </div>
  );
};

export default OpenClose2
