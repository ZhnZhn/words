"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));

//import PropTypes from 'prop-types'
//import MenuItemBadge from './MenuItemBadge'
var CL_NOT_S = 'not-selected';
/*
const _createOnKeyDown = (onClick) => (event) => {
  if (event.keyCode === 13){
    onClick()
  }
}
*/

var _renderMenuItems = function _renderMenuItems(TS, option) {
  var _option$items = option.items,
      items = _option$items === void 0 ? [] : _option$items,
      _option$hmItems = option.hmItems,
      hmItems = _option$hmItems === void 0 ? {} : _option$hmItems,
      onClickItem = option.onClickItem,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(option, ["items", "hmItems", "onClickItem"]);
  return items.map(function (item, index) {
    var _className = TS.CL_ROW ? TS.CL_ROW + " " + CL_NOT_S : CL_NOT_S,
        _itemConf = hmItems[item.id],
        menuTitle = _itemConf.menuTitle;

    Object.assign(_itemConf, rest);

    var _onClick = typeof onClickItem === 'function' ? onClickItem.bind(null, _itemConf) : undefined;

    return _react["default"].createElement("button", {
      tabIndex: "0",
      key: index,
      className: _className,
      onClick: _onClick //onKeyDown={_createOnKeyDown(_onClick)}

    }, menuTitle);
  });
};

var MenuPart = function MenuPart(_ref) {
  var TS = _ref.styleConfig,
      caption = _ref.caption,
      isInitClose = _ref.isInitClose,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["styleConfig", "caption", "isInitClose"]);
  return _react["default"].createElement(_OpenClose["default"], {
    style: TS.OPEN_CLOSE,
    caption: caption,
    isClose: isInitClose,
    itemStyle: TS.ITEM
  }, _renderMenuItems(TS, restProps));
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