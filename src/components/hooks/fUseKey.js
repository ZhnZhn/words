import {
  useCallback,
  KEY_ENTER,
  KEY_SPACE,
  KEY_ESCAPE,
  stopDefaultFor
} from '../uiApi';

import {
  HAS_KEYBOARD_FOCUS
} from '../has';

const FN_NOOP = () => {};

const _fIsKey = value => evt => evt.key === value;

export const isKeyEnter = _fIsKey(KEY_ENTER)
export const isKeyEnterOrSpace = (
  evtKey
) => evtKey === KEY_ENTER || evtKey === KEY_SPACE

const _onKeyFnEvt = (
  isKey,
  fn,
  evt
) => {
  if (isKey(evt)) {
    stopDefaultFor(evt)
    fn()
  }
};

const _fOnKey = (
  isKey
) => fn => evt => {
  _onKeyFnEvt(isKey, fn, evt)
};

export const fOnKeyEnter = _fOnKey(isKeyEnter)

/*eslint-disable react-hooks/exhaustive-deps */
const _fUseKey = isKey => (
  fn,
  deps
) => useCallback(evt => {
  _onKeyFnEvt(isKey, fn, evt)
}, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */

export const useKeyEnter = _fUseKey(isKeyEnter)

const _isKeyEscape = _fIsKey(KEY_ESCAPE);
export const useKeyEscape = HAS_KEYBOARD_FOCUS
  ? _fUseKey(_isKeyEscape)
  : FN_NOOP
