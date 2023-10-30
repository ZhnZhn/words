"use strict";

exports.__esModule = true;
exports.usePane = exports.useMdOption = exports.useBrowser = exports.showPane = exports.showMd = exports.showBrowser = exports.showAbout = exports.clickWatchItem = void 0;
var _storeApi = require("./storeApi");
var _paneFn = require("./paneFn");
const DF_WATCH_PANE_ID = 'P_WD_W';
const [_crBrowser, _selectBrowser] = (0, _storeApi.fCrStoreSlice)("browser", "id"),
  [_crMdOption, _selectMdOption] = (0, _storeApi.fCrStoreSlice)("mdOption"),
  _crMdOptionType = (0, _storeApi.fCrMsFromFn)(_crMdOption, (mdType, option) => ({
    ...option,
    modalDialogType: mdType
  })),
  [_crWatch, _selectWatch] = (0, _storeApi.fCrStoreSlice)("watch"),
  _crWatchItem = (0, _storeApi.fCrMsFromFn)(_crWatch, item => {
    item.id = item.id || DF_WATCH_PANE_ID;
    return {
      item
    };
  }),
  [_crPane, _selectPane] = (0, _storeApi.fCrStoreSlice)("pOption");
const _crStore = () => ({
    ..._crMdOption(),
    ..._crBrowser(),
    ..._crPane(),
    ..._crWatch()
  }),
  compStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  _crPaneOption = (0, _storeApi.fCrMsFromFn)(_crPane, itemConf => (0, _paneFn.crPaneOption)(itemConf, compStore, _selectPane, _selectWatch)),
  _set = (0, _storeApi.getStoreApi)(compStore)[0];
const useBrowser = exports.useBrowser = (0, _storeApi.fCrUse)(compStore, _selectBrowser);
const usePane = exports.usePane = (0, _storeApi.fCrUse)(compStore, _selectPane);
const useMdOption = exports.useMdOption = (0, _storeApi.fCrUse)(compStore, _selectMdOption);
const showMd = exports.showMd = (0, _storeApi.fCrSetSlice)(_set, _crMdOptionType);
const showBrowser = exports.showBrowser = (0, _storeApi.fCrSetSlice)(_set, _crBrowser);
const showPane = exports.showPane = (0, _storeApi.fCrSetSlice)(_set, _crPaneOption);
const showAbout = exports.showAbout = (0, _storeApi.bindTo)(showPane, {
  paneId: _paneFn.ABOUT_PANE_ID
});
const clickWatchItem = exports.clickWatchItem = (0, _storeApi.fCrSetSlice)(_set, _crWatchItem);
//# sourceMappingURL=compStore.js.map