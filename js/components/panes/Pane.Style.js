"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var S_INPUT_ROOT = {
  width: 250,
  marginLeft: 8
},
    S_BT_RAISED_ROOT = {
  position: 'relative',
  top: 12,
  marginLeft: 16
};

var _crBgColorStyle = function _crBgColorStyle(color) {
  return {
    backgroundColor: color
  };
};

var styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: function createStyle(R, themeName) {
    var _paneRoot;

    switch (themeName) {
      case 'WHITE':
        _paneRoot = _crBgColorStyle('rgb(235, 241, 245)');
        break;

      case 'SAND':
        _paneRoot = _crBgColorStyle('#e8e0cb');
        break;

      default:
    }

    return {
      CL_SCROLL_PANE: R.CL_SCROLL_PANE,
      PANE_CAPTION: (0, _extends2["default"])({}, R.BG_HEADER),
      SVG_RESIZE: (0, _extends2["default"])({}, R.SVG_RESIZE),
      BG_COLOR: (0, _extends2["default"])({}, _paneRoot),
      INPUT_ROOT: (0, _extends2["default"])({}, S_INPUT_ROOT),
      BT: {
        CL_RAISED_DIV: R.CL_BT_RAISED_DIV,
        RAISED_ROOT: (0, _extends2["default"])({}, S_BT_RAISED_ROOT, R.BG_HEADER),
        CL_FLAT_DIV: R.CL_BT_FLAT_DIV,
        FLAT: {
          color: R.BG_HEADER.backgroundColor
        }
      }
    };
  }
};
var _default = styleConfig;
exports["default"] = _default;
//# sourceMappingURL=Pane.Style.js.map