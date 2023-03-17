"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _Color = _interopRequireDefault(require("../styles/Color"));
var _isKeyEnter = _interopRequireDefault(require("./isKeyEnter"));
var _Svg = _interopRequireDefault(require("./svg/Svg100"));
var _jsxRuntime = require("react/jsx-runtime");
var DF_COLOR_IS = "#2f7ed8",
  S_DIV = {
    display: 'inline-block',
    width: 16,
    height: 16,
    cursor: 'pointer'
  },
  S_SVG = {
    display: 'inline-block'
  };
var SvgChecked = function SvgChecked(_ref) {
  var stroke = _ref.stroke;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    d: "M 2,5 L 8,14 14,1",
    strokeWidth: "2",
    strokeLinecap: "round",
    stroke: stroke,
    fill: _Color["default"].BLANK
  });
};
var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};
var SvgCheckBox = function SvgCheckBox(_ref2) {
  var initialValue = _ref2.initialValue,
    style = _ref2.style,
    stroke = _ref2.stroke,
    onCheck = _ref2.onCheck,
    onUnCheck = _ref2.onUnCheck;
  var _useState = (0, _uiApi.useState)(function () {
      return !!initialValue;
    }),
    isChecked = _useState[0],
    setIsChecked = _useState[1],
    _hClick = function _hClick() {
      if (!isChecked && _isFn(onCheck)) {
        onCheck();
      } else if (_isFn(onUnCheck)) {
        onUnCheck();
      }
      setIsChecked(function (v) {
        return !v;
      });
    },
    _hKeyDown = function _hKeyDown(evt) {
      if ((0, _isKeyEnter["default"])(evt)) {
        evt.preventDefault();
        _hClick();
      }
    },
    _restProps = isChecked ? {
      stroke: DF_COLOR_IS,
      fill: DF_COLOR_IS
    } : {
      stroke: _Color["default"].GREY,
      fill: _Color["default"].BLANK
    };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    role: "checkbox",
    tabIndex: "0",
    "aria-checked": isChecked,
    style: (0, _extends2["default"])({}, S_DIV, style),
    onClick: _hClick,
    onKeyDown: _hKeyDown,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Svg["default"], {
      w: "16",
      style: S_SVG,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("rect", (0, _extends2["default"])({
        x: "1",
        y: "1",
        height: "14",
        width: "14",
        strokeWidth: "2",
        rx: "3",
        strokeLinecap: "round"
      }, _restProps)), isChecked ? /*#__PURE__*/(0, _jsxRuntime.jsx)(SvgChecked, {
        stroke: stroke
      }) : null]
    })
  });
};
var _default = SvgCheckBox;
exports["default"] = _default;
//# sourceMappingURL=SvgCheckBox.js.map