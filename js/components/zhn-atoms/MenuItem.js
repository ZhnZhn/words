"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnNoop = function _fnNoop() {};

var MenuItem = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(MenuItem, _Component);

  function MenuItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this._hKeyDown = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 13) {
        _this.props.onClick();
      } else if (keyCode === 27) {
        _this.props.onClose({ target: _this.divNode });
      }
    }, _this._ref = function (n) {
      return _this.divNode = n;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MenuItem, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          caption = _props.caption,
          onClick = _props.onClick;

      return _react2.default.createElement(
        "div",
        {
          role: "button",
          ref: this._ref,
          className: className,
          tabIndex: "0",
          onClick: onClick,
          onKeyDown: this._hKeyDown
        },
        caption
      );
    }
  }, {
    key: "focus",
    value: function focus() {
      this.divNode.focus();
    }
  }]);
  return MenuItem;
}(_react.Component), _class.defaultProps = {
  onClick: _fnNoop,
  onClose: _fnNoop
}, _temp2);
exports.default = MenuItem;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\zhn-atoms\MenuItem.js.map