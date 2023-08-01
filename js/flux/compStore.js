"use strict";

exports.__esModule = true;
exports.usePane = exports.useMdOption = exports.useDialog = exports.useBrowser = exports.showPane = exports.showMd = exports.showDialog = exports.showBrowser = exports.showAbout = exports.clickWatchItem = void 0;
var _storeApi = require("./storeApi");
var _dialogFn = require("./dialogFn");
var _paneFn = require("./paneFn");
const _dialogInit = {};
const DF_WATCH_PANE_ID = 'P_WD_W';
const _crStore = () => ({
    mdOption: void 0,
    dOption: void 0,
    browser: {
      id: void 0
    },
    pOption: void 0,
    watch: void 0
  }),
  compStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  _selectMdOption = state => state.mdOption,
  _selectDialog = state => state.dOption,
  _selectPane = state => state.pOption,
  _selectBrowser = state => state.browser,
  _selectWatch = state => state.watch,
  _set = compStore.setState;
const useBrowser = (0, _storeApi.fCrUse)(compStore, _selectBrowser);
exports.useBrowser = useBrowser;
const usePane = (0, _storeApi.fCrUse)(compStore, _selectPane);
exports.usePane = usePane;
const useDialog = (0, _storeApi.fCrUse)(compStore, _selectDialog);
exports.useDialog = useDialog;
const useMdOption = (0, _storeApi.fCrUse)(compStore, _selectMdOption);
exports.useMdOption = useMdOption;
const showMd = (mdType, option) => _set({
  mdOption: {
    ...option,
    modalDialogType: mdType
  }
});
exports.showMd = showMd;
const showDialog = itemConf => _set({
  dOption: (0, _dialogFn.crDialogOption)(_dialogInit, itemConf)
});
exports.showDialog = showDialog;
const showBrowser = id => _set({
  browser: {
    id
  }
});
exports.showBrowser = showBrowser;
const showPane = itemConf => _set({
  pOption: (0, _paneFn.crPaneOption)(itemConf, compStore, _selectPane, _selectWatch)
});
exports.showPane = showPane;
const showAbout = showPane.bind(null, {
  paneId: _paneFn.ABOUT_PANE_ID
});
exports.showAbout = showAbout;
const clickWatchItem = item => _set(() => {
  item.id = item.id || DF_WATCH_PANE_ID;
  return {
    watch: {
      item
    }
  };
});
exports.clickWatchItem = clickWatchItem;
//# sourceMappingURL=compStore.js.map