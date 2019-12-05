'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _HeaderBar = require('./HeaderBar.Style');

var _HeaderBar2 = _interopRequireDefault(_HeaderBar);

var _Atoms = require('../zhn-atoms/Atoms');

var _Atoms2 = _interopRequireDefault(_Atoms);

var _PaneTopics = require('./PaneTopics');

var _PaneTopics2 = _interopRequireDefault(_PaneTopics);

var _ProgressLoading = require('./ProgressLoading');

var _ProgressLoading2 = _interopRequireDefault(_ProgressLoading);

var _IconAppLogo = require('./IconAppLogo');

var _IconAppLogo2 = _interopRequireDefault(_IconAppLogo);

var _AppLabel = require('./AppLabel');

var _AppLabel2 = _interopRequireDefault(_AppLabel);

var _LimitLabel = require('./LimitLabel');

var _LimitLabel2 = _interopRequireDefault(_LimitLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var HeaderBar = function (_Component) {
  (0, _inherits3.default)(HeaderBar, _Component);

  function HeaderBar(props) {
    (0, _classCallCheck3.default)(this, HeaderBar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HeaderBar.__proto__ || Object.getPrototypeOf(HeaderBar)).call(this, props));

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
        _this.setState({ isTopics: false });
      }
    };

    var onDefinition = props.onDefinition,
        onSources = props.onSources,
        onWatch = props.onWatch;

    _this._topicItems = [{ caption: 'Words Definition', onClick: onDefinition }, { caption: 'Words Sources', onClick: onSources }, { caption: 'Watch', onClick: onWatch }];

    _this.state = {
      isTopics: false
    };
    return _this;
  }

  (0, _createClass3.default)(HeaderBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          store = _props.store,
          LPT = _props.LPT,
          onSettings = _props.onSettings,
          onAbout = _props.onAbout,
          isTopics = this.state.isTopics,
          S = theme.createStyle(_HeaderBar2.default);

      return _react2.default.createElement(
        'header',
        { className: CL.HEADER, style: S.HEADER },
        _react2.default.createElement(_PaneTopics2.default, {
          paneStyle: S.PANE,
          className: CL.PANEL_BROWSER,
          clItem: S.CL_QUERY_ITEM,
          isShow: isTopics,
          items: this._topicItems,
          onClose: this._hCloseTopics
        }),
        _react2.default.createElement(_ProgressLoading2.default, {
          store: store,
          ACTIONS: LPT
        }),
        _react2.default.createElement(_IconAppLogo2.default, {
          className: CL.ICON_APP,
          title: TITLE
        }),
        _react2.default.createElement(_AppLabel2.default, {
          className: CL.LABEL_APP,
          caption: TITLE
        }),
        _react2.default.createElement(
          'span',
          { className: CL.BROWSER_BTS },
          _react2.default.createElement(
            _Atoms2.default.ModalButton,
            {
              rootStyle: S.BT.FLAT_ROOT,
              clDiv: S.BT.CL_FLAT_DIV,
              caption: 'Topics',
              title: 'Topics',
              accessKey: 't',
              onClick: this._hClickTopics,
              onReg: this._onRegTopics
            },
            _react2.default.createElement('span', { className: CL.ARROW_DOWN })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: CL.BTS },
          _react2.default.createElement(
            _Atoms2.default.FlatButton,
            {
              className: CL.SETTINGS,
              rootStyle: (0, _extends3.default)({}, S.BT.FLAT_ROOT, S.BT_SETTINGS),
              clDiv: S.BT.CL_FLAT_DIV,
              divStyle: STYLE.DIV_STYLE,
              title: 'User Settings Dialog',
              accessKey: 's',
              onClick: onSettings
            },
            _react2.default.createElement(_Atoms2.default.SvgSettings, { style: STYLE.SETTINGS })
          ),
          _react2.default.createElement(
            _Atoms2.default.FlatButton,
            {
              className: CL.BT_ABOUT,
              rootStyle: S.BT.FLAT_ROOT,
              clDiv: S.BT.CL_FLAT_DIV,
              divStyle: STYLE.DIV_STYLE,
              title: 'About Words',
              accessKey: 'a',
              onClick: onAbout
            },
            _react2.default.createElement(_Atoms2.default.SvgInfo, { style: STYLE.SETTINGS })
          )
        ),
        _react2.default.createElement(_LimitLabel2.default, {
          store: store,
          ACTIONS: LPT,
          style: S.LIMIT
        })
      );
    }
  }]);
  return HeaderBar;
}(_react.Component);

exports.default = (0, _withTheme2.default)(HeaderBar);
//# sourceMappingURL=HeaderBar.js.map