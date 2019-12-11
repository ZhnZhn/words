"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _About = _interopRequireDefault(require("./About.Style"));

var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));

var _Links = _interopRequireDefault(require("../links/Links"));

var _IconLogoBar = _interopRequireDefault(require("./IconLogoBar"));

var _ContainerStyle = _interopRequireDefault(require("../styles/ContainerStyle"));

var CL_SHOW = "show-popup";

var About =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(About, _Component);

  function About() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isShow: true
    };

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          showAction = _this$props.showAction,
          closeAction = _this$props.closeAction;

      switch (actionType) {
        case showAction:
          _this.setState(function (prevState) {
            return prevState.isShow ? null : {
              isShow: true
            };
          });

          break;

        case closeAction:
          _this.setState(function (prevState) {
            return prevState.isShow ? {
              isShow: false
            } : null;
          });

          break;

        default:
          return void 0;
      }
    };

    _this._handleClose = function () {
      _this.setState({
        isShow: false
      });
    };

    return _this;
  }

  var _proto = About.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var theme = this.props.theme,
        TS = theme.createStyle(_About["default"]),
        isShow = this.state.isShow,
        _rootClass = isShow ? CL_SHOW : null,
        _rootStyle = isShow ? TS.BLOCK : TS.NONE;

    return _react["default"].createElement("div", {
      className: _rootClass,
      style: (0, _extends2["default"])({}, _ContainerStyle["default"].ABOUT_ROOT, {}, _rootStyle, {}, TS.ROOT)
    }, _react["default"].createElement(_Atoms["default"].BrowserCaption, {
      rootStyle: TS.BROWSER_CAPTION,
      caption: "About",
      onClose: this._handleClose
    }), _react["default"].createElement(_Atoms["default"].ScrollPane, {
      className: TS.CL_SCROLL_PANE,
      style: TS.SCROLL_DIV
    }, _react["default"].createElement("div", {
      style: TS.DIV_WRAPPER
    }, _react["default"].createElement("div", {
      style: TS.DIV_TEXT
    }, _react["default"].createElement("p", null, _react["default"].createElement("span", {
      style: TS.APP_TITLE
    }, "Words"), " is web app, RESTful client."), _react["default"].createElement("p", null, "Words data provider:"), _react["default"].createElement("div", null, _react["default"].createElement(_Links["default"].WordsApi, null)), _react["default"].createElement("p", {
      style: TS.MARGIN_TOP
    }, "Provider's API Key is required for using app."), _react["default"].createElement("p", null, "API Key can be set in Settings Dialog [s].")), _react["default"].createElement(_IconLogoBar["default"], {
      iconStyle: TS.ICON,
      iconGitHubStyle: TS.ICON_GITHUB
    }), _react["default"].createElement("p", {
      style: TS.BLACK
    }, "*Logos Fair Use."))));
  };

  return About;
}(_react.Component);

var _default = (0, _withTheme["default"])(About);

exports["default"] = _default;
//# sourceMappingURL=About.js.map