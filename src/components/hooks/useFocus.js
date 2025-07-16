import {
  useRef,
  useCallback,
  useEffect,
  getRefValue,
  setRefValue,
  focusRefElement
} from '../uiApi';
import { HAS_KEYBOARD_FOCUS } from '../has';

import useEffectTimeout from './useEffectTimeout';

export const useRefFocusElement = () => {
  const refFocusElement = useRef()
  , setRefFocusElement = useCallback(ref => {
     setRefValue(refFocusElement, getRefValue(ref))
  }, []);
  return [
    refFocusElement,
    setRefFocusElement
  ];
}

export const useEffectSyncRef = (
  isSync,
  setRefFocusLast
) => {
  const _ref = useRef();
  useEffect(() => {
    if (isSync) {
      setRefFocusLast(_ref)
    }
  }, [isSync, setRefFocusLast])
  return _ref;
}

export const useAsyncFocusFirstItemIf = (
  isVisible,
  getFirstElement,
  mls = 350
) => {
  const _isFocus = HAS_KEYBOARD_FOCUS && isVisible;
  useEffectTimeout(
    () => focusRefElement(getFirstElement),
    mls,
    [_isFocus],
    _isFocus
  )
}
