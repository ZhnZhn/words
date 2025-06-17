import {
  useRef,
  useCallback,
  useEffect,
  getRefValue,
  setRefValue,
} from '../uiApi';

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
