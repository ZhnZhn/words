"use strict";

exports.__esModule = true;
exports.default = void 0;
var _watchListStore = require("../../flux/watch-list/watchListStore");
var _uiApi = require("../uiApi");
const useGroupOptions = () => {
  const [groupOpions, setGroupOptions] = (0, _uiApi.useState)(_watchListStore.getWatchGroups)

    /*eslint-disable react-hooks/exhaustive-deps */,
    _updateGroupOptions = (0, _uiApi.useCallback)(() => {
      setGroupOptions((0, _watchListStore.getWatchGroups)());
    }, []);
  // getWatchGroups
  /*eslint-enable react-hooks/exhaustive-deps */

  return [groupOpions, _updateGroupOptions];
};
var _default = useGroupOptions;
exports.default = _default;
//# sourceMappingURL=useGroupOptions.js.map