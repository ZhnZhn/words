"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Settings = _interopRequireDefault(require("../stores/Settings"));
var _compStore = require("../compStore");
var _watchListStore = require("../watch-list/watchListStore");
const WORDS_BROWSER_ID = 'WORDS_DIFINITION';
const WATCH_BROWSER_ID = 'WATCH_ID';
const _fShowBrowser = id => _compStore.showBrowser.bind(null, id);
const AppActions = {
  showAbout: _compStore.showAbout,
  initWatchList: _watchListStore.initWatchList,
  headerActions: {
    onDefinition: _compStore.showPane.bind(null, {
      paneCaption: "Word Definition",
      type: "WD_W",
      paneId: "P_WD_W"
    }),
    onSources: _fShowBrowser(WORDS_BROWSER_ID),
    onWatch: _fShowBrowser(WATCH_BROWSER_ID),
    onSettings: _compStore.showMd.bind(null, "SETTINGS", _Settings.default.settingFn()),
    onAbout: _compStore.showAbout
  },
  browserActions: {
    onClickItem: _compStore.showPane,
    onClickWatchItem: _compStore.clickWatchItem
  }
};
var _default = AppActions;
exports.default = _default;
//# sourceMappingURL=AppActions.js.map