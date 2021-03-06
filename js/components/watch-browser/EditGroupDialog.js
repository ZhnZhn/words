"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("../dialogs/Dialog.Style"));

var _WatchActions = _interopRequireWildcard(require("../../flux/actions/WatchActions"));

var _MsgWatch = _interopRequireDefault(require("../../constants/MsgWatch"));

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));

var _GroupAddPane = _interopRequireDefault(require("./GroupAddPane"));

var _GroupEditPane = _interopRequireDefault(require("./GroupEditPane"));

var _GroupDeletePane = _interopRequireDefault(require("./GroupDeletePane"));

var _Dialog2 = _interopRequireDefault(require("./Dialog.Style"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var addGroup = _WatchActions["default"].addGroup,
    renameGroup = _WatchActions["default"].renameGroup,
    deleteGroup = _WatchActions["default"].deleteGroup;
var EDIT_WATCH_COMPLETED = _WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED,
    EDIT_WATCH_FAILED = _WatchActions.WatchActionTypes.EDIT_WATCH_FAILED,
    ADD_GROUP = _WatchActions.WatchActionTypes.ADD_GROUP,
    RENAME_GROUP = _WatchActions.WatchActionTypes.RENAME_GROUP,
    DELETE_GROUP = _WatchActions.WatchActionTypes.DELETE_GROUP;
var notSelected = _MsgWatch["default"].notSelected,
    emptyName = _MsgWatch["default"].emptyName;

var EditGroupDialog = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(EditGroupDialog, _Component);

  function EditGroupDialog() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = EditGroupDialog.prototype;

  /*
  static propTypes = {
    isShow: PropTypes.bool,
    store: PropTypes.object,
    onClose: PropTypes.func
  }
  */
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    var _jsx2;

    var _this$props = this.props,
        theme = _this$props.theme,
        isShow = _this$props.isShow,
        store = _this$props.store,
        onClose = _this$props.onClose,
        TS = theme.createStyle(_Dialog["default"]);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialog["default"] //STYLE={TS.BT}
    , {
      style: (0, _extends2["default"])({}, TS.R_DIALOG, _Dialog2["default"].DIALOG),
      captionStyle: TS.BROWSER_CAPTION,
      caption: "Watch Groups Edit",
      isShow: isShow,
      isWithButton: false,
      onClose: onClose,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Atoms["default"].TabPane, {
        style: _Dialog2["default"].TAB_PANE,
        tabStyle: _Dialog2["default"].TABS,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].Tab, {
          title: "Create",
          style: TS.TAB,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GroupAddPane["default"], {
            store: store,
            inputStyle: TS.INPUT,
            btStyle: TS.BT.FLAT_ROOT,
            actionCompleted: EDIT_WATCH_COMPLETED,
            actionFailed: EDIT_WATCH_FAILED,
            forActionType: ADD_GROUP,
            msgOnIsEmptyName: emptyName,
            onCreate: addGroup,
            onClose: onClose
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].Tab, {
          title: "Rename",
          style: TS.TAB,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GroupEditPane["default"], {
            store: store,
            inputStyle: TS.INPUT,
            btStyle: TS.BT.FLAT_ROOT,
            actionCompleted: EDIT_WATCH_COMPLETED,
            actionFailed: EDIT_WATCH_FAILED,
            forActionType: RENAME_GROUP,
            msgOnNotSelect: notSelected,
            msgOnIsEmptyName: emptyName,
            onRename: renameGroup,
            onClose: onClose
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].Tab, {
          title: "Delete",
          style: TS.TAB,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GroupDeletePane["default"], (_jsx2 = {
            store: store,
            inputStyle: TS.INPUT,
            btStyle: TS.BT.FLAT_ROOT
          }, _jsx2["store"] = store, _jsx2.actionCompleted = EDIT_WATCH_COMPLETED, _jsx2.forActionType = DELETE_GROUP, _jsx2.msgOnNotSelect = notSelected, _jsx2.onDelete = deleteGroup, _jsx2.onClose = onClose, _jsx2))
        })]
      })
    });
  };

  return EditGroupDialog;
}(_react.Component);

var _default = (0, _withTheme["default"])(EditGroupDialog);

exports["default"] = _default;
//# sourceMappingURL=EditGroupDialog.js.map