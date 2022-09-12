"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _useGroupOptions2 = _interopRequireDefault(require("./useGroupOptions"));

var _useValidationMessages = _interopRequireDefault(require("./useValidationMessages"));

var _Atoms = _interopRequireDefault(require("./Atoms"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var ListEditPane = function ListEditPane(_ref) {
  var store = _ref.store,
      inputStyle = _ref.inputStyle,
      btStyle = _ref.btStyle,
      actionCompleted = _ref.actionCompleted,
      actionFailed = _ref.actionFailed,
      forActionType = _ref.forActionType,
      msgOnIsEmptyName = _ref.msgOnIsEmptyName,
      msgOnNotSelect = _ref.msgOnNotSelect,
      onRename = _ref.onRename,
      onClose = _ref.onClose;

  var _refGroupList = (0, _uiApi.useRef)(),
      _refInputText = (0, _uiApi.useRef)(),
      _useGroupOptions = (0, _useGroupOptions2["default"])(store),
      groupOptions = _useGroupOptions[0],
      updateGroupOptions = _useGroupOptions[1],
      _useValidationMessage = (0, _useValidationMessages["default"])(function () {
    return (0, _uiApi.setRefInputValue)(_refInputText, '');
  }),
      validationMessages = _useValidationMessage[0],
      setValidationMessages = _useValidationMessage[1],
      _hClear = _useValidationMessage[2],
      _hRename = (0, _uiApi.useCallback)(function () {
    var _getRefInputValue = (0, _uiApi.getRefInputValue)(_refGroupList),
        captionGroup = _getRefInputValue.captionGroup,
        captionList = _getRefInputValue.captionList,
        captionListTo = (0, _uiApi.getRefInputValue)(_refInputText);

    if (captionGroup && captionList && captionListTo) {
      onRename({
        captionGroup: captionGroup,
        captionListFrom: captionList,
        captionListTo: captionListTo
      });
    } else {
      var msg = [];

      if (!captionGroup) {
        msg.push(msgOnNotSelect('Group'));
      }

      if (!captionList) {
        msg.push(msgOnNotSelect('List From'));
      }

      if (!captionListTo) {
        msg.push(msgOnIsEmptyName('List To'));
      }

      setValidationMessages(msg);
    }
  }, []); // setValidationMessages
  // msgOnIsEmptyName, msgOnNotSelect, onRename

  /*eslint-enable react-hooks/exhaustive-deps */


  (0, _useListen["default"])(store, function (actionType, data) {
    if (actionType === actionCompleted) {
      if (data.forActionType === forActionType) {
        _hClear();
      }

      updateGroupOptions(true);
    } else if (actionType === actionFailed && data.forActionType === forActionType) {
      setValidationMessages(data.messages);
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].SelectGroupList, {
      ref: _refGroupList,
      inputStyle: inputStyle,
      store: store,
      groupCaption: "In Group:",
      groupOptions: groupOptions,
      listCaption: "List From:"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].RowInputText, {
      ref: _refInputText,
      inputStyle: inputStyle,
      caption: "List To:"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].ValidationMessages, {
      validationMessages: validationMessages
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].RowButtons, {
      btStyle: btStyle,
      caption: "Rename",
      title: "Rename List Name",
      onClick: _hRename,
      onClear: _hClear,
      onClose: onClose
    })]
  });
};
/*
ListEditPane.propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func,
    getWatchGroups: PropTypes.func
  }),
  actionCompleted: PropTypes.string,
  forActionType: PropTypes.string,

  inputStyle: PropTypes.object,
  btStyle: PropTypes.object,

  onRename: PropTypes.func,
  onClose: PropTypes.func
}
*/


var _default = ListEditPane;
exports["default"] = _default;
//# sourceMappingURL=ListEditPane.js.map