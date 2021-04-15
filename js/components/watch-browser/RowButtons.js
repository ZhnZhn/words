"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Button = _interopRequireDefault(require("./Button"));

var _Pane = _interopRequireDefault(require("./Pane.Style"));

var _jsxRuntime = require("react/jsx-runtime");

var RowButtons = function RowButtons(_ref) {
  var btStyle = _ref.btStyle,
      Primary = _ref.Primary,
      withoutClear = _ref.withoutClear,
      onClear = _ref.onClear,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _Pane["default"].COMMAND_DIV,
    children: [Primary, !withoutClear && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"].Clear, {
      style: btStyle,
      onClick: onClear
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"].Close, {
      style: btStyle,
      onClick: onClose
    })]
  });
};

var _default = RowButtons;
exports["default"] = _default;
//# sourceMappingURL=RowButtons.js.map