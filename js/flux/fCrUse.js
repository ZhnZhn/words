"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useSubscribe = _interopRequireDefault(require("../components/hooks/useSubscribe"));
const fCrUse = (store, select) => _useSubscribe.default.bind(null, store, select);
var _default = fCrUse;
exports.default = _default;
//# sourceMappingURL=fCrUse.js.map