"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _OpenClose = _interopRequireDefault(require("../../zhn-atoms/OpenClose"));
var _ListSpan = _interopRequireDefault(require("../../zhn-atoms/ListSpan"));
var _jsxRuntime = require("react/jsx-runtime");
const COLOR_FILL_OPEN = "#80c040",
  S_OPEN_CLOSE = {
    marginLeft: -16
  },
  S_OPEN_CLOSE_CAPTION = {
    color: '#0c7abf'
  },
  S_OPEN_CLOSE_CHILDREN = {
    marginLeft: -6,
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
const _isItems = items => items && items.length !== 0;
const _crCaption = (isCount, caption, items) => isCount ? caption + " (" + items.length + ")" : caption;
const WordOf = _ref => {
  let {
    caption,
    items,
    isCount = false,
    fillOpen,
    captionStyle,
    childrenStyle
  } = _ref;
  return _isItems(items) ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_OpenClose.default, {
    isClose: true,
    caption: _crCaption(isCount, caption, items),
    style: S_OPEN_CLOSE,
    fillOpen: COLOR_FILL_OPEN,
    captionStyle: S_OPEN_CLOSE_CAPTION,
    childrenStyle: S_OPEN_CLOSE_CHILDREN,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListSpan.default, {
      caption: "",
      style: S_LIST,
      captionStyle: S_LIST_CAPTION,
      items: items
    })
  }) : null;
};
var _default = WordOf;
exports.default = _default;
//# sourceMappingURL=WordOf.js.map