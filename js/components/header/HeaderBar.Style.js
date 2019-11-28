"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleConfig = {
  themeName: undefined,
  style: undefined,
  createStyle: function createStyle(R) {
    return {
      CL_QUERY_ITEM: R.CL_QUERY_ITEM,
      HEADER: (0, _extends3.default)({}, R.BG),
      PANE: (0, _extends3.default)({}, R.BG),
      BT: {
        FLAT_ROOT: (0, _extends3.default)({}, R.BT_FLAT),
        CL_FLAT_DIV: R.CL_BT_FLAT_DIV
      }
    };
  }
};

exports.default = styleConfig;
//# sourceMappingURL=HeaderBar.Style.js.map