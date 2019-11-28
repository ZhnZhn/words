'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  SCROLL_DIV: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px'
  },
  DIV_WRAPPER: {
    paddingLeft: '12px',
    paddingRight: '5px',
    lineHeight: 1.4,
    color: 'gray',
    fontWeight: 'bold'
  },
  DIV_TEXT: {
    lineHeight: 1.8
  },
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  },
  APP_TITLE: {
    color: '#80c040'
  },
  STEP: {
    marginTop: '3px'
  },
  BLACK: {
    color: 'black'
  },
  MARGIN_TOP: {
    marginTop: '8px'
  },
  PROVIDER: {
    color: '#009AE5'
  }
};

var styleConfig = {
  themeName: undefined,
  style: undefined,
  createStyle: function createStyle(R) {
    return (0, _extends3.default)({
      CL_SCROLL_PANE: R.CL_SCROLL_PANE,
      CL_GITHUB_ICON: R.CL_GITHUB_ICON,
      CL_WORDS_ICON: R.CL_WORDS_ICON,
      ROOT: (0, _extends3.default)({}, R.BG),
      BROWSER_CAPTION: (0, _extends3.default)({}, R.BG_HEADER),
      ICON: (0, _extends3.default)({}, R.ICON),
      ICON_GITHUB: (0, _extends3.default)({}, R.ICON_GITHUB)
    }, S);
  }
};

exports.default = styleConfig;
//# sourceMappingURL=About.Style.js.map