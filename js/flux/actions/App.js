'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Settings = require('../store/Settings');

var _Settings2 = _interopRequireDefault(_Settings);

var _ComponentActions = require('./ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WORDS_BROWSER_ID = 'WORDS_DIFINITION';
var WATCH_BROWSER_ID = 'WATCH_ID';

var _fShowBrowser = function _fShowBrowser(id) {
  return _ComponentActions2.default.showBrowser.bind(_ComponentActions2.default, id);
};

var AppActions = {
  showPaneDefinition: _ComponentActions2.default.showPane.bind(null, {
    paneCaption: "Word Definition",
    type: "WD_W",
    paneId: "P_WD_W"
  }),
  showWordsBrowser: _fShowBrowser(WORDS_BROWSER_ID),
  showWatch: _fShowBrowser(WATCH_BROWSER_ID),
  showSettings: _ComponentActions2.default.showModalDialog.bind(null, "SETTINGS", _Settings2.default.settingFn())
};

exports.default = AppActions;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\flux\actions\App.js.map