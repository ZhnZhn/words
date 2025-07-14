"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _isKeyEnter = _interopRequireDefault(require("../zhn/isKeyEnter"));
var _OpenClose = _interopRequireDefault(require("../zhn/OpenClose"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types'

const CL_ROW_ITEM = "row__item not-selected";
const _assign = Object.assign,
  _isFn = fn => typeof fn === 'function';
const _hKeyDown = (onClick, evt) => {
  if (_isFn(onClick) && (0, _isKeyEnter.default)(evt)) {
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
    //const _className = crCn(TS.CL_ROW, CL_NOT_S)
    const _itemConf = hmItems[item.id],
      {
        menuTitle
      } = _itemConf;
    _assign(_itemConf, restOption);
    const _onClick = _isFn(onClickItem) ? (0, _uiApi.bindTo)(onClickItem, _itemConf) : void 0;
    return (0, _jsxRuntime.jsx)("div", {
      role: "menuitem",
      tabIndex: "0",
      className: CL_ROW_ITEM
      //className={_className}
      ,
      onClick: _onClick,
      onKeyDown: (0, _uiApi.bindTo)(_hKeyDown, _onClick),
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