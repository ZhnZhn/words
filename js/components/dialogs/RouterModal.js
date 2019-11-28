'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _r2;

var _Type = require('../../constants/Type');

var _SettingsDialog = require('./SettingsDialog');

var _SettingsDialog2 = _interopRequireDefault(_SettingsDialog);

var _AlertDialog = require('./AlertDialog');

var _AlertDialog2 = _interopRequireDefault(_AlertDialog);

var _AlertDialog3 = require('./AlertDialog2');

var _AlertDialog4 = _interopRequireDefault(_AlertDialog3);

var _MsgDialog = require('./MsgDialog');

var _MsgDialog2 = _interopRequireDefault(_MsgDialog);

var _EditGroupDialog = require('../watch-browser/EditGroupDialog');

var _EditGroupDialog2 = _interopRequireDefault(_EditGroupDialog);

var _EditListDialog = require('../watch-browser/EditListDialog');

var _EditListDialog2 = _interopRequireDefault(_EditListDialog);

var _AddToWatchDialog = require('../watch-browser/AddToWatchDialog');

var _AddToWatchDialog2 = _interopRequireDefault(_AddToWatchDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _r = (_r2 = {}, (0, _defineProperty3.default)(_r2, _Type.ModalDialog.SETTINGS, _SettingsDialog2.default), (0, _defineProperty3.default)(_r2, _Type.ModalDialog.ALERT_DIALOG, _AlertDialog2.default), (0, _defineProperty3.default)(_r2, _Type.ModalDialog.EXCEPTION, _AlertDialog4.default), (0, _defineProperty3.default)(_r2, _Type.ModalDialog.MSG, _MsgDialog2.default), (0, _defineProperty3.default)(_r2, _Type.ModalDialog.EDIT_WATCH_GROUP, _EditGroupDialog2.default), (0, _defineProperty3.default)(_r2, _Type.ModalDialog.EDIT_WATCH_LIST, _EditListDialog2.default), (0, _defineProperty3.default)(_r2, _Type.ModalDialog.ADD_TO_WATCH, _AddToWatchDialog2.default), _r2);

var RouterModal = {
  getDialog: function getDialog(type) {
    return Promise.resolve(_r[type]);
  }
};

exports.default = RouterModal;
//# sourceMappingURL=RouterModal.js.map