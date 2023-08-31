"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _HeaderBar = _interopRequireDefault(require("./HeaderBar.Style"));
var _useTheme = _interopRequireDefault(require("../hoc/useTheme"));
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));
var _PaneTopics = _interopRequireDefault(require("./PaneTopics"));
var _ProgressLoading = _interopRequireDefault(require("./ProgressLoading"));
var _IconAppLogo = _interopRequireDefault(require("./IconAppLogo"));
var _AppLabel = _interopRequireDefault(require("./AppLabel"));
var _LimitLabel = _interopRequireDefault(require("./LimitLabel"));
var _titles = require("../titles");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_HEADER = "header",
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
const HeaderBar = _ref => {
  let {
    onSettings,
    onAbout,
    onDefinition,
    onSources,
    onWatch
  } = _ref;
  const [isTopics, toggleTopics] = (0, _useToggle.default)(),
    _topicItems = (0, _uiApi.useMemo)(() => [{
      caption: 'Words Definition',
      onClick: onDefinition
    }, {
      caption: 'Words Sources',
      onClick: onSources
    }, {
      caption: 'Watch Lists',
      onClick: onWatch
    }], [onDefinition, onSources, onWatch]),
    _refTopicsEl = (0, _uiApi.useRef)(),
    _onRegTopics = (0, _uiApi.useCallback)(node => {
      (0, _uiApi.setRefValue)(_refTopicsEl, node);
    }, []),
    _hCloseTopics = (0, _uiApi.useCallback)(evt => {
      const _el = (0, _uiApi.getRefValue)(_refTopicsEl);
      if (_el && !_el.contains(evt.target)) {
        toggleTopics(false);
      }
    }, [toggleTopics]),
    TS = (0, _useTheme.default)(_HeaderBar.default);
  return (0, _jsxRuntime.jsxs)("header", {
    className: CL_HEADER,
    children: [(0, _jsxRuntime.jsx)(_PaneTopics.default, {
      className: CL_PANEL_BROWSER,
      clItem: TS.CL_QUERY_ITEM,
      isShow: isTopics,
      items: _topicItems,
      onClose: _hCloseTopics
    }), (0, _jsxRuntime.jsx)(_ProgressLoading.default, {}), (0, _jsxRuntime.jsx)(_IconAppLogo.default, {
      className: CL_ICON_APP,
      title: _titles.APP_TITLE
    }), (0, _jsxRuntime.jsx)(_AppLabel.default, {
      className: CL_LABEL_APP,
      caption: _titles.APP_TITLE
    }), (0, _jsxRuntime.jsx)("span", {
      className: CL_BROWSER_BTS,
      children: (0, _jsxRuntime.jsx)(_Atoms.default.ModalButton, {
        style: TS.BT.FLAT_ROOT,
        clDiv: TS.BT.CL_FLAT_DIV,
        caption: "Topics",
        title: "Topics",
        accessKey: "t",
        onClick: toggleTopics,
        onReg: _onRegTopics,
        children: (0, _jsxRuntime.jsx)("span", {
          className: CL_ARROW_DOWN
        })
      })
    }), (0, _jsxRuntime.jsxs)("div", {
      className: CL_BTS,
      children: [(0, _jsxRuntime.jsx)(_Atoms.default.FlatButton, {
        className: CL_SETTINGS,
        rootStyle: TS.BT_SETTINGS,
        clDiv: TS.BT.CL_FLAT_DIV,
        divStyle: S_DIV,
        title: "User Settings Dialog",
        accessKey: "s",
        onClick: onSettings,
        children: (0, _jsxRuntime.jsx)(_Atoms.default.SvgSettings, {
          style: S_SETTINGS
        })
      }), (0, _jsxRuntime.jsx)(_Atoms.default.FlatButton, {
        className: CL_BT_ABOUT,
        clDiv: TS.BT.CL_FLAT_DIV,
        divStyle: S_DIV,
        title: "About Words",
        accessKey: "a",
        onClick: onAbout,
        children: (0, _jsxRuntime.jsx)(_Atoms.default.SvgInfo, {
          style: S_SETTINGS
        })
      })]
    }), (0, _jsxRuntime.jsx)(_LimitLabel.default, {
      style: TS.LIMIT
    })]
  });
};
var _default = HeaderBar;
exports.default = _default;
//# sourceMappingURL=HeaderBar.js.map