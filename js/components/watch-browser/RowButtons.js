"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var _Pane = _interopRequireDefault(require("./Pane.Style"));

var RowButtons = function RowButtons(_ref) {
  var btStyle = _ref.btStyle,
      Primary = _ref.Primary,
      withoutClear = _ref.withoutClear,
      onClear = _ref.onClear,
      onClose = _ref.onClose;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _Pane["default"].COMMAND_DIV
  }, Primary, !withoutClear && /*#__PURE__*/_react["default"].createElement(_Button["default"].Clear, {
    style: btStyle,
    onClick: onClear
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"].Close, {
    style: btStyle,
    onClick: onClose
  }));
};

var _default = RowButtons;
exports["default"] = _default;
//# sourceMappingURL=RowButtons.js.map