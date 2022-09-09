"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Button = _interopRequireDefault(require("./Button"));

var _GeneralStyles = require("../styles/GeneralStyles");

var _jsxRuntime = require("react/jsx-runtime");

var S_DIV = (0, _extends2["default"])({}, _GeneralStyles.S_FLEX_ROW_END, {
  margin: '8px 4px 6px 0'
});

var RowButtons = function RowButtons(_ref) {
  var btStyle = _ref.btStyle,
      caption = _ref.caption,
      title = _ref.title,
      onClick = _ref.onClick,
      onClear = _ref.onClear,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_DIV,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"].Primary, {
      style: btStyle,
      caption: caption,
      title: title,
      onClick: onClick
    }), onClear && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"].Clear, {
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