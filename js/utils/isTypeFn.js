"use strict";

exports.__esModule = true;
exports.isStrNotBlank = exports.isStr = exports.isFn = exports.isBool = void 0;
const _fIsTypeof = strType => v => typeof v === strType;
const isFn = exports.isFn = _fIsTypeof('function');
const isBool = exports.isBool = _fIsTypeof('boolean');
const isStr = exports.isStr = _fIsTypeof('string');
const isStrNotBlank = v => isStr(v) && !!v.trim();
exports.isStrNotBlank = isStrNotBlank;
//# sourceMappingURL=isTypeFn.js.map