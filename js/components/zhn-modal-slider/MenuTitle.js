"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _MenuAriaItem = _interopRequireDefault(require("./MenuAriaItem"));

var _jsxRuntime = require("react/jsx-runtime");

var S_ITEM = {
  position: 'relative'
},
    S_PREV_PAGE = {
  position: 'absolute',
  top: 0,
  left: 16
},
    S_TITLE = {
  paddingLeft: 16
};

var MenuTitle = function MenuTitle(_ref) {
  var titleCl = _ref.titleCl,
      title = _ref.title,
      pageNumber = _ref.pageNumber,
      onPrevPage = _ref.onPrevPage,
      onReg = _ref.onReg;

  var _hClick = (0, _uiApi.useCallback)(function () {
    onPrevPage(pageNumber);
  }, [onPrevPage, pageNumber]);

  return !title ? null : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuAriaItem["default"], {
    className: titleCl,
    style: S_ITEM,
    onClick: _hClick,
    onReg: onReg,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_PREV_PAGE,
      children: '<'
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_TITLE,
      children: title
    })]
  });
};

var _default = MenuTitle;
exports["default"] = _default;
//# sourceMappingURL=MenuTitle.js.map