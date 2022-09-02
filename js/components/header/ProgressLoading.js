"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _ProgressLine = _interopRequireDefault(require("../zhn-atoms/ProgressLine"));

var _jsxRuntime = require("react/jsx-runtime");

var COLOR_LOADING = '#2f7ed8',
    COLOR_FAILED = '#ed5813',
    DF_STATE = [0, COLOR_LOADING];

var _isNotShouldRerender = function _isNotShouldRerender() {
  return true;
};

var ProgressLoading = (0, _uiApi.memo)(function (_ref) {
  var store = _ref.store,
      ACTIONS = _ref.ACTIONS;

  var _useState = (0, _uiApi.useState)(DF_STATE),
      state = _useState[0],
      setState = _useState[1],
      completed = state[0],
      color = state[1];

  (0, _useListen["default"])(store, function (actionType) {
    if (actionType === ACTIONS.LOADING) {
      setState([35, COLOR_LOADING]);
    } else if (actionType === ACTIONS.LOADING_COMPLETE) {
      setState([100, COLOR_LOADING]);
    } else if (actionType === ACTIONS.LOADING_FAILED) {
      setState([100, COLOR_FAILED]);
    }
  }, 'listenLoading');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProgressLine["default"], {
    completed: completed,
    color: color
  });
}, _isNotShouldRerender);
var _default = ProgressLoading;
exports["default"] = _default;
//# sourceMappingURL=ProgressLoading.js.map