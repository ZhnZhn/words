"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _LoadingActions = require("../../flux/actions/LoadingActions");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _jsxRuntime = require("react/jsx-runtime");

var S_LABEL = {
  position: 'relative',
  "float": 'right',
  top: 9,
  display: 'inline-block',
  color: '#2f7ed8',
  paddingRight: 10,
  fontSize: '16px',
  fontWeight: 'bold'
};

var LimitLabel = function LimitLabel(_ref) {
  var style = _ref.style,
      store = _ref.store;

  var _useState = (0, _uiApi.useState)(''),
      value = _useState[0],
      setValue = _useState[1];

  (0, _useListen["default"])(store, function (actionType, value) {
    if (actionType === _LoadingActions.LPAT_LOADING_COMPLETE && !(value == null)) {
      setValue(value);
    }
  }, 'listenLoading');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: (0, _extends2["default"])({}, S_LABEL, style),
    children: value
  });
};

var _default = LimitLabel;
exports["default"] = _default;
//# sourceMappingURL=LimitLabel.js.map