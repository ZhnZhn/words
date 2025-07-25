"use strict";

exports.__esModule = true;
exports.default = void 0;
var _bindTo = require("../../utils/bindTo");
var _uiApi = require("../uiApi");
var _a11yFn = require("../a11yFn");
var _styleFn = require("../styleFn");
var _jsxRuntime = require("preact/jsx-runtime");
const SUB_MENU = 'sub',
  S_ITEM = {
    position: 'relative'
  },
  S_NEXT_PAGE = {
    ..._styleFn.S_INLINE_BLOCK,
    ...(0, _styleFn.crAbsoluteTopLeftStyle)(0, 4, !0),
    color: 'inherit',
    padding: '1px 16px 1px 0px',
    fontWeight: 'bold'
  };
const NextPageArrow = _ref => {
  let {
    type
  } = _ref;
  return type === SUB_MENU ? (0, _jsxRuntime.jsx)("span", {
    style: S_NEXT_PAGE,
    children: ">"
  }) : null;
};
const MenuItemList = _ref2 => {
  let {
    getRefItem,
    items,
    itemCl,
    pageNumber,
    onNextPage,
    onClose
  } = _ref2;
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: (0, _uiApi.safeMap)(items, (item, index) => {
      const {
          name,
          type
        } = item,
        _onClick = type === SUB_MENU ? (0, _bindTo.bindTo)(onNextPage, item.id, name, pageNumber) : (0, _uiApi.crOnClick)(item.onClick, onClose, item.isClose);
      return (0, _jsxRuntime.jsxs)("div", {
        ref: getRefItem(index),
        className: item.cn || itemCl,
        style: S_ITEM,
        ...(0, _a11yFn.crMenuItemRole)(_onClick, "0"),
        children: [(0, _jsxRuntime.jsx)("span", {
          children: name
        }), (0, _jsxRuntime.jsx)(NextPageArrow, {
          type: type
        })]
      }, name);
    })
  });
};

/*
MenuItemList.propTypes = {
  items: PropTypes.array,
  itemCl: PropTypes.string,
  pageNumber: PropTypes.number,
  onNextPage: PropTypes.func,
  onClose: PropTypes.func
}
*/
var _default = exports.default = MenuItemList;
//# sourceMappingURL=MenuItemList.js.map