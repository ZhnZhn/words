"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useLayoutEffect = exports.useImperativeHandle = exports.useId = exports.useEffect = exports.useContext = exports.useCallback = exports.stopDefaultFor = exports.setRefValue = exports.setRefInputValue = exports.render = exports.memo = exports.getRefValue = exports.getRefInputValue = exports.getRefElementStyle = exports.getClientY = exports.getClientX = exports.focusRefElement = exports.focusElementById = exports.createElement = exports.createContext = exports.cloneElement = exports.bindTo = exports.KEY_TAB = exports.KEY_ESCAPE = exports.KEY_ENTER = exports.KEY_ARROW_UP = exports.KEY_ARROW_DOWN = void 0;
var _isTypeFn = require("../utils/isTypeFn");
var _bindTo = require("../utils/bindTo");
exports.bindTo = _bindTo.bindTo;
var _compat = require("preact/compat");
exports.render = _compat.render;
exports.cloneElement = _compat.cloneElement;
exports.createElement = _compat.createElement;
exports.memo = _compat.memo;
exports.createContext = _compat.createContext;
exports.useId = _compat.useId;
exports.useContext = _compat.useContext;
exports.useRef = _compat.useRef;
exports.useState = _compat.useState;
exports.useReducer = _compat.useReducer;
exports.useCallback = _compat.useCallback;
exports.useMemo = _compat.useMemo;
exports.useLayoutEffect = _compat.useLayoutEffect;
exports.useEffect = _compat.useEffect;
exports.useImperativeHandle = _compat.useImperativeHandle;
const KEY_ARROW_DOWN = exports.KEY_ARROW_DOWN = "ArrowDown";
const KEY_ARROW_UP = exports.KEY_ARROW_UP = "ArrowUp";
const KEY_ENTER = exports.KEY_ENTER = "Enter";
const KEY_ESCAPE = exports.KEY_ESCAPE = "Escape";
const KEY_TAB = exports.KEY_TAB = "Tab";
const getRefValue = ref => (ref || {}).current;
exports.getRefValue = getRefValue;
const setRefValue = (ref, value) => {
  if (ref) {
    ref.current = value;
  }
};
exports.setRefValue = setRefValue;
const _focusHtmlElement = element => {
  if (element && (0, _isTypeFn.isFn)(element.focus)) {
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
  return _el && (0, _isTypeFn.isFn)(_el.getValue) ? _el.getValue() : void 0;
};
exports.getRefInputValue = getRefInputValue;
const setRefInputValue = (ref, value) => {
  const _el = getRefValue(ref);
  if (_el && (0, _isTypeFn.isFn)(_el.setValue)) {
    _el.setValue(value);
  }
};
exports.setRefInputValue = setRefInputValue;
const getRefElementStyle = ref => {
  const element = getRefValue(ref);
  return (element || {}).style;
};
exports.getRefElementStyle = getRefElementStyle;
const _getFirstTouches = touches => touches && touches[0] || {},
  CLIENT_X = 'clientX',
  CLIENT_Y = 'clientY',
  _fGetTouch = propName => touches => _getFirstTouches(touches)[propName],
  _getTouchClientX = _fGetTouch(CLIENT_X),
  _getTouchClientY = _fGetTouch(CLIENT_Y),
  _fGetEvt = (propName, getTouch) => evt => evt[propName] || getTouch(evt.targetTouches) || getTouch(evt.changedTouches) || 0;
const getClientX = exports.getClientX = _fGetEvt(CLIENT_X, _getTouchClientX);
const getClientY = exports.getClientY = _fGetEvt(CLIENT_Y, _getTouchClientY);
//# sourceMappingURL=uiApi.js.map