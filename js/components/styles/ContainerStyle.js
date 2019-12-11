"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _crBase = function _crBase() {
  return {
    position: 'relative',
    backgroundColor: '#4d4d4d',
    height: 'calc(100vh - 71px)',
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    borderRadius: '4px'
  };
};

var ContainerStyle = {
  BROWSER_ROOT: (0, _extends2["default"])({}, _crBase(), {
    flexShrink: 0,
    marginLeft: '10px',
    padding: '0px 3px 35px 0px',
    minWidth: '270px',
    maxWidth: '400px',
    minHeight: '500px'
  }),
  ABOUT_ROOT: (0, _extends2["default"])({}, _crBase(), {
    marginLeft: '16px',
    padding: '0px',
    paddingBottom: '35px',
    width: '380px',
    minWidth: '300px',
    minHeight: '500px'
  })
};
var _default = ContainerStyle;
exports["default"] = _default;
//# sourceMappingURL=ContainerStyle.js.map