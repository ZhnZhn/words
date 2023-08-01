"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const useListOptions = (getWatchListsByGroup, refListCaption) => {
  const [listOptons, setListOptions] = (0, _uiApi.useState)([])

    /*eslint-disable react-hooks/exhaustive-deps */,
    updateListOptions = (0, _uiApi.useCallback)(groupCaption => {
      setListOptions(prevListOptions => {
        const listOptions = getWatchListsByGroup(groupCaption);
        if (prevListOptions !== listOptions) {
          (0, _uiApi.setRefValue)(refListCaption, null);
        }
        return listOptions;
      });
    }, []);
  // getWatchListsByGroup
  /*eslint-enable react-hooks/exhaustive-deps */

  return [listOptons, setListOptions, updateListOptions];
};
var _default = useListOptions;
exports.default = _default;
//# sourceMappingURL=useListOptions.js.map