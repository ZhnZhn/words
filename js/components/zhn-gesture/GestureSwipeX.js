"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _has = require("../has");

var _jsxRuntime = require("react/jsx-runtime");

var BORDER_LEFT = 'border-left',
    DRAG_START_BORDER_LEFT = "4px solid #d64336",
    LONG_TOUCH = 1000;
var _assign = Object.assign;

var _getTouchClietX = function _getTouchClietX(touches) {
  return touches && touches[0] && touches[0].clientX;
};

var _getClientX = function _getClientX(ev) {
  if (ev.clientX) {
    return ev.clientX;
  }

  var targetTouches = ev.targetTouches,
      changedTouches = ev.changedTouches;
  return _getTouchClietX(targetTouches) || _getTouchClietX(changedTouches) || 0;
};

var _setMoveStyle = function _setMoveStyle(el, dX) {
  _assign(el.style, {
    right: dX + 'px',
    opacity: 1 - 0.5 * Math.abs(dX) / 60
  });
};

var _setEndStyle = function _setEndStyle(el, isInitialStyle) {
  el.style.removeProperty(BORDER_LEFT);

  if (isInitialStyle) {
    _assign(el.style, {
      right: 0,
      opacity: 1
    });
  }
};

var _gestureStartImpl = function _gestureStartImpl(refIs, el) {
  (0, _uiApi.setRefValue)(refIs, true);
  el.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT);
};

var FN_NOOP = function FN_NOOP() {};

var GestureSwipeX = function GestureSwipeX(_ref) {
  var style = _ref.style,
      _ref$setTimeStamp = _ref.setTimeStamp,
      setTimeStamp = _ref$setTimeStamp === void 0 ? FN_NOOP : _ref$setTimeStamp,
      onGesture = _ref.onGesture,
      children = _ref.children;

  var _refIsGestureStart = (0, _uiApi.useRef)(false),
      _refGestureId = (0, _uiApi.useRef)(),
      _refIsMoveStart = (0, _uiApi.useRef)(false),
      _refClientX = (0, _uiApi.useRef)(0),
      _useMemo = (0, _uiApi.useMemo)(function () {
    return [//_gestureStart,
    function (evt) {
      var _el = evt.currentTarget;

      if (!(0, _uiApi.getRefValue)(_refIsGestureStart)) {
        (0, _uiApi.setRefValue)(_refGestureId, setTimeout(function () {
          return _gestureStartImpl(_refIsGestureStart, _el);
        }, LONG_TOUCH));
      } else {
        clearTimeout((0, _uiApi.getRefValue)(_refGestureId));
        (0, _uiApi.setRefValue)(_refIsGestureStart, false);

        _setEndStyle(_el, true);
      }
    }, // _gestureMove
    function (evt) {
      if ((0, _uiApi.getRefValue)(_refIsGestureStart)) {
        var _clientX = _getClientX(evt);

        if (_clientX) {
          if (!(0, _uiApi.getRefValue)(_refIsMoveStart)) {
            (0, _uiApi.setRefValue)(_refClientX, _clientX);
            (0, _uiApi.setRefValue)(_refIsMoveStart, true);
          } else {
            var _dX = (0, _uiApi.getRefValue)(_refClientX) - _clientX;

            if (_dX < 0) {
              _setMoveStyle(evt.currentTarget, _dX);
            }
          }
        }
      }
    }, // _gestureEnd

    /*eslint-disable react-hooks/exhaustive-deps */
    function (evt) {
      if ((0, _uiApi.getRefValue)(_refIsGestureStart)) {
        var _isInitialStyle = false;

        if ((0, _uiApi.getRefValue)(_refIsMoveStart)) {
          evt.preventDefault();
          setTimeStamp(evt.timeStamp);

          var _clientX = _getClientX(evt),
              _dX = (0, _uiApi.getRefValue)(_refClientX) - _clientX;

          _isInitialStyle = _dX < 0 && onGesture(Math.abs(_dX));
          (0, _uiApi.setRefValue)(_refIsMoveStart, false);
        }

        (0, _uiApi.setRefValue)(_refIsGestureStart, false);

        _setEndStyle(evt.currentTarget, _isInitialStyle);
      } else {
        clearTimeout((0, _uiApi.getRefValue)(_refGestureId));
      }
    }];
  }, []),
      _gestureStart = _useMemo[0],
      _gestureMove = _useMemo[1],
      _gestureEnd = _useMemo[2],
      _handlers = (0, _uiApi.getRefValue)((0, _uiApi.useRef)(_has.HAS_TOUCH ? {
    onTouchStart: _gestureStart,
    onTouchMove: _gestureMove,
    onTouchEnd: _gestureEnd
  } : {
    onMouseDown: _gestureStart,
    onMouseMove: _gestureMove,
    onMouseUp: _gestureEnd
  }));

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({
    role: "presentation",
    style: style
  }, _handlers, {
    children: children
  }));
};

var _default = GestureSwipeX;
exports["default"] = _default;
//# sourceMappingURL=GestureSwipeX.js.map