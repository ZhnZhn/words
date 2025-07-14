"use strict";

exports.__esModule = true;
exports.default = void 0;
var _ContainerStyle = require("../styles/ContainerStyle");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BROWSER = 'browser';
const Browser = _ref => {
  let {
    isShow,
    style,
    children
  } = _ref;
  const [_style, _className] = (0, _ContainerStyle.crShowHideIf)(isShow, CL_BROWSER);
  return (0, _jsxRuntime.jsx)("div", {
    className: _className,
    style: {
      ...style,
      ..._style
    },
    children: children
  });
};
var _default = exports.default = Browser;
//# sourceMappingURL=Browser.js.map