"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _isKeyEnter = _interopRequireDefault(require("../zhn-atoms/isKeyEnter"));
var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types'

const CL_NOT_S = 'not-selected';
const _assign = Object.assign,
  _isFn = fn => typeof fn === 'function';
const _hKeyDown = (onClick, evt) => {
  if (_isFn(onClick) && (0, _isKeyEnter.default)(evt)) {
    onClick();
  }
};
const _renderMenuItems = function (TS, option) {
  const {
    items = [],
    hmItems = {},
    onClickItem,
    ...restOption
  } = option;
  return items.map((item, index) => {
    const _className = (0, _uiApi.crCn)(TS.CL_ROW, CL_NOT_S),
      _itemConf = hmItems[item.id],
      {
        menuTitle
      } = _itemConf;
    _assign(_itemConf, restOption);
    const _onClick = _isFn(onClickItem) ? (0, _uiApi.bindTo)(onClickItem, _itemConf) : void 0;
    return (0, _jsxRuntime.jsx)("div", {
      role: "menuitem",
      tabIndex: "0",
      className: _className,
      onClick: _onClick,
      onKeyDown: (0, _uiApi.bindTo)(_hKeyDown, _onClick),
      children: menuTitle
    }, index);
  });
};
const MenuPart = _ref => {
  let {
    styleConfig: TS,
    isInitClose,
    caption,
    ...restProps
  } = _ref;
  return (0, _jsxRuntime.jsx)(_OpenClose.default, {
    style: TS.OPEN_CLOSE,
    caption: caption,
    isClose: isInitClose,
    children: _renderMenuItems(TS, restProps)
  });
};
/*
MenuPart.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isInitClose: PropTypes.bool
}
*/
var _default = MenuPart;
exports.default = _default;
//# sourceMappingURL=MenuPart.js.map