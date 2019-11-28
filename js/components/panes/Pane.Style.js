'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  INPUT_ROOT: {
    width: '250px',
    marginLeft: '8px'
    //display: 'block'
  },
  BT_RAISED_ROOT: {
    position: 'relative',
    top: '12px',
    marginLeft: '16px'
  }
};

var styleConfig = {
  themeName: undefined,
  style: undefined,
  createStyle: function createStyle(R, themeName) {
    return {
      CL_SCROLL_PANE: R.CL_SCROLL_PANE,
      PANE_CAPTION: (0, _extends3.default)({}, R.BG_HEADER),
      SVG_RESIZE: (0, _extends3.default)({}, R.SVG_RESIZE),
      PANE_ROOT: (0, _extends3.default)({}, R.BG),
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