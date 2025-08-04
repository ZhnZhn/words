"use strict";

exports.__esModule = true;
exports.useKeyEscape = exports.isKeyEnterOrSpace = exports.isKeyEnter = exports.fOnKeyEnter = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
const FN_NOOP = () => {};
const _fIsKey = value => evt => evt.key === value;
const isKeyEnter = exports.isKeyEnter = _fIsKey(_uiApi.KEY_ENTER);
const isKeyEnterOrSpace = evtKey => evtKey === _uiApi.KEY_ENTER || evtKey === _uiApi.KEY_SPACE;
exports.isKeyEnterOrSpace = isKeyEnterOrSpace;
const _onKeyFnEvt = (isKey, fn, evt) => {
  if (isKey(evt)) {
    (0, _uiApi.stopDefaultFor)(evt);
    fn(evt);
  }
};
const _fOnKey = isKey => fn => evt => {
  _onKeyFnEvt(isKey, fn, evt);
};
const fOnKeyEnter = exports.fOnKeyEnter = _fOnKey(isKeyEnter);

/*eslint-disable react-hooks/exhaustive-deps */
const _fUseKey = isKey => (fn, deps) => (0, _uiApi.useCallback)(evt => {
  _onKeyFnEvt(isKey, fn, evt);
}, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */

const _isKeyEscape = _fIsKey(_uiApi.KEY_ESCAPE);
const useKeyEscape = exports.useKeyEscape = _has.HAS_KEYBOARD_FOCUS ? _fUseKey(_isKeyEscape) : FN_NOOP;
//# sourceMappingURL=fUseKey.js.map