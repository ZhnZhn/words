"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _Comp = _interopRequireDefault(require("../Comp"));

//import PropTypes from "prop-types";
var InputSelect = _Comp["default"].InputSelect,
    SvgCheckBox = _Comp["default"].SvgCheckBox,
    FlatButton = _Comp["default"].FlatButton;
var CL_DIV = 'bt-flat__div';
var S = {
  SELECT: {
    ROOT: {
      width: 280
    }
  },
  CHB_ROW: {
    paddingTop: 28,
    paddingLeft: 22
  },
  TEXT: {
    display: 'inline-block',
    paddingLeft: 8,
    fontWeight: 'bold',
    userSelect: 'none'
  }
};
var THEME_OPTIONS = [{
  caption: 'Grey',
  value: 'GREY'
}, {
  caption: 'Sand',
  value: 'SAND'
}, {
  caption: 'White',
  value: 'WHITE'
}],
    DF_THEME = THEME_OPTIONS[0];

var CardUi = function CardUi(_ref) {
  var style = _ref.style,
      buttonsStyle = _ref.buttonsStyle,
      btStyle = _ref.btStyle,
      chbStroke = _ref.chbStroke,
      onSetTheme = _ref.onSetTheme,
      onCheckAutoSave = _ref.onCheckAutoSave,
      onUncheckAutoSave = _ref.onUncheckAutoSave,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(InputSelect, {
      styleConfig: S.SELECT,
      caption: "Theme (Default: Grey)",
      initItem: DF_THEME,
      options: THEME_OPTIONS,
      onSelect: onSetTheme
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S.CHB_ROW,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(SvgCheckBox, {
        initialValue: true,
        stroke: chbStroke,
        onCheck: onCheckAutoSave,
        onUnCheck: onUncheckAutoSave
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: S.TEXT,
        children: "AutoSave on Add to Watch List"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: buttonsStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(FlatButton, {
        rootStyle: btStyle,
        clDiv: CL_DIV,
        caption: "Close",
        title: "Close Dialog",
        onClick: onClose
      })
    })]
  });
};
/*
CardUi.propTypes = {
  style: PropTypes.object,
  buttonsStyle: PropTypes.object,
  btStyle: PropTypes.object,
  onSetTheme: PropTypes.func,
  onCheckAutoSave: PropTypes.func,
  onUncheckAutoSave: PropTypes.func,
  onClose: PropTypes.func
}
*/


var _default = CardUi;
exports["default"] = _default;
//# sourceMappingURL=CardUi.js.map