"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _toLink = _interopRequireDefault(require("./toLink"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["title", "href"];

var Link = function Link(_ref) {
  var title = _ref.title,
      href = _ref.href,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", (0, _extends2["default"])({}, rest, {
    target: "_blank",
    className: "link",
    href: (0, _toLink["default"])(href),
    children: title
  }));
};

var _default = Link;
exports["default"] = _default;
//# sourceMappingURL=Link.js.map