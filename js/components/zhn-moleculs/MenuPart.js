"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _bindTo = require("../../utils/bindTo");
var _isKeyEnter = _interopRequireDefault(require("../zhn/isKeyEnter"));
var _OpenClose = _interopRequireDefault(require("../zhn/OpenClose"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types'

const CL_ROW_ITEM = "row__item not-selected";
const _assign = Object.assign;
const _hKeyDown = (onClick, evt) => {
  if ((0, _isTypeFn.isFn)(onClick) && (0, _isKeyEnter.default)(evt)) {
    onClick();
  }
};
const _renderMenuItems = function (option) {
  const {
    items = [],
    hmItems = {},
    onClickItem,
    ...restOption
  } = option;
  return items.map((item, index) => {
    const _itemConf = hmItems[item.id],
      {
        menuTitle
      } = _itemConf;
    _assign(_itemConf, restOption);
    const _onClick = (0, _isTypeFn.isFn)(onClickItem) ? (0, _bindTo.bindTo)(onClickItem, _itemConf) : void 0;
    return (0, _jsxRuntime.jsx)("div", {
      role: "menuitem",
      tabIndex: "0",
      className: CL_ROW_ITEM,
      onClick: _onClick,
      onKeyDown: (0, _bindTo.bindTo)(_hKeyDown, _onClick),
      children: menuTitle
    }, index);
  });
};
const MenuPart = _ref => {
  let {
    isInitClose,
    caption,
    ...restProps
  } = _ref;
  return (0, _jsxRuntime.jsx)(_OpenClose.default, {
    caption: caption,
    isClose: isInitClose,
    children: _renderMenuItems(restProps)
  });
};
/*
MenuPart.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isInitClose: PropTypes.bool
}
*/
var _default = exports.default = MenuPart;
//# sourceMappingURL=MenuPart.js.map