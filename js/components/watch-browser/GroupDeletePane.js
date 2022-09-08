"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _Atoms = _interopRequireDefault(require("./Atoms"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var GroupDeletePane = function GroupDeletePane(_ref) {
  var store = _ref.store,
      actionCompleted = _ref.actionCompleted,
      forActionType = _ref.forActionType,
      inputStyle = _ref.inputStyle,
      btStyle = _ref.btStyle,
      msgOnNotSelect = _ref.msgOnNotSelect,
      onDelete = _ref.onDelete,
      onClose = _ref.onClose;

  var _refCaption = (0, _uiApi.useRef)(),
      _useState = (0, _uiApi.useState)([]),
      validationMessages = _useState[0],
      setValidationMessages = _useState[1],
      _useState2 = (0, _uiApi.useState)(function () {
    return store.getWatchGroups();
  }),
      groupOptions = _useState2[0],
      setGroupOptions = _useState2[1],
      _hClear = (0, _uiApi.useMemo)(function () {
    return function () {
      setValidationMessages(function (prevMsg) {
        return prevMsg.length === 0 ? prevMsg : [];
      });
    };
  }, []),
      _hSelectGroup = (0, _uiApi.useMemo)(function () {
    return function (item) {
      var _ref2 = item || {},
          caption = _ref2.caption;

      (0, _uiApi.setRefValue)(_refCaption, caption || null);
    };
  }, []),
      _hDeleteGroup = (0, _uiApi.useMemo)(function () {
    return function () {
      var caption = (0, _uiApi.getRefValue)(_refCaption);

      if (caption) {
        onDelete({
          caption: caption
        });
      } else {
        setValidationMessages([msgOnNotSelect('Group')]);
      }
    };
  }, []),
      _btPrimaryEl = (0, _uiApi.useMemo)(function () {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].Button.Primary, {
      style: btStyle,
      caption: "Delete",
      title: "Delete Group",
      onClick: _hDeleteGroup
    });
  }, []); // btStyle, _hDeleteGroup

  /*eslint-enable react-hooks/exhaustive-deps */


  (0, _useListen["default"])(store, function (actionType, data) {
    if (actionType === actionCompleted) {
      if (data.forActionType === forActionType) {
        _hClear();
      }

      setGroupOptions(store.getWatchGroups());
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].RowInputSelect, {
      inputStyle: inputStyle,
      caption: "Group:",
      options: groupOptions,
      onSelect: _hSelectGroup
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].ValidationMessages, {
      validationMessages: validationMessages
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].RowButtons, {
      btStyle: btStyle,
      Primary: _btPrimaryEl,
      withoutClear: true,
      onClose: onClose
    })]
  });
};
/*
GroupDeletePane.propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func,
    getWatchGroups: PropTypes.func
  }),
  actionCompleted: PropTypes.string,
  forActionType: PropTypes.string,
  msgOnNotSelect: PropTypes.func,

  inputStyle: PropTypes.object,
  btStyle: PropTypes.object,

  onDelete: PropTypes.func,
  onClose: PropTypes.func
}
*/


var _default = GroupDeletePane;
exports["default"] = _default;
//# sourceMappingURL=GroupDeletePane.js.map