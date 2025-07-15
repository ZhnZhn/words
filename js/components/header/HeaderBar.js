"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _styleFn = require("../styleFn");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _ModalButton = _interopRequireDefault(require("../zhn/ModalButton"));
var _FlatButton = _interopRequireDefault(require("../zhn/FlatButton"));
var _SvgSettings = _interopRequireDefault(require("../zhn/svg/SvgSettings"));
var _SvgInfo = _interopRequireDefault(require("../zhn/svg/SvgInfo"));
var _PaneTopics = _interopRequireDefault(require("./PaneTopics"));
var _ProgressLoading = _interopRequireDefault(require("./ProgressLoading"));
var _IconAppLogo = _interopRequireDefault(require("./IconAppLogo"));
var _AppLabel = _interopRequireDefault(require("./AppLabel"));
var _LimitLabel = _interopRequireDefault(require("./LimitLabel"));
var _titles = require("../titles");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_QUERY_ITEM = "row__topic",
  CL_HEADER = "header",
  CL_PANEL_BROWSER = `${CL_HEADER}__panel-browser`,
  CL_ICON_APP = `${CL_HEADER}__icon-app`,
  CL_LABEL_APP = `${CL_HEADER}__label-app`,
  CL_BROWSER_BTS = `${CL_HEADER}__browser-bts`,
  CL_BTS = `${CL_HEADER}__bts`,
  CL_ARROW_DOWN = "arrow-down",
  CL_SETTINGS = `${CL_HEADER}__bt-settins`,
  CL_BT_ABOUT = `${CL_HEADER}__bt-about`,
  S_DIV = {
    paddingLeft: 6,
    paddingRight: 6
  },
  S_SETTINGS = {
    verticalAlign: 'middle',
    position: 'relative',
    top: -1
  },
  _crTopicItem = (caption, onClick) => ({
    caption,
    onClick
  });
const HeaderBar = _ref => {
  let {
    onSettings,
    onAbout,
    onDefinition,
    onSources,
    onWatch
  } = _ref;
  const _topicItems = (0, _uiApi.useMemo)(() => [_crTopicItem('Words Definition', onDefinition), _crTopicItem('Words Sources', onSources), _crTopicItem('Watch Lists', onWatch)], [onDefinition, onSources, onWatch]),
    [isTopics, toggleTopics] = (0, _useToggle.default)(),
    _refTopicsEl = (0, _uiApi.useRef)(),
    _hCloseTopics = (0, _uiApi.useCallback)(evt => {
      const _el = (0, _uiApi.getRefValue)(_refTopicsEl);
      if (_el && !_el.contains(evt.target)) {
        toggleTopics(!1);
      }
    }, [toggleTopics]);
  return (0, _jsxRuntime.jsxs)("header", {
    className: CL_HEADER,
    children: [(0, _jsxRuntime.jsx)(_PaneTopics.default, {
      className: CL_PANEL_BROWSER,
      clItem: CL_QUERY_ITEM,
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
      children: (0, _jsxRuntime.jsx)(_ModalButton.default, {
        refEl: _refTopicsEl,
        caption: "Topics",
        title: "Topics",
        accessKey: "t",
        onClick: toggleTopics,
        children: (0, _jsxRuntime.jsx)("span", {
          className: CL_ARROW_DOWN
        })
      })
    }), (0, _jsxRuntime.jsxs)("div", {
      className: CL_BTS,
      children: [(0, _jsxRuntime.jsx)(_FlatButton.default, {
        className: CL_SETTINGS,
        clDiv: _styleFn.CL_BT_FLAT_DIV,
        divStyle: S_DIV,
        title: "User Settings Dialog",
        accessKey: "s",
        onClick: onSettings,
        children: (0, _jsxRuntime.jsx)(_SvgSettings.default, {
          style: S_SETTINGS
        })
      }), (0, _jsxRuntime.jsx)(_FlatButton.default, {
        className: CL_BT_ABOUT,
        clDiv: _styleFn.CL_BT_FLAT_DIV,
        divStyle: S_DIV,
        title: "About Words",
        accessKey: "a",
        onClick: onAbout,
        children: (0, _jsxRuntime.jsx)(_SvgInfo.default, {
          style: S_SETTINGS
        })
      })]
    }), (0, _jsxRuntime.jsx)(_LimitLabel.default, {})]
  });
};
var _default = exports.default = HeaderBar;
//# sourceMappingURL=HeaderBar.js.map