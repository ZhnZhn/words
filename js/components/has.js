"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _isTouchable = function _isTouchable() {
  return document && 'ontouchstart' in document.documentElement;
};

var has = {
  HAS_TOUCH: _isTouchable()
};
var _default = has;
exports["default"] = _default;
//# sourceMappingURL=has.js.map