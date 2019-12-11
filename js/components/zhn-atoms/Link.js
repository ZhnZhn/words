"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var Link = function Link(_ref) {
  var title = _ref.title,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["title"]);
  return _react["default"].createElement("a", (0, _extends2["default"])({
    target: "_blank",
    className: "link"
  }, rest), title);
};

var _default = Link;
exports["default"] = _default;
//# sourceMappingURL=Link.js.map