"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Settings = _interopRequireDefault(require("../stores/Settings"));

var _ComponentActions = _interopRequireDefault(require("./ComponentActions"));

var WORDS_BROWSER_ID = 'WORDS_DIFINITION';
var WATCH_BROWSER_ID = 'WATCH_ID';
var showBrowser = _ComponentActions["default"].showBrowser,
    showPane = _ComponentActions["default"].showPane,
    showModalDialog = _ComponentActions["default"].showModalDialog,
    showAbout = _ComponentActions["default"].showAbout,
    changeTheme = _ComponentActions["default"].changeTheme,
    clickWatchItem = _ComponentActions["default"].clickWatchItem;

var _fShowBrowser = function _fShowBrowser(id) {
  return showBrowser.bind(null, id);
};

var AppActions = {
  showAbout: showAbout,
  headerActions: {
    onDefinition: showPane.bind(null, {
      paneCaption: "Word Definition",
      type: "WD_W",
      paneId: "P_WD_W"
    }),
    onSources: _fShowBrowser(WORDS_BROWSER_ID),
    onWatch: _fShowBrowser(WATCH_BROWSER_ID),
    onSettings: showModalDialog.bind(null, "SETTINGS", _Settings["default"].settingFn()),
    onAbout: showAbout,
    onChangeTheme: changeTheme
  },
  browserActions: {
    onClickItem: showPane,
    onClickWatchItem: clickWatchItem
  }
};
var _default = AppActions;
exports["default"] = _default;
//# sourceMappingURL=AppActions.js.map