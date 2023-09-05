"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));
var _jsxRuntime = require("preact/jsx-runtime");
const STYLE_CONFIG = {
  ROOT: {
    width: 250
  }
};
const RowInputSelect = props => (0, _jsxRuntime.jsx)(_InputSelect.default, {
  styleConfig: STYLE_CONFIG,
  ...props
});
var _default = RowInputSelect;
exports.default = _default;
//# sourceMappingURL=RowInputSelect.js.map