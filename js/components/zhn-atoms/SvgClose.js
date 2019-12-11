"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

//import PropTypes from 'prop-types'
var CL_ROOT = "svg-close";
var S = {
  COLOR: '#d64336',
  SVG: {
    padding: 3
  }
};

var SvgClose = function SvgClose(_ref) {
  var style = _ref.style,
      tabIndex = _ref.tabIndex,
      onClose = _ref.onClose;
  return _react["default"].createElement("button", {
    tabIndex: tabIndex,
    className: CL_ROOT,
    style: style,
    onClick: onClose
  }, _react["default"].createElement("svg", {
    viewBox: "0 0 12 12",
    width: "100%",
    height: "100%",
    style: S.SVG,
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
    strokeWidth: "2",
    stroke: S.COLOR,
    strokeLinecap: "round"
  }, _react["default"].createElement("path", {
    d: "M 0,0 L 12,12"
  }), _react["default"].createElement("path", {
    d: "M 12,0 L 0,12"
  })));
};
/*
SvgClose.propTypes = {
  style: PropTypes.object,
  onClose: PropTypes.func
}
*/


SvgClose.defaultProps = {
  onClose: function onClose() {}
};
var _default = SvgClose;
exports["default"] = _default;
//# sourceMappingURL=SvgClose.js.map