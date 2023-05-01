import {
  forwardRef,
  useRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  getRefValue,
  focusRefElement
} from '../uiApi'

import A from '../Comp';

const CL_NOT_SELECTED = "not-selected"
, TITLE = "Click to open add to watch list dialog";

const _setPrevFocused = element => {
  document._prevFocusedZhn = element
};

const FN_NOOP = () => {};

const ItemHeader = forwardRef(({
  isShow,
  className,
  style,
  captionStyle,
  svgCloseStyle,
  title,
  caption,
  onAddToWatch=FN_NOOP,
  onClose=FN_NOOP,
  onClick=FN_NOOP
}, ref) => {
  const _refRootNode = useRef()
  , _refBtAdd = useRef()
  , _hAddToWatch = useCallback(evt => {
     evt.stopPropagation()
     _setPrevFocused(getRefValue(_refBtAdd))
     onAddToWatch({ caption })
  }, [caption, onAddToWatch])
  , _hClose = useCallback(evt => {
     evt.stopPropagation()
     onClose()
  }, [onClose])
  , _hKeyDown = useCallback(evt => {
     const { target, keyCode } = evt;
     if (target === getRefValue(_refRootNode)) {
       if (keyCode === 13) {
         onClick(evt)
       } else if (keyCode === 46) {
         onClose()
       } else if (keyCode === 65) {
         _hAddToWatch(evt)
       }
     }
  }, [_hAddToWatch, onClick, onClose])
  , focus = useCallback(() => {
     focusRefElement(_refRootNode)
  }, []);

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(()=>{
    focus()
  }, [])
  // focus

  useImperativeHandle(ref, () => ({
    focus
  }), [])
  // focus
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div
      tabIndex="0"
      role="button"
      ref={_refRootNode}
      className={className}
      style={style}
      onClick={onClick}
      onKeyDown={_hKeyDown}
    >
      <span
         className={CL_NOT_SELECTED}
         style={captionStyle}
      >
         {title}
      </span>
      <A.CircleButton
        ref={_refBtAdd}
        caption="A"
        title={TITLE}
        onClick={_hAddToWatch}
      />
      <A.SvgClose
          tabIndex="-1"
          style={svgCloseStyle}
          onClose={_hClose}
      />
    </div>
  );
});

export default ItemHeader
