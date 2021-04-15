"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _has = _interopRequireDefault(require("../has"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

var ButtonClear = _Comp["default"].ButtonClear,
    FlatButton = _Comp["default"].FlatButton,
    TextField = _Comp["default"].TextField;
var S = {
  TF_LABEL: {
    top: 28
  },
  TF_INPUT: {
    fontSize: '24px'
  },
  BT_CLEAR: {
    position: 'relative',
    top: 18,
    left: 6
  },
  BT_LOAD: {
    position: 'relative',
    top: 22,
    marginLeft: 8
  }
};

var InputWord = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(InputWord, _Component);

  function InputWord() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._hClear = function () {
      if (_this.iWord) {
        _this.iWord.setValue('');
      }
    };

    _this._ref = function (n) {
      return _this.iWord = n;
    };

    return _this;
  }

  var _proto = InputWord.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.iWord) {
      this.iWord.focus();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        TS = _this$props.TS,
        initValue = _this$props.initValue,
        onEnter = _this$props.onEnter,
        _elBt = _has["default"].HAS_TOUCH ? /*#__PURE__*/(0, _jsxRuntime.jsx)(ButtonClear, {
      style: S.BT_CLEAR,
      onClick: this._hClear
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(FlatButton, {
      caption: "Load",
      tabIndex: -1,
      rootStyle: (0, _extends2["default"])({}, TS.BT.FLAT, S.BT_LOAD),
      clDiv: TS.BT.CL_FLAT_DIV,
      isPrimary: true,
      onClick: onEnter
    });

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(TextField, {
        ref: this._ref,
        rootStyle: TS.INPUT_ROOT,
        labelStyle: S.TF_LABEL,
        inputStyle: S.TF_INPUT,
        caption: "Word",
        accessKey: "W",
        spellCheck: true,
        initValue: initValue,
        onEnter: onEnter
      }), _elBt]
    });
  };

  _proto.getValue = function getValue() {
    return this.iWord ? this.iWord.getValue() : void 0;
  };

  return InputWord;
}(_react.Component);

InputWord.defaultProps = {
  initValue: 'example'
};
var _default = InputWord;
exports["default"] = _default;
//# sourceMappingURL=InputWord.js.map