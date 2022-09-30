"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _DnDGroupHandlers = require("./dnd-handlers/DnDGroupHandlers");

var _Comp = _interopRequireDefault(require("../Comp"));

var _WatchLists = _interopRequireDefault(require("./WatchLists"));

var _jsxRuntime = require("react/jsx-runtime");

var OpenClose2 = _Comp["default"].OpenClose2,
    _isArr = Array.isArray,
    S_GROUP_DIV = {
  lineHeight: 2.5
},
    S_CAPTION = {
  color: '#9e9e9e'
};

var WatchGroups = function WatchGroups(_ref) {
  var isModeEdit = _ref.isModeEdit,
      TS = _ref.TS,
      groups = _ref.groups,
      onClickItem = _ref.onClickItem;
  return _isArr(groups) ? groups.map(function (_ref2) {
    var caption = _ref2.caption,
        lists = _ref2.lists;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(OpenClose2, {
      style: (0, _extends2["default"])({}, S_GROUP_DIV, TS.OPEN_CLOSE),
      styleCaption: S_CAPTION,
      caption: caption,
      isDraggable: isModeEdit,
      option: {
        caption: caption
      },
      onDragStart: _DnDGroupHandlers.hDragStartGroup,
      onDragEnter: _DnDGroupHandlers.hDragEnterGroup,
      onDragOver: _DnDGroupHandlers.hDragOverGroup,
      onDragLeave: _DnDGroupHandlers.hDragLeaveGroup,
      onDrop: _DnDGroupHandlers.hDropGroup,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_WatchLists["default"], {
        isModeEdit: isModeEdit,
        TS: TS,
        groupCaption: caption,
        lists: lists,
        onClickItem: onClickItem
      })
    }, caption);
  }) : null;
};

var _default = WatchGroups;
exports["default"] = _default;
//# sourceMappingURL=WatchGroups.js.map