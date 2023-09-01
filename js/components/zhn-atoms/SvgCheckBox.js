"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _isKeyEnter = _interopRequireDefault(require("./isKeyEnter"));
var _Svg = _interopRequireDefault(require("./svg/Svg100"));
var _jsxRuntime = require("preact/jsx-runtime");
const COLOR_BLANK = 'rgba(0, 0, 0, 0)',
  COLOR_GREY = "#777777",
  DF_COLOR_IS = "#2f7ed8",
  S_DIV = {
    display: 'inline-block',
    width: 16,
    height: 16,
    cursor: 'pointer'
  },
  S_SVG = {
    display: 'inline-block'
  },
  _crRestProps = function (stroke, fill) {
    if (fill === void 0) {
      fill = stroke;
    }
    return {
      stroke,
      fill
    };
  };
const SvgChecked = _ref => {
  let {
    stroke
  } = _ref;
  return (0, _jsxRuntime.jsx)("path", {
    d: "M 2,5 L 8,14 14,1",
    strokeWidth: "2",
    strokeLinecap: "round",
    stroke: stroke,
    fill: COLOR_BLANK
  });
};
const _isFn = fn => typeof fn === 'function';
const SvgCheckBox = _ref2 => {
  let {
    initialValue,
    className,
    style,
    stroke,
    onCheck,
    onUnCheck
  } = _ref2;
  const [isChecked, setIsChecked] = (0, _uiApi.useState)(() => !!initialValue),
    _hClick = () => {
      if (!isChecked && _isFn(onCheck)) {
        onCheck();
      } else if (_isFn(onUnCheck)) {
        onUnCheck();
      }
      setIsChecked(v => !v);
    },
    _hKeyDown = evt => {
      if ((0, _isKeyEnter.default)(evt)) {
        evt.preventDefault();
        _hClick();
      }
    },
    [_restStroke, _restFill] = isChecked ? [DF_COLOR_IS] : [COLOR_GREY, COLOR_BLANK],
    _restProps = _crRestProps(_restStroke, _restFill);
  return (0, _jsxRuntime.jsx)("div", {
    role: "checkbox",
    tabIndex: "0",
    "aria-checked": isChecked,
    className: className,
    style: {
      ...S_DIV,
      ...style
    },
    onClick: _hClick,
    onKeyDown: _hKeyDown,
    children: (0, _jsxRuntime.jsxs)(_Svg.default, {
      w: "16",
      style: S_SVG,
      children: [(0, _jsxRuntime.jsx)("rect", {
        x: "1",
        y: "1",
        height: "14",
        width: "14",
        strokeWidth: "2",
        rx: "3",
        strokeLinecap: "round",
        ..._restProps
      }), isChecked ? (0, _jsxRuntime.jsx)(SvgChecked, {
        stroke: stroke
      }) : null]
    })
  });
};
var _default = SvgCheckBox;
exports.default = _default;
//# sourceMappingURL=SvgCheckBox.js.map