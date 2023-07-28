"use strict";

exports.__esModule = true;
exports.default = void 0;
var _ComponentActions = require("../actions/ComponentActions");
var _Factory = require("../logic/Factory");
const DF_WATCH_PANE_ID = 'P_WD_W';
const PaneLogic = {
  showPane(slice, itemConf, store) {
    const {
      type,
      paneId
    } = itemConf;
    if (slice[type]) {
      return {
        id: paneId
      };
    } else {
      const Comp = (0, _Factory.crPane)(itemConf, store);
      slice[type] = true;
      return {
        Comp
      };
    }
  }
};
const CompLogic = {
  crAbout(store) {
    const Comp = (0, _Factory.crAbout)(store);
    return {
      Comp
    };
  }
};
const ComponentSlice = {
  paneInit: {},
  onShowPane(itemConf) {
    const pane = PaneLogic.showPane(this.paneInit, itemConf, this);
    this.trigger(_ComponentActions.CAT_SHOW_PANE, pane);
    this.trigger(_ComponentActions.CAT_CLOSE_ABOUT);
  },
  onShowAbout() {
    if (!this._initAbout) {
      const pane = CompLogic.crAbout(this);
      this._initAbout = true;
      this.trigger(_ComponentActions.CAT_SHOW_PANE, pane);
    } else {
      this.trigger(_ComponentActions.CAT_SHOW_ABOUT);
    }
  },
  onClickWatchItem(item) {
    item.id = item.id || DF_WATCH_PANE_ID;
    this.trigger(_ComponentActions.CAT_CLICK_WATCH_ITEM, item);
  }
};
var _default = ComponentSlice;
exports.default = _default;
//# sourceMappingURL=ComponentSlice.js.map