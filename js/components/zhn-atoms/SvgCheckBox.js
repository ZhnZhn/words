"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _isKeyEnter = _interopRequireDefault(require("./isKeyEnter"));

var _Color = _interopRequireDefault(require("../styles/Color"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
//const DF_COLOR_IS = "#80c040";
var DF_COLOR_IS = "#2f7ed8";
var S = {
  DIV: {
    display: 'inline-block',
    width: 16,
    height: 16,
    cursor: 'pointer'
  },
  SVG: {
    display: 'inline-block'
  }
};

var SvgChecked = function SvgChecked(_ref) {
  var stroke = _ref.stroke;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    //d="M 2,3 L 8,14 14,3"
    d: "M 2,5 L 8,14 14,1",
    strokeWidth: "2",
    strokeLinecap: "round",
    stroke: stroke,
    fill: _Color["default"].BLANK
  });
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var SvgCheckBox = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(SvgCheckBox, _Component);

  /*
  static propTypes = {
    initialValue: PropTypes.bool,
    stroke: PropTypes.string,
    onCheck: PropTypes.func,
    onUnCheck: PropTypes.func
  }
  */
  function SvgCheckBox(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._hClick = function () {
      var _this$props = _this.props,
          onCheck = _this$props.onCheck,
          onUnCheck = _this$props.onUnCheck,
          isChecked = _this.state.isChecked;

      if (!isChecked && _isFn(onCheck)) {
        onCheck((0, _assertThisInitialized2["default"])(_this));
      } else if (_isFn(onUnCheck)) {
        onUnCheck((0, _assertThisInitialized2["default"])(_this));
      }

      _this.setState({
        isChecked: !isChecked
      });
    };

    _this._hKeyDown = function (evt) {
      if ((0, _isKeyEnter["default"])(evt)) {
        evt.preventDefault();

        _this._hClick();
      }
    };

    _this.setUnchecked = function () {
      _this.setState({
        isChecked: false
      });
    };

    var initialValue = props.initialValue;
    _this.state = {
      isChecked: !!initialValue
    };
    return _this;
  }

  var _proto = SvgCheckBox.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        style = _this$props2.style,
        stroke = _this$props2.stroke,
        isChecked = this.state.isChecked,
        _restProps = isChecked ? {
      stroke: DF_COLOR_IS,
      fill: DF_COLOR_IS
    } : {
      stroke: _Color["default"].GREY,
      fill: _Color["default"].BLANK
    };

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      role: "checkbox",
      tabIndex: "0",
      "aria-checked": isChecked,
      style: (0, _extends2["default"])({}, S.DIV, style),
      onClick: this._hClick,
      onKeyDown: this._hKeyDown,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
        viewBox: "0 0 16 16",
        width: "100%",
        height: "100%",
        preserveAspectRatio: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: S.SVG,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("rect", (0, _extends2["default"])({
          x: "1",
          y: "1",
          height: "14",
          width: "14",
          strokeWidth: "2",
          rx: "3",
          strokeLinecap: "round"
        }, _restProps)), isChecked ? /*#__PURE__*/(0, _jsxRuntime.jsx)(SvgChecked, {
          stroke: stroke
        }) : null]
      })
    });
  };

  return SvgCheckBox;
}(_react.Component);

var _default = SvgCheckBox;
exports["default"] = _default;
//# sourceMappingURL=SvgCheckBox.js.map