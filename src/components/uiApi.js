export { bindTo } from '../utils/bindTo';

export { crCn } from './zhn-utils/crCn';
export { crStyle2 } from './zhn-utils/crStyle';

export {
  render,

  cloneElement,
  createElement,
  memo,
  createContext,

  useId,
  useContext,
  useRef,
  useState,
  useReducer,
  useCallback,
  useMemo,
  useLayoutEffect,
  useEffect,
  useImperativeHandle
} from 'preact/compat';

export const KEY_ARROW_DOWN = "ArrowDown"
export const KEY_ARROW_UP = "ArrowUp"
export const KEY_ENTER = "Enter"
export const KEY_ESCAPE = "Escape"
export const KEY_TAB = "Tab"

export const getRefValue = ref => (ref || {}).current

export const setRefValue = (
  ref,
  value
) => {
  if (ref) {
    ref.current = value
  }
}

const _isFn = fn => typeof fn === 'function';

const _focusHtmlElement = (
  element
) => {
  if (element && _isFn(element.focus)) {
    element.focus()
  }
}

export const focusRefElement = ref => {
  _focusHtmlElement(
    getRefValue(ref)
  )
}

export const focusElementById = (
  id
) => {
  _focusHtmlElement(
    document.getElementById(id)
  )
}

export const stopDefaultFor = (
  evt
) => {
  evt.stopPropagation()
  evt.preventDefault()
}

export const getRefInputValue = ref => {
  const _el = getRefValue(ref);
  return _el && _isFn(_el.getValue)
   ? _el.getValue()
   : void 0
}

export const setRefInputValue = (
  ref,
  value
) => {
  const _el = getRefValue(ref);
  if (_el && _isFn(_el.setValue)) {
    _el.setValue(value)
  }
}

export const getRefElementStyle = ref => {
  const element = getRefValue(ref);
  return (element || {}).style;
}

const _getFirstTouches = (
  touches
) => (touches && touches[0]) || {}
, CLIENT_X = 'clientX'
, CLIENT_Y = 'clientY'
, _fGetTouch = (propName) => (
  touches
) => _getFirstTouches(touches)[propName]
, _getTouchClientX = _fGetTouch(CLIENT_X)
, _getTouchClientY = _fGetTouch(CLIENT_Y)
, _fGetEvt = (propName, getTouch) => (
  evt
) => evt[propName]
  || getTouch(evt.targetTouches)
  || getTouch(evt.changedTouches)
  || 0;

export const getClientX = _fGetEvt(CLIENT_X, _getTouchClientX)
export const getClientY = _fGetEvt(CLIENT_Y, _getTouchClientY)
