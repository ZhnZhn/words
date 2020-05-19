"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));

var _FlatButton = _interopRequireDefault(require("../zhn-atoms/FlatButton"));

var CL_DIV = 'bt-flat__div';
var S = {
  SELECT: {
    ROOT: {
      width: 280
    }
  },
  BT_ROOT: {
    color: 'rgb(35, 47, 59)'
  }
};
var DF_THEME = {
  caption: 'Grey',
  value: 'GREY'
};
var _themeOptions = [{
  caption: 'Grey',
  value: 'GREY'
}, {
  caption: 'Sand',
  value: 'SAND'
}, {
  caption: 'White',
  value: 'WHITE'
}];

var CardUi =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(CardUi, _Component);

  function CardUi() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = CardUi.prototype;

  /*
  static propTypes = {
    style: PropTypes.object,
    buttonsStyle: PropTypes.object,
    btStyle: PropTypes.object,
    onSetTheme: PropTypes.func,
    onClose: PropTypes.func
  }
  */
  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        buttonsStyle = _this$props.buttonsStyle,
        btStyle = _this$props.btStyle,
        onSetTheme = _this$props.onSetTheme,
        onClose = _this$props.onClose;
    return _react["default"].createElement("div", {
      style: style
    }, _react["default"].createElement(_InputSelect["default"], {
      styleConfig: S.SELECT,
      caption: "Theme (Default: Grey)",
      initItem: DF_THEME,
      options: _themeOptions,
      onSelect: onSetTheme
    }), _react["default"].createElement("div", {
      style: buttonsStyle
    }, _react["default"].createElement(_FlatButton["default"], {
      rootStyle: (0, _extends2["default"])({}, S.BT_ROOT, {}, btStyle),
      clDiv: CL_DIV,
      caption: "Close",
      title: "Close Dialog",
      onClick: onClose
    })));
  };

  return CardUi;
}(_react.Component);

var _default = CardUi;
exports["default"] = _default;
//# sourceMappingURL=CardUi.js.map