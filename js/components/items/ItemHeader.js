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

var _Comp = require('../Comp');

var _Comp2 = _interopRequireDefault(_Comp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_NOT_SELECTED = "not-selected";

var T = {
  A: "Click to open add to watch list dialog"
};

var _fnNoop = function _fnNoop() {};

var ItemHeader = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(ItemHeader, _Component);

  function ItemHeader() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ItemHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ItemHeader.__proto__ || Object.getPrototypeOf(ItemHeader)).call.apply(_ref, [this].concat(args))), _this), _this._hAddToWatch = function (event) {
      event.stopPropagation();
      var _this$props = _this.props,
          caption = _this$props.caption,
          onAddToWatch = _this$props.onAddToWatch;

      onAddToWatch({ caption: caption });
    }, _this._hClose = function (event) {
      event.stopPropagation();
      _this.props.onClose();
    }, _this._hKeyDown = function (event) {
      var keyCode = event.keyCode,
          _this$props2 = _this.props,
          onClick = _this$props2.onClick,
          onClose = _this$props2.onClose;

      if (keyCode === 13) {
        onClick();
      } else if (keyCode === 46) {
        onClose();
      }
    }, _this._refRoot = function (node) {
      return _this.rootNode = node;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  /*
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    captionStyle: PropTypes.object,
    svgCloseStyle: PropTypes.object,
      caption: PropTypes.string,
      onClick: PropTypes.func,
    onClose: PropTypes.func,
    onAddToWatch: PropTypes.func
  }
  */

  (0, _createClass3.default)(ItemHeader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.rootNode) {
        this.rootNode.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          captionStyle = _props.captionStyle,
          svgCloseStyle = _props.svgCloseStyle,
          title = _props.title,
          onClick = _props.onClick;

      return _react2.default.createElement(
        'div',
        {
          tabIndex: '0',
          role: 'button',
          ref: this._refRoot,
          className: className,
          style: style,
          onClick: onClick,
          onKeyDown: this._hKeyDown
        },
        _react2.default.createElement(
          'span',
          {
            className: CL_NOT_SELECTED,
            style: captionStyle
          },
          title
        ),
        _react2.default.createElement(_Comp2.default.CircleButton, {
          caption: 'A',
          title: T.A,
          onClick: this._hAddToWatch
        }),
        _react2.default.createElement(_Comp2.default.SvgClose, {
          tabIndex: '-1',
          style: svgCloseStyle,
          onClose: this._hClose
        })
      );
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.rootNode.focus();
    }
  }]);
  return ItemHeader;
}(_react.Component), _class.defaultProps = {
  onClick: _fnNoop,
  onClose: _fnNoop,
  onAddToWatch: _fnNoop
}, _temp2);
exports.default = ItemHeader;
//# sourceMappingURL=ItemHeader.js.map