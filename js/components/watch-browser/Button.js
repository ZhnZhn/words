"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _FlatButton = _interopRequireDefault(require("../zhn-atoms/FlatButton"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_DIV = 'bt-flat__div';
const Clear = _ref => {
  let {
    style,
    onClick
  } = _ref;
  return (0, _jsxRuntime.jsx)(_FlatButton.default, {
    rootStyle: style,
    clDiv: CL_DIV,
    caption: "Clear",
    title: "Clear Input",
    onClick: onClick
  });
};
const Close = _ref2 => {
  let {
    style,
    onClick
  } = _ref2;
  return (0, _jsxRuntime.jsx)(_FlatButton.default, {
    rootStyle: style,
    clDiv: CL_DIV,
    caption: "Close",
    title: "Close Dialog",
    onClick: onClick
  });
};
const Primary = _ref3 => {
  let {
    style,
    caption,
    title,
    onClick
  } = _ref3;
  return (0, _jsxRuntime.jsx)(_FlatButton.default, {
    rootStyle: style,
    clDiv: CL_DIV,
    caption: caption,
    title: title,
    onClick: onClick
  });
};
var _default = {
  Primary,
  Clear,
  Close,
  Flat: _FlatButton.default
};
exports.default = _default;
//# sourceMappingURL=Button.js.map