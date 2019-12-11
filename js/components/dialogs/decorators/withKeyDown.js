"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _handleKeyDown = function _handleKeyDown(event) {
  if (event.keyCode === 13) {
    if (this && typeof this._handleLoad === 'function') {
      this._handleLoad();
    }
  } else if (event.keyCode === 27) {
    if (this && typeof this._handleClose === 'function') {
      this._handleClose();
    }
  }
};

var withKeyDown = function withKeyDown(target) {
  target.prototype._handleKeyDownWith = _handleKeyDown;
};

var _default = withKeyDown;
exports["default"] = _default;
//# sourceMappingURL=withKeyDown.js.map