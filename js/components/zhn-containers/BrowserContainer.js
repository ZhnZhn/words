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

var _MenuBrowser = require('../zhn-browsers/MenuBrowser');

var _MenuBrowser2 = _interopRequireDefault(_MenuBrowser);

var _WatchBrowser = require('../watch-browser/WatchBrowser');

var _WatchBrowser2 = _interopRequireDefault(_WatchBrowser);

var _DialogContainer = require('./DialogContainer');

var _DialogContainer2 = _interopRequireDefault(_DialogContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_ROOT = "hrz-container";

var BrowserContainer = function (_Component) {
  (0, _inherits3.default)(BrowserContainer, _Component);

  function BrowserContainer() {
    (0, _classCallCheck3.default)(this, BrowserContainer);
    return (0, _possibleConstructorReturn3.default)(this, (BrowserContainer.__proto__ || Object.getPrototypeOf(BrowserContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(BrowserContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          store = _props.store,
          browserId = _props.browserId,
          showBrowserAction = _props.showBrowserAction,
          showDialogAction = _props.showDialogAction,
          onClickItem = _props.onClickItem,
          updateWatchAction = _props.updateWatchAction,
          onClickWatchItem = _props.onClickWatchItem;

      return _react2.default.createElement(
        'div',
        { className: CL_ROOT },
        _react2.default.createElement(_MenuBrowser2.default, {
          store: store,
          browserId: browserId,
          showAction: showBrowserAction,
          onClickItem: onClickItem
        }),
        _react2.default.createElement(_WatchBrowser2.default, {
          caption: 'Watch Words',
          store: store,
          isInitShow: false,
          browserType: 'WATCH_ID',
          showAction: showBrowserAction,
          updateAction: updateWatchAction,
          onClickItem: onClickWatchItem
        }),
        _react2.default.createElement(_DialogContainer2.default, {
          maxDialog: 3,
          store: store,
          showAction: showDialogAction
        })
      );
    }
  }]);
  return BrowserContainer;
}(_react.Component);

exports.default = BrowserContainer;
//# sourceMappingURL=BrowserContainer.js.map