'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  BROWSER_CAPTION: {
    //padding: '5px',
    paddingTop: 5,
    //color: '#9e9e9e',
    color: '#303030',
    backgroundColor: '#3f5178',
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: 0
  },
  BT_RAISED_ROOT: {
    marginRight: 2,
    marginLeft: 2
  },
  INPUT_ROOT: {
    width: 280,
    display: 'block'
  }
};

var styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: function createStyle(R) {
    return {
      CL_SCROLL_PANE: R.CL_SCROLL_PANE,
      R_DIALOG: (0, _extends3.default)({}, R.R_DIALOG),
      BROWSER_CAPTION: (0, _extends3.default)({}, S.BROWSER_CAPTION, R.BG_HEADER),
      INPUT_ROOT: (0, _extends3.default)({}, S.INPUT_ROOT),
      BT: {
        CL_RAISED_DIV: R.CL_BT_RAISED_DIV,
        RAISED_ROOT: (0, _extends3.default)({}, S.BT_RAISED_ROOT, R.BG_HEADER),
        FLAT_ROOT: (0, _extends3.default)({}, R.BT_FLAT)
      },
      SELECT: {
        CL_ITEM: R.CL_SELECT_ITEM,
        ITEM: (0, _extends3.default)({}, R.M_SELECT_ITEM),
        ROOT: {
          width: 280
        },
        MODAL_PANE: (0, _extends3.default)({}, R.BG)
      },
      TAB: (0, _extends3.default)({}, R.TAB),
      INPUT: (0, _extends3.default)({}, R.INPUT)
    };
  }
};

exports.default = styleConfig;
//# sourceMappingURL=Dialog.Style.js.map