export {
  cloneElement,
  createElement,
  forwardRef,
  memo,
  createContext,
  Component,
  useContext,
  useRef,
  useState,
  useReducer,
  useCallback,
  useMemo,
  useLayoutEffect,
  useEffect,
  useImperativeHandle
} from 'react';

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
export const focusRefElement = ref => {
  const _el = getRefValue(ref)
  if (_el && _isFn(_el.focus)) {
    _el.focus()
  }
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
