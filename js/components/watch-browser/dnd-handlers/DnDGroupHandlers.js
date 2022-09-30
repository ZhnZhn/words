"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.hDropGroup = exports.hDragStartGroup = exports.hDragOverGroup = exports.hDragLeaveGroup = exports.hDragEnterGroup = void 0;

var _WatchActions = _interopRequireDefault(require("../../../flux/actions/WatchActions"));

var _getTransferData2 = _interopRequireDefault(require("./getTransferData"));

var _WatchDnDConfig = _interopRequireDefault(require("./WatchDnDConfig"));

var _DnDStyleHandlers = require("./DnDStyleHandlers");

var _DnDHandlers = require("./DnDHandlers");

var _crGroupId = function _crGroupId(_ref) {
  var caption = _ref.caption;
  return caption + ";";
};

var hDragStartGroup = (0, _DnDHandlers.fDragStart)([_WatchDnDConfig["default"].GROUP], _crGroupId);
exports.hDragStartGroup = hDragStartGroup;

var hDropGroup = function hDropGroup( //{ caption },
options, event) {
  (0, _DnDStyleHandlers.dropWithDnDStyle)(event);

  var _getTransferData = (0, _getTransferData2["default"])(event),
      xType = _getTransferData.xType,
      dragId = _getTransferData.dragId,
      dropId = _crGroupId(options);

  if (xType === _WatchDnDConfig["default"].GROUP) {
    if (dragId === dropId) {
      return;
    } else {
      event.preventDefault();

      _WatchActions["default"].dragDropGroup({
        dragId: dragId,
        dropId: dropId
      });
    }
  } else if (xType === _WatchDnDConfig["default"].LIST) {
    event.preventDefault();

    _WatchActions["default"].dragDropList({
      dragId: dragId,
      dropId: dropId
    });
  }
};

exports.hDropGroup = hDropGroup;
var hDragEnterGroup = (0, _DnDHandlers.fDragEnter)(_WatchDnDConfig["default"].GROUP, _WatchDnDConfig["default"].C_GROUP_ENTER);
exports.hDragEnterGroup = hDragEnterGroup;
var hDragOverGroup = _DnDHandlers.hDragOver;
exports.hDragOverGroup = hDragOverGroup;
var hDragLeaveGroup = _DnDHandlers.hDragLeave;
exports.hDragLeaveGroup = hDragLeaveGroup;
//# sourceMappingURL=DnDGroupHandlers.js.map