"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var styleConfig = {
  themeName: undefined,
  style: undefined,
  createStyle: function createStyle(R) {
    return {
      CL_SCROLL_PANE: R.CL_SCROLL_PANE,
      CL_ROW: R.CL_ROW_NEWS,
      BROWSER: (0, _extends2["default"])({}, R.BG),
      OPEN_CLOSE: (0, _extends2["default"])({}, R.BG),
      BROWSER_CAPTION: (0, _extends2["default"])({}, R.BG_HEADER),
      ITEM: {
        borderBottom: "1px solid #9e9e9e"
      },
      BADGE: (0, _extends2["default"])({}, R.BG_HEADER)
    };
  }
};
var _default = styleConfig;
exports["default"] = _default;
//# sourceMappingURL=MenuBrowserStyle.js.map