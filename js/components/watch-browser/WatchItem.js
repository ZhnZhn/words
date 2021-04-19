"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _isKeyEnter = function _isKeyEnter(_ref) {
  var keyCode = _ref.keyCode;
  return keyCode === 13;
};

var WatchItem = function WatchItem(_ref2) {
  var item = _ref2.item,
      className = _ref2.className,
      isModeEdit = _ref2.isModeEdit,
      option = _ref2.option,
      onClick = _ref2.onClick,
      _onClose = _ref2.onClose,
      onDragStart = _ref2.onDragStart,
      onDragEnter = _ref2.onDragEnter,
      onDragOver = _ref2.onDragOver,
      onDragLeave = _ref2.onDragLeave,
      onDrop = _ref2.onDrop;

  var caption = item.caption,
      _onClick = function _onClick() {
    return onClick(item);
  },
      _onKeyDown = function _onKeyDown(event) {
    if (_isKeyEnter(event)) {
      _onClick();
    }
  },
      _handlers = isModeEdit ? {
    onDragStart: onDragStart.bind(null, option),
    onDrop: onDrop.bind(null, option),
    onDragOver: onDragOver,
    onDragEnter: onDragEnter,
    onDragLeave: onDragLeave
  } : void 0,
      _btClose = isModeEdit ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose["default"], {
    style: STYLE.SVG_CLOSE,
    onClose: function onClose() {
      return _onClose(option);
    }
  }) : null;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({
    tabIndex: 0,
    role: "menuitem",
    className: className,
    style: STYLE.ITEM_DIV,
    onClick: _onClick,
    onKeyDown: _onKeyDown,
    draggable: isModeEdit
  }, _handlers, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: STYLE.ITEM_SPAN,
      children: caption
    }), _btClose]
  }));
};

var _default = WatchItem;
exports["default"] = _default;
//# sourceMappingURL=WatchItem.js.map