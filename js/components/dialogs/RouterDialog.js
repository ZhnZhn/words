"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _DialogType = _interopRequireDefault(require("./DialogType1"));

var R = {
  DF: _DialogType["default"],
  DialogType1: _DialogType["default"]
};
var RouterDialog = {
  getElement: function getElement(type) {
    return R[type] || R.DF;
  }
};
var _default = RouterDialog;
exports["default"] = _default;
//# sourceMappingURL=RouterDialog.js.map