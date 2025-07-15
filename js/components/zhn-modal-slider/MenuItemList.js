"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
var _MenuAriaItem = _interopRequireDefault(require("./MenuAriaItem"));
var _jsxRuntime = require("preact/jsx-runtime");
const SUB_MENU = 'sub',
  S_ITEM = {
    position: 'relative'
  },
  S_NEXT_PAGE = {
    display: 'inline-block',
    position: 'absolute',
    top: 0,
    right: 4,
    padding: '1px 16px 1px 0px',
    color: 'inherit',
    fontWeight: 'bold'
  };
const _fClick = (isClose, onClick, onClose) => (0, _isTypeFn.isFn)(onClick) ? isClose ? () => {
  onClick();
  onClose();
} : onClick : void 0;
const NextPageArrow = _ref => {
  let {
    type
  } = _ref;
  return type !== SUB_MENU ? null : (0, _jsxRuntime.jsx)("span", {
    style: S_NEXT_PAGE,
    children: ">"
  });
};
const MenuItemList = _ref2 => {
  let {
    items,
    itemCl,
    pageNumber,
    onNextPage,
    onReg,
    onClose
  } = _ref2;
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: items.map((item, index) => {
      const {
          cn,
          name,
          type,
          id,
          isClose,
          onClick
        } = item,
        _onClick = type === SUB_MENU ? (0, _uiApi.bindTo)(onNextPage, id, name, pageNumber) : _fClick(isClose, onClick, onClose),
        _onReg = index === 0 ? onReg : void 0;
      return (0, _jsxRuntime.jsxs)(_MenuAriaItem.default, {
        className: cn || itemCl,
        style: S_ITEM,
        onClick: _onClick,
        onReg: _onReg,
        children: [(0, _jsxRuntime.jsx)("span", {
          children: name
        }), (0, _jsxRuntime.jsx)(NextPageArrow, {
          type: type
        })]
      }, name);
    })
  });
};
var _default = exports.default = MenuItemList;
//# sourceMappingURL=MenuItemList.js.map