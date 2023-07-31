"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT = 'bt-raised',
  CL_BT_SPAN = 'bt-raised__span',
  S_PRIMARY_SPAN = {
    color: '#80c040'
  };
const RaisedButton = _ref => {
  let {
    isPrimary,
    className,
    style,
    clDiv,
    caption,
    tabIndex = "0",
    onClick
  } = _ref;
  const _btCl = (0, _uiApi.crCn)(CL_BT, className),
    _spanStyle = isPrimary ? S_PRIMARY_SPAN : void 0;
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    tabIndex: tabIndex,
    className: _btCl,
    style: style,
    onClick: onClick,
    children: (0, _jsxRuntime.jsx)("div", {
      className: clDiv,
      children: (0, _jsxRuntime.jsx)("span", {
        className: CL_BT_SPAN,
        style: _spanStyle,
        children: caption
      })
    })
  });
};
var _default = RaisedButton;
exports.default = _default;
//# sourceMappingURL=RaisedButton.js.map