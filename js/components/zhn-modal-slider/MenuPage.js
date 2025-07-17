"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useFocusTrap = _interopRequireDefault(require("./useFocusTrap"));
var _useCanBeHidden = _interopRequireDefault(require("./useCanBeHidden"));
var _FocusTrap = _interopRequireDefault(require("../zhn-moleculs/FocusTrap"));
var _MenuTitle = _interopRequireDefault(require("./MenuTitle"));
var _MenuItemList = _interopRequireDefault(require("./MenuItemList"));
var _jsxRuntime = require("preact/jsx-runtime");
const MenuPage = props => {
  const [_refFirstItem, _refLastItem, _getRefItem] = (0, _useFocusTrap.default)(props),
    _style = (0, _useCanBeHidden.default)(props);
  return (0, _jsxRuntime.jsx)("div", {
    style: {
      ...props.style,
      ..._style
    },
    children: (0, _jsxRuntime.jsxs)(_FocusTrap.default, {
      refFirst: _refFirstItem,
      refLast: _refLastItem,
      children: [(0, _jsxRuntime.jsx)(_MenuTitle.default, {
        refEl: _refFirstItem,
        titleCl: props.titleCl,
        title: props.title,
        onClick: props.onPrevPage
      }), (0, _jsxRuntime.jsx)(_MenuItemList.default, {
        getRefItem: _getRefItem,
        items: props.items,
        itemCl: props.itemCl,
        pageNumber: props.pageNumber,
        onNextPage: props.onNextPage,
        onClose: props.onClose
      }), props.children]
    })
  });
};

/*
MenuPage.propTypes = {
  canBeHidden: PropTypes.bool,
  isVisible: PropTypes.bool,
  style: PropTypes.object,
  title: PropTypes.string,
  titleCl: PropTypes.string,
  itemCl: PropTypes.string,
  pageNumber: PropTypes.number,
  items: PropTypes.arrayOf(
     PropTypes.shapeOf({
        cn: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        id: PropTypes.string,
        isClose: PropTypes.bool,
        onClick: PropTypes.func
     })
  ),
  onNextPage: PropTypes.func,
  onPrevPage: PropTypes.func,
  onClose: PropTypes.func
}
*/
var _default = exports.default = MenuPage;
//# sourceMappingURL=MenuPage.js.map