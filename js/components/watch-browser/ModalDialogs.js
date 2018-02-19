'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EditGroupDialog = require('./EditGroupDialog');

var _EditGroupDialog2 = _interopRequireDefault(_EditGroupDialog);

var _EditListDialog = require('./EditListDialog');

var _EditListDialog2 = _interopRequireDefault(_EditListDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import LoadItem from './LoadItemDialog';
var ModalDialogs = {
  //LoadItem,
  EditGroup: _EditGroupDialog2.default,
  EditList: _EditListDialog2.default
};

exports.default = ModalDialogs;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\watch-browser\ModalDialogs.js.map