"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _useListen = _interopRequireDefault(require("../hooks/useListen"));
var _LoadingActions = require("../../flux/actions/LoadingActions");
var _ProgressLine = _interopRequireDefault(require("../zhn-atoms/ProgressLine"));
var _jsxRuntime = require("react/jsx-runtime");
var COLOR_LOADING = '#2f7ed8',
  COLOR_FAILED = '#ed5813';
//, COMPLETE_TIMEOUT_MLS = 450;

var _crState = function _crState(completed, color) {
  return [completed, color];
};
var ProgressLoading = function ProgressLoading(_ref) {
  var store = _ref.store;
  var _useState = (0, _uiApi.useState)(function () {
      return _crState(0, COLOR_LOADING);
    }),
    state = _useState[0],
    setState = _useState[1],
    completed = state[0],
    color = state[1];
  (0, _useListen["default"])(store, function (actionType) {
    if (actionType === _LoadingActions.LPAT_LOADING) {
      setState(_crState(35, COLOR_LOADING));
    } else if (actionType === _LoadingActions.LPAT_LOADING_COMPLETE) {
      setTimeout(function () {
        return setState(_crState(100, COLOR_LOADING));
      }, 0);
    } else if (actionType === _LoadingActions.LPAT_LOADING_FAILED) {
      setState(_crState(100, COLOR_FAILED));
    }
  }, 'listenLoading');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProgressLine["default"], {
    color: color,
    completed: completed
  });
};
var _isNotShouldRerender = function _isNotShouldRerender() {
  return true;
};
var _default = (0, _uiApi.memo)(ProgressLoading, _isNotShouldRerender);
exports["default"] = _default;
//# sourceMappingURL=ProgressLoading.js.map