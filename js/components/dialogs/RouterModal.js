"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Type = require("../../constants/Type");

var _SettingsDialog = _interopRequireDefault(require("./SettingsDialog"));

var _AlertDialog = _interopRequireDefault(require("./AlertDialog"));

var _AlertDialog2 = _interopRequireDefault(require("./AlertDialog2"));

var _MsgDialog = _interopRequireDefault(require("./MsgDialog"));

var _EditGroupDialog = _interopRequireDefault(require("../watch-browser/EditGroupDialog"));

var _EditListDialog = _interopRequireDefault(require("../watch-browser/EditListDialog"));

var _AddToWatchDialog = _interopRequireDefault(require("../watch-browser/AddToWatchDialog"));

var _r2;

var _r = (_r2 = {}, _r2[_Type.MD_SETTINGS] = _SettingsDialog["default"], _r2[_Type.MD_ALERT_DIALOG] = _AlertDialog["default"], _r2[_Type.MD_EXCEPTION] = _AlertDialog2["default"], _r2[_Type.MD_MSG] = _MsgDialog["default"], _r2[_Type.MD_EDIT_WATCH_GROUP] = _EditGroupDialog["default"], _r2[_Type.MD_EDIT_WATCH_LIST] = _EditListDialog["default"], _r2[_Type.MD_ADD_TO_WATCH] = _AddToWatchDialog["default"], _r2);

var RouterModal = {
  getDialog: function getDialog(type) {
    return Promise.resolve(_r[type]);
  }
};
var _default = RouterModal;
exports["default"] = _default;
//# sourceMappingURL=RouterModal.js.map