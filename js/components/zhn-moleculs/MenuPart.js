"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _bindTo = require("../../utils/bindTo");
var _uiApi = require("../uiApi");
var _a11yFn = require("../a11yFn");
var _OpenClose = _interopRequireDefault(require("../zhn/OpenClose"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_ROW_ITEM = "row__item not-selected";
const MenuPart = _ref => {
  let {
    isInitClose,
    caption,
    items,
    hmItems,
    onClickItem,
    ...restProps
  } = _ref;
  return (0, _jsxRuntime.jsx)(_OpenClose.default, {
    caption: caption,
    isClose: isInitClose,
    children: (0, _uiApi.safeMap)(items, item => {
      const _itemConf = hmItems[item.id],
        {
          menuTitle
        } = _itemConf || {};
      return menuTitle ? (0, _jsxRuntime.jsx)("div", {
        ...(0, _a11yFn.crMenuItemRole)((0, _bindTo.safeBindTo)(onClickItem, {
          ..._itemConf,
          ...restProps
        }), "0"),
        className: CL_ROW_ITEM,
        children: menuTitle
      }, item.id) : null;
    })
  });
};
var _default = exports.default = MenuPart;
//# sourceMappingURL=MenuPart.js.map