'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  INPUT_ROOT: {
    width: 250,
    marginLeft: 8
  },
  BT_RAISED_ROOT: {
    position: 'relative',
    top: 12,
    marginLeft: 16
  }
};

var _crBgColorStyle = function _crBgColorStyle(color) {
  return { backgroundColor: color };
};

var styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: function createStyle(R, themeName) {
    var _paneRoot = void 0;
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
      PANE_CAPTION: (0, _extends3.default)({}, R.BG_HEADER),
      SVG_RESIZE: (0, _extends3.default)({}, R.SVG_RESIZE),
      BG_COLOR: (0, _extends3.default)({}, _paneRoot),
      INPUT_ROOT: (0, _extends3.default)({}, S.INPUT_ROOT),
      BT: {
        CL_RAISED_DIV: R.CL_BT_RAISED_DIV,
        RAISED_ROOT: (0, _extends3.default)({}, S.BT_RAISED_ROOT, R.BG_HEADER)
      }
    };
  }
};

exports.default = styleConfig;
//# sourceMappingURL=Pane.Style.js.map