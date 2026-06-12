"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
var _jsxRuntime = require("preact/jsx-runtime");
const ListDiv = _ref => {
  let {
    items,
    itemStyle
  } = _ref;
  return (0, _uiApi.safeMap)(items, str => (0, _isTypeFn.isStrNotBlank)(str) ? (0, _jsxRuntime.jsx)("div", {
    style: itemStyle,
    children: str
  }, str) : null);
};
var _default = exports.default = ListDiv;
//# sourceMappingURL=ListDiv.js.map