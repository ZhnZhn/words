"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _useRefItemCaption2 = _interopRequireDefault(require("./useRefItemCaption"));

var _useValidationMessages = _interopRequireDefault(require("./useValidationMessages"));

var _Atoms = _interopRequireDefault(require("./Atoms"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var GroupEditPane = function GroupEditPane(_ref) {
  var store = _ref.store,
      actionCompleted = _ref.actionCompleted,
      actionFailed = _ref.actionFailed,
      forActionType = _ref.forActionType,
      inputStyle = _ref.inputStyle,
      btStyle = _ref.btStyle,
      msgOnNotSelect = _ref.msgOnNotSelect,
      msgOnIsEmptyName = _ref.msgOnIsEmptyName,
      onRename = _ref.onRename,
      onClose = _ref.onClose;

  var _refInputText = (0, _uiApi.useRef)(),
      _useRefItemCaption = (0, _useRefItemCaption2["default"])(),
      _refCaptionFrom = _useRefItemCaption[0],
      _hSelectGroup = _useRefItemCaption[1],
      _useState = (0, _uiApi.useState)(function () {
    return store.getWatchGroups();
  }),
      groupOptions = _useState[0],
      setGroupOptions = _useState[1],
      _useValidationMessage = (0, _useValidationMessages["default"])(function () {
    return (0, _uiApi.setRefInputValue)(_refInputText, '');
  }),
      validationMessages = _useValidationMessage[0],
      setValidationMessages = _useValidationMessage[1],
      _hClear = _useValidationMessage[2],
      _hRename = (0, _uiApi.useMemo)(function () {
    return function () {
      var captionTo = (0, _uiApi.getRefInputValue)(_refInputText),
          captionFrom = (0, _uiApi.getRefValue)(_refCaptionFrom);

      if (captionTo && captionFrom) {
        onRename({
          captionFrom: captionFrom,
          captionTo: captionTo
        });
      } else {
        var msg = [];

        if (!captionFrom) {
          msg.push(msgOnNotSelect('Group From'));
        }

        if (!captionTo) {
          msg.push(msgOnIsEmptyName('Group To'));
        }

        setValidationMessages(msg);
      }
    };
  }, []); // msgOnNotSelect, msgOnIsEmptyName, onRename

  /*eslint-enable react-hooks/exhaustive-deps */


  (0, _useListen["default"])(store, function (actionType, data) {
    if (actionType === actionCompleted) {
      if (data.forActionType === forActionType) {
        _hClear();
      }

      setGroupOptions(store.getWatchGroups());
    } else if (actionType === actionFailed && data.forActionType === forActionType) {
      setValidationMessages(data.messages);
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].RowInputSelect, {
      caption: "Group From:",
      inputStyle: inputStyle,
      options: groupOptions,
      onSelect: _hSelectGroup
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].RowInputText, {
      ref: _refInputText,
      caption: "Group To:",
      inputStyle: inputStyle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].ValidationMessages, {
      validationMessages: validationMessages
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].RowButtons, {
      btStyle: btStyle,
      caption: "Rename",
      title: "Rename Group Name",
      onClick: _hRename,
      onClear: _hClear,
      onClose: onClose
    })]
  });
};
/*
GroupEditPane.propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func,
    getWatchGroups: PropTypes.func
  }),
  actionCompleted: PropTypes.string,
  actionFailed: PropTypes.string,
  forActionType: PropTypes.string,
  msgOnIsEmptyName: PropTypes.func,
  msgOnNotSelect: PropTypes.func,

  inputStyle: PropTypes.object,
  btStyle: PropTypes.object,

  onRename: PropTypes.func,
  onClose: PropTypes.func
}
*/


var _default = GroupEditPane;
exports["default"] = _default;
//# sourceMappingURL=GroupEditPane.js.map