"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DnDGroupHandlers = require("./dnd-handlers/DnDGroupHandlers");
var _OpenClose = _interopRequireDefault(require("../zhn/OpenClose2"));
var _WatchLists = _interopRequireDefault(require("./WatchLists"));
var _jsxRuntime = require("preact/jsx-runtime");
const _isArr = Array.isArray,
  S_GROUP_DIV = {
    lineHeight: 2.5
  },
  S_CAPTION = {
    color: '#9e9e9e'
  };
const WatchGroups = _ref => {
  let {
    isModeEdit,
    groups,
    onClickItem
  } = _ref;
  return _isArr(groups) ? groups.map(_ref2 => {
    let {
      caption,
      lists
    } = _ref2;
    return (0, _jsxRuntime.jsx)(_OpenClose.default, {
      style: S_GROUP_DIV,
      styleCaption: S_CAPTION,
      caption: caption,
      isDraggable: isModeEdit,
      option: {
        caption
      },
      onDragStart: _DnDGroupHandlers.hDragStartGroup,
      onDragEnter: _DnDGroupHandlers.hDragEnterGroup,
      onDragOver: _DnDGroupHandlers.hDragOverGroup,
      onDragLeave: _DnDGroupHandlers.hDragLeaveGroup,
      onDrop: _DnDGroupHandlers.hDropGroup,
      children: (0, _jsxRuntime.jsx)(_WatchLists.default, {
        isModeEdit: isModeEdit,
        groupCaption: caption,
        lists: lists,
        onClickItem: onClickItem
      })
    }, caption);
  }) : null;
};
var _default = exports.default = WatchGroups;
//# sourceMappingURL=WatchGroups.js.map