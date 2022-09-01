"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _initState = function _initState(initialValue) {
  return !!initialValue;
},
    _reducer = function _reducer(state, boolValue) {
  return boolValue;
};

var useBool = function useBool(initialValue) {
  var _useReducer = (0, _uiApi.useReducer)(_reducer, initialValue, _initState),
      is = _useReducer[0],
      setIs = _useReducer[1],
      _refSetTrue = (0, _uiApi.useRef)(function () {
    return setIs(true);
  }),
      _refSetFalse = (0, _uiApi.useRef)(function () {
    return setIs(false);
  });

  return [is, (0, _uiApi.getRefValue)(_refSetTrue), (0, _uiApi.getRefValue)(_refSetFalse)];
};

var _default = useBool;
exports["default"] = _default;
//# sourceMappingURL=useBool.js.map