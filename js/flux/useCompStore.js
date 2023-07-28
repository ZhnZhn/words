"use strict";

exports.__esModule = true;
exports.useCompStore = exports.showPane = exports.showMd = exports.showDialog = exports.showBrowser = exports.showAbout = exports.selectPane = exports.selectMdOption = exports.selectDialog = exports.selectBrowser = exports.selectAbout = void 0;
var _zustand = require("zustand");
var _middleware = require("zustand/middleware");
var _dialogFn = require("./dialogFn");
var _paneFn = require("./paneFn");
const selectMdOption = state => state.mdOption;
exports.selectMdOption = selectMdOption;
const selectDialog = state => state.dOption;
exports.selectDialog = selectDialog;
const selectBrowser = state => state.browser;
exports.selectBrowser = selectBrowser;
const selectAbout = state => state.about;
exports.selectAbout = selectAbout;
const selectPane = state => state.pOption;
exports.selectPane = selectPane;
const _dialogInit = {};
const _paneInit = {};
let _isInitiedAbout = false;
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
  about: {
    is: true
  },
  showPane: itemConf => set({
    about: {
      is: false
    },
    pOption: (0, _paneFn.crPaneOption)(_paneInit, itemConf, useCompStore, selectPane)
  }),
  showAbout: () => set(() => {
    if (_isInitiedAbout) {
      return {
        about: {
          is: true
        }
      };
    }
    _isInitiedAbout = true;
    return {
      pOption: (0, _paneFn.crAboutOption)(useCompStore, selectAbout)
    };
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
const showPane = _compStore.showPane;
exports.showPane = showPane;
const showAbout = _compStore.showAbout;
exports.showAbout = showAbout;
//# sourceMappingURL=useCompStore.js.map