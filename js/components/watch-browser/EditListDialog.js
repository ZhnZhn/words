"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("../dialogs/Dialog.Style"));

var _WatchActions = _interopRequireWildcard(require("../../flux/actions/WatchActions"));

var _MsgWatch = _interopRequireDefault(require("../../constants/MsgWatch"));

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));

var _ListCreatePane = _interopRequireDefault(require("./ListCreatePane"));

var _ListEditPane = _interopRequireDefault(require("./ListEditPane"));

var _ListDeletePane = _interopRequireDefault(require("./ListDeletePane"));

var _Dialog2 = _interopRequireDefault(require("./Dialog.Style"));

//import PropTypes from "prop-types";
var createList = _WatchActions["default"].createList,
    renameList = _WatchActions["default"].renameList,
    deleteList = _WatchActions["default"].deleteList;
var EDIT_WATCH_COMPLETED = _WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED,
    EDIT_WATCH_FAILED = _WatchActions.WatchActionTypes.EDIT_WATCH_FAILED,
    CREATE_LIST = _WatchActions.WatchActionTypes.CREATE_LIST,
    RENAME_LIST = _WatchActions.WatchActionTypes.RENAME_LIST,
    DELETE_LIST = _WatchActions.WatchActionTypes.DELETE_LIST;
var notSelected = _MsgWatch["default"].notSelected,
    emptyName = _MsgWatch["default"].emptyName;

var EditListDialog = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(EditListDialog, _Component);

  function EditListDialog() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = EditListDialog.prototype;

  /*
  static propTypes = {
    isShow : PropTypes.bool,
    store : PropTypes.object,
    onClose : PropTypes.func
  }
  */
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
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
      caption: "Watch Lists Edit",
      isShow: isShow,
      isWithButton: false,
      onClose: onClose,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Atoms["default"].TabPane, {
        style: _Dialog2["default"].TAB_PANE,
        tabStyle: _Dialog2["default"].TABS,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].Tab, {
          title: "Create",
          style: TS.TAB,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListCreatePane["default"], {
            store: store,
            inputStyle: TS.INPUT,
            btStyle: TS.BT.FLAT_ROOT,
            actionCompleted: EDIT_WATCH_COMPLETED,
            actionFailed: EDIT_WATCH_FAILED,
            forActionType: CREATE_LIST,
            msgOnNotSelect: notSelected,
            msgOnIsEmptyName: emptyName,
            onCreate: createList,
            onClose: onClose
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].Tab, {
          title: "Rename",
          style: TS.TAB,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListEditPane["default"], {
            store: store,
            inputStyle: TS.INPUT,
            btStyle: TS.BT.FLAT_ROOT,
            actionCompleted: EDIT_WATCH_COMPLETED,
            actionFailed: EDIT_WATCH_FAILED,
            forActionType: RENAME_LIST,
            msgOnNotSelect: notSelected,
            msgOnIsEmptyName: emptyName,
            onRename: renameList,
            onClose: onClose
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].Tab, {
          title: "Delete",
          style: TS.TAB,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListDeletePane["default"], {
            store: store,
            inputStyle: TS.INPUT,
            btStyle: TS.BT.FLAT_ROOT,
            actionCompleted: EDIT_WATCH_COMPLETED,
            actionFailed: EDIT_WATCH_FAILED,
            forActionType: DELETE_LIST,
            msgOnNotSelect: notSelected,
            onDelete: deleteList,
            onClose: onClose
          })
        })]
      })
    });
  };

  return EditListDialog;
}(_react.Component);

var _default = (0, _withTheme["default"])(EditListDialog);

exports["default"] = _default;
//# sourceMappingURL=EditListDialog.js.map