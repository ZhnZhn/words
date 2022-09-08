"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _Atoms = _interopRequireDefault(require("./Atoms"));

var _jsxRuntime = require("react/jsx-runtime");

var GroupAddPane = function GroupAddPane(_ref) {
  var store = _ref.store,
      actionCompleted = _ref.actionCompleted,
      actionFailed = _ref.actionFailed,
      forActionType = _ref.forActionType,
      inputStyle = _ref.inputStyle,
      btStyle = _ref.btStyle,
      msgOnIsEmptyName = _ref.msgOnIsEmptyName,
      onCreate = _ref.onCreate,
      onClose = _ref.onClose;

  var _refInput = (0, _uiApi.useRef)(),
      _useState = (0, _uiApi.useState)([]),
      validationMessages = _useState[0],
      setValidationMessages = _useState[1],
      _hClear = (0, _uiApi.useMemo)(function () {
    return function () {
      (0, _uiApi.setRefInputValue)(_refInput, '');
      setValidationMessages(function (prevMsg) {
        return prevMsg.length === 0 ? prevMsg : [];
      });
    };
  }, []),
      _hCreate = (0, _uiApi.useMemo)(function () {
    return function () {
      var caption = (0, _uiApi.getRefInputValue)(_refInput);

      if (caption) {
        onCreate({
          caption: caption
        });
      } else {
        (0, _uiApi.setRefInputValue)(_refInput, '');
        setValidationMessages([msgOnIsEmptyName('Group')]);
      }
    };
  }, []),
      _btPrimaryEl = (0, _uiApi.useMemo)(function () {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].Button.Primary, {
      style: btStyle,
      caption: "Create",
      title: "Create New Group",
      onClick: _hCreate
    });
  }, []); // btStyle, _hCreate

  /*eslint-enable react-hooks/exhaustive-deps */


  (0, _useListen["default"])(store, function (actionType, data) {
    if (actionType === actionCompleted && data.forActionType === forActionType) {
      _hClear();
    } else if (actionType === actionFailed && data.forActionType === forActionType) {
      setValidationMessages(data.messages);
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].RowInputText, {
      ref: _refInput,
      caption: "Group:",
      inputStyle: inputStyle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].ValidationMessages, {
      validationMessages: validationMessages
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].RowButtons, {
      btStyle: btStyle,
      Primary: _btPrimaryEl,
      onClear: _hClear,
      onClose: onClose
    })]
  });
};
/*
GroupAddPane.propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func
  }),
  actionCompleted: PropTypes.string,
  actionFailed: PropTypes.string,
  forActionType: PropTypes.string,
  msgOnIsEmptyName: PropTypes.func,

  inputStyle: PropTypes.object,
  btStyle: PropTypes.object,

  onCreate: PropTypes.func,
  onClose: PropTypes.func
}
*/


var _default = GroupAddPane;
exports["default"] = _default;
//# sourceMappingURL=GroupAddPane.js.map