"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _a11yFn = require("../a11yFn");
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
      item
      /*
      onDragStart,
      onDragEnter,
      onDragOver,
      onDragLeave,
      onDrop
      */
    } = props,
    _draggableOptions = (0, _useDnDHandlers.default)(props),
    _onClick = () => props.onClick(item);
  return (0, _jsxRuntime.jsxs)("div", {
    ...(0, _a11yFn.crMenuItemRole)(_onClick, "0"),
    className: props.className,
    style: S_ITEM_DIV,
    ..._draggableOptions,
    children: [(0, _jsxRuntime.jsx)("span", {
      style: S_ITEM_SPAN,
      children: (item || {}).caption
    }), props.isDraggable ? (0, _jsxRuntime.jsx)(_SvgClose.default, {
      style: S_SVG_CLOSE,
      onClose: evt => props.onClose(props.option, evt)
    }) : null]
  });
};
var _default = exports.default = WatchItem;
//# sourceMappingURL=WatchItem.js.map