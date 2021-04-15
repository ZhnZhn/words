"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _SvgClose = _interopRequireDefault(require("../zhn-atoms/SvgClose"));

var _jsxRuntime = require("react/jsx-runtime");

var STYLE = {
  ITEM_DIV: {
    position: 'relative',
    paddingRight: 40,
    lineHeight: 1.4,
    paddingTop: 5,
    paddingBottom: 5
  },
  ITEM_SPAN: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '100%',
    maxWidth: 250,
    paddingLeft: 8,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  SVG_CLOSE: {
    position: 'absolute',
    right: 0
  }
};

var WatchItem = function WatchItem(props) {
  var item = props.item,
      className = props.className,
      isModeEdit = props.isModeEdit,
      option = props.option,
      onClick = props.onClick,
      onClose = props.onClose,
      onDragStart = props.onDragStart,
      onDragEnter = props.onDragEnter,
      onDragOver = props.onDragOver,
      onDragLeave = props.onDragLeave,
      onDrop = props.onDrop,
      caption = item.caption,
      _btClose = isModeEdit ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose["default"], {
    style: STYLE.SVG_CLOSE,
    onClose: onClose.bind(null, option)
  }) : null;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: className,
    style: STYLE.ITEM_DIV,
    onClick: onClick.bind(null, item) //onClick={ComponentActions.showModalDialog.bind(null, ModalDialog.LOAD_ITEM, item)}
    ,
    draggable: isModeEdit,
    onDragStart: isModeEdit && onDragStart.bind(null, option),
    onDrop: isModeEdit && onDrop.bind(null, option),
    onDragOver: isModeEdit && onDragOver,
    onDragEnter: isModeEdit && onDragEnter,
    onDragLeave: isModeEdit && onDragLeave,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: STYLE.ITEM_SPAN,
      children: caption
    }), _btClose]
  });
};

var _default = WatchItem;
exports["default"] = _default;
//# sourceMappingURL=WatchItem.js.map