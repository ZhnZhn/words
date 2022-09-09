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
var ListDeletePane = function ListDeletePane(_ref) {
  var store = _ref.store,
      inputStyle = _ref.inputStyle,
      btStyle = _ref.btStyle,
      actionCompleted = _ref.actionCompleted,
      forActionType = _ref.forActionType,
      msgOnNotSelect = _ref.msgOnNotSelect,
      onDelete = _ref.onDelete,
      onClose = _ref.onClose;

  var _refGroupList = (0, _uiApi.useRef)(),
      _useGroupOptions = (0, _useGroupOptions2["default"])(store),
      groupOptions = _useGroupOptions[0],
      updateGroupOptions = _useGroupOptions[1],
      _useValidationMessage = (0, _useValidationMessages["default"])(),
      validationMessages = _useValidationMessage[0],
      setValidationMessages = _useValidationMessage[1],
      _hClear = _useValidationMessage[2],
      _hDelete = (0, _uiApi.useCallback)(function () {
    var _getRefInputValue = (0, _uiApi.getRefInputValue)(_refGroupList),
        captionGroup = _getRefInputValue.captionGroup,
        captionList = _getRefInputValue.captionList;

    if (captionGroup && captionList) {
      onDelete({
        captionGroup: captionGroup,
        captionList: captionList
      });
    } else {
      var msg = [];

      if (!captionGroup) {
        msg.push(msgOnNotSelect('Group'));
      }

      if (!captionList) {
        msg.push(msgOnNotSelect('List'));
      }

      setValidationMessages(msg);
    }
  }, []); // setValidationMessages
  // msgOnNotSelect, onDelete

  /*eslint-enable react-hooks/exhaustive-deps */


  (0, _useListen["default"])(store, function (actionType, data) {
    if (actionType === actionCompleted) {
      if (data.forActionType === forActionType) {
        _hClear();
      }

      updateGroupOptions(true);
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].FragmentSelectGroupList, {
      ref: _refGroupList,
      store: store,
      inputStyle: inputStyle,
      groupCaption: "In Group:",
      groupOptions: groupOptions,
      listCaption: "List:"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].ValidationMessages, {
      validationMessages: validationMessages
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].RowButtons, {
      btStyle: btStyle,
      caption: "Delete",
      title: "Delete List",
      onClick: _hDelete,
      onClear: _hClear,
      onClose: onClose
    })]
  });
};
/*
ListDeletePane.propTypes = {
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


var _default = ListDeletePane;
exports["default"] = _default;
//# sourceMappingURL=ListDeletePane.js.map