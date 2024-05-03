"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _TextField = _interopRequireDefault(require("../zhn-m-input/TextField"));
var _jsxRuntime = require("preact/jsx-runtime");
const MAX_LENGTH = 24,
  S_INPUT_TEXT = {
    width: 250
  };
const RowInputText = _ref => {
  let {
    refEl,
    caption
  } = _ref;
  return (0, _jsxRuntime.jsx)(_TextField.default, {
    refEl: refEl,
    caption: caption,
    rootStyle: S_INPUT_TEXT,
    maxLength: MAX_LENGTH
  });
};
var _default = exports.default = RowInputText;
//# sourceMappingURL=RowInputText.js.map