"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.S_PANE_TYPE1 = exports.S_BROWSER = exports.S_ABOUT = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _S_CONTAINER = {
  position: 'relative',
  backgroundColor: '#4d4d4d',
  height: 'calc(100vh - 71px)',
  minHeight: 500,
  marginLeft: 8,
  boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
  borderRadius: 4
};
var S_PANE_TYPE1 = (0, _extends2["default"])({}, _S_CONTAINER, {
  padding: '0 0 3px 0',
  overflow: 'hidden'
});
exports.S_PANE_TYPE1 = S_PANE_TYPE1;
var S_BROWSER = (0, _extends2["default"])({}, _S_CONTAINER, {
  flexShrink: 0,
  padding: '0px 3px 35px 0px',
  minWidth: 270,
  maxWidth: 400
});
exports.S_BROWSER = S_BROWSER;
var S_ABOUT = (0, _extends2["default"])({}, _S_CONTAINER, {
  padding: 0,
  paddingBottom: 35,
  width: 390,
  minWidth: 300
});
exports.S_ABOUT = S_ABOUT;
//# sourceMappingURL=ContainerStyle.js.map