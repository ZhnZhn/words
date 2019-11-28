'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//230, 236, 240

var styleConfig = {
  themeName: undefined,
  style: undefined,
  createStyle: function createStyle(R, themeName) {
    return {
      HEADER: (0, _extends3.default)({}, R.ITEM_HEADER),
      DESCR: {
        lineHeight: 2.2,
        paddingRight: '8px'
      }
    };
  }
};

exports.default = styleConfig;
//# sourceMappingURL=Word.Style.js.map