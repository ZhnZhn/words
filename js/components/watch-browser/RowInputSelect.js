"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var STYLE_CONFIG = {
  ROOT: {
    width: 250
  }
};

var RowInputSelect = function RowInputSelect(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputSelect["default"], (0, _extends2["default"])({
    styleConfig: STYLE_CONFIG
  }, props));
};
/*
RowInputSelect.propTypes = {
  caption : PropTypes.string,
  options : PropTypes.array,
  isUpdateOptions : PropTypes.bool,
  onSelect : PropTypes.func
}
*/


var _default = RowInputSelect;
exports["default"] = _default;
//# sourceMappingURL=RowInputSelect.js.map