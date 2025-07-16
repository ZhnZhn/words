"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useRefFocusElement = exports.useEffectSyncRef = exports.useAsyncFocusFirstItemIf = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _useEffectTimeout = _interopRequireDefault(require("./useEffectTimeout"));
const useRefFocusElement = () => {
  const refFocusElement = (0, _uiApi.useRef)(),
    setRefFocusElement = (0, _uiApi.useCallback)(ref => {
      (0, _uiApi.setRefValue)(refFocusElement, (0, _uiApi.getRefValue)(ref));
    }, []);
  return [refFocusElement, setRefFocusElement];
};
exports.useRefFocusElement = useRefFocusElement;
const useEffectSyncRef = (isSync, setRefFocusLast) => {
  const _ref = (0, _uiApi.useRef)();
  (0, _uiApi.useEffect)(() => {
    if (isSync) {
      setRefFocusLast(_ref);
    }
  }, [isSync, setRefFocusLast]);
  return _ref;
};
exports.useEffectSyncRef = useEffectSyncRef;
const useAsyncFocusFirstItemIf = function (isVisible, getFirstElement, mls) {
  if (mls === void 0) {
    mls = 350;
  }
  const _isFocus = _has.HAS_KEYBOARD_FOCUS && isVisible;
  (0, _useEffectTimeout.default)(() => (0, _uiApi.focusRefElement)(getFirstElement), mls, [_isFocus], _isFocus);
};
exports.useAsyncFocusFirstItemIf = useAsyncFocusFirstItemIf;
//# sourceMappingURL=useFocus.js.map