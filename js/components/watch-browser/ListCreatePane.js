"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _useRefItemCaption2 = _interopRequireDefault(require("./useRefItemCaption"));

var _useGroupOptions2 = _interopRequireDefault(require("./useGroupOptions"));

var _useValidationMessages = _interopRequireDefault(require("./useValidationMessages"));

var _Atoms = _interopRequireDefault(require("./Atoms"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var ListCreatePane = function ListCreatePane(_ref) {
  var store = _ref.store,
      inputStyle = _ref.inputStyle,
      btStyle = _ref.btStyle,
      actionCompleted = _ref.actionCompleted,
      actionFailed = _ref.actionFailed,
      forActionType = _ref.forActionType,
      msgOnNotSelect = _ref.msgOnNotSelect,
      msgOnIsEmptyName = _ref.msgOnIsEmptyName,
      onCreate = _ref.onCreate,
      onClose = _ref.onClose;

  var _refInputText = (0, _uiApi.useRef)(),
      _useRefItemCaption = (0, _useRefItemCaption2["default"])(),
      _refGroupCaption = _useRefItemCaption[0],
      _hSelectGroup = _useRefItemCaption[1],
      _useGroupOptions = (0, _useGroupOptions2["default"])(store),
      groupOptions = _useGroupOptions[0],
      updateGroupOptions = _useGroupOptions[1],
      _useValidationMessage = (0, _useValidationMessages["default"])(),
      validationMessages = _useValidationMessage[0],
      setValidationMessages = _useValidationMessage[1],
      _hClear = _useValidationMessage[2],
      _hCreate = (0, _uiApi.useCallback)(function () {
    var captionGroup = (0, _uiApi.getRefValue)(_refGroupCaption),
        captionList = (0, _uiApi.getRefInputValue)(_refInputText);

    if (captionGroup && captionList) {
      onCreate({
        captionGroup: captionGroup,
        captionList: captionList
      });
      (0, _uiApi.setRefInputValue)(_refInputText, '');
    } else {
      var msg = [];

      if (!captionGroup) {
        msg.push(msgOnNotSelect('In Group'));
      }

      if (!captionList) {
        msg.push(msgOnIsEmptyName('List'));
      }

      setValidationMessages(msg);
    }
  }, []); // _refGroupCaption, setValidationMessages
  // onCreate, msgOnNotSelect, msgOnIsEmptyName

  /*eslint-enable react-hooks/exhaustive-deps */


  (0, _useListen["default"])(store, function (actionType, data) {
    if (actionType === actionCompleted) {
      if (data.forActionType === forActionType) {
        _hClear();
      }

      updateGroupOptions();
    } else if (actionType === actionFailed && data.forActionType === forActionType) {
      setValidationMessages(data.messages);
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].RowInputSelect, {
      inputStyle: inputStyle,
      caption: "In Group:",
      options: groupOptions,
      onSelect: _hSelectGroup
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].RowInputText, {
      ref: _refInputText,
      inputStyle: inputStyle,
      caption: "List:"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].ValidationMessages, {
      validationMessages: validationMessages
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].RowButtons, {
      btStyle: btStyle,
      caption: "Create",
      title: "Create New List",
      onClick: _hCreate,
      onClear: _hClear,
      onClose: onClose
    })]
  });
};
/*
ListCreatePane.propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func,
    getWatchGroups: PropTypes.func
  }),
  actionCompleted: PropTypes.string,
  actionFailed: PropTypes.string,
  forActionType: PropTypes.string,
  msgOnNotSelect: PropTypes.func,
  msgOnIsEmptyName: PropTypes.func,

  inputStyle: PropTypes.object,
  btStyle: PropTypes.object,

  onCreate: PropTypes.func,
  onClose: PropTypes.func
}
*/


var _default = ListCreatePane;
exports["default"] = _default;
//# sourceMappingURL=ListCreatePane.js.map