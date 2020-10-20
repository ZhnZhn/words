"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _ThemeContext = _interopRequireDefault(require("./hoc/ThemeContext"));

var _theme = _interopRequireDefault(require("./styles/theme"));

var _HeaderBar = _interopRequireDefault(require("./header/HeaderBar"));

var _Container = _interopRequireDefault(require("./zhn-containers/Container"));

var CL_COMP = "component-container";
var CL_ITEMS = "items-container";
var WORDS_BROWSER_ID = 'WORDS_DIFINITION';

var AppWords = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(AppWords, _Component);

  function AppWords() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      theme: _theme["default"]
    };

    _this._onStore = function (actionType, themeName) {
      if (actionType === "changeTheme") {
        _this.setState(function (_ref) {
          var theme = _ref.theme;
          theme.setThemeName(themeName);
          return {
            theme: (0, _extends2["default"])({}, theme)
          };
        });
      }
    };

    return _this;
  }

  var _proto = AppWords.prototype;

  _proto.componentDidCatch = function componentDidCatch(error, info) {
    /*eslint-disable no-console*/
    console.warn(error, info);
    /*eslint-enable no-console*/
  };

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        store = _this$props.store,
        action = _this$props.action;
    this.unsubscribe = store.listen(this._onStore);
    action.showAbout();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        store = _this$props2.store,
        CAT = _this$props2.CAT,
        LPT = _this$props2.LPT,
        action = _this$props2.action,
        headerActions = action.headerActions,
        browserActions = action.browserActions,
        theme = this.state.theme;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.StrictMode, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThemeContext["default"].Provider, {
        value: theme,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_HeaderBar["default"], (0, _extends2["default"])({
            store: store,
            LPT: LPT
          }, headerActions)), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: CL_COMP,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Container["default"].Browser, (0, _extends2["default"])({
              store: store,
              showBrowserAction: CAT.SHOW_BROWSER,
              showDialogAction: CAT.SHOW_DIALOG,
              browserId: WORDS_BROWSER_ID,
              updateWatchAction: CAT.UPDATE_WATCH_BROWSER
            }, browserActions)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container["default"].Hrz, {
              className: CL_ITEMS,
              store: store,
              addAction: CAT.SHOW_PANE
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container["default"].Wrapper, {
            store: store,
            SHOW_ACTION: CAT.SHOW_MODAL_DIALOG
          })]
        })
      })
    });
  };

  return AppWords;
}(_react.Component);

var _default = AppWords;
exports["default"] = _default;
//# sourceMappingURL=AppWords.js.map