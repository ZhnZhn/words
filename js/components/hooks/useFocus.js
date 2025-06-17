"use strict";

exports.__esModule = true;
exports.useRefFocusElement = exports.useEffectSyncRef = void 0;
var _uiApi = require("../uiApi");
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
//# sourceMappingURL=useFocus.js.map