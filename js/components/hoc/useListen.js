"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var useListen = function useListen(store, onStore) {
  (0, _react.useEffect)(function () {
    var _unsubscribe = store.listen(onStore);

    return function () {
      _unsubscribe();
    };
  }, []);
};

var _default = useListen;
exports["default"] = _default;
//# sourceMappingURL=useListen.js.map