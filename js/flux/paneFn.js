"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.crPaneOption = exports.crAboutOption = void 0;
var _Factory = require("./logic/Factory");
var _Store = _interopRequireDefault(require("./stores/Store"));
const crPaneOption = (slice, itemConf, compStore, selectPane) => {
  const {
    type,
    paneId
  } = itemConf;
  if (slice[type]) {
    return {
      id: paneId
    };
  } else {
    const Comp = (0, _Factory.crPane)(itemConf, _Store.default, compStore, selectPane);
    slice[type] = true;
    return {
      Comp
    };
  }
};
exports.crPaneOption = crPaneOption;
const crAboutOption = (store, selectAbout) => {
  const Comp = (0, _Factory.crAbout)(store, selectAbout);
  return {
    Comp
  };
};
exports.crAboutOption = crAboutOption;
//# sourceMappingURL=paneFn.js.map