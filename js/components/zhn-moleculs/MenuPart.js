"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _isKeyEnter = _interopRequireDefault(require("../zhn-atoms/isKeyEnter"));

var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));

//import PropTypes from 'prop-types'
var CL_NOT_S = 'not-selected';

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _hKeyDown = function _hKeyDown(onClick, evt) {
  if (_isFn(onClick) && (0, _isKeyEnter["default"])(evt)) {
    onClick();
  }
};

var _renderMenuItems = function _renderMenuItems(TS, option) {
  var _option$items = option.items,
      items = _option$items === void 0 ? [] : _option$items,
      _option$hmItems = option.hmItems,
      hmItems = _option$hmItems === void 0 ? {} : _option$hmItems,
      onClickItem = option.onClickItem,
      restOption = (0, _objectWithoutPropertiesLoose2["default"])(option, ["items", "hmItems", "onClickItem"]);
  return items.map(function (item, index) {
    var _className = TS.CL_ROW ? TS.CL_ROW + " " + CL_NOT_S : CL_NOT_S,
        _itemConf = hmItems[item.id],
        menuTitle = _itemConf.menuTitle;

    Object.assign(_itemConf, restOption);

    var _onClick = _isFn(onClickItem) ? onClickItem.bind(null, _itemConf) : void 0;

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      role: "menuitem",
      tabIndex: "0",
      className: _className,
      onClick: _onClick,
      onKeyDown: _hKeyDown.bind(null, _onClick),
      children: menuTitle
    }, index);
  });
};

var MenuPart = function MenuPart(_ref) {
  var TS = _ref.styleConfig,
      caption = _ref.caption,
      isInitClose = _ref.isInitClose,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["styleConfig", "caption", "isInitClose"]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_OpenClose["default"], {
    style: TS.OPEN_CLOSE,
    caption: caption,
    isClose: isInitClose,
    itemStyle: TS.ITEM,
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
exports["default"] = _default;
//# sourceMappingURL=MenuPart.js.map