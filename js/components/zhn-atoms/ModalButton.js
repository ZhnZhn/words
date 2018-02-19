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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CaptionInput = require('./CaptionInput');

var _CaptionInput2 = _interopRequireDefault(_CaptionInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_BT = 'bt-flat';
var CL_BT_SPAN = 'bt-flat__span';

var ModalButton = function (_Component) {
  (0, _inherits3.default)(ModalButton, _Component);

  function ModalButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ModalButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ModalButton.__proto__ || Object.getPrototypeOf(ModalButton)).call.apply(_ref, [this].concat(args))), _this), _this._ref = function (n) {
      return _this.rootNode = n;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ModalButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var onReg = this.props.onReg;

      if (typeof onReg === 'function') {
        onReg(this.rootNode);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          rootStyle = _props.rootStyle,
          clDiv = _props.clDiv,
          title = _props.title,
          caption = _props.caption,
          accessKey = _props.accessKey,
          children = _props.children,
          onClick = _props.onClick;

      return _react2.default.createElement(
        'button',
        {
          ref: this._ref,
          className: CL_BT,
          style: rootStyle,
          tabIndex: 0,
          title: title,
          accessKey: accessKey,
          onClick: onClick
        },
        _react2.default.createElement(
          'div',
          { className: clDiv },
          _react2.default.createElement(
            _CaptionInput2.default,
            {
              className: CL_BT_SPAN,
              caption: caption,
              accessKey: accessKey
            },
            children
          )
        )
      );
    }
  }]);
  return ModalButton;
}(_react.Component);

exports.default = ModalButton;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\zhn-atoms\ModalButton.js.map