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

var _SvgCheckBox = require('../zhn-atoms/SvgCheckBox');

var _SvgCheckBox2 = _interopRequireDefault(_SvgCheckBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  ROOT: {
    paddingTop: '6px',
    paddingLeft: '16px'
  },
  CAPTION: {
    display: 'inline-block',
    color: 'grey',
    paddingLeft: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    userSelect: 'none',
    cursor: 'pointer'
  },
  CHECKED: {
    color: 'black'
  }
};
//import PropTypes from "prop-types";


var RowCheckBox = function (_Component) {
  (0, _inherits3.default)(RowCheckBox, _Component);

  /*
  static propTypes = {
    rootStyle : PropTypes.object,
    caption: PropTypes.string,
    initValue: PropTypes.bool,
    onCheck: PropTypes.func,
    onUnCheck: PropTypes.func
  }
  */

  function RowCheckBox(props) {
    (0, _classCallCheck3.default)(this, RowCheckBox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RowCheckBox.__proto__ || Object.getPrototypeOf(RowCheckBox)).call(this));

    _this._handleCheck = function () {
      var onCheck = _this.props.onCheck;

      if (typeof onCheck == 'function') {
        onCheck();
      }
      _this.setState({ isChecked: true });
    };

    _this._handleUnCheck = function () {
      var onUnCheck = _this.props.onUnCheck;

      if (typeof onUnCheck == 'function') {
        onUnCheck();
      }
      _this.setState({ isChecked: false });
    };

    _this._handleToggle = function () {
      var isChecked = _this.state.isChecked;

      if (isChecked) {
        _this._handleUnCheck();
      } else {
        _this._handleCheck();
      }
    };

    _this.state = {
      isChecked: !!props.initValue
    };
    return _this;
  }

  (0, _createClass3.default)(RowCheckBox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          rootStyle = _props.rootStyle,
          caption = _props.caption,
          captionStyle = _props.captionStyle,
          isChecked = this.state.isChecked,
          _style = isChecked ? STYLE.CHECKED : null;

      return _react2.default.createElement(
        'div',
        { style: (0, _extends3.default)({}, STYLE.ROOT, rootStyle) },
        _react2.default.createElement(_SvgCheckBox2.default, {
          value: isChecked,
          onCheck: this._handleCheck,
          onUnCheck: this._handleUnCheck
        }),
        caption && _react2.default.createElement(
          'span',
          {
            style: (0, _extends3.default)({}, STYLE.CAPTION, captionStyle, _style),
            onClick: this._handleToggle
          },
          caption
        )
      );
    }
  }]);
  return RowCheckBox;
}(_react.Component);

exports.default = RowCheckBox;
//# sourceMappingURL=RowCheckBox.js.map