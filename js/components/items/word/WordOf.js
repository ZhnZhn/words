'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Comp = require('../../Comp');

var _Comp2 = _interopRequireDefault(_Comp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      isCount = _ref$isCount === undefined ? false : _ref$isCount,
      fillOpen = _ref.fillOpen,
      captionStyle = _ref.captionStyle,
      childrenStyle = _ref.childrenStyle;

  if (!_isItems(items)) {
    return null;
  }
  var _caption = isCount ? caption + ' (' + items.length + ')' : caption;
  return _react2.default.createElement(
    _Comp2.default.OpenClose,
    {
      isClose: true,
      caption: _caption,
      style: S.OC,
      fillOpen: S.FILL_OPEN,
      captionStyle: S.OC_CAPTION,
      childrenStyle: S.OC_CHILDREN
    },
    _react2.default.createElement(_Comp2.default.ListSpan, {
      caption: '',
      rootStyle: S.LIST,
      captionStyle: S.LIST_CAPTION,
      items: items
    })
  );
};

exports.default = WordOf;
//# sourceMappingURL=WordOf.js.map