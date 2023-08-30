"use strict";

exports.__esModule = true;
exports.default = void 0;
const S_INPUT_ROOT = {
  width: 250,
  marginLeft: 8
};
const _crBgColorStyle = color => ({
  backgroundColor: color
});
const styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: (R, themeName) => {
    let _paneRoot;
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
      PANE_CAPTION: {
        ...R.BG_HEADER
      },
      SVG_RESIZE: {
        ...R.SVG_RESIZE
      },
      BG_COLOR: {
        ..._paneRoot
      },
      INPUT_ROOT: {
        ...S_INPUT_ROOT
      },
      BT: {
        CL_FLAT_DIV: R.CL_BT_FLAT_DIV
      }
    };
  }
};
var _default = styleConfig;
exports.default = _default;
//# sourceMappingURL=Pane.Style.js.map