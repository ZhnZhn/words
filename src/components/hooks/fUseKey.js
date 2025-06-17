import {
  useCallback,
  stopDefaultFor
} from '../uiApi';
import {
  HAS_KEYBOARD_FOCUS
} from '../has';

const FN_NOOP = () => {};

const _isKeyEscape = (
  evt
) => evt.keyCode === 27 || evt.key === 'Escape';

const _onKeyFnEvt = (
  isKey,
  fn,
  evt
) => {
  if (isKey(evt)) {
    stopDefaultFor(evt)
    fn(evt)
  }
};

/*eslint-disable react-hooks/exhaustive-deps */
const _fUseKey = isKey => (
  fn,
  deps
) => useCallback(evt => {
  _onKeyFnEvt(isKey, fn, evt)
}, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */

export const useKeyEscape = HAS_KEYBOARD_FOCUS
  ? _fUseKey(_isKeyEscape)
  : FN_NOOP
