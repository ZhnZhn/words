"use strict";

exports.__esModule = true;
exports.useKeyEscape = exports.isKeyEnter = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
const FN_NOOP = () => {};
const isKeyEnter = _ref => {
  let {
    keyCode
  } = _ref;
  return keyCode === 13;
};
exports.isKeyEnter = isKeyEnter;
const _isKeyEscape = evt => evt.keyCode === 27 || evt.key === 'Escape';
const _onKeyFnEvt = (isKey, fn, evt) => {
  if (isKey(evt)) {
    (0, _uiApi.stopDefaultFor)(evt);
    fn(evt);
  }
};

/*eslint-disable react-hooks/exhaustive-deps */
const _fUseKey = isKey => (fn, deps) => (0, _uiApi.useCallback)(evt => {
  _onKeyFnEvt(isKey, fn, evt);
}, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */

const useKeyEscape = exports.useKeyEscape = _has.HAS_KEYBOARD_FOCUS ? _fUseKey(_isKeyEscape) : FN_NOOP;
//# sourceMappingURL=fUseKey.js.map