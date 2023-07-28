"use strict";

exports.__esModule = true;
exports.default = void 0;
var _ComponentActions = require("../actions/ComponentActions");
const DF_WATCH_PANE_ID = 'P_WD_W';
const ComponentSlice = {
  onClickWatchItem(item) {
    item.id = item.id || DF_WATCH_PANE_ID;
    this.trigger(_ComponentActions.CAT_CLICK_WATCH_ITEM, item);
  }
};
var _default = ComponentSlice;
exports.default = _default;
//# sourceMappingURL=ComponentSlice.js.map