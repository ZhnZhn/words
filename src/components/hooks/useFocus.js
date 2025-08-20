import {
  useRef,
  useCallback,
  useEffect,
  getRefValue,
  setRefValue,
  focusRefElement
} from '../uiApi';
import { HAS_KEYBOARD_FOCUS } from '../has';

import useEffectTimeoutIf from './useEffectTimeoutIf';

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
  useEffectTimeoutIf(
    HAS_KEYBOARD_FOCUS && isVisible,
    () => focusRefElement(getFirstElement),
    mls
  )
}

export const useItemsFocusTrap = (
  items,
  isVisible,
  isFirstItem = !0
) => {
  const _refFirstItem = useRef()
  , _refLastItem = useRef()
  , _getRefItem = index => isFirstItem && index === 0
    ? _refFirstItem
    : index === items.length - 1
    ? _refLastItem
    : void 0;

  useAsyncFocusFirstItemIf(
    isVisible,
    _refFirstItem
  )

  return [
    _refFirstItem,
    _refLastItem,
    _getRefItem
  ];
}

export const useFocusPrevElement = (
  isShow
) => {
  const _refPrevElement = useRef();
  useEffect(() => {
    let _idFocus;
    if (isShow) {
      setRefValue(_refPrevElement, document.activeElement)
    } else {
      _idFocus = setTimeout(() => focusRefElement(_refPrevElement), 100)
    }
    return () => clearTimeout(_idFocus);
  }, [isShow])
}
