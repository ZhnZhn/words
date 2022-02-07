"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ContainerStyle = _interopRequireDefault(require("../styles/ContainerStyle"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_SHOW_POPUP = 'show-popup',
    S_BLOCK = {
  display: 'block'
},
    S_NONE = {
  display: 'none'
};

var Browser = function Browser(_ref) {
  var isShow = _ref.isShow,
      style = _ref.style,
      children = _ref.children;

  var _styleOpen = isShow ? S_BLOCK : S_NONE,
      _classOpen = isShow ? CL_SHOW_POPUP : null;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _classOpen,
    style: (0, _extends2["default"])({}, _ContainerStyle["default"].BROWSER_ROOT, style, _styleOpen),
    children: children
  });
};

var _default = Browser;
exports["default"] = _default;
//# sourceMappingURL=Browser.js.map