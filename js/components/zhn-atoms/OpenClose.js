"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
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
};
var FILL_OPEN = '#9e9e9e',
    FILL_CLOSE = 'transparent',
    PATH_OPEN = "M 2,14 L 14,14 14,2 2,14",
    PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";

var OpenClose = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(OpenClose, _Component);

  /*
  static propTypes = {
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
  function OpenClose(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleToggle = function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    };

    _this._handleKeyDown = function (event) {
      if (event.keyCode === 13 || event.keyCode === 27) {
        _this._handleToggle();
      }
    };

    _this.state = {
      isOpen: !props.isClose
    };
    return _this;
  }

  var _proto = OpenClose.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        itemStyle = _this$props.itemStyle,
        captionStyle = _this$props.captionStyle,
        childrenStyle = _this$props.childrenStyle,
        caption = _this$props.caption,
        fillOpen = _this$props.fillOpen,
        fillClose = _this$props.fillClose,
        afterCaptionComp = _this$props.afterCaptionComp,
        isDraggable = _this$props.isDraggable,
        option = _this$props.option,
        onDragStart = _this$props.onDragStart,
        onDragEnter = _this$props.onDragEnter,
        onDragOver = _this$props.onDragOver,
        onDragLeave = _this$props.onDragLeave,
        onDrop = _this$props.onDrop,
        children = _this$props.children,
        _dndOption = isDraggable ? {
      draggable: true,
      onDragStart: onDragStart.bind(null, option),
      onDrop: onDrop.bind(null, option),
      onDragEnter: onDragEnter,
      onDragOver: onDragOver,
      onDragLeave: onDragLeave
    } : void 0;

    var _pathV, _fillV, _styleCollapse, _classShow, _itemStyle;

    if (this.state.isOpen) {
      _pathV = PATH_OPEN;
      _fillV = fillOpen;
      _styleCollapse = S_BLOCK;
      _classShow = 'show-popup';
      _itemStyle = null;
    } else {
      _pathV = PATH_CLOSE;
      _fillV = fillClose;
      _styleCollapse = S_NONE;
      _classShow = null;
      _itemStyle = itemStyle;
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: (0, _extends2["default"])({}, S_ROOT, style),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({
        role: "button",
        className: CL_CAPTION,
        tabIndex: "0",
        style: (0, _extends2["default"])({}, S_ROOT_CAPTION, _itemStyle),
        onClick: this._handleToggle,
        onKeyDown: this._handleKeyDown
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

  return OpenClose;
}(_react.Component);

OpenClose.defaultProps = {
  isClose: true,
  fillOpen: FILL_OPEN,
  fillClose: FILL_CLOSE
};
var _default = OpenClose;
exports["default"] = _default;
//# sourceMappingURL=OpenClose.js.map