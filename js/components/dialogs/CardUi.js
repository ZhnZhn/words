"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));
var _SvgCheckBox = _interopRequireDefault(require("../zhn-atoms/SvgCheckBox"));
var _FlatButton = _interopRequireDefault(require("../zhn-atoms/FlatButton"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from "prop-types";

const CL_DIV = 'bt-flat__div';
const S_SELECT = {
    ROOT: {
      width: 280
    }
  },
  S_CHB_ROW = {
    paddingTop: 28,
    paddingLeft: 22
  },
  S_TEXT = {
    display: 'inline-block',
    paddingLeft: 8,
    fontWeight: 'bold',
    userSelect: 'none'
  },
  THEME_OPTIONS = [{
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
const CardUi = _ref => {
  let {
    style,
    buttonsStyle,
    chbStroke,
    onSetTheme,
    onCheckAutoSave,
    onUncheckAutoSave,
    onClose
  } = _ref;
  return (0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [(0, _jsxRuntime.jsx)(_InputSelect.default, {
      styleConfig: S_SELECT,
      caption: "Theme (Default: Grey)",
      initItem: DF_THEME,
      options: THEME_OPTIONS,
      onSelect: onSetTheme
    }), (0, _jsxRuntime.jsxs)("div", {
      style: S_CHB_ROW,
      children: [(0, _jsxRuntime.jsx)(_SvgCheckBox.default, {
        initialValue: true,
        stroke: chbStroke,
        onCheck: onCheckAutoSave,
        onUnCheck: onUncheckAutoSave
      }), (0, _jsxRuntime.jsx)("span", {
        style: S_TEXT,
        children: "AutoSave on Add to Watch List"
      })]
    }), (0, _jsxRuntime.jsx)("div", {
      style: buttonsStyle,
      children: (0, _jsxRuntime.jsx)(_FlatButton.default, {
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
exports.default = _default;
//# sourceMappingURL=CardUi.js.map