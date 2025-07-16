"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _fUseKey = require("../hooks/fUseKey");
var _useDnDHandlers = _interopRequireDefault(require("../hooks/useDnDHandlers"));
var _SvgClose = _interopRequireDefault(require("../zhn/SvgClose"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_ITEM_DIV = {
    position: 'relative',
    padding: '5px 40px 5px 0',
    lineHeight: 1.4
  },
  S_ITEM_SPAN = {
    display: 'inline-block',
    width: '100%',
    maxWidth: 250,
    paddingLeft: 8,
    verticalAlign: 'middle',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  S_SVG_CLOSE = {
    position: 'absolute',
    right: 0
  };
const WatchItem = props => {
  const {
      item,
      className,
      isDraggable,
      option,
      onClick,
      onClose
      /*
      onDragStart,
      onDragEnter,
      onDragOver,
      onDragLeave,
      onDrop
      */
    } = props,
    _draggableOptions = (0, _useDnDHandlers.default)(props),
    {
      caption
    } = item,
    _onClick = () => onClick(item),
    _onKeyDown = evt => {
      if ((0, _fUseKey.isKeyEnter)(evt)) {
        _onClick();
      }
    };
  return (0, _jsxRuntime.jsxs)("div", {
    tabIndex: 0,
    role: "menuitem",
    className: className,
    style: S_ITEM_DIV,
    onClick: _onClick,
    onKeyDown: _onKeyDown,
    ..._draggableOptions,
    children: [(0, _jsxRuntime.jsx)("span", {
      style: S_ITEM_SPAN,
      children: caption
    }), isDraggable ? (0, _jsxRuntime.jsx)(_SvgClose.default, {
      style: S_SVG_CLOSE,
      onClose: evt => onClose(option, evt)
    }) : null]
  });
};
var _default = exports.default = WatchItem;
//# sourceMappingURL=WatchItem.js.map