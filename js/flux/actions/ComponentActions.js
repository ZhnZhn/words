'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _Reflux$createActions;

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var T = exports.T = {
  SHOW_BROWSER: 'showBrowser',

  SHOW_DIALOG: 'showDialog',

  SHOW_MODAL_DIALOG: 'showModalDialog',

  SHOW_PANE: 'showPane',
  //TOGGLE_PANE: 'togglePane',
  CLOSE_PANE: 'closePane',

  CHANGE_THEME: 'changeTheme',

  SHOW_ABOUT: 'showAbout',
  CLOSE_ABOUT: 'closeAbout',

  UPDATE_WATCH_BROWSER: 'updateWatchBrowser',
  CLICK_WATCH_ITEM: 'clickWatchItem'
};

var Actions = _reflux2.default.createActions((_Reflux$createActions = {}, (0, _defineProperty3.default)(_Reflux$createActions, T.SHOW_BROWSER, {}), (0, _defineProperty3.default)(_Reflux$createActions, T.SHOW_DIALOG, {}), (0, _defineProperty3.default)(_Reflux$createActions, T.SHOW_MODAL_DIALOG, {}), (0, _defineProperty3.default)(_Reflux$createActions, T.SHOW_PANE, {}), (0, _defineProperty3.default)(_Reflux$createActions, T.CLOSE_PANE, {}), (0, _defineProperty3.default)(_Reflux$createActions, T.CHANGE_THEME, {}), (0, _defineProperty3.default)(_Reflux$createActions, T.SHOW_ABOUT, {}), (0, _defineProperty3.default)(_Reflux$createActions, T.CLICK_WATCH_ITEM, {}), _Reflux$createActions));

exports.default = Actions;
//# sourceMappingURL=ComponentActions.js.map