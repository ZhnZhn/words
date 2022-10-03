"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("./uiApi");

var _useListen = _interopRequireDefault(require("./hooks/useListen"));

var _ThemeContext = _interopRequireDefault(require("./hoc/ThemeContext"));

var _theme = _interopRequireDefault(require("./styles/theme"));

var _ComponentActions = require("../flux/actions/ComponentActions");

var _HeaderBar = _interopRequireDefault(require("./header/HeaderBar"));

var _Container = _interopRequireDefault(require("./zhn-containers/Container"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_COMP = "component-container",
    CL_ITEMS = "items-container",
    WORDS_BROWSER_ID = 'WORDS_DIFINITION';

var AppWords = function AppWords(_ref) {
  var store = _ref.store,
      action = _ref.action;

  var _useState = (0, _uiApi.useState)(_theme["default"]),
      uiTheme = _useState[0],
      setUiTheme = _useState[1];

  (0, _useListen["default"])(store, function (actionType, uiThemeName) {
    if (actionType === "changeTheme") {
      setUiTheme(function (prevUiTheme) {
        prevUiTheme.setThemeName(uiThemeName);
        return (0, _extends2["default"])({}, prevUiTheme);
      });
    }
  });
  /*eslint-disable react-hooks/exhaustive-deps */

  (0, _uiApi.useEffect)(function () {
    action.showAbout();
  }, []); // action

  /*eslint-enable react-hooks/exhaustive-deps */

  var headerActions = action.headerActions,
      browserActions = action.browserActions;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThemeContext["default"].Provider, {
    value: uiTheme,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_HeaderBar["default"], (0, _extends2["default"])({
        store: store
      }, headerActions)), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: CL_COMP,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Container["default"].Browser, (0, _extends2["default"])({
          store: store,
          showBrowserAction: _ComponentActions.CAT_SHOW_BROWSER,
          showDialogAction: _ComponentActions.CAT_SHOW_DIALOG,
          browserId: WORDS_BROWSER_ID,
          updateWatchAction: _ComponentActions.CAT_UPDATE_WATCH_BROWSER
        }, browserActions)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container["default"].Hrz, {
          className: CL_ITEMS,
          store: store,
          addAction: _ComponentActions.CAT_SHOW_PANE
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container["default"].Wrapper, {
        store: store,
        SHOW_ACTION: _ComponentActions.CAT_SHOW_MODAL_DIALOG
      })]
    })
  });
};

var _default = AppWords;
exports["default"] = _default;
//# sourceMappingURL=AppWords.js.map