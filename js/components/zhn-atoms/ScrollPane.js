"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var CL = 'with-scroll';

var ScrollPane = function ScrollPane(_ref) {
  var style = _ref.style,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      children = _ref.children;

  var _className = className && className !== CL ? className : CL;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _className,
    style: style,
    children: children
  });
};

var _default = ScrollPane;
exports["default"] = _default;
//# sourceMappingURL=ScrollPane.js.map