'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = 'with-scroll';

var ScrollPane = function ScrollPane(_ref) {
   var style = _ref.style,
       _ref$className = _ref.className,
       className = _ref$className === undefined ? "" : _ref$className,
       children = _ref.children;

   var _className = className && className !== CL ? className : CL;
   return _react2.default.createElement(
      'div',
      { className: _className, style: style },
      children
   );
};

exports.default = ScrollPane;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\zhn-atoms\ScrollPane.js.map