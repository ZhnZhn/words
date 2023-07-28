"use strict";

exports.__esModule = true;
exports.crDialogOption = void 0;
var _Factory = require("./logic/Factory");
const crDialogOption = (slice, itemConf) => {
  const {
    type
  } = itemConf;
  if (slice[type]) {
    return {
      key: type
    };
  } else {
    const Comp = (0, _Factory.crDialog)(itemConf);
    slice[type] = true;
    return {
      key: type,
      Comp
    };
  }
};
exports.crDialogOption = crDialogOption;
//# sourceMappingURL=dialogFn.js.map