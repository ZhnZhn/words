"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const SpinnerLoading = _ref => {
  let {
    style,
    isFailed
  } = _ref;
  const _dataLoader = isFailed ? "circle-failed" : "circle";
  return (0, _jsxRuntime.jsx)("span", {
    style: style,
    "data-loader": _dataLoader
  });
};
var _default = exports.default = SpinnerLoading;
//# sourceMappingURL=SpinnerLoading.js.map