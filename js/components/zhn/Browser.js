"use strict";

exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BROWSER = 'browser';
const Browser = props => {
  const [_style, _className] = (0, _styleFn.crShowHideIf)(props.isShow, CL_BROWSER);
  return (0, _jsxRuntime.jsx)("div", {
    className: _className,
    style: {
      ...props.style,
      ..._style
    },
    children: props.children
  });
};
var _default = exports.default = Browser;
//# sourceMappingURL=Browser.js.map