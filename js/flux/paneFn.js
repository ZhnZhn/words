"use strict";

exports.__esModule = true;
exports.crPaneOption = exports.ABOUT_PANE_ID = void 0;
var _Factory = require("./logic/Factory");
const ABOUT_PANE_ID = 'about';
exports.ABOUT_PANE_ID = ABOUT_PANE_ID;
const _hmPaneId = Object.create(null);
const crPaneOption = (itemConf, compStore, selectPane, selectWatch) => {
  const {
    paneId
  } = itemConf;
  if (_hmPaneId[paneId]) {
    return {
      id: paneId
    };
  } else {
    const Comp = paneId === ABOUT_PANE_ID ? (0, _Factory.crAbout)(ABOUT_PANE_ID, compStore, selectPane) : (0, _Factory.crPane)(itemConf, compStore, selectPane, selectWatch);
    _hmPaneId[paneId] = true;
    return {
      Comp
    };
  }
};
exports.crPaneOption = crPaneOption;
//# sourceMappingURL=paneFn.js.map