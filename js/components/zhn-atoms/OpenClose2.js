"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var styles = {
  rootDiv: {
    backgroundColor: '#4D4D4D',
    //backgroundColor: 'inherit',
    lineHeight: 1.5
  },
  divSvg: {
    display: 'inline-block',
    width: '16px',
    height: '16px',
    marginLeft: '8px'
  },
  labelCaption: {
    paddingLeft: '4px',
    verticalAlign: 'top',
    color: 'rgba(164, 135, 212, 1)',
    fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer'
  },
  itemRow: {
    backgroundColor: '#404040'
  }
};
var FILL_OPEN = '#9e9e9e',
    FILL_CLOSE = 'transparent';
var pathOpen = "M 2,14 L 14,14 14,2 2,14";
var pathClose = "M 2,2 L 14,8 2,14 2,2";

var OpenClose2 =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(OpenClose2, _Component);

  function OpenClose2(props) {
    var _this;

    _this = _Component.call(this) || this;

    _this._handleClickOpenClose = function () {
      _this.setState(function (prev) {
        return {
          isOpen: !prev.isOpen
        };
      });
    };

    var isClose = props.isClose,
        fillOpen = props.fillOpen,
        fillClose = props.fillClose;
    _this.state = {
      isOpen: isClose ? false : true,
      fillOpen: fillOpen || FILL_OPEN,
      fillClose: fillClose || FILL_CLOSE
    };
    return _this;
  }

  var _proto = OpenClose2.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        styleNotSelected = _this$props.styleNotSelected,
        styleCaption = _this$props.styleCaption,
        caption = _this$props.caption,
        isDraggable = _this$props.isDraggable,
        option = _this$props.option,
        onDragStart = _this$props.onDragStart,
        onDragEnter = _this$props.onDragEnter,
        onDragOver = _this$props.onDragOver,
        onDragLeave = _this$props.onDragLeave,
        onDrop = _this$props.onDrop,
        children = _this$props.children,
        _dragOption = isDraggable ? {
      draggable: true,
      onDragStart: onDragStart.bind(null, option),
      onDrop: onDrop.bind(null, option),
      onDragEnter: onDragEnter,
      onDragOver: onDragOver,
      onDragLeave: onDragLeave
    } : undefined;

    var _pathV, _fillV, _displayDivStyle, _classShow, _styleNotSelected;

    if (this.state.isOpen) {
      _pathV = pathOpen;
      _fillV = this.state.fillOpen;
      _displayDivStyle = 'block';
      _classShow = 'show-popup';
      _styleNotSelected = null;
    } else {
      _pathV = pathClose;
      _fillV = this.state.fillClose;
      _displayDivStyle = 'none';
      _classShow = null;
      _styleNotSelected = styleNotSelected;
    }

    return _react["default"].createElement("div", {
      style: Object.assign({}, styles.rootDiv, style)
    }, _react["default"].createElement("div", (0, _extends2["default"])({
      className: "not-selected",
      style: _styleNotSelected,
      onClick: this._handleClickOpenClose
    }, _dragOption), _react["default"].createElement("div", {
      style: styles.divSvg
    }, _react["default"].createElement("svg", {
      viewBox: "0 0 16 16",
      width: "100%",
      height: "100%",
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        display: 'inline-block'
      }
    }, _react["default"].createElement("path", {
      d: _pathV,
      fill: _fillV,
      strokeWidth: "1",
      stroke: this.state.fillOpen
    }))), _react["default"].createElement("span", {
      style: Object.assign({}, styles.labelCaption, styleCaption)
    }, caption)), _react["default"].createElement("div", {
      className: _classShow,
      style: {
        display: _displayDivStyle
      }
    }, children));
  };

  return OpenClose2;
}(_react.Component);

var _default = OpenClose2;
exports["default"] = _default;
//# sourceMappingURL=OpenClose2.js.map