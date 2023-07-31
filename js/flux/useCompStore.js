"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.usePane = exports.useDialog = exports.useCompStore = exports.useBrowser = exports.showPane = exports.showMd = exports.showDialog = exports.showBrowser = exports.showAbout = exports.selectWatch = exports.selectMdOption = exports.clickWatchItem = void 0;
var _zustand = require("zustand");
var _middleware = require("zustand/middleware");
var _fCrUse = _interopRequireDefault(require("./fCrUse"));
var _dialogFn = require("./dialogFn");
var _paneFn = require("./paneFn");
const selectMdOption = state => state.mdOption;
exports.selectMdOption = selectMdOption;
const _selectDialog = state => state.dOption;
const _selectPane = state => state.pOption;
const _selectBrowser = state => state.browser;
const selectWatch = state => state.watch;
exports.selectWatch = selectWatch;
const _dialogInit = {};
const DF_WATCH_PANE_ID = 'P_WD_W';
const useCompStore = (0, _zustand.create)((0, _middleware.subscribeWithSelector)(set => ({
  mdOption: void 0,
  showMd: (mdType, option) => set(() => ({
    mdOption: {
      ...option,
      modalDialogType: mdType
    }
  })),
  dOption: void 0,
  showDialog: itemConf => set({
    dOption: (0, _dialogFn.crDialogOption)(_dialogInit, itemConf)
  }),
  browser: {
    id: void 0
  },
  showBrowser: id => set({
    browser: {
      id
    }
  }),
  pOption: void 0,
  showPane: itemConf => set({
    pOption: (0, _paneFn.crPaneOption)(itemConf, useCompStore, _selectPane, selectWatch)
  }),
  watch: void 0,
  clickWatchItem: item => set(() => {
    item.id = item.id || DF_WATCH_PANE_ID;
    return {
      watch: {
        item
      }
    };
  })
})));
exports.useCompStore = useCompStore;
const useBrowser = (0, _fCrUse.default)(useCompStore, _selectBrowser);
exports.useBrowser = useBrowser;
const usePane = (0, _fCrUse.default)(useCompStore, _selectPane);
exports.usePane = usePane;
const useDialog = (0, _fCrUse.default)(useCompStore, _selectDialog);
exports.useDialog = useDialog;
const _compStore = useCompStore.getState();
const showMd = _compStore.showMd;
exports.showMd = showMd;
const showDialog = _compStore.showDialog;
exports.showDialog = showDialog;
const showBrowser = _compStore.showBrowser;
exports.showBrowser = showBrowser;
const showPane = _compStore.showPane;
exports.showPane = showPane;
const showAbout = showPane.bind(null, {
  paneId: _paneFn.ABOUT_PANE_ID
});
exports.showAbout = showAbout;
const clickWatchItem = _compStore.clickWatchItem;
exports.clickWatchItem = clickWatchItem;
//# sourceMappingURL=useCompStore.js.map