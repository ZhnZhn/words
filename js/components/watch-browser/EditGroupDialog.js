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
var _GroupAddPane = _interopRequireDefault(require("./GroupAddPane"));
var _GroupEditPane = _interopRequireDefault(require("./GroupEditPane"));
var _GroupDeletePane = _interopRequireDefault(require("./GroupDeletePane"));
var _Dialog = require("./Dialog.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const EditGroupDialog = (0, _memoIsShow.default)(_ref => {
  let {
    isShow,
    onClose
  } = _ref;
  return (0, _jsxRuntime.jsx)(_ModalDialog.default, {
    isShow: isShow,
    isWithButton: false,
    style: _Dialog.S_DIALOG,
    caption: "Watch Groups Edit",
    onClose: onClose,
    children: (0, _jsxRuntime.jsxs)(_TabPane.default, {
      id: "egd",
      width: _Dialog.TAB_PANE_WIDTH,
      tabStyle: _Dialog.S_TABS,
      children: [(0, _jsxRuntime.jsx)(_Tab.default, {
        title: "Create",
        children: (0, _jsxRuntime.jsx)(_GroupAddPane.default, {
          forActionType: _WatchActions.WAT_CREATE_GROUP,
          msgOnIsEmptyName: _MsgWatch.emptyName,
          onCreate: _watchListStore.crGroup,
          onClose: onClose
        })
      }), (0, _jsxRuntime.jsx)(_Tab.default, {
        title: "Rename",
        children: (0, _jsxRuntime.jsx)(_GroupEditPane.default, {
          forActionType: _WatchActions.WAT_RENAME_GROUP,
          msgOnNotSelect: _MsgWatch.notSelected,
          msgOnIsEmptyName: _MsgWatch.emptyName,
          onRename: _watchListStore.renGroup,
          onClose: onClose
        })
      }), (0, _jsxRuntime.jsx)(_Tab.default, {
        title: "Delete",
        children: (0, _jsxRuntime.jsx)(_GroupDeletePane.default, {
          forActionType: _WatchActions.WAT_DELETE_GROUP,
          msgOnNotSelect: _MsgWatch.notSelected,
          onDelete: _watchListStore.delGroup,
          onClose: onClose
        })
      })]
    })
  });
});
var _default = EditGroupDialog;
exports.default = _default;
//# sourceMappingURL=EditGroupDialog.js.map