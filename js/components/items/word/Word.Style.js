"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: function createStyle(R, themeName) {
    return {
      HEADER: (0, _extends3.default)({}, R.ITEM_HEADER),
      DESCR: {
        lineHeight: 2.2,
        paddingRight: 8
      }
    };
  }
};

exports.default = styleConfig;
//# sourceMappingURL=Word.Style.js.map