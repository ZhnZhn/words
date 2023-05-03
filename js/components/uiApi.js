"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useLayoutEffect = exports.useImperativeHandle = exports.useEffect = exports.useContext = exports.useCallback = exports.setRefValue = exports.setRefInputValue = exports.memo = exports.getRefValue = exports.getRefInputValue = exports.getRefElementStyle = exports.getClientY = exports.getClientX = exports.forwardRef = exports.focusRefElement = exports.createElement = exports.createContext = exports.cloneElement = void 0;
var _react = require("react");
exports.cloneElement = _react.cloneElement;
exports.createElement = _react.createElement;
exports.forwardRef = _react.forwardRef;
exports.memo = _react.memo;
exports.createContext = _react.createContext;
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
var setRefInputValue = function setRefInputValue(ref, value) {
  var _el = getRefValue(ref);
  if (_el && _isFn(_el.setValue)) {
    _el.setValue(value);
  }
};
exports.setRefInputValue = setRefInputValue;
var getRefElementStyle = function getRefElementStyle(ref) {
  var element = getRefValue(ref);
  return (element || {}).style;
};
exports.getRefElementStyle = getRefElementStyle;
var _getFirstTouches = function _getFirstTouches(touches) {
  return touches && touches[0] || {};
};
var _getTouchClientX = function _getTouchClientX(touches) {
  return _getFirstTouches(touches).clientX;
};
var _getTouchClientY = function _getTouchClientY(touches) {
  return _getFirstTouches(touches).clientY;
};
var getClientX = function getClientX(evt) {
  return evt.clientX || _getTouchClientX(evt.targetTouches) || _getTouchClientX(evt.changedTouches) || 0;
};
exports.getClientX = getClientX;
var getClientY = function getClientY(evt) {
  return evt.clientY || _getTouchClientY(evt.targetTouches) || _getTouchClientY(evt.changedTouches) || 0;
};
exports.getClientY = getClientY;
//# sourceMappingURL=uiApi.js.map