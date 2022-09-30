"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _useDnDHandlers = _interopRequireDefault(require("../hooks/useDnDHandlers"));

var _SvgClose = _interopRequireDefault(require("../zhn-atoms/SvgClose"));

var _jsxRuntime = require("react/jsx-runtime");

var S_ITEM_DIV = {
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

var _isKeyEnter = function _isKeyEnter(_ref) {
  var keyCode = _ref.keyCode;
  return keyCode === 13;
};

var WatchItem = function WatchItem(props) {
  var item = props.item,
      className = props.className,
      isDraggable = props.isDraggable,
      option = props.option,
      onClick = props.onClick,
      _onClose = props.onClose,
      _draggableOptions = (0, _useDnDHandlers["default"])(props),
      caption = item.caption,
      _onClick = function _onClick() {
    return onClick(item);
  },
      _onKeyDown = function _onKeyDown(evt) {
    if (_isKeyEnter(evt)) {
      _onClick();
    }
  },
      _btClose = isDraggable ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose["default"], {
    style: S_SVG_CLOSE,
    onClose: function onClose(evt) {
      return _onClose(option, evt);
    }
  }) : null;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({
    tabIndex: 0,
    role: "menuitem",
    className: className,
    style: S_ITEM_DIV,
    onClick: _onClick,
    onKeyDown: _onKeyDown
  }, _draggableOptions, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_ITEM_SPAN,
      children: caption
    }), _btClose]
  }));
};

var _default = WatchItem;
exports["default"] = _default;
//# sourceMappingURL=WatchItem.js.map