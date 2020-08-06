"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _DialogStyles = _interopRequireDefault(require("../styles/DialogStyles"));

//import PropTypes from "prop-types";
var styles = _DialogStyles["default"];
var STYLE = {
  MSG_SPAN: {
    whiteSpace: 'pre',
    fontWeight: 'bold'
  }
};

var ValidationMessages = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ValidationMessages, _Component);

  function ValidationMessages() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._renderValidationMessages = function (validationMessages) {
      return validationMessages.map(function (msg, index) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: styles.validationMessageNumber
        }, index + 1), /*#__PURE__*/_react["default"].createElement("span", {
          style: STYLE.MSG_SPAN
        }, msg));
      });
    };

    return _this;
  }

  var _proto = ValidationMessages.prototype;

  _proto.render = function render() {
    var validationMessages = this.props.validationMessages;
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: styles.validationContainer
    }, this._renderValidationMessages(validationMessages));
  };

  return ValidationMessages;
}(_react.Component);

ValidationMessages.defaultProps = {
  validationMessages: []
};
var _default = ValidationMessages;
exports["default"] = _default;
//# sourceMappingURL=ValidationMessages.js.map