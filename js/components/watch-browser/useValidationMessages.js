"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var FN_NOOP = function FN_NOOP() {};

var useValidationMessages = function useValidationMessages(preClear) {
  if (preClear === void 0) {
    preClear = FN_NOOP;
  }

  var _useState = (0, _uiApi.useState)([]),
      validationMessages = _useState[0],
      setValidationMessages = _useState[1],
      _hClear = (0, _uiApi.useCallback)(function () {
    preClear();
    setValidationMessages(function (prevState) {
      return prevState.length === 0 ? prevState : [];
    });
  }, []); //preClear

  /*eslint-enable react-hooks/exhaustive-deps */


  return [validationMessages, setValidationMessages, _hClear];
};

var _default = useValidationMessages;
exports["default"] = _default;
//# sourceMappingURL=useValidationMessages.js.map