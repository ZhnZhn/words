"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _Comp = _interopRequireDefault(require("../../Comp"));
var _jsxRuntime = require("react/jsx-runtime");
var COLOR_FILL_OPEN = "#80c040",
  S_OPEN_CLOSE = {
    marginLeft: -16
  },
  S_OPEN_CLOSE_CAPTION = {
    color: '#0c7abf'
  },
  S_OPEN_CLOSE_CHILDREN = {
    paddingLeft: 12,
    paddingRight: 16
  },
  S_LIST = {
    lineHeight: 1.5,
    paddingBottom: 6
  },
  S_LIST_CAPTION = {
    color: '#0c7abf',
    paddingRight: 8,
    fontWeight: 800
  };
var _isItems = function _isItems(items) {
  return items && items.length !== 0;
};
var _crCaption = function _crCaption(isCount, caption, items) {
  return isCount ? caption + " (" + items.length + ")" : caption;
};
var WordOf = function WordOf(_ref) {
  var caption = _ref.caption,
    items = _ref.items,
    _ref$isCount = _ref.isCount,
    isCount = _ref$isCount === void 0 ? false : _ref$isCount,
    fillOpen = _ref.fillOpen,
    captionStyle = _ref.captionStyle,
    childrenStyle = _ref.childrenStyle;
  return _isItems(items) ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].OpenClose, {
    isClose: true,
    caption: _crCaption(isCount, caption, items),
    style: S_OPEN_CLOSE,
    fillOpen: COLOR_FILL_OPEN,
    captionStyle: S_OPEN_CLOSE_CAPTION,
    childrenStyle: S_OPEN_CLOSE_CHILDREN,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ListSpan, {
      caption: "",
      rootStyle: S_LIST,
      captionStyle: S_LIST_CAPTION,
      items: items
    })
  }) : null;
};
var _default = WordOf;
exports["default"] = _default;
//# sourceMappingURL=WordOf.js.map