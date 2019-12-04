'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputSelect = require('../zhn-m-input/InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE_CONFIG = {
  ROOT: {
    width: 250
  }
};
//import PropTypes from "prop-types";

var RowInputSelect = function RowInputSelect(props) {
  return _react2.default.createElement(_InputSelect2.default, (0, _extends3.default)({
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

exports.default = RowInputSelect;
//# sourceMappingURL=RowInputSelect.js.map