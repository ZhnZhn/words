"use strict";

exports.__esModule = true;
exports.safeBindTo = exports.bindTo = void 0;
var _isTypeFn = require("./isTypeFn");
const bindTo = function (fn) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return fn.bind(null, ...args);
};
exports.bindTo = bindTo;
const safeBindTo = function (fn) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  return (0, _isTypeFn.isFn)(fn) ? bindTo(fn, ...args) : void 0;
};
exports.safeBindTo = safeBindTo;
//# sourceMappingURL=bindTo.js.map