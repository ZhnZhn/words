"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.hDropItem = exports.hDragStartItem = exports.hDragOverItem = exports.hDragLeaveItem = exports.hDragEnterItem = void 0;

var _WatchActions = require("../../../flux/actions/WatchActions");

var _getTransferData2 = _interopRequireDefault(require("./getTransferData"));

var _WatchDnDConfig = _interopRequireDefault(require("./WatchDnDConfig"));

var _DnDStyleHandlers = require("./DnDStyleHandlers");

var _DnDHandlers = require("./DnDHandlers");

var _crItemId = function _crItemId(_ref) {
  var groupCaption = _ref.groupCaption,
      listCaption = _ref.listCaption,
      caption = _ref.caption;
  return groupCaption + ";" + listCaption + ";" + caption;
};

var hDragStartItem = (0, _DnDHandlers.fDragStart)([_WatchDnDConfig["default"].ITEM, _WatchDnDConfig["default"].LIST], _crItemId);
exports.hDragStartItem = hDragStartItem;

var hDropItem = function hDropItem( //{groupCaption, listCaption, caption},
options, event) {
  (0, _DnDStyleHandlers.dropWithDnDStyle)(event);

  var _getTransferData = (0, _getTransferData2["default"])(event),
      xType = _getTransferData.xType,
      dragId = _getTransferData.dragId,
      dropId = _crItemId(options);

  if (xType === _WatchDnDConfig["default"].ITEM) {
    if (dragId === dropId) {
      return;
    } else {
      event.preventDefault();

      _WatchActions.WatchActions.dragDropItem({
        dragId: dragId,
        dropId: dropId
      });
    }
  }
};

exports.hDropItem = hDropItem;
var hDragEnterItem = (0, _DnDHandlers.fDragEnter)(_WatchDnDConfig["default"].ITEM, _WatchDnDConfig["default"].C_LIST_ENTER);
exports.hDragEnterItem = hDragEnterItem;
var hDragOverItem = _DnDHandlers.hDragOver;
exports.hDragOverItem = hDragOverItem;
var hDragLeaveItem = _DnDHandlers.hDragLeave;
exports.hDragLeaveItem = hDragLeaveItem;
//# sourceMappingURL=DnDItemHandlers.js.map