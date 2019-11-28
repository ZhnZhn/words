'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListDiv = function ListDiv(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === undefined ? [] : _ref$items,
      itemStyle = _ref.itemStyle;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    items.map(function (str, index) {
      return _react2.default.createElement(
        'div',
        { key: index, style: itemStyle },
        str
      );
    })
  );
};

exports.default = ListDiv;
//# sourceMappingURL=ListDiv.js.map