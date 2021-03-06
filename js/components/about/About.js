"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useListen = _interopRequireDefault(require("../hoc/useListen"));

var _useTheme = _interopRequireDefault(require("../hoc/useTheme"));

var _About = _interopRequireDefault(require("./About.Style"));

var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));

var _Links = _interopRequireDefault(require("../links/Links"));

var _IconLogoBar = _interopRequireDefault(require("./IconLogoBar"));

var _ContainerStyle = _interopRequireDefault(require("../styles/ContainerStyle"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_SHOW = "show-popup";

var About = function About(_ref) {
  var store = _ref.store,
      showAction = _ref.showAction,
      closeAction = _ref.closeAction;

  var _useState = (0, _react.useState)(true),
      isShow = _useState[0],
      setIsShow = _useState[1],
      _hClose = (0, _react.useCallback)(function () {
    setIsShow(false);
  }, []);

  (0, _useListen["default"])(store, function (actionType, data) {
    switch (actionType) {
      case showAction:
        setIsShow(true);
        break;

      case closeAction:
        setIsShow(false);
        break;

      default:
        return;
    }
  });

  var TS = (0, _useTheme["default"])(_About["default"]),
      _cn = isShow ? CL_SHOW : null,
      _style = isShow ? TS.BLOCK : TS.NONE;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _cn,
    style: (0, _extends2["default"])({}, _ContainerStyle["default"].ABOUT_ROOT, _style, TS.ROOT),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].BrowserCaption, {
      rootStyle: TS.BROWSER_CAPTION,
      caption: "About",
      onClose: _hClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].ScrollPane, {
      className: TS.CL_SCROLL_PANE,
      style: TS.SCROLL_DIV,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: TS.DIV_WRAPPER,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: TS.DIV_TEXT,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              style: TS.APP_TITLE,
              children: "Words"
            }), " is web app, RESTful client."]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            children: ["Words data provider ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Links["default"].WordsApi, {}), " via ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Links["default"].RapidApi, {})]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            style: TS.PADDING_TOP,
            children: "Provider's API Key is required for using app."
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: "API Key can be set in Settings Dialog [s]."
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconLogoBar["default"], {
          iconStyle: TS.ICON,
          iconGitHubStyle: TS.ICON_GITHUB
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          style: TS.BLACK,
          children: "*Logos Fair Use."
        })]
      })
    })]
  });
};

var _default = About;
exports["default"] = _default;
//# sourceMappingURL=About.js.map