"use strict";

exports.__esModule = true;
exports.default = void 0;
const S = {
  SCROLL_DIV: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: 10
  },
  DIV_WRAPPER: {
    paddingLeft: 12,
    paddingRight: 5,
    lineHeight: 1.4,
    color: 'gray',
    fontWeight: 'bold'
  },
  DIV_TEXT: {
    lineHeight: 1.8
  },
  APP_TITLE: {
    color: '#80c040'
  },
  BLACK: {
    color: 'black'
  },
  PADDING_TOP: {
    paddingTop: 8
  },
  PROVIDER: {
    color: '#009ae5'
  }
};
const styleConfig = {
  themeName: undefined,
  style: undefined,
  createStyle: R => {
    return {
      ...S
    };
  }
};
var _default = styleConfig;
exports.default = _default;
//# sourceMappingURL=About.Style.js.map