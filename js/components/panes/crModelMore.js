"use strict";

exports.__esModule = true;
exports.default = void 0;
var _menuModelFn = require("../zhn-modal-slider/menuModelFn");
const crModelMore = _ref => {
  let {
    onMinWidth,
    onInitWidth,
    onPlusWidth,
    onMinusWidth,
    onRemoveItems
  } = _ref;
  return {
    ...(0, _menuModelFn.crMenuModelProps)(180, 2),
    p0: [(0, _menuModelFn.crMenuSubItem)('p1', 'Resize'), (0, _menuModelFn.crMenuItem)('Remove All Items', onRemoveItems)],
    p1: [(0, _menuModelFn.crMenuItem)('to MinWidth', onMinWidth, !1), (0, _menuModelFn.crMenuItem)('to InitWidth', onInitWidth, !1), (0, _menuModelFn.crMenuItem)('+10px to Width', onPlusWidth, !1), (0, _menuModelFn.crMenuItem)('-10px to Width', onMinusWidth, !1)]
  };
};
var _default = exports.default = crModelMore;
//# sourceMappingURL=crModelMore.js.map