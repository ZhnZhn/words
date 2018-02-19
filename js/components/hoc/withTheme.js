'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withTheme = function withTheme(Comp) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    (0, _inherits3.default)(_class, _Component);

    function _class(props, context) {
      (0, _classCallCheck3.default)(this, _class);
      return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props, context));
    }

    (0, _createClass3.default)(_class, [{
      key: 'render',
      value: function render() {
        var theme = this.context.theme;

        return _react2.default.createElement(Comp, (0, _extends3.default)({}, this.props, {
          theme: theme
        }));
      }
    }]);
    return _class;
  }(_react.Component), _class.contextTypes = {
    theme: _propTypes2.default.object
  }, _temp;
};

exports.default = withTheme;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\hoc\withTheme.js.map