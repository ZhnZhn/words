"use strict";

exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _jsxRuntime = require("preact/jsx-runtime");
const ShowHide = _ref => {
  let {
    isShow,
    isScrollable,
    className,
    style,
    children,
    onKeyDown
  } = _ref;
  const _style = isShow ? _styleFn.S_BLOCK : _styleFn.S_NONE,
    _className = (0, _styleFn.crCn)(className, [isShow, _styleFn.CL_SHOW_POPUP]);
  return (0, _jsxRuntime.jsx)("div", {
    role: "presentation",
    className: _className,
    style: {
      ...style,
      ..._style
    },
    "data-scrollable": isScrollable ? "true" : void 0,
    onKeyDown: onKeyDown,
    children: children
  });
};
var _default = exports.default = ShowHide;
//# sourceMappingURL=ShowHide.js.map