"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var useGroupOptions = function useGroupOptions(store) {
  var _useState = (0, _uiApi.useState)(function () {
    return store.getWatchGroups();
  }),
      groupOpions = _useState[0],
      setGroupOptions = _useState[1],
      _updateGroupOptions = (0, _uiApi.useCallback)(function (isImmutableUpdate) {
    var _nextGroupOptions = store.getWatchGroups(),
        _groupOptions = isImmutableUpdate ? [].concat(_nextGroupOptions) : _nextGroupOptions;

    setGroupOptions(_groupOptions);
  }, []); // store

  /*eslint-enable react-hooks/exhaustive-deps */


  return [groupOpions, _updateGroupOptions];
};

var _default = useGroupOptions;
exports["default"] = _default;
//# sourceMappingURL=useGroupOptions.js.map