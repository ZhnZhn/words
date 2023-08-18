"use strict";

exports.__esModule = true;
exports.useStore = exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useLayoutEffect = exports.useImperativeHandle = exports.useEffect = exports.useContext = exports.useCallback = exports.stopDefaultFor = exports.setRefValue = exports.setRefInputValue = exports.render = exports.memo = exports.getRefValue = exports.getRefInputValue = exports.getRefElementStyle = exports.getClientY = exports.getClientX = exports.forwardRef = exports.focusRefElement = exports.focusElementById = exports.createElement = exports.createContext = exports.crStyle2 = exports.crCn = exports.cloneElement = void 0;
var _crCn = require("./zhn-utils/crCn");
exports.crCn = _crCn.crCn;
var _crStyle = require("./zhn-utils/crStyle");
exports.crStyle2 = _crStyle.crStyle2;
var _compat = require("preact/compat");
exports.render = _compat.render;
exports.cloneElement = _compat.cloneElement;
exports.createElement = _compat.createElement;
exports.forwardRef = _compat.forwardRef;
exports.memo = _compat.memo;
exports.createContext = _compat.createContext;
exports.useContext = _compat.useContext;
exports.useRef = _compat.useRef;
exports.useState = _compat.useState;
exports.useReducer = _compat.useReducer;
exports.useCallback = _compat.useCallback;
exports.useMemo = _compat.useMemo;
exports.useLayoutEffect = _compat.useLayoutEffect;
exports.useEffect = _compat.useEffect;
exports.useImperativeHandle = _compat.useImperativeHandle;
var _zustand = require("zustand");
exports.useStore = _zustand.useStore;
const getRefValue = ref => (ref || {}).current;
exports.getRefValue = getRefValue;
const setRefValue = (ref, value) => {
  if (ref) {
    ref.current = value;
  }
};
exports.setRefValue = setRefValue;
const _isFn = fn => typeof fn === 'function';
const _focusHtmlElement = element => {
  if (element && _isFn(element.focus)) {
    element.focus();
  }
};
const focusRefElement = ref => {
  _focusHtmlElement(getRefValue(ref));
};
exports.focusRefElement = focusRefElement;
const focusElementById = id => {
  _focusHtmlElement(document.getElementById(id));
};
exports.focusElementById = focusElementById;
const stopDefaultFor = evt => {
  evt.stopPropagation();
  evt.preventDefault();
};
exports.stopDefaultFor = stopDefaultFor;
const getRefInputValue = ref => {
  const _el = getRefValue(ref);
  return _el && _isFn(_el.getValue) ? _el.getValue() : void 0;
};
exports.getRefInputValue = getRefInputValue;
const setRefInputValue = (ref, value) => {
  const _el = getRefValue(ref);
  if (_el && _isFn(_el.setValue)) {
    _el.setValue(value);
  }
};
exports.setRefInputValue = setRefInputValue;
const getRefElementStyle = ref => {
  const element = getRefValue(ref);
  return (element || {}).style;
};
exports.getRefElementStyle = getRefElementStyle;
const _getFirstTouches = touches => touches && touches[0] || {};
const _getTouchClientX = touches => _getFirstTouches(touches).clientX;
const _getTouchClientY = touches => _getFirstTouches(touches).clientY;
const getClientX = evt => evt.clientX || _getTouchClientX(evt.targetTouches) || _getTouchClientX(evt.changedTouches) || 0;
exports.getClientX = getClientX;
const getClientY = evt => evt.clientY || _getTouchClientY(evt.targetTouches) || _getTouchClientY(evt.changedTouches) || 0;
exports.getClientY = getClientY;
//# sourceMappingURL=uiApi.js.map