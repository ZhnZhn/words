"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const useGroupOptions = getWatchGroups => {
  const [groupOpions, setGroupOptions] = (0, _uiApi.useState)(getWatchGroups)

    /*eslint-disable react-hooks/exhaustive-deps */,
    _updateGroupOptions = (0, _uiApi.useCallback)(() => {
      setGroupOptions(getWatchGroups());
    }, []);
  // getWatchGroups
  /*eslint-enable react-hooks/exhaustive-deps */

  return [groupOpions, _updateGroupOptions];
};
var _default = useGroupOptions;
exports.default = _default;
//# sourceMappingURL=useGroupOptions.js.map