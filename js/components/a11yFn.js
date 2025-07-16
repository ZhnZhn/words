"use strict";

exports.__esModule = true;
exports.crPresentationRole = exports.crMenuItemRole = void 0;
var _fUseKey = require("./hooks/fUseKey");
const crPresentationRole = isShow => ({
  role: "presentation",
  hidden: !isShow
});
exports.crPresentationRole = crPresentationRole;
const crMenuItemRole = (onClick, tabIndex, isKeyUp) => ({
  role: "menuitem",
  tabIndex,
  onClick,
  [isKeyUp ? "onKeyUp" : "onKeyDown"]: onClick ? (0, _fUseKey.fOnKeyEnter)(onClick) : void 0
});
exports.crMenuItemRole = crMenuItemRole;
//# sourceMappingURL=a11yFn.js.map