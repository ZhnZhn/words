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
      CL_QUERY_ITEM: R.CL_QUERY_ITEM,
      HEADER: (0, _extends2["default"])({}, R.BG),
      PANE: (0, _extends2["default"])({}, R.BG),
      BT: {
        FLAT_ROOT: (0, _extends2["default"])({}, R.BT_FLAT),
        CL_FLAT_DIV: R.CL_BT_FLAT_DIV
      }
    };
  }
};
var _default = styleConfig;
exports["default"] = _default;
//# sourceMappingURL=HeaderBar.Style.js.map