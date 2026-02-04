"use strict";

exports.__esModule = true;
exports.default = void 0;
var _watchListStore = require("../../flux/watch-list/watchListStore");
var _uiApi = require("../uiApi");
const useGroupOptions = () => {
  const [groupOpions, setGroupOptions] = (0, _uiApi.useState)(_watchListStore.getWatchGroups),
    _updateGroupOptions = (0, _uiApi.useCallback)(() => {
      setGroupOptions((0, _watchListStore.getWatchGroups)());
    }, []);
  return [groupOpions, _updateGroupOptions];
};
var _default = exports.default = useGroupOptions;
//# sourceMappingURL=useGroupOptions.js.map