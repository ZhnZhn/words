"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ButtonPrimary = exports.ButtonClose = exports.ButtonClear = void 0;
var _FlatButton = _interopRequireDefault(require("../zhn/FlatButton"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_DIV = 'bt-flat__div';
const ButtonClear = _ref => {
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
exports.ButtonClear = ButtonClear;
const ButtonClose = _ref2 => {
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
exports.ButtonClose = ButtonClose;
const ButtonPrimary = _ref3 => {
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
exports.ButtonPrimary = ButtonPrimary;
//# sourceMappingURL=Button.js.map