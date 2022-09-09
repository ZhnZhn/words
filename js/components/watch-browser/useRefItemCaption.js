"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var useRefItemCaption = function useRefItemCaption() {
  var refCaption = (0, _uiApi.useRef)(),
      setCaption = (0, _uiApi.useCallback)(function (item) {
    var _ref = item || {},
        caption = _ref.caption;

    (0, _uiApi.setRefValue)(refCaption, caption || null);
  }, []);
  return [refCaption, setCaption];
};

var _default = useRefItemCaption;
exports["default"] = _default;
//# sourceMappingURL=useRefItemCaption.js.map