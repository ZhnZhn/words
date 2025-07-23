import {
  useRef,
  useMemo,
  getRefValue,
  setRefValue,
  getClientX
} from '../uiApi';

import { HAS_TOUCH_EVENTS } from '../has';

const BORDER_LEFT = 'border-left'
, DRAG_START_BORDER_LEFT = "4px solid #d64336"
, LONG_TOUCH = 1000;

const _assign = Object.assign;

const _setMoveStyle = (el, dX) => {
  _assign(el.style, {
    right: dX + 'px',
    opacity: (1 - (0.5*Math.abs(dX))/60)
  })
};
const _setEndStyle = (el, isInitialStyle) => {
  el.style.removeProperty(BORDER_LEFT)
  if (isInitialStyle) {
    _assign(el.style, {
      right: 0,
      opacity: 1
    })
  }
};

const _gestureStartImpl = (
  refIs,
  el
) => {
  setRefValue(refIs, true)
  el.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT)
}

const FN_NOOP = () => {};

const GestureSwipeX = ({
  style,
  setTimeStamp=FN_NOOP,
  onGesture,
  children
}) => {
  const _refIsGestureStart = useRef(false)
  , _refGestureId = useRef()
  , _refIsMoveStart = useRef(false)
  , _refClientX = useRef(0)
  , [
    _gestureStart,
    _gestureMove,
    _gestureEnd
  ] = useMemo(() => [
    //_gestureStart,
    (evt) => {
      const _el = evt.currentTarget;
      if (!getRefValue(_refIsGestureStart)) {
       setRefValue(
         _refGestureId,
         setTimeout(
           () => _gestureStartImpl(_refIsGestureStart, _el),
           LONG_TOUCH
         ))
      } else {
        clearTimeout(getRefValue(_refGestureId))
        setRefValue(_refIsGestureStart, false)
        _setEndStyle(_el, true)
      }
    },
    // _gestureMove
    (evt) => {
      if (getRefValue(_refIsGestureStart)) {
        const _clientX = getClientX(evt);
        if (_clientX) {
          if (!getRefValue(_refIsMoveStart)){
            setRefValue(_refClientX, _clientX)
            setRefValue(_refIsMoveStart, true)
          } else {
            const _dX = getRefValue(_refClientX) - _clientX;
            if (_dX < 0) {
              _setMoveStyle(evt.currentTarget, _dX)
            }
          }
        }
      }
    },
    // _gestureEnd
    /*eslint-disable react-hooks/exhaustive-deps */
    (evt) => {
      if (getRefValue(_refIsGestureStart)) {
        let _isInitialStyle = false;
        if (getRefValue(_refIsMoveStart)) {
          evt.preventDefault()
          setTimeStamp(evt.timeStamp)
          const _clientX = getClientX(evt)
          , _dX = getRefValue(_refClientX) - _clientX;
          _isInitialStyle = _dX < 0 && onGesture(Math.abs(_dX));
          setRefValue(_refIsMoveStart, false)
        }
        setRefValue(_refIsGestureStart, false)
        _setEndStyle(evt.currentTarget, _isInitialStyle)
      } else {
        clearTimeout(getRefValue(_refGestureId))
      }
    }
  ], [])
  // onGesture, setTimeStamp
  /*eslint-enable react-hooks/exhaustive-deps */
  , _handlers = getRefValue(useRef(HAS_TOUCH_EVENTS ? {
    onTouchStart: _gestureStart,
    onTouchMove: _gestureMove,
    onTouchEnd: _gestureEnd
  } : {
    onMouseDown: _gestureStart,
    onMouseMove: _gestureMove,
    onMouseUp: _gestureEnd
  }));

  return (
    <div    
      style={style}
      {..._handlers}
    >
      {children}
    </div>
  );
}

export default GestureSwipeX
