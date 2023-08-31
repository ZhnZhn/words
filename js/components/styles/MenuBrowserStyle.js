"use strict";

exports.__esModule = true;
exports.default = void 0;
const styleConfig = {
  themeName: undefined,
  style: undefined,
  createStyle: R => {
    return {
      CL_ROW: R.CL_ROW_ITEM,
      BROWSER: {
        ...R.BG
      },
      OPEN_CLOSE: {
        ...R.BG
      },
      BADGE: {
        ...R.BG_HEADER
      }
    };
  }
};
var _default = styleConfig;
exports.default = _default;
//# sourceMappingURL=MenuBrowserStyle.js.map