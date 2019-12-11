"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));

var _TextField = _interopRequireDefault(require("../zhn-m-input/TextField"));

var CL_BT = 'bt-input-word';
var S = {
  TF_LABEL: {
    top: '28px'
  },
  TF_INPUT: {
    fontSize: '24px'
  }
};

var InputWord =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(InputWord, _Component);

  function InputWord() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

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
        onEnter = _this$props.onEnter;
    return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_TextField["default"], {
      ref: this._ref,
      rootStyle: TS.INPUT_ROOT,
      labelStyle: S.TF_LABEL,
      inputStyle: S.TF_INPUT,
      caption: "Word",
      accessKey: "W",
      spellCheck: true,
      initValue: initValue,
      onEnter: onEnter
    }), _react["default"].createElement(_Atoms["default"].RaisedButton, {
      className: CL_BT,
      rootStyle: TS.BT.RAISED_ROOT,
      clDiv: TS.BT.CL_RAISED_DIV,
      caption: "Load",
      tabIndex: -1 //timeout={3000}
      ,
      isPrimary: true,
      onClick: onEnter
    }));
  };

  _proto.getValue = function getValue() {
    return this.iWord ? this.iWord.getValue() : undefined;
  };

  return InputWord;
}(_react.Component);

InputWord.defaultProps = {
  initValue: 'example'
};
var _default = InputWord;
exports["default"] = _default;
//# sourceMappingURL=InputWord.js.map