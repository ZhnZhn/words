'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _MenuBrowserStyle = require('../styles/MenuBrowserStyle');

var _MenuBrowserStyle2 = _interopRequireDefault(_MenuBrowserStyle);

var _DynamicMenuBrowser = require('../zhn-moleculs/DynamicMenuBrowser');

var _DynamicMenuBrowser2 = _interopRequireDefault(_DynamicMenuBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuBrowser = function (_Component) {
  (0, _inherits3.default)(MenuBrowser, _Component);

  function MenuBrowser() {
    (0, _classCallCheck3.default)(this, MenuBrowser);
    return (0, _possibleConstructorReturn3.default)(this, (MenuBrowser.__proto__ || Object.getPrototypeOf(MenuBrowser)).apply(this, arguments));
  }

  (0, _createClass3.default)(MenuBrowser, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          store = _props.store,
          showAction = _props.showAction,
          browserId = _props.browserId,
          onClickItem = _props.onClickItem,
          TS = theme.createStyle(_MenuBrowserStyle2.default);


      return _react2.default.createElement(_DynamicMenuBrowser2.default, {
        styleConfig: TS,
        store: store,
        showAction: showAction,
        browserId: browserId,
        caption: 'Words Sources',
        url: 'data/words-source-menu.json',
        onClickItem: onClickItem
      });
    }
  }]);
  return MenuBrowser;
}(_react.Component);

exports.default = (0, _withTheme2.default)(MenuBrowser);
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\zhn-browsers\MenuBrowser.js.map