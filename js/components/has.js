"use strict";

exports.__esModule = true;
exports.hasAccessKey = exports.HAS_TOUCH_EVENTS = exports.HAS_KEYBOARD_FOCUS = void 0;
const HAS_TOUCH_EVENTS = exports.HAS_TOUCH_EVENTS = document && 'ontouchstart' in document.documentElement;
const _getWindowInnerWidth = () => window && window.innerWidth;
const _DF_WIDE_WIDTH = 700;
const _isWideWidth = function (wideWidth) {
  if (wideWidth === void 0) {
    wideWidth = _DF_WIDE_WIDTH;
  }
  return (_getWindowInnerWidth() || wideWidth + 1) > wideWidth;
};
const _HAS_WIDE_SCREEN = _isWideWidth();
const HAS_KEYBOARD_FOCUS = exports.HAS_KEYBOARD_FOCUS = !HAS_TOUCH_EVENTS || _HAS_WIDE_SCREEN;
const hasAccessKey = accessKey => HAS_KEYBOARD_FOCUS && accessKey;
exports.hasAccessKey = hasAccessKey;
//# sourceMappingURL=has.js.map