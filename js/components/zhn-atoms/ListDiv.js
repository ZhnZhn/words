"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const _isArr = Array.isArray;
const ListDiv = _ref => {
  let {
    items,
    itemStyle
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: _isArr(items) ? items.map((str, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: itemStyle,
      children: str
    }, index)) : null
  });
};
var _default = ListDiv;
exports.default = _default;
//# sourceMappingURL=ListDiv.js.map