"use strict";

exports.__esModule = true;
exports.isStrNotBlank = exports.isStr = exports.isObj = exports.isFn = exports.isBool = exports.isArr = void 0;
const _fIsTypeof = strType => v => typeof v === strType;
const isFn = exports.isFn = _fIsTypeof('function');
const isBool = exports.isBool = _fIsTypeof('boolean');
const isStr = exports.isStr = _fIsTypeof('string');
const isStrNotBlank = v => isStr(v) && !!v.trim();
exports.isStrNotBlank = isStrNotBlank;
const isObj = v => typeof v === "object" && v !== null;
exports.isObj = isObj;
const isArr = exports.isArr = Array.isArray;
//# sourceMappingURL=isTypeFn.js.map