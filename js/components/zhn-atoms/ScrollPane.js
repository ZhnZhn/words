"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var CL = 'with-scroll';

var ScrollPane = function ScrollPane(_ref) {
  var style = _ref.style,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      children = _ref.children;

  var _className = className && className !== CL ? className : CL;

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _className,
    style: style
  }, children);
};

var _default = ScrollPane;
exports["default"] = _default;
//# sourceMappingURL=ScrollPane.js.map