"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _jsxRuntime = require("react/jsx-runtime");

var S_ROOT = {
  zIndex: 1030,
  position: 'absolute',
  top: 70,
  left: 10,
  width: '99%'
};

var _isUndef = function _isUndef(value) {
  return typeof value === 'undefined';
};

var _findCompIndex = function _findCompIndex(arr, key) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].key === key) {
      return i;
    }
  }

  return;
};

var _doVisible = function _doVisible(arr, keyValue) {
  var _index = _findCompIndex(arr, keyValue) || 0;

  return [].concat(arr.slice(0, _index), arr.slice(_index + 1), [arr[_index]]);
};

var _updateVisible = function _updateVisible(state, key, maxDialog) {
  var hmIs = state.hmIs,
      visibleDialogs = state.visibleDialogs,
      _keyIndex = visibleDialogs.indexOf(key);

  if (_keyIndex !== -1) {
    visibleDialogs.splice(_keyIndex, 1);
  }

  visibleDialogs.push(key);
  hmIs[key] = true;

  if (visibleDialogs.length > maxDialog) {
    hmIs[visibleDialogs[0]] = false;
    visibleDialogs.splice(0, 1);
  }
};

var DialogContainer = function DialogContainer(_ref) {
  var store = _ref.store,
      _ref$maxDialog = _ref.maxDialog,
      maxDialog = _ref$maxDialog === void 0 ? 3 : _ref$maxDialog,
      showAction = _ref.showAction;

  var _useState = (0, _uiApi.useState)({
    hmIs: {},
    compDialogs: [],
    visibleDialogs: []
  }),
      state = _useState[0],
      setState = _useState[1],
      hmIs = state.hmIs,
      compDialogs = state.compDialogs,
      _hToggleDialog = function _hToggleDialog(key) {
    setState(function (prevState) {
      var hmIs = prevState.hmIs,
          visibleDialogs = prevState.visibleDialogs;
      hmIs[key] = false;
      prevState.visibleDialogs = visibleDialogs.filter(function (value) {
        return value !== key;
      });
      return (0, _extends2["default"])({}, prevState);
    });
  };

  (0, _useListen["default"])(store, function (actionType, option) {
    if (actionType === showAction) {
      setState(function (prevState) {
        var key = option.key,
            Comp = option.Comp;

        if (Comp && !_isUndef(_findCompIndex(prevState.compDialogs, key))) {
          return prevState;
        }

        _updateVisible(prevState, key, maxDialog);

        if (!Comp) {
          prevState.compDialogs = _doVisible(prevState.compDialogs, key);
        } else {
          prevState.compDialogs.push(Comp);
        }

        return (0, _extends2["default"])({}, prevState);
      });
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: S_ROOT,
    children: compDialogs.map(function (Comp) {
      var key = Comp.key;
      return (0, _uiApi.cloneElement)(Comp, {
        key: key,
        isShow: hmIs[key],
        onClose: function onClose() {
          return _hToggleDialog(key);
        }
      });
    })
  });
};

var _default = DialogContainer;
exports["default"] = _default;
//# sourceMappingURL=DialogContainer.js.map