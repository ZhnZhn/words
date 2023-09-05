"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const useBool = initialValue => {
  const [is, setIs] = (0, _uiApi.useState)(() => !!initialValue);
  return [is, ...(0, _uiApi.useMemo)(() => [
  //setTrue
  () => setIs(true),
  //setFalse
  () => setIs(false)], [])];
};
var _default = useBool;
exports.default = _default;
//# sourceMappingURL=useBool.js.map