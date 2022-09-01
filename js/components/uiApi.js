"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useLayoutEffect = exports.useImperativeHandle = exports.useEffect = exports.useContext = exports.useCallback = exports.setRefValue = exports.memo = exports.getRefValue = exports.forwardRef = exports.focusRefElement = void 0;

var _react = require("react");

exports.forwardRef = _react.forwardRef;
exports.memo = _react.memo;
exports.useContext = _react.useContext;
exports.useRef = _react.useRef;
exports.useState = _react.useState;
exports.useReducer = _react.useReducer;
exports.useCallback = _react.useCallback;
exports.useMemo = _react.useMemo;
exports.useLayoutEffect = _react.useLayoutEffect;
exports.useEffect = _react.useEffect;
exports.useImperativeHandle = _react.useImperativeHandle;

var getRefValue = function getRefValue(ref) {
  return (ref || {}).current;
};

exports.getRefValue = getRefValue;

var setRefValue = function setRefValue(ref, value) {
  if (ref) {
    ref.current = value;
  }
};

exports.setRefValue = setRefValue;

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var focusRefElement = function focusRefElement(ref) {
  var _el = getRefValue(ref);

  if (_el && _isFn(_el.focus)) {
    _el.focus();
  }
};

exports.focusRefElement = focusRefElement;
//# sourceMappingURL=uiApi.js.map