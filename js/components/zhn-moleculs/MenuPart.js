'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OpenClose = require('../zhn-atoms/OpenClose');

var _OpenClose2 = _interopRequireDefault(_OpenClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import MenuItemBadge from './MenuItemBadge'

var CL_NOT_S = 'not-selected';

/*
const _createOnKeyDown = (onClick) => (event) => {
  if (event.keyCode === 13){
    onClick()
  }
}
*/

//import PropTypes from 'prop-types'

var _renderMenuItems = function _renderMenuItems(TS, option) {
  var _option$items = option.items,
      items = _option$items === undefined ? [] : _option$items,
      _option$hmItems = option.hmItems,
      hmItems = _option$hmItems === undefined ? {} : _option$hmItems,
      onClickItem = option.onClickItem,
      rest = (0, _objectWithoutProperties3.default)(option, ['items', 'hmItems', 'onClickItem']);

  return items.map(function (item, index) {
    var _className = TS.CL_ROW ? TS.CL_ROW + ' ' + CL_NOT_S : CL_NOT_S,
        _itemConf = hmItems[item.id],
        menuTitle = _itemConf.menuTitle;


    Object.assign(_itemConf, rest);
    var _onClick = typeof onClickItem === 'function' ? onClickItem.bind(null, _itemConf) : undefined;
    return _react2.default.createElement(
      'button',
      {
        tabIndex: '0',
        key: index,
        className: _className,
        onClick: _onClick
        //onKeyDown={_createOnKeyDown(_onClick)}
      },
      menuTitle
    );
  });
};

var MenuPart = function MenuPart(_ref) {
  var TS = _ref.styleConfig,
      caption = _ref.caption,
      isInitClose = _ref.isInitClose,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['styleConfig', 'caption', 'isInitClose']);
  return _react2.default.createElement(
    _OpenClose2.default,
    {
      style: TS.OPEN_CLOSE,
      caption: caption,
      isClose: isInitClose,
      itemStyle: TS.ITEM
    },
    _renderMenuItems(TS, restProps)
  );
};
/*
MenuPart.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isInitClose: PropTypes.bool
}
*/

exports.default = MenuPart;
//# sourceMappingURL=MenuPart.js.map