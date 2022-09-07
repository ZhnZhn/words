"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useLayoutEffect = exports.useImperativeHandle = exports.useEffect = exports.useContext = exports.useCallback = exports.setRefValue = exports.memo = exports.getRefValue = exports.getRefInputValue = exports.getRefElementStyle = exports.forwardRef = exports.focusRefElement = exports.createElement = exports.createContext = exports.cloneElement = exports.Component = void 0;

var _react = require("react");

exports.cloneElement = _react.cloneElement;
exports.createElement = _react.createElement;
exports.forwardRef = _react.forwardRef;
exports.memo = _react.memo;
exports.createContext = _react.createContext;
exports.Component = _react.Component;
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

var getRefInputValue = function getRefInputValue(ref) {
  var _el = getRefValue(ref);

  return _el && _isFn(_el.getValue) ? _el.getValue() : void 0;
};

exports.getRefInputValue = getRefInputValue;

var getRefElementStyle = function getRefElementStyle(ref) {
  var element = getRefValue(ref);
  return (element || {}).style;
};

exports.getRefElementStyle = getRefElementStyle;
//# sourceMappingURL=uiApi.js.map