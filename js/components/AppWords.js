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

var _ThemeProvider = require('./hoc/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _theme = require('./styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _HeaderBar = require('./header/HeaderBar');

var _HeaderBar2 = _interopRequireDefault(_HeaderBar);

var _Container = require('./zhn-containers/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_COMP = "component-container";
var CL_ITEMS = "items-container";
var WORDS_BROWSER_ID = 'WORDS_DIFINITION';

var AppWords = function (_Component) {
  (0, _inherits3.default)(AppWords, _Component);

  function AppWords(props) {
    (0, _classCallCheck3.default)(this, AppWords);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AppWords.__proto__ || Object.getPrototypeOf(AppWords)).call(this));

    _this._onStore = function (actionType) {
      if (actionType === _this._changeTheme) {
        _this.forceUpdate();
      }
    };

    _this._changeTheme = props.CAT.CHANGE_THEME;
    return _this;
  }

  (0, _createClass3.default)(AppWords, [{
    key: 'componentDidCatch',
    value: function componentDidCatch(error, info) {
      /*eslint-disable no-console*/
      console.warn(error, info);
      /*eslint-enable no-console*/
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          store = _props.store,
          action = _props.action;

      this.unsubscribe = store.listen(this._onStore);
      action.showAbout();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          store = _props2.store,
          CAT = _props2.CAT,
          LPT = _props2.LPT,
          action = _props2.action,
          headerActions = action.headerActions,
          browserActions = action.browserActions;


      return _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: _theme2.default },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_HeaderBar2.default, (0, _extends3.default)({
            store: store,
            LPT: LPT
          }, headerActions)),
          _react2.default.createElement(
            'div',
            { className: CL_COMP },
            _react2.default.createElement(_Container2.default.Browser, (0, _extends3.default)({
              store: store,
              showBrowserAction: CAT.SHOW_BROWSER,
              showDialogAction: CAT.SHOW_DIALOG,
              browserId: WORDS_BROWSER_ID,
              updateWatchAction: CAT.UPDATE_WATCH_BROWSER
            }, browserActions)),
            _react2.default.createElement(_Container2.default.Hrz, {
              className: CL_ITEMS,
              store: store,
              addAction: CAT.SHOW_PANE
            })
          ),
          _react2.default.createElement(_Container2.default.Wrapper, {
            store: store,
            SHOW_ACTION: CAT.SHOW_MODAL_DIALOG
          })
        )
      );
    }
  }]);
  return AppWords;
}(_react.Component);

exports.default = AppWords;
//# sourceMappingURL=AppWords.js.map