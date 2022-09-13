"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var useListOptions = function useListOptions(store, refListCaption) {
  var _useState = (0, _uiApi.useState)([]),
      listOptons = _useState[0],
      setListOptions = _useState[1],
      updateListOptions = (0, _uiApi.useCallback)(function (groupCaption) {
    setListOptions(function (prevListOptions) {
      var listOptions = store.getWatchListsByGroup(groupCaption);

      if (prevListOptions !== listOptions) {
        (0, _uiApi.setRefValue)(refListCaption, null);
      }

      return listOptions;
    });
  }, []); // store

  /*eslint-enable react-hooks/exhaustive-deps */


  return [listOptons, setListOptions, updateListOptions];
};

var _default = useListOptions;
exports["default"] = _default;
//# sourceMappingURL=useListOptions.js.map