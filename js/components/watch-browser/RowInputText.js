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

  var _refInput = (0, _uiApi.useRef)();

  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      getValue: function getValue() {
        var _value = (0, _uiApi.getRefInputValue)(_refInput);

        return _value ? _value.trim() : _value;
      },
      setValue: function setValue(value) {
        var _elInput = (0, _uiApi.getRefValue)(_refInput);

        if (_elInput) {
          _elInput.setValue('' + value);
        }
      }
    };
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField["default"], {
    ref: _refInput,
    caption: caption,
    rootStyle: S_INPUT_TEXT,
    maxLength: MAX_LENGTH
  });
});
var _default = RowInputText;
exports["default"] = _default;
//# sourceMappingURL=RowInputText.js.map