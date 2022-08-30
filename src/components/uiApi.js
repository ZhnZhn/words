export {
  forwardRef,
  memo,
  useRef,
  useState,
  useReducer,
  useCallback,
  useMemo,
  useLayoutEffect,
  useEffect
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