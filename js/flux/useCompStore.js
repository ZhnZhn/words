"use strict";

exports.__esModule = true;
exports.useCompStore = exports.showMd = exports.showDialog = exports.showBrowser = exports.selectMdOption = exports.selectDialog = exports.selectBrowser = void 0;
var _zustand = require("zustand");
var _middleware = require("zustand/middleware");
var _dialogFn = require("./dialogFn");
const selectMdOption = state => state.mdOption;
exports.selectMdOption = selectMdOption;
const selectDialog = state => state.dOption;
exports.selectDialog = selectDialog;
const selectBrowser = state => state.browser;
exports.selectBrowser = selectBrowser;
const _dialogInit = {};
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
  })
})));
exports.useCompStore = useCompStore;
const _compStore = useCompStore.getState();
const showMd = _compStore.showMd;
exports.showMd = showMd;
const showDialog = _compStore.showDialog;
exports.showDialog = showDialog;
const showBrowser = _compStore.showBrowser;
exports.showBrowser = showBrowser;
//# sourceMappingURL=useCompStore.js.map