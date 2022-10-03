"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));

var _useTheme = _interopRequireDefault(require("../hoc/useTheme"));

var _Dialog = _interopRequireDefault(require("../dialogs/Dialog.Style"));

var _WatchActions = require("../../flux/actions/WatchActions");

var _MsgWatch = require("../../constants/MsgWatch");

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _TabPane = _interopRequireDefault(require("../zhn-tabpane/TabPane"));

var _Tab = _interopRequireDefault(require("../zhn-tabpane/Tab"));

var _ListCreatePane = _interopRequireDefault(require("./ListCreatePane"));

var _ListEditPane = _interopRequireDefault(require("./ListEditPane"));

var _ListDeletePane = _interopRequireDefault(require("./ListDeletePane"));

var _Dialog2 = require("./Dialog.Style");

var _jsxRuntime = require("react/jsx-runtime");

var createList = _WatchActions.WatchActions.createList,
    renameList = _WatchActions.WatchActions.renameList,
    deleteList = _WatchActions.WatchActions.deleteList;
var EditListDialog = (0, _memoIsShow["default"])(function (_ref) {
  var isShow = _ref.isShow,
      store = _ref.store,
      onClose = _ref.onClose;
  var TS = (0, _useTheme["default"])(_Dialog["default"]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialog["default"], {
    style: (0, _extends2["default"])({}, TS.R_DIALOG, _Dialog2.S_DIALOG),
    captionStyle: TS.BROWSER_CAPTION,
    caption: "Watch Lists Edit",
    isShow: isShow,
    isWithButton: false,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_TabPane["default"], {
      width: _Dialog2.TAB_PANE_WIDTH,
      tabStyle: _Dialog2.S_TABS,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab["default"], {
        title: "Create",
        style: TS.TAB,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListCreatePane["default"], {
          store: store,
          inputStyle: TS.INPUT,
          btStyle: TS.BT.FLAT_ROOT,
          actionCompleted: _WatchActions.WAT_EDIT_WATCH_COMPLETED,
          actionFailed: _WatchActions.WAT_EDIT_WATCH_FAILED,
          forActionType: _WatchActions.WAT_CREATE_LIST,
          msgOnNotSelect: _MsgWatch.notSelected,
          msgOnIsEmptyName: _MsgWatch.emptyName,
          onCreate: createList,
          onClose: onClose
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab["default"], {
        title: "Rename",
        style: TS.TAB,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListEditPane["default"], {
          store: store,
          inputStyle: TS.INPUT,
          btStyle: TS.BT.FLAT_ROOT,
          actionCompleted: _WatchActions.WAT_EDIT_WATCH_COMPLETED,
          actionFailed: _WatchActions.WAT_EDIT_WATCH_FAILED,
          forActionType: _WatchActions.WAT_RENAME_LIST,
          msgOnNotSelect: _MsgWatch.notSelected,
          msgOnIsEmptyName: _MsgWatch.emptyName,
          onRename: renameList,
          onClose: onClose
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab["default"], {
        title: "Delete",
        style: TS.TAB,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListDeletePane["default"], {
          store: store,
          inputStyle: TS.INPUT,
          btStyle: TS.BT.FLAT_ROOT,
          actionCompleted: _WatchActions.WAT_EDIT_WATCH_COMPLETED,
          actionFailed: _WatchActions.WAT_EDIT_WATCH_FAILED,
          forActionType: _WatchActions.WAT_DELETE_LIST,
          msgOnNotSelect: _MsgWatch.notSelected,
          onDelete: deleteList,
          onClose: onClose
        })
      })]
    })
  });
});
var _default = EditListDialog;
exports["default"] = _default;
//# sourceMappingURL=EditListDialog.js.map