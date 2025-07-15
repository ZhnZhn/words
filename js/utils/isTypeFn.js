"use strict";

exports.__esModule = true;
exports.isFn = exports.isBool = void 0;
const _fIsTypeof = strType => v => typeof v === strType;
const isFn = exports.isFn = _fIsTypeof('function');
const isBool = exports.isBool = _fIsTypeof('boolean');
//# sourceMappingURL=isTypeFn.js.map