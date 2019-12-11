"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));

//import PropTypes from "prop-types";
var STYLE_CONFIG = {
  ROOT: {
    width: 250
  }
};

var RowInputSelect = function RowInputSelect(props) {
  return _react["default"].createElement(_InputSelect["default"], (0, _extends2["default"])({
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