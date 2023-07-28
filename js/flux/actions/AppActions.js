"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Settings = _interopRequireDefault(require("../stores/Settings"));
var _ComponentActions = require("./ComponentActions");
var _useCompStore = require("../useCompStore");
const WORDS_BROWSER_ID = 'WORDS_DIFINITION';
const WATCH_BROWSER_ID = 'WATCH_ID';
const {
  showPane,
  showAbout,
  changeTheme,
  clickWatchItem
} = _ComponentActions.ComponentActions;
const _fShowBrowser = id => _useCompStore.showBrowser.bind(null, id);
const AppActions = {
  showAbout,
  headerActions: {
    onDefinition: showPane.bind(null, {
      paneCaption: "Word Definition",
      type: "WD_W",
      paneId: "P_WD_W"
    }),
    onSources: _fShowBrowser(WORDS_BROWSER_ID),
    onWatch: _fShowBrowser(WATCH_BROWSER_ID),
    onSettings: _useCompStore.showMd.bind(null, "SETTINGS", _Settings.default.settingFn()),
    onAbout: showAbout,
    onChangeTheme: changeTheme
  },
  browserActions: {
    onClickItem: showPane,
    onClickWatchItem: clickWatchItem
  }
};
var _default = AppActions;
exports.default = _default;
//# sourceMappingURL=AppActions.js.map