"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _HeaderBar = _interopRequireDefault(require("./HeaderBar.Style"));

var _useTheme = _interopRequireDefault(require("../hoc/useTheme"));

var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));

var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));

var _PaneTopics = _interopRequireDefault(require("./PaneTopics"));

var _ProgressLoading = _interopRequireDefault(require("./ProgressLoading"));

var _IconAppLogo = _interopRequireDefault(require("./IconAppLogo"));

var _AppLabel = _interopRequireDefault(require("./AppLabel"));

var _LimitLabel = _interopRequireDefault(require("./LimitLabel"));

var _titles = require("../titles");

var _jsxRuntime = require("react/jsx-runtime");

var CL_HEADER = "header",
    CL_PANEL_BROWSER = CL_HEADER + "__panel-browser",
    CL_ICON_APP = CL_HEADER + "__icon-app",
    CL_LABEL_APP = CL_HEADER + "__label-app",
    CL_BROWSER_BTS = CL_HEADER + "__browser-bts",
    CL_BTS = CL_HEADER + "__bts",
    CL_ARROW_DOWN = "arrow-down",
    CL_SETTINGS = CL_HEADER + "__bt-settins",
    CL_BT_ABOUT = CL_HEADER + "__bt-about",
    S_DIV = {
  paddingLeft: 6,
  paddingRight: 6
},
    S_SETTINGS = {
  verticalAlign: 'middle',
  position: 'relative',
  top: -1
};

var HeaderBar = function HeaderBar(_ref) {
  var store = _ref.store,
      onSettings = _ref.onSettings,
      onAbout = _ref.onAbout,
      onDefinition = _ref.onDefinition,
      onSources = _ref.onSources,
      onWatch = _ref.onWatch;

  var _useToggle = (0, _useToggle2["default"])(),
      isTopics = _useToggle[0],
      toggleTopics = _useToggle[1],
      _topicItems = (0, _uiApi.useMemo)(function () {
    return [{
      caption: 'Words Definition',
      onClick: onDefinition
    }, {
      caption: 'Words Sources',
      onClick: onSources
    }, {
      caption: 'Watch Lists',
      onClick: onWatch
    }];
  }, [onDefinition, onSources, onWatch]),
      _refTopicsEl = (0, _uiApi.useRef)(),
      _onRegTopics = (0, _uiApi.useCallback)(function (node) {
    (0, _uiApi.setRefValue)(_refTopicsEl, node);
  }, []),
      _hCloseTopics = (0, _uiApi.useCallback)(function (evt) {
    var _el = (0, _uiApi.getRefValue)(_refTopicsEl);

    if (_el && !_el.contains(evt.target)) {
      toggleTopics(false);
    }
  }, [toggleTopics]),
      S = (0, _useTheme["default"])(_HeaderBar["default"]);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
    className: CL_HEADER,
    style: S.HEADER,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_PaneTopics["default"], {
      paneStyle: S.PANE,
      className: CL_PANEL_BROWSER,
      clItem: S.CL_QUERY_ITEM,
      isShow: isTopics,
      items: _topicItems,
      onClose: _hCloseTopics
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProgressLoading["default"], {
      store: store
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconAppLogo["default"], {
      className: CL_ICON_APP,
      title: _titles.APP_TITLE
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppLabel["default"], {
      className: CL_LABEL_APP,
      caption: _titles.APP_TITLE
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: CL_BROWSER_BTS,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].ModalButton, {
        style: S.BT.FLAT_ROOT,
        clDiv: S.BT.CL_FLAT_DIV,
        caption: "Topics",
        title: "Topics",
        accessKey: "t",
        onClick: toggleTopics,
        onReg: _onRegTopics,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: CL_ARROW_DOWN
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL_BTS,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].FlatButton, {
        className: CL_SETTINGS,
        rootStyle: (0, _extends2["default"])({}, S.BT.FLAT_ROOT, S.BT_SETTINGS),
        clDiv: S.BT.CL_FLAT_DIV,
        divStyle: S_DIV,
        title: "User Settings Dialog",
        accessKey: "s",
        onClick: onSettings,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].SvgSettings, {
          style: S_SETTINGS
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].FlatButton, {
        className: CL_BT_ABOUT,
        rootStyle: S.BT.FLAT_ROOT,
        clDiv: S.BT.CL_FLAT_DIV,
        divStyle: S_DIV,
        title: "About Words",
        accessKey: "a",
        onClick: onAbout,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].SvgInfo, {
          style: S_SETTINGS
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LimitLabel["default"], {
      store: store,
      style: S.LIMIT
    })]
  });
};

var _default = HeaderBar;
exports["default"] = _default;
//# sourceMappingURL=HeaderBar.js.map