"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Comp = _interopRequireDefault(require("../../Comp"));

var S = {
  FILL_OPEN: "#80c040",
  OC: {
    marginLeft: -16
  },
  OC_CAPTION: {
    color: '#0c7abf'
  },
  OC_CHILDREN: {
    paddingLeft: 12,
    paddingRight: 16
  },
  LIST: {
    lineHeight: 1.5,
    paddingBottom: 6
  },
  LIST_CAPTION: {
    color: '#0c7abf',
    paddingRight: 8,
    fontWeight: 800
  }
};

var _isItems = function _isItems(items) {
  return items && items.length !== 0;
};

var WordOf = function WordOf(_ref) {
  var caption = _ref.caption,
      items = _ref.items,
      _ref$isCount = _ref.isCount,
      isCount = _ref$isCount === void 0 ? false : _ref$isCount,
      fillOpen = _ref.fillOpen,
      captionStyle = _ref.captionStyle,
      childrenStyle = _ref.childrenStyle;

  if (!_isItems(items)) {
    return null;
  }

  var _caption = isCount ? caption + " (" + items.length + ")" : caption;

  return _react["default"].createElement(_Comp["default"].OpenClose, {
    isClose: true,
    caption: _caption,
    style: S.OC,
    fillOpen: S.FILL_OPEN,
    captionStyle: S.OC_CAPTION,
    childrenStyle: S.OC_CHILDREN
  }, _react["default"].createElement(_Comp["default"].ListSpan, {
    caption: "",
    rootStyle: S.LIST,
    captionStyle: S.LIST_CAPTION,
    items: items
  }));
};

var _default = WordOf;
exports["default"] = _default;
//# sourceMappingURL=WordOf.js.map