"use strict";

exports.__esModule = true;
exports.safeBindTo = exports.bindTo = void 0;
var _isTypeFn = require("./isTypeFn");
const bindTo = function (fn) {
  for (var _len = arguments.length, bindArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    bindArgs[_key - 1] = arguments[_key];
  }
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return fn(...bindArgs, ...args);
  };
};
exports.bindTo = bindTo;
const safeBindTo = function (fn) {
  for (var _len3 = arguments.length, bindArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    bindArgs[_key3 - 1] = arguments[_key3];
  }
  return (0, _isTypeFn.isFn)(fn) ? function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return fn(...bindArgs, ...args);
  } : void 0;
};
exports.safeBindTo = safeBindTo;
//# sourceMappingURL=bindTo.js.map