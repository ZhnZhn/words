import {
  useRef,
  useCallback
} from '../uiApi';

const FN_NOOP = () => {};

const useThrottleClick = (
  timeout=0,
  onClick=FN_NOOP
) => {
  const _refTimeStamp = useRef(null);
  return useCallback(evt => {
    if (timeout === 0) {
      onClick(evt)
      return;
    }
    const _timeStampPrev = _refTimeStamp.current
    , { timeStamp } = evt;
    if (_timeStampPrev == null
        || timeStamp - _timeStampPrev > timeout) {
      onClick(evt)
      _refTimeStamp.current = timeStamp
    }
  }, [timeout, onClick])
};

export default useThrottleClick
