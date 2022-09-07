"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var useListen = function useListen(store, onStore) {
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    return store.listen(onStore);
  }, []); // store, onStore

  /*eslint-enable react-hooks/exhaustive-deps */
};

var _default = useListen;
exports["default"] = _default;
//# sourceMappingURL=useListen.js.map