"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.T = void 0;

var _refluxCore = _interopRequireDefault(require("reflux-core"));

var _Reflux$createActions;

var T = {
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
exports.T = T;

var Actions = _refluxCore["default"].createActions((_Reflux$createActions = {}, _Reflux$createActions[T.SHOW_BROWSER] = {}, _Reflux$createActions[T.SHOW_DIALOG] = {}, _Reflux$createActions[T.SHOW_MODAL_DIALOG] = {}, _Reflux$createActions[T.SHOW_PANE] = {}, _Reflux$createActions[T.CLOSE_PANE] = {}, _Reflux$createActions[T.CHANGE_THEME] = {}, _Reflux$createActions[T.SHOW_ABOUT] = {}, _Reflux$createActions[T.CLICK_WATCH_ITEM] = {}, _Reflux$createActions));

var _default = Actions;
exports["default"] = _default;
//# sourceMappingURL=ComponentActions.js.map