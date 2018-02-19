'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Settings = require('../stores/Settings');

var _Settings2 = _interopRequireDefault(_Settings);

var _ComponentActions = require('./ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WORDS_BROWSER_ID = 'WORDS_DIFINITION';
var WATCH_BROWSER_ID = 'WATCH_ID';

var showBrowser = _ComponentActions2.default.showBrowser,
    showPane = _ComponentActions2.default.showPane,
    showModalDialog = _ComponentActions2.default.showModalDialog,
    showAbout = _ComponentActions2.default.showAbout,
    changeTheme = _ComponentActions2.default.changeTheme;


var _fShowBrowser = function _fShowBrowser(id) {
  return showBrowser.bind(null, id);
};

var AppActions = {
  onDefinition: showPane.bind(null, {
    paneCaption: "Word Definition",
    type: "WD_W",
    paneId: "P_WD_W"
  }),
  onSources: _fShowBrowser(WORDS_BROWSER_ID),
  onWatch: _fShowBrowser(WATCH_BROWSER_ID),
  onSettings: showModalDialog.bind(null, "SETTINGS", _Settings2.default.settingFn()),
  onAbout: showAbout,
  onChangeTheme: changeTheme,
  onShowPane: showPane
};

exports.default = AppActions;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\flux\actions\AppActions.js.map