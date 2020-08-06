"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Comp = _interopRequireDefault(require("../Comp"));

//import PropTypes from "prop-types";
var CL_DIV = 'bt-flat__div';
var S = {
  ROOT: {
    position: 'relative',
    height: 200
  },
  SECRET: {
    width: 320,
    marginLeft: 12
  },
  BUTTONS: {
    position: 'absolute',
    right: 4,
    bottom: 0,
    cursor: 'default'
  },
  BT_ROOT: {
    color: 'rgb(35, 47, 59)'
  }
};

var CardApiKey = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(CardApiKey, _Component);

  function CardApiKey() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._refInput = function (c) {
      return _this._input = c;
    };

    return _this;
  }

  var _proto = CardApiKey.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        isShow = _this$props.isShow,
        isSelected = _this$props.isSelected,
        style = _this$props.style,
        buttonsStyle = _this$props.buttonsStyle,
        btStyle = _this$props.btStyle,
        onClose = _this$props.onClose,
        onSet = _this$props.onSet;

    if (!(isShow && isSelected)) {
      return null;
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement(_Comp["default"].PasswordField, {
      ref: this._refInput,
      rootStyle: S.SECRET,
      caption: "Words API Key",
      name: "wordsapi",
      maxLength: "50",
      onEnter: onSet
    })), /*#__PURE__*/_react["default"].createElement("div", {
      style: buttonsStyle
    }, /*#__PURE__*/_react["default"].createElement(_Comp["default"].FlatButton, {
      rootStyle: (0, _extends2["default"])({}, S.BT_ROOT, btStyle),
      clDiv: CL_DIV,
      caption: "Set & Close",
      title: "Set & Close Dialog",
      onClick: onSet
    }), /*#__PURE__*/_react["default"].createElement(_Comp["default"].FlatButton, {
      rootStyle: (0, _extends2["default"])({}, S.BT_ROOT, btStyle),
      clDiv: CL_DIV,
      caption: "Close",
      title: "Close Dialog",
      onClick: onClose
    })));
  };

  _proto.getValue = function getValue() {
    return this._input.getValue();
  };

  return CardApiKey;
}(_react.Component);

var _default = CardApiKey;
exports["default"] = _default;
//# sourceMappingURL=CardApiKey.js.map