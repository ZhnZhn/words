'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from 'prop-types'

var CL_BT = 'bt-raised';
var CL_BT_SPAN = 'bt-raised__span';

var S = {
  PRIMARY_SPAN: {
    color: '#80c040'
  }
};

var RaisedButton = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(RaisedButton, _Component);

  function RaisedButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RaisedButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RaisedButton.__proto__ || Object.getPrototypeOf(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this._refNode = function (node) {
      return _this.rootNode = node;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /*
  static propTypes = {
    className: PropTypes.string,
    rootStyle: PropTypes.object,
    clDiv: PropTypes.string,
    caption: PropTypes.string,
    tabIndex: PropTypes.number,
    isPrimary: PropTypes.bool
    onClick: PropTypes.func
  }
  */

  (0, _createClass3.default)(RaisedButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          rootStyle = _props.rootStyle,
          clDiv = _props.clDiv,
          caption = _props.caption,
          tabIndex = _props.tabIndex,
          isPrimary = _props.isPrimary,
          onClick = _props.onClick,
          _btCl = CL_BT + ' ' + className,
          _spanStyle = isPrimary ? S.PRIMARY_SPAN : undefined;

      return _react2.default.createElement(
        'button',
        {
          ref: this._refNode,
          tabIndex: tabIndex,
          className: _btCl,
          style: rootStyle,
          onClick: onClick
        },
        _react2.default.createElement(
          'div',
          { className: clDiv },
          _react2.default.createElement(
            'span',
            {
              className: CL_BT_SPAN,
              style: _spanStyle
            },
            caption
          )
        )
      );
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.rootNode.focus();
    }
  }]);
  return RaisedButton;
}(_react.Component), _class.defaultProps = {
  className: '',
  tabIndex: 0,
  onClick: function onClick() {}
}, _temp2);
exports.default = RaisedButton;
//# sourceMappingURL=RaisedButton.js.map