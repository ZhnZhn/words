"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _HeaderBar = _interopRequireDefault(require("./HeaderBar.Style"));

var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));

var _PaneTopics = _interopRequireDefault(require("./PaneTopics"));

var _ProgressLoading = _interopRequireDefault(require("./ProgressLoading"));

var _IconAppLogo = _interopRequireDefault(require("./IconAppLogo"));

var _AppLabel = _interopRequireDefault(require("./AppLabel"));

var _LimitLabel = _interopRequireDefault(require("./LimitLabel"));

var CL = {
  HEADER: "header",
  PANEL_BROWSER: "header__panel-browser",
  ICON_APP: "header__icon-app",
  LABEL_APP: "header__label-app",
  BROWSER_BTS: "header__browser-bts",
  BTS: "header__bts",
  ARROW_DOWN: "arrow-down",
  SETTINGS: "header__bt-settins",
  BT_ABOUT: "header__bt-about"
};
var STYLE = {
  DIV_STYLE: {
    paddingLeft: 6,
    paddingRight: 6
  },
  SETTINGS: {
    verticalAlign: 'middle',
    position: 'relative',
    top: -1
  }
};
var TITLE = 'Words v0.3.0';

var HeaderBar =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(HeaderBar, _Component);

  function HeaderBar(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onRegTopics = function (node) {
      _this.topicsNode = node;
    };

    _this._hClickTopics = function () {
      _this.setState(function (prevState) {
        return {
          isTopics: !prevState.isTopics
        };
      });
    };

    _this._hCloseTopics = function (event) {
      if (!_this.topicsNode.contains(event.target)) {
        _this.setState({
          isTopics: false
        });
      }
    };

    var onDefinition = props.onDefinition,
        onSources = props.onSources,
        onWatch = props.onWatch;
    _this._topicItems = [{
      caption: 'Words Definition',
      onClick: onDefinition
    }, {
      caption: 'Words Sources',
      onClick: onSources
    }, {
      caption: 'Watch Lists',
      onClick: onWatch
    }];
    _this.state = {
      isTopics: false
    };
    return _this;
  }

  var _proto = HeaderBar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        theme = _this$props.theme,
        store = _this$props.store,
        LPT = _this$props.LPT,
        onSettings = _this$props.onSettings,
        onAbout = _this$props.onAbout,
        isTopics = this.state.isTopics,
        S = theme.createStyle(_HeaderBar["default"]);
    return _react["default"].createElement("header", {
      className: CL.HEADER,
      style: S.HEADER
    }, _react["default"].createElement(_PaneTopics["default"], {
      paneStyle: S.PANE,
      className: CL.PANEL_BROWSER,
      clItem: S.CL_QUERY_ITEM,
      isShow: isTopics,
      items: this._topicItems,
      onClose: this._hCloseTopics
    }), _react["default"].createElement(_ProgressLoading["default"], {
      store: store,
      ACTIONS: LPT
    }), _react["default"].createElement(_IconAppLogo["default"], {
      className: CL.ICON_APP,
      title: TITLE
    }), _react["default"].createElement(_AppLabel["default"], {
      className: CL.LABEL_APP,
      caption: TITLE
    }), _react["default"].createElement("span", {
      className: CL.BROWSER_BTS
    }, _react["default"].createElement(_Atoms["default"].ModalButton, {
      rootStyle: S.BT.FLAT_ROOT,
      clDiv: S.BT.CL_FLAT_DIV,
      caption: "Topics",
      title: "Topics",
      accessKey: "t",
      onClick: this._hClickTopics,
      onReg: this._onRegTopics
    }, _react["default"].createElement("span", {
      className: CL.ARROW_DOWN
    }))), _react["default"].createElement("div", {
      className: CL.BTS
    }, _react["default"].createElement(_Atoms["default"].FlatButton, {
      className: CL.SETTINGS,
      rootStyle: (0, _extends2["default"])({}, S.BT.FLAT_ROOT, {}, S.BT_SETTINGS),
      clDiv: S.BT.CL_FLAT_DIV,
      divStyle: STYLE.DIV_STYLE,
      title: "User Settings Dialog",
      accessKey: "s",
      onClick: onSettings
    }, _react["default"].createElement(_Atoms["default"].SvgSettings, {
      style: STYLE.SETTINGS
    })), _react["default"].createElement(_Atoms["default"].FlatButton, {
      className: CL.BT_ABOUT,
      rootStyle: S.BT.FLAT_ROOT,
      clDiv: S.BT.CL_FLAT_DIV,
      divStyle: STYLE.DIV_STYLE,
      title: "About Words",
      accessKey: "a",
      onClick: onAbout
    }, _react["default"].createElement(_Atoms["default"].SvgInfo, {
      style: STYLE.SETTINGS
    }))), _react["default"].createElement(_LimitLabel["default"], {
      store: store,
      ACTIONS: LPT,
      style: S.LIMIT
    }));
  };

  return HeaderBar;
}(_react.Component);

var _default = (0, _withTheme["default"])(HeaderBar);

exports["default"] = _default;
//# sourceMappingURL=HeaderBar.js.map