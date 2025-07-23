"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _jsxRuntime = require("preact/jsx-runtime");
const BORDER_LEFT = 'border-left',
  DRAG_START_BORDER_LEFT = "4px solid #d64336",
  LONG_TOUCH = 1000;
const _assign = Object.assign;
const _setMoveStyle = (el, dX) => {
  _assign(el.style, {
    right: dX + 'px',
    opacity: 1 - 0.5 * Math.abs(dX) / 60
  });
};
const _setEndStyle = (el, isInitialStyle) => {
  el.style.removeProperty(BORDER_LEFT);
  if (isInitialStyle) {
    _assign(el.style, {
      right: 0,
      opacity: 1
    });
  }
};
const _gestureStartImpl = (refIs, el) => {
  (0, _uiApi.setRefValue)(refIs, true);
  el.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT);
};
const FN_NOOP = () => {};
const GestureSwipeX = _ref => {
  let {
    style,
    setTimeStamp = FN_NOOP,
    onGesture,
    children
  } = _ref;
  const _refIsGestureStart = (0, _uiApi.useRef)(false),
    _refGestureId = (0, _uiApi.useRef)(),
    _refIsMoveStart = (0, _uiApi.useRef)(false),
    _refClientX = (0, _uiApi.useRef)(0),
    [_gestureStart, _gestureMove, _gestureEnd] = (0, _uiApi.useMemo)(() => [
    //_gestureStart,
    evt => {
      const _el = evt.currentTarget;
      if (!(0, _uiApi.getRefValue)(_refIsGestureStart)) {
        (0, _uiApi.setRefValue)(_refGestureId, setTimeout(() => _gestureStartImpl(_refIsGestureStart, _el), LONG_TOUCH));
      } else {
        clearTimeout((0, _uiApi.getRefValue)(_refGestureId));
        (0, _uiApi.setRefValue)(_refIsGestureStart, false);
        _setEndStyle(_el, true);
      }
    },
    // _gestureMove
    evt => {
      if ((0, _uiApi.getRefValue)(_refIsGestureStart)) {
        const _clientX = (0, _uiApi.getClientX)(evt);
        if (_clientX) {
          if (!(0, _uiApi.getRefValue)(_refIsMoveStart)) {
            (0, _uiApi.setRefValue)(_refClientX, _clientX);
            (0, _uiApi.setRefValue)(_refIsMoveStart, true);
          } else {
            const _dX = (0, _uiApi.getRefValue)(_refClientX) - _clientX;
            if (_dX < 0) {
              _setMoveStyle(evt.currentTarget, _dX);
            }
          }
        }
      }
    },
    // _gestureEnd
    /*eslint-disable react-hooks/exhaustive-deps */
    evt => {
      if ((0, _uiApi.getRefValue)(_refIsGestureStart)) {
        let _isInitialStyle = false;
        if ((0, _uiApi.getRefValue)(_refIsMoveStart)) {
          evt.preventDefault();
          setTimeStamp(evt.timeStamp);
          const _clientX = (0, _uiApi.getClientX)(evt),
            _dX = (0, _uiApi.getRefValue)(_refClientX) - _clientX;
          _isInitialStyle = _dX < 0 && onGesture(Math.abs(_dX));
          (0, _uiApi.setRefValue)(_refIsMoveStart, false);
        }
        (0, _uiApi.setRefValue)(_refIsGestureStart, false);
        _setEndStyle(evt.currentTarget, _isInitialStyle);
      } else {
        clearTimeout((0, _uiApi.getRefValue)(_refGestureId));
      }
    }], [])
    // onGesture, setTimeStamp
    /*eslint-enable react-hooks/exhaustive-deps */,
    _handlers = (0, _uiApi.getRefValue)((0, _uiApi.useRef)(_has.HAS_TOUCH_EVENTS ? {
      onTouchStart: _gestureStart,
      onTouchMove: _gestureMove,
      onTouchEnd: _gestureEnd
    } : {
      onMouseDown: _gestureStart,
      onMouseMove: _gestureMove,
      onMouseUp: _gestureEnd
    }));
  return (0, _jsxRuntime.jsx)("div", {
    style: style,
    ..._handlers,
    children: children
  });
};
var _default = exports.default = GestureSwipeX;
//# sourceMappingURL=GestureSwipeX.js.map