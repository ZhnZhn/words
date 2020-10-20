"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    tabIndex: tabIndex,
    className: CL_ROOT,
    style: style,
    onClick: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
      viewBox: "0 0 12 12",
      width: "100%",
      height: "100%",
      style: S.SVG,
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      strokeWidth: "2",
      stroke: S.COLOR,
      strokeLinecap: "round",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M 0,0 L 12,12"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M 12,0 L 0,12"
      })]
    })
  });
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