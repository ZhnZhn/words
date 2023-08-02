"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DnDListHandlers = require("./dnd-handlers/DnDListHandlers");
var _Comp = _interopRequireDefault(require("../Comp"));
var _WatchItems = _interopRequireDefault(require("./WatchItems"));
var _jsxRuntime = require("preact/jsx-runtime");
const {
    OpenClose2
  } = _Comp.default,
  _isArr = Array.isArray,
  C_FILL_OPEN = '#80c040',
  COLOR_CAPTION = '#9e9e9e',
  S_CAPTION = {
    color: COLOR_CAPTION
  },
  S_LIST_DIV = {
    marginLeft: 8,
    paddingLeft: 12,
    borderLeft: "3px solid " + COLOR_CAPTION,
    lineHeight: 2.5
  },
  S_ITEM_NOT_SELECTED = {
    marginRight: 10
  };
const WatchLists = _ref => {
  let {
    isModeEdit,
    TS,
    groupCaption,
    lists,
    onClickItem
  } = _ref;
  return _isArr(lists) ? lists.map(_ref2 => {
    let {
      caption,
      items
    } = _ref2;
    return (0, _jsxRuntime.jsx)(OpenClose2, {
      fillOpen: C_FILL_OPEN,
      style: {
        ...S_LIST_DIV,
        ...TS.OPEN_CLOSE
      },
      styleCaption: S_CAPTION,
      styleNotSelected: S_ITEM_NOT_SELECTED,
      caption: caption,
      isDraggable: isModeEdit,
      option: {
        groupCaption,
        caption
      },
      onDragStart: _DnDListHandlers.hDragStartList,
      onDragEnter: _DnDListHandlers.hDragEnterList,
      onDragOver: _DnDListHandlers.hDragOverList,
      onDragLeave: _DnDListHandlers.hDragLeaveList,
      onDrop: _DnDListHandlers.hDropList,
      children: (0, _jsxRuntime.jsx)(_WatchItems.default, {
        isModeEdit: isModeEdit,
        items: items,
        groupCaption: groupCaption,
        listCaption: caption,
        onClickItem: onClickItem
      })
    }, caption);
  }) : null;
};
var _default = WatchLists;
exports.default = _default;
//# sourceMappingURL=WatchLists.js.map