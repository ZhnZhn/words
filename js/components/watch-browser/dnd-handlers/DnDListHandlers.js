"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.hDropList = exports.hDragStartList = exports.hDragOverList = exports.hDragLeaveList = exports.hDragEnterList = void 0;

var _WatchActions = _interopRequireDefault(require("../../../flux/actions/WatchActions"));

var _getTransferData2 = _interopRequireDefault(require("./getTransferData"));

var _WatchDnDConfig = _interopRequireDefault(require("./WatchDnDConfig"));

var _DnDStyleHandlers = require("./DnDStyleHandlers");

var _DnDHandlers = require("./DnDHandlers");

var _crListId = function _crListId(_ref) {
  var groupCaption = _ref.groupCaption,
      caption = _ref.caption;
  return groupCaption + ";" + caption + ";";
};

var hDragStartList = (0, _DnDHandlers.fDragStart)([_WatchDnDConfig["default"].LIST, _WatchDnDConfig["default"].GROUP], _crListId);
exports.hDragStartList = hDragStartList;

var hDropList = function hDropList( //{groupCaption, caption},
options, event) {
  (0, _DnDStyleHandlers.dropWithDnDStyle)(event);

  var _getTransferData = (0, _getTransferData2["default"])(event),
      xType = _getTransferData.xType,
      dragId = _getTransferData.dragId,
      dropId = _crListId(options);

  if (xType === _WatchDnDConfig["default"].LIST) {
    if (dragId === dropId) {
      return;
    } else {
      event.preventDefault();

      _WatchActions["default"].dragDropList({
        dragId: dragId,
        dropId: dropId
      });
    }
  } else if (xType === _WatchDnDConfig["default"].ITEM) {
    event.preventDefault();

    _WatchActions["default"].dragDropItem({
      dragId: dragId,
      dropId: dropId
    });
  }
};

exports.hDropList = hDropList;
var hDragEnterList = (0, _DnDHandlers.fDragEnter)(_WatchDnDConfig["default"].LIST, _WatchDnDConfig["default"].C_LIST_ENTER);
exports.hDragEnterList = hDragEnterList;
var hDragOverList = _DnDHandlers.hDragOver;
exports.hDragOverList = hDragOverList;
var hDragLeaveList = _DnDHandlers.hDragLeave;
exports.hDragLeaveList = hDragLeaveList;
//# sourceMappingURL=DnDListHandlers.js.map