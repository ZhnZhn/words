'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Atoms = require('../zhn-atoms/Atoms');

var _Atoms2 = _interopRequireDefault(_Atoms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  CAPTION: {
    color: '#0c7abf',
    paddingRight: '8px',
    fontWeight: 'bold'
  }
};

var Nyms = function Nyms(_ref) {
  var caption = _ref.caption,
      items = _ref.items;

  if (!(items && items.length !== 0)) {
    return null;
  }

  return _react2.default.createElement(_Atoms2.default.ListSpan, {
    caption: caption,
    captionStyle: S.CAPTION,
    items: items
  });
};

exports.default = Nyms;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\items\Nyms.js.map