"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var S = {
  BROWSER_CAPTION: {
    paddingTop: 5,
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
      R_DIALOG: (0, _extends2["default"])({}, R.R_DIALOG),
      CHB_STROKE: R.R_DIALOG.backgroundColor,
      BROWSER_CAPTION: (0, _extends2["default"])({}, S.BROWSER_CAPTION, {}, R.BG_HEADER),
      INPUT_ROOT: (0, _extends2["default"])({}, S.INPUT_ROOT),
      BT: {
        CL_RAISED_DIV: R.CL_BT_RAISED_DIV,
        RAISED_ROOT: (0, _extends2["default"])({}, S.BT_RAISED_ROOT, {}, R.BG_HEADER),
        FLAT_ROOT: (0, _extends2["default"])({}, R.BT_FLAT)
      },
      SELECT: {
        CL_ITEM: R.CL_SELECT_ITEM,
        ITEM: (0, _extends2["default"])({}, R.M_SELECT_ITEM),
        ROOT: {
          width: 280
        },
        MODAL_PANE: (0, _extends2["default"])({}, R.BG)
      },
      TAB: (0, _extends2["default"])({}, R.TAB),
      INPUT: (0, _extends2["default"])({}, R.INPUT)
    };
  }
};
var _default = styleConfig;
exports["default"] = _default;
//# sourceMappingURL=Dialog.Style.js.map