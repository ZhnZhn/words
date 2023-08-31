"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));
var _WatchActions = require("../../flux/actions/WatchActions");
var _watchListStore = require("../../flux/watch-list/watchListStore");
var _MsgWatch = require("../../constants/MsgWatch");
var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));
var _TabPane = _interopRequireDefault(require("../zhn-tabpane/TabPane"));
var _Tab = _interopRequireDefault(require("../zhn-tabpane/Tab"));
var _ListCreatePane = _interopRequireDefault(require("./ListCreatePane"));
var _ListEditPane = _interopRequireDefault(require("./ListEditPane"));
var _ListDeletePane = _interopRequireDefault(require("./ListDeletePane"));
var _Dialog = require("./Dialog.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const EditListDialog = (0, _memoIsShow.default)(_ref => {
  let {
    isShow,
    store,
    onClose
  } = _ref;
  return (0, _jsxRuntime.jsx)(_ModalDialog.default, {
    isShow: isShow,
    isWithButton: false,
    style: _Dialog.S_DIALOG,
    caption: "Watch Lists Edit",
    onClose: onClose,
    children: (0, _jsxRuntime.jsxs)(_TabPane.default, {
      id: "eld",
      width: _Dialog.TAB_PANE_WIDTH,
      tabStyle: _Dialog.S_TABS,
      children: [(0, _jsxRuntime.jsx)(_Tab.default, {
        title: "Create",
        children: (0, _jsxRuntime.jsx)(_ListCreatePane.default, {
          forActionType: _WatchActions.WAT_CREATE_LIST,
          msgOnNotSelect: _MsgWatch.notSelected,
          msgOnIsEmptyName: _MsgWatch.emptyName,
          onCreate: _watchListStore.crList,
          onClose: onClose
        })
      }), (0, _jsxRuntime.jsx)(_Tab.default, {
        title: "Rename",
        children: (0, _jsxRuntime.jsx)(_ListEditPane.default, {
          getWatchListsByGroup: _watchListStore.getWatchListsByGroup,
          forActionType: _WatchActions.WAT_RENAME_LIST,
          msgOnNotSelect: _MsgWatch.notSelected,
          msgOnIsEmptyName: _MsgWatch.emptyName,
          onRename: _watchListStore.renList,
          onClose: onClose
        })
      }), (0, _jsxRuntime.jsx)(_Tab.default, {
        title: "Delete",
        children: (0, _jsxRuntime.jsx)(_ListDeletePane.default, {
          getWatchListsByGroup: _watchListStore.getWatchListsByGroup,
          forActionType: _WatchActions.WAT_DELETE_LIST,
          msgOnNotSelect: _MsgWatch.notSelected,
          onDelete: _watchListStore.delList,
          onClose: onClose
        })
      })]
    })
  });
});
var _default = EditListDialog;
exports.default = _default;
//# sourceMappingURL=EditListDialog.js.map