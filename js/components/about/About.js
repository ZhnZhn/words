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

var _About = require('./About.Style');

var _About2 = _interopRequireDefault(_About);

var _Atoms = require('../zhn-atoms/Atoms');

var _Atoms2 = _interopRequireDefault(_Atoms);

var _Links = require('../links/Links');

var _Links2 = _interopRequireDefault(_Links);

var _IconLogoBar = require('./IconLogoBar');

var _IconLogoBar2 = _interopRequireDefault(_IconLogoBar);

var _ContainerStyle = require('../styles/ContainerStyle');

var _ContainerStyle2 = _interopRequireDefault(_ContainerStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_SHOW = "show-popup";

var About = function (_Component) {
  (0, _inherits3.default)(About, _Component);

  function About(props) {
    (0, _classCallCheck3.default)(this, About);

    var _this = (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this));

    _this._onStore = function (actionType, data) {
      var showAction = _this.props.showAction;

      switch (actionType) {
        case showAction:
          _this.setState({ isShow: true });
          break;
        default:
          return undefined;
      }
    };

    _this._handleClose = function () {
      _this.setState({ isShow: false });
    };

    _this.state = {
      isShow: true
    };
    return _this;
  }

  (0, _createClass3.default)(About, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.unsubscribe = this.props.store.listen(this._onStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var theme = this.props.theme,
          TS = theme.createStyle(_About2.default),
          isShow = this.state.isShow,
          _rootClass = isShow ? CL_SHOW : null,
          _rootStyle = isShow ? TS.BLOCK : TS.NONE;

      return _react2.default.createElement(
        'div',
        {
          className: _rootClass,
          style: (0, _extends3.default)({}, _ContainerStyle2.default.ABOUT_ROOT, _rootStyle, TS.ROOT)
        },
        _react2.default.createElement(_Atoms2.default.BrowserCaption, {
          rootStyle: TS.BROWSER_CAPTION,
          caption: 'About',
          onClose: this._handleClose
        }),
        _react2.default.createElement(
          _Atoms2.default.ScrollPane,
          {
            className: TS.CL_SCROLL_PANE,
            style: TS.SCROLL_DIV
          },
          _react2.default.createElement(
            'div',
            { style: TS.DIV_WRAPPER },
            _react2.default.createElement(
              'div',
              { style: TS.DIV_TEXT },
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'span',
                  { style: TS.APP_TITLE },
                  'Words'
                ),
                ' is web app, RESTful client.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Words data provider:'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_Links2.default.WordsApi, null)
                )
              ),
              _react2.default.createElement(
                'p',
                { style: TS.MARGIN_TOP },
                'Provider\'s API Key is required for using app.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'API Key can be set in Settings Dialog [s].'
              )
            ),
            _react2.default.createElement(_IconLogoBar2.default, {
              iconStyle: TS.ICON,
              iconGitHubStyle: TS.ICON_GITHUB
            }),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'span',
                { style: TS.BLACK },
                '*Logos Fair Use.'
              )
            )
          )
        )
      );
    }
  }]);
  return About;
}(_react.Component);

exports.default = (0, _withTheme2.default)(About);
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\about\About.js.map