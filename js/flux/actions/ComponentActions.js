"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ComponentActions = exports.CAT_UPDATE_WATCH_BROWSER = exports.CAT_TOGGLE_PANE = exports.CAT_SHOW_PANE = exports.CAT_SHOW_ABOUT = exports.CAT_CLOSE_PANE = exports.CAT_CLOSE_ABOUT = exports.CAT_CLICK_WATCH_ITEM = void 0;
var _refluxCore = _interopRequireDefault(require("reflux-core"));
const CAT_SHOW_PANE = 'showPane';
exports.CAT_SHOW_PANE = CAT_SHOW_PANE;
const CAT_TOGGLE_PANE = 'togglePane';
exports.CAT_TOGGLE_PANE = CAT_TOGGLE_PANE;
const CAT_CLOSE_PANE = 'closePane';
exports.CAT_CLOSE_PANE = CAT_CLOSE_PANE;
const CAT_SHOW_ABOUT = 'showAbout';
exports.CAT_SHOW_ABOUT = CAT_SHOW_ABOUT;
const CAT_CLOSE_ABOUT = 'closeAbout';
exports.CAT_CLOSE_ABOUT = CAT_CLOSE_ABOUT;
const CAT_UPDATE_WATCH_BROWSER = 'updateWatchBrowser';
exports.CAT_UPDATE_WATCH_BROWSER = CAT_UPDATE_WATCH_BROWSER;
const CAT_CLICK_WATCH_ITEM = 'clickWatchItem';
exports.CAT_CLICK_WATCH_ITEM = CAT_CLICK_WATCH_ITEM;
const ComponentActions = _refluxCore.default.createActions({
  [CAT_SHOW_PANE]: {},
  [CAT_CLOSE_PANE]: {},
  [CAT_SHOW_ABOUT]: {},
  [CAT_CLICK_WATCH_ITEM]: {}
});
exports.ComponentActions = ComponentActions;
//# sourceMappingURL=ComponentActions.js.map