"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_SHOW_POPUP = 'show-popup',
  S_SHOW = {
    display: 'block'
  },
  S_HIDE = {
    display: 'none'
  };
const ShowHide = _ref => {
  let {
    isShow,
    isScrollable,
    className,
    style,
    children,
    onKeyDown
  } = _ref;
  const _style = isShow ? S_SHOW : S_HIDE,
    _className = (0, _uiApi.crCn)(className, [isShow, CL_SHOW_POPUP]);
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