"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _isKeyEnter = _interopRequireDefault(require("./isKeyEnter"));

var CL = 'oc-item not-selected';
var S = {
  ROOT: {
    backgroundColor: '#4d4d4d',
    lineHeight: 1.5
  },
  DIV_SVG: {
    display: 'inline-block',
    width: 16,
    height: 16,
    marginLeft: 8
  },
  SVG: {
    display: 'inline-block'
  },
  CAPTION: {
    paddingLeft: 4,
    verticalAlign: 'top',
    color: 'rgba(164, 135, 212, 1)',
    fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer'
  },
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  }
};
var FILL_OPEN = '#9e9e9e',
    FILL_CLOSE = 'transparent',
    PATH = {
  OPEN: "M 2,14 L 14,14 14,2 2,14",
  CLOSE: "M 2,2 L 14,8 2,14 2,2"
};

var _crStyleConf = function _crStyleConf(_ref) {
  var isOpen = _ref.isOpen,
      fillOpen = _ref.fillOpen,
      fillClose = _ref.fillClose,
      styleNotSelected = _ref.styleNotSelected;
  return isOpen ? {
    _pathV: PATH.OPEN,
    _fillV: fillOpen,
    _divStyle: S.BLOCK,
    _classShow: 'show-popup',
    _styleNotSelected: null
  } : {
    _pathV: PATH.CLOSE,
    _fillV: fillClose,
    _divStyle: S.NONE,
    _classShow: null,
    _styleNotSelected: styleNotSelected
  };
};

var OpenClose2 =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(OpenClose2, _Component);

  function OpenClose2(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._hClick = function () {
      _this.setState(function (prev) {
        return {
          isOpen: !prev.isOpen
        };
      });
    };

    _this._hKeyDown = function (event) {
      if ((0, _isKeyEnter["default"])(event)) {
        _this._hClick();
      }
    };

    var isInitialOpen = props.isInitialOpen;
    _this.state = {
      isOpen: Boolean(isInitialOpen)
    };
    return _this;
  }

  var _proto = OpenClose2.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        styleCaption = _this$props.styleCaption,
        caption = _this$props.caption,
        fillOpen = _this$props.fillOpen,
        fillClose = _this$props.fillClose,
        styleNotSelected = _this$props.styleNotSelected,
        draggableOption = _this$props.draggableOption,
        children = _this$props.children,
        isOpen = this.state.isOpen,
        _crStyleConf2 = _crStyleConf({
      isOpen: isOpen,
      fillOpen: fillOpen,
      fillClose: fillClose,
      styleNotSelected: styleNotSelected
    }),
        _pathV = _crStyleConf2._pathV,
        _fillV = _crStyleConf2._fillV,
        _divStyle = _crStyleConf2._divStyle,
        _classShow = _crStyleConf2._classShow,
        _styleNotSelected = _crStyleConf2._styleNotSelected;

    return _react["default"].createElement("div", {
      style: (0, _extends2["default"])({}, S.ROOT, {}, style)
    }, _react["default"].createElement("div", (0, _extends2["default"])({
      role: "menuitem",
      tabIndex: "0",
      className: CL,
      style: _styleNotSelected,
      onClick: this._hClick,
      onKeyDown: this._hKeyDown
    }, draggableOption), _react["default"].createElement("div", {
      style: S.DIV_SVG
    }, _react["default"].createElement("svg", {
      viewBox: "0 0 16 16",
      width: "100%",
      height: "100%",
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: S.SVG
    }, _react["default"].createElement("path", {
      d: _pathV,
      fill: _fillV,
      strokeWidth: "1",
      stroke: fillOpen
    }))), _react["default"].createElement("span", {
      style: (0, _extends2["default"])({}, S.CAPTION, {}, styleCaption)
    }, caption)), _react["default"].createElement("div", {
      className: _classShow,
      style: _divStyle
    }, children));
  };

  return OpenClose2;
}(_react.Component);

OpenClose2.defaultProps = {
  fillOpen: FILL_OPEN,
  fillClose: FILL_CLOSE
};
var _default = OpenClose2;
exports["default"] = _default;
//# sourceMappingURL=OpenClose2.js.map