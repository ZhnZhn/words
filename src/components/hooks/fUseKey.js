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
  isEvt,
  fn,
  evt
) => {
  if (isKey(evt)) {
    stopDefaultFor(evt)
    fn(isEvt ? evt : void 0)
  }
};

const _fOnKey = (
  isKey,
  isEvt
) => fn => evt => {
  _onKeyFnEvt(isKey, isEvt, fn, evt)
};

export const fOnKeyEnterEvt = _fOnKey(isKeyEnter, !0)

/*eslint-disable react-hooks/exhaustive-deps */
const _fUseKey = (isKey, isEvt) => (
  fn,
  deps
) => useCallback(evt => {
  _onKeyFnEvt(isKey, isEvt, fn, evt)
}, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */

const _isKeyEscape = _fIsKey(KEY_ESCAPE);
export const useKeyEscape = HAS_KEYBOARD_FOCUS
  ? _fUseKey(_isKeyEscape, !1)
  : FN_NOOP
