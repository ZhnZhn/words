"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));

var _isKeyEnter = _interopRequireDefault(require("./isKeyEnter"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_MENU_ITEM = 'oc-item not-selected',
    S_ROOT = {
  backgroundColor: '#4d4d4d',
  lineHeight: 1.5
},
    S_DIV_SVG = {
  display: 'inline-block',
  width: 16,
  height: 16,
  marginLeft: 8
},
    S_SVG = {
  display: 'inline-block'
},
    S_CAPTION = {
  paddingLeft: 4,
  verticalAlign: 'top',
  color: 'rgba(164, 135, 212, 1)',
  fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer'
},
    S_BLOCK = {
  display: 'block'
},
    S_NONE = {
  display: 'none'
};
var DF_FILL_OPEN = '#9e9e9e',
    DF_FILL_CLOSE = 'transparent',
    D_OPEN = "M 2,14 L 14,14 14,2 2,14",
    D_CLOSE = "M 2,2 L 14,8 2,14 2,2";

var _crStyleConf = function _crStyleConf(_ref) {
  var isOpen = _ref.isOpen,
      fillOpen = _ref.fillOpen,
      fillClose = _ref.fillClose,
      styleNotSelected = _ref.styleNotSelected;
  return isOpen ? [D_OPEN, fillOpen, S_BLOCK, 'show-popup', null] : [D_CLOSE, fillClose, S_NONE, null, styleNotSelected];
};

var OpenClose2 = function OpenClose2(_ref2) {
  var isInitialOpen = _ref2.isInitialOpen,
      style = _ref2.style,
      styleCaption = _ref2.styleCaption,
      caption = _ref2.caption,
      _ref2$fillOpen = _ref2.fillOpen,
      fillOpen = _ref2$fillOpen === void 0 ? DF_FILL_OPEN : _ref2$fillOpen,
      _ref2$fillClose = _ref2.fillClose,
      fillClose = _ref2$fillClose === void 0 ? DF_FILL_CLOSE : _ref2$fillClose,
      styleNotSelected = _ref2.styleNotSelected,
      draggableOption = _ref2.draggableOption,
      children = _ref2.children;

  var _useToggle = (0, _useToggle2["default"])(isInitialOpen),
      isOpen = _useToggle[0],
      toggleIsOpen = _useToggle[1],
      _hKeyDown = (0, _uiApi.useCallback)(function (evt) {
    if ((0, _isKeyEnter["default"])(evt)) {
      toggleIsOpen();
    }
  }, [toggleIsOpen]),
      _crStyleConf2 = _crStyleConf({
    isOpen: isOpen,
    fillOpen: fillOpen,
    fillClose: fillClose,
    styleNotSelected: styleNotSelected
  }),
      _d = _crStyleConf2[0],
      _fill = _crStyleConf2[1],
      _divStyle = _crStyleConf2[2],
      _classShow = _crStyleConf2[3],
      _styleNotSelected = _crStyleConf2[4];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: (0, _extends2["default"])({}, S_ROOT, style),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({
      role: "menuitem",
      tabIndex: "0",
      className: CL_MENU_ITEM,
      style: _styleNotSelected,
      onClick: toggleIsOpen,
      onKeyDown: _hKeyDown
    }, draggableOption, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: S_DIV_SVG,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          width: "100%",
          height: "100%",
          preserveAspectRatio: "none",
          style: S_SVG,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: _d,
            fill: _fill,
            strokeWidth: "1",
            stroke: fillOpen
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: (0, _extends2["default"])({}, S_CAPTION, styleCaption),
        children: caption
      })]
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _classShow,
      style: _divStyle,
      children: children
    })]
  });
};

var _default = OpenClose2;
exports["default"] = _default;
//# sourceMappingURL=OpenClose2.js.map