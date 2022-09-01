"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _MenuTitle = _interopRequireDefault(require("./MenuTitle"));

var _MenuItemList = _interopRequireDefault(require("./MenuItemList"));

var _jsxRuntime = require("react/jsx-runtime");

var DF_ITEMS = [],
    MLS_FOCUS_TIMEOUT = 1000;

var useRegRef = function useRegRef() {
  var ref = (0, _uiApi.useRef)(),
      onReg = (0, _uiApi.useCallback)(function (el) {
    ref.current = el;
  }, []);
  return [ref, onReg];
};

var MenuPage = function MenuPage(_ref) {
  var style = _ref.style,
      title = _ref.title,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? DF_ITEMS : _ref$items,
      titleCl = _ref.titleCl,
      itemCl = _ref.itemCl,
      pageCurrent = _ref.pageCurrent,
      pageNumber = _ref.pageNumber,
      onNextPage = _ref.onNextPage,
      onPrevPage = _ref.onPrevPage,
      onClose = _ref.onClose,
      children = _ref.children;

  var _useRegRef = useRegRef(),
      _refTitle = _useRegRef[0],
      _onRegTitle = _useRegRef[1],
      _useRegRef2 = useRegRef(),
      _refFirstItem = _useRegRef2[0],
      _onRegFirstItem = _useRegRef2[1];

  (0, _uiApi.useEffect)(function () {
    if (pageCurrent === pageNumber) {
      var _elTitle = (0, _uiApi.getRefValue)(_refTitle),
          _elFirstItem = (0, _uiApi.getRefValue)(_refFirstItem);

      if (_elTitle) {
        setTimeout(function () {
          return _elTitle.focus();
        }, MLS_FOCUS_TIMEOUT);
      } else if (_elFirstItem) {
        setTimeout(function () {
          return _elFirstItem.focus();
        }, MLS_FOCUS_TIMEOUT);
      }
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuTitle["default"], {
      titleCl: titleCl,
      title: title,
      pageNumber: pageNumber,
      onPrevPage: onPrevPage,
      onReg: _onRegTitle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItemList["default"], {
      items: items,
      itemCl: itemCl || titleCl,
      pageNumber: pageNumber,
      onNextPage: onNextPage,
      onReg: _onRegFirstItem,
      onClose: onClose
    }), children]
  });
};
/*
MenuPage.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  pageCurrent: PropTypes.number,
  pageNumber: PropTypes.number,
  items: PropTypes.arrayOf(
     PropTypes.shapeOf({
        name: PropTypes.string,
        type: PropTypes.string,
        id: PropTypes.string,
        onClick: PropTypes.func
     })
  ),
  titleCl: PropTypes.string,
  itemCl: PropTypes.string,
  onNextPage: PropTypes.func,
  onPrevPage: PropTypes.func,
  onClose: PropTypes.func
}
*/


var _default = MenuPage;
exports["default"] = _default;
//# sourceMappingURL=MenuPage.js.map