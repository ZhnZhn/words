"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _useListen = _interopRequireDefault(require("../hoc/useListen"));

var _useTheme = _interopRequireDefault(require("../hoc/useTheme"));

var _About = _interopRequireDefault(require("./About.Style"));

var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));

var _Links = _interopRequireDefault(require("../links/Links"));

var _IconLogoBar = _interopRequireDefault(require("./IconLogoBar"));

var _ContainerStyle = _interopRequireDefault(require("../styles/ContainerStyle"));

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

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _cn,
    style: (0, _extends2["default"])({}, _ContainerStyle["default"].ABOUT_ROOT, _style, TS.ROOT)
  }, /*#__PURE__*/_react["default"].createElement(_Atoms["default"].BrowserCaption, {
    rootStyle: TS.BROWSER_CAPTION,
    caption: "About",
    onClose: _hClose
  }), /*#__PURE__*/_react["default"].createElement(_Atoms["default"].ScrollPane, {
    className: TS.CL_SCROLL_PANE,
    style: TS.SCROLL_DIV
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: TS.DIV_WRAPPER
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: TS.DIV_TEXT
  }, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("span", {
    style: TS.APP_TITLE
  }, "Words"), " is web app, RESTful client."), /*#__PURE__*/_react["default"].createElement("p", null, "Words data provider ", /*#__PURE__*/_react["default"].createElement(_Links["default"].WordsApi, null), " via ", /*#__PURE__*/_react["default"].createElement(_Links["default"].RapidApi, null)), /*#__PURE__*/_react["default"].createElement("p", {
    style: TS.PADDING_TOP
  }, "Provider's API Key is required for using app."), /*#__PURE__*/_react["default"].createElement("p", null, "API Key can be set in Settings Dialog [s].")), /*#__PURE__*/_react["default"].createElement(_IconLogoBar["default"], {
    iconStyle: TS.ICON,
    iconGitHubStyle: TS.ICON_GITHUB
  }), /*#__PURE__*/_react["default"].createElement("p", {
    style: TS.BLACK
  }, "*Logos Fair Use."))));
};

var _default = About;
exports["default"] = _default;
//# sourceMappingURL=About.js.map