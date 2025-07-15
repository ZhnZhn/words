"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _bindTo = require("../../utils/bindTo");
var _uiApi = require("../uiApi");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _Svg = _interopRequireDefault(require("./svg/Svg"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types';

const CL_CAPTION = 'open-close not-selected',
  S_BT = {
    paddingTop: 2,
    paddingLeft: 8,
    paddingBottom: 2,
    lineHeight: 2.2
  },
  S_SVG = {
    display: 'inline-block',
    width: 16,
    height: 16,
    position: 'relative',
    top: 3
  },
  S_CAPTION = {
    color: '#9e9e9e',
    paddingLeft: 4
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
const OpenClose = _ref => {
  let {
    isClose = true,
    fillOpen = FILL_OPEN,
    fillClose = FILL_CLOSE,
    style,
    itemStyle,
    captionStyle,
    childrenStyle,
    caption,
    afterCaptionComp,
    isDraggable,
    option,
    onDragStart,
    onDragEnter,
    onDragOver,
    onDragLeave,
    onDrop,
    children
  } = _ref;
  const [isOpen, toggleIsOpen] = (0, _useToggle.default)(!isClose)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hKeyDown = (0, _uiApi.useMemo)(() => evt => {
      const {
        keyCode
      } = evt;
      if (keyCode === 13 || keyCode === 27) {
        toggleIsOpen();
      }
    }, [])
    // toggleIsOpen
    /*eslint-enable react-hooks/exhaustive-deps */

    /*eslint-disable react-hooks/exhaustive-deps */,
    _dndOption = (0, _uiApi.useMemo)(() => isDraggable ? {
      draggable: true,
      onDragStart: (0, _bindTo.bindTo)(onDragStart, option),
      onDrop: (0, _bindTo.bindTo)(onDrop, option),
      onDragEnter,
      onDragOver,
      onDragLeave
    } : void 0, [isDraggable, option])
    // onDragStart, onDrop, onDragEnter, onDragOver, onDragLeave
    /*eslint-enable react-hooks/exhaustive-deps */,
    [_pathV, _fillV, _styleCollapse, _classShow, _itemStyle] = isOpen ? [PATH_OPEN, fillOpen, S_BLOCK, 'show-popup', null] : [PATH_CLOSE, fillClose, S_NONE, null, itemStyle];
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsxs)("div", {
      role: "button",
      className: CL_CAPTION,
      tabIndex: "0",
      style: {
        ...S_BT,
        ...style,
        ..._itemStyle
      },
      onClick: toggleIsOpen,
      onKeyDown: _hKeyDown,
      ..._dndOption,
      children: [(0, _jsxRuntime.jsx)(_Svg.default, {
        style: S_SVG,
        w: "16",
        children: (0, _jsxRuntime.jsx)("path", {
          d: _pathV,
          fill: _fillV,
          strokeWidth: "1",
          stroke: fillOpen
        })
      }), (0, _jsxRuntime.jsx)("span", {
        style: {
          ...S_CAPTION,
          ...captionStyle
        },
        children: caption
      }), afterCaptionComp]
    }), (0, _jsxRuntime.jsx)("div", {
      className: _classShow,
      style: {
        ...childrenStyle,
        ..._styleCollapse
      },
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
var _default = exports.default = OpenClose;
//# sourceMappingURL=OpenClose.js.map