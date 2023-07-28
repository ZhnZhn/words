"use strict";

exports.__esModule = true;
exports.useCompStore = exports.showMd = exports.selectMdOption = void 0;
var _zustand = require("zustand");
var _middleware = require("zustand/middleware");
const selectMdOption = state => state.mdOption;
exports.selectMdOption = selectMdOption;
const useCompStore = (0, _zustand.create)((0, _middleware.subscribeWithSelector)(set => ({
  mdOption: void 0,
  showMd: (mdType, option) => set(() => ({
    mdOption: {
      ...option,
      modalDialogType: mdType
    }
  }))
})));
exports.useCompStore = useCompStore;
const showMd = useCompStore.getState().showMd;
exports.showMd = showMd;
//# sourceMappingURL=useCompStore.js.map