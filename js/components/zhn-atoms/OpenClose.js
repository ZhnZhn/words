"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types';
var CL_CAPTION = 'open-close not-selected',
    S_ROOT = {
  backgroundColor: 'inherit',
  lineHeight: 2.5
},
    S_SVG = {
  display: 'inline-block',
  width: 16,
  height: 16
},
    S_ROOT_CAPTION = {
  paddingLeft: 12
},
    S_CAPTION = {
  color: '#9e9e9e',
  paddingLeft: 4,
  verticalAlign: 'top'
},
    S_INLINE = {
  display: 'inline-block'
},
    S_BLOCK = {
  display: 'block'
},
    S_NONE = {
  display: 'none'
},
    FILL_OPEN = '#9e9e9e',
    FILL_CLOSE = 'transparent',
    PATH_OPEN = "M 2,14 L 14,14 14,2 2,14",
    PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";

var OpenClose = function OpenClose(_ref) {
  var _ref$isClose = _ref.isClose,
      isClose = _ref$isClose === void 0 ? true : _ref$isClose,
      _ref$fillOpen = _ref.fillOpen,
      fillOpen = _ref$fillOpen === void 0 ? FILL_OPEN : _ref$fillOpen,
      _ref$fillClose = _ref.fillClose,
      fillClose = _ref$fillClose === void 0 ? FILL_CLOSE : _ref$fillClose,
      style = _ref.style,
      itemStyle = _ref.itemStyle,
      captionStyle = _ref.captionStyle,
      childrenStyle = _ref.childrenStyle,
      caption = _ref.caption,
      afterCaptionComp = _ref.afterCaptionComp,
      isDraggable = _ref.isDraggable,
      option = _ref.option,
      onDragStart = _ref.onDragStart,
      onDragEnter = _ref.onDragEnter,
      onDragOver = _ref.onDragOver,
      onDragLeave = _ref.onDragLeave,
      onDrop = _ref.onDrop,
      children = _ref.children;

  var _useToggle = (0, _useToggle2["default"])(!isClose),
      isOpen = _useToggle[0],
      toggleIsOpen = _useToggle[1],
      _hKeyDown = (0, _uiApi.useMemo)(function () {
    return function (evt) {
      var keyCode = evt.keyCode;

      if (keyCode === 13 || keyCode === 27) {
        toggleIsOpen();
      }
    };
  }, []),
      _dndOption = (0, _uiApi.useMemo)(function () {
    return isDraggable ? {
      draggable: true,
      onDragStart: onDragStart.bind(null, option),
      onDrop: onDrop.bind(null, option),
      onDragEnter: onDragEnter,
      onDragOver: onDragOver,
      onDragLeave: onDragLeave
    } : void 0;
  }, [isDraggable, option]),
      _ref2 = isOpen ? [PATH_OPEN, fillOpen, S_BLOCK, 'show-popup', null] : [PATH_CLOSE, fillClose, S_NONE, null, itemStyle],
      _pathV = _ref2[0],
      _fillV = _ref2[1],
      _styleCollapse = _ref2[2],
      _classShow = _ref2[3],
      _itemStyle = _ref2[4];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: (0, _extends2["default"])({}, S_ROOT, style),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({
      role: "button",
      className: CL_CAPTION,
      tabIndex: "0",
      style: (0, _extends2["default"])({}, S_ROOT_CAPTION, _itemStyle),
      onClick: toggleIsOpen,
      onKeyDown: _hKeyDown
    }, _dndOption, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: S_SVG,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
          viewBox: "0 0 16 16",
          width: "100%",
          height: "100%",
          preserveAspectRatio: "none",
          xmlns: "http://www.w3.org/2000/svg",
          style: S_INLINE,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: _pathV,
            fill: _fillV,
            strokeWidth: "1",
            stroke: fillOpen
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: (0, _extends2["default"])({}, S_CAPTION, captionStyle),
        children: caption
      }), afterCaptionComp]
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _classShow,
      style: (0, _extends2["default"])({}, childrenStyle, _styleCollapse),
      children: children
    })]
  });
};
/*
OpenClose.propTypes = {
  isClose: PropTypes.bool,

  style: PropTypes.object,
  styleNotSelected: PropTypes.object,
  captionStyle: PropTypes.object,
  childrenStyle: PropTypes.object,

  caption: PropTypes.string,
  fillOpen: PropTypes.string,
  fillClose: PropTypes.string,

  isDraggable: PropTypes.bool,
  option: PropTypes.object,
  onDragStart: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDrop: PropTypes.func,

  children: PropTypes.oneOfType([
     PropTypes.arrayOf(PropTypes.node),
     PropTypes.node
  ])
}
*/


var _default = OpenClose;
exports["default"] = _default;
//# sourceMappingURL=OpenClose.js.map