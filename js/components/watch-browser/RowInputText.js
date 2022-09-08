"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _TextField = _interopRequireDefault(require("../zhn-m-input/TextField"));

var _jsxRuntime = require("react/jsx-runtime");

var MAX_LENGTH = 24,
    S_INPUT_TEXT = {
  width: 250
};
var RowInputText = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var caption = _ref.caption;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField["default"], {
    ref: ref,
    caption: caption,
    rootStyle: S_INPUT_TEXT,
    maxLength: MAX_LENGTH
  });
});
var _default = RowInputText;
exports["default"] = _default;
//# sourceMappingURL=RowInputText.js.map