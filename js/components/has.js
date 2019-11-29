'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isTouchable = function _isTouchable() {
  return document && 'ontouchstart' in document.documentElement;
};

var has = {
  HAS_TOUCH: _isTouchable()
};

exports.default = has;
//# sourceMappingURL=has.js.map