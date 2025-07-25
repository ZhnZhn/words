"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useRefFocusElement = exports.useItemsFocusTrap = exports.useEffectSyncRef = exports.useAsyncFocusFirstItemIf = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _useEffectTimeoutIf = _interopRequireDefault(require("./useEffectTimeoutIf"));
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
  (0, _useEffectTimeoutIf.default)(_has.HAS_KEYBOARD_FOCUS && isVisible, () => (0, _uiApi.focusRefElement)(getFirstElement), mls);
};
exports.useAsyncFocusFirstItemIf = useAsyncFocusFirstItemIf;
const useItemsFocusTrap = function (items, isVisible, isFirstItem) {
  if (isFirstItem === void 0) {
    isFirstItem = !0;
  }
  const _refFirstItem = (0, _uiApi.useRef)(),
    _refLastItem = (0, _uiApi.useRef)(),
    _getRefItem = index => isFirstItem && index === 0 ? _refFirstItem : index === items.length - 1 ? _refLastItem : void 0;
  useAsyncFocusFirstItemIf(isVisible, _refFirstItem);
  return [_refFirstItem, _refLastItem, _getRefItem];
};
exports.useItemsFocusTrap = useItemsFocusTrap;
//# sourceMappingURL=useFocus.js.map