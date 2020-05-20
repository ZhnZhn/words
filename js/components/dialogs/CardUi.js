"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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
  return _react["default"].createElement("div", {
    style: style
  }, _react["default"].createElement(InputSelect, {
    styleConfig: S.SELECT,
    caption: "Theme (Default: Grey)",
    initItem: DF_THEME,
    options: THEME_OPTIONS,
    onSelect: onSetTheme
  }), _react["default"].createElement("div", {
    style: S.CHB_ROW
  }, _react["default"].createElement(SvgCheckBox, {
    initialValue: true,
    stroke: chbStroke,
    onCheck: onCheckAutoSave,
    onUnCheck: onUncheckAutoSave
  }), _react["default"].createElement("span", {
    style: S.TEXT
  }, "AutoSave on Add to Watch List")), _react["default"].createElement("div", {
    style: buttonsStyle
  }, _react["default"].createElement(FlatButton, {
    rootStyle: btStyle,
    clDiv: CL_DIV,
    caption: "Close",
    title: "Close Dialog",
    onClick: onClose
  })));
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