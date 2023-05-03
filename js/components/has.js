"use strict";

exports.__esModule = true;
exports.hasAccessKey = exports.HAS_TOUCH_EVENTS = void 0;
var HAS_TOUCH_EVENTS = document && 'ontouchstart' in document.documentElement;
exports.HAS_TOUCH_EVENTS = HAS_TOUCH_EVENTS;
var _HAS_ACCESS_KEY = !HAS_TOUCH_EVENTS;
var hasAccessKey = function hasAccessKey(accessKey) {
  return _HAS_ACCESS_KEY && accessKey;
};
exports.hasAccessKey = hasAccessKey;
//# sourceMappingURL=has.js.map