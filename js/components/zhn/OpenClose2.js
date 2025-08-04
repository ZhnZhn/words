"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _a11yFn = require("../a11yFn");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useDnDHandlers = _interopRequireDefault(require("../hooks/useDnDHandlers"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_MENU_ITEM = 'oc-item not-selected',
  S_ROOT = {
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
  };
const DF_FILL_OPEN = '#9e9e9e',
  DF_FILL_CLOSE = 'transparent',
  D_OPEN = "M 2,14 L 14,14 14,2 2,14",
  D_CLOSE = "M 2,2 L 14,8 2,14 2,2";
const _crStyleConf = _ref => {
  let {
    isOpen,
    fillOpen,
    fillClose,
    styleNotSelected
  } = _ref;
  return isOpen ? [D_OPEN, fillOpen, _styleFn.S_BLOCK, 'show-popup', null] : [D_CLOSE, fillClose, _styleFn.S_NONE, null, styleNotSelected];
};
const OpenClose2 = props => {
  const {
      isInitialOpen,
      style,
      styleCaption,
      caption,
      fillOpen = DF_FILL_OPEN,
      fillClose = DF_FILL_CLOSE,
      styleNotSelected,
      /*
      isDraggable,
      option,
      onDragStart,
      onDragEnter,
      onDragOver,
      onDragLeave,
      onDrop,
      */
      children
    } = props,
    [isOpen, toggleIsOpen] = (0, _useToggle.default)(isInitialOpen),
    _draggableOption = (0, _useDnDHandlers.default)(props),
    [_d, _fill, _divStyle, _classShow, _styleNotSelected] = _crStyleConf({
      isOpen,
      fillOpen,
      fillClose,
      styleNotSelected
    });
  return (0, _jsxRuntime.jsxs)("div", {
    style: {
      ...S_ROOT,
      ...style
    },
    children: [(0, _jsxRuntime.jsxs)("div", {
      ...(0, _a11yFn.crMenuItemRole)(toggleIsOpen, "0"),
      //role="menuitem"
      //tabIndex="0"
      className: CL_MENU_ITEM,
      style: _styleNotSelected
      //onClick={toggleIsOpen}
      //onKeyDown={_hKeyDown}
      ,
      ..._draggableOption,
      children: [(0, _jsxRuntime.jsx)("div", {
        style: S_DIV_SVG,
        children: (0, _jsxRuntime.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          width: "100%",
          height: "100%",
          preserveAspectRatio: "none",
          style: S_SVG,
          children: (0, _jsxRuntime.jsx)("path", {
            d: _d,
            fill: _fill,
            strokeWidth: "1",
            stroke: fillOpen
          })
        })
      }), (0, _jsxRuntime.jsx)("span", {
        style: {
          ...S_CAPTION,
          ...styleCaption
        },
        children: caption
      })]
    }), (0, _jsxRuntime.jsx)("div", {
      className: _classShow,
      style: _divStyle,
      children: children
    })]
  });
};
var _default = exports.default = OpenClose2;
//# sourceMappingURL=OpenClose2.js.map