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
      CL_SCROLL_PANE: R.CL_SCROLL_PANE,
      CL_ROW: R.CL_ROW_NEWS,

      BROWSER: (0, _extends3.default)({}, R.BG),
      OPEN_CLOSE: (0, _extends3.default)({}, R.BG),
      BROWSER_CAPTION: (0, _extends3.default)({}, R.BG_HEADER),
      ITEM: {
        borderBottom: "1px solid #9e9e9e"
      },
      BADGE: (0, _extends3.default)({}, R.BG_HEADER)
    };
  }
};

exports.default = styleConfig;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\styles\MenuBrowserStyle.js.map