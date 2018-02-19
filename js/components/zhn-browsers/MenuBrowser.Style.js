"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//color: #009ae5 - header_browser

var styleConfig = {
  themeName: undefined,
  style: undefined,
  createStyle: function createStyle(CSS_RULE, themeName) {
    /*
    let _clMenuItem, _itemColor;
    switch(themeName){
      case 'WHITE':
        _clMenuItem = "row__news-source--white"
        _itemColor = { color: '#5f5f5f' }
        break;
      default:
        _clMenuItem = "row__news-source"
    }
    */
    return {
      CL_SCROLL_PANE: CSS_RULE.CL_SCROLL_PANE,
      CL_ROW: "row__news-source",
      //CL_ROW: _clMenuItem,

      BROWSER: (0, _extends3.default)({}, CSS_RULE.BG),
      OPEN_CLOSE: (0, _extends3.default)({}, CSS_RULE.BG),
      BROWSER_CAPTION: (0, _extends3.default)({}, CSS_RULE.BG_HEADER),
      ITEM: {
        borderBottom: "1px solid #9e9e9e"
        //..._itemColor
      },
      BADGE: (0, _extends3.default)({}, CSS_RULE.BG_HEADER)
    };
  }
};

exports.default = styleConfig;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\zhn-browsers\MenuBrowser.Style.js.map