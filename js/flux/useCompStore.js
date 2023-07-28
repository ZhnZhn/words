"use strict";

exports.__esModule = true;
exports.useCompStore = exports.showMd = exports.showBrowser = exports.selectMdOption = exports.selectBrowser = void 0;
var _zustand = require("zustand");
var _middleware = require("zustand/middleware");
const selectMdOption = state => state.mdOption;
exports.selectMdOption = selectMdOption;
const selectBrowser = state => state.browser;
exports.selectBrowser = selectBrowser;
const useCompStore = (0, _zustand.create)((0, _middleware.subscribeWithSelector)(set => ({
  mdOption: void 0,
  showMd: (mdType, option) => set(() => ({
    mdOption: {
      ...option,
      modalDialogType: mdType
    }
  })),
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
const showBrowser = _compStore.showBrowser;
exports.showBrowser = showBrowser;
//# sourceMappingURL=useCompStore.js.map