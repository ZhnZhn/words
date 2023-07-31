"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _CaptionInput = _interopRequireDefault(require("./CaptionInput"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT = 'bt-flat',
  CL_BT_SPAN = 'bt-flat__span';
const FlatButton = _ref => {
  let {
    className,
    rootStyle,
    clDiv,
    divStyle,
    title,
    caption,
    accessKey,
    children,
    onClick
  } = _ref;
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: (0, _uiApi.crCn)(CL_BT, className),
    style: rootStyle,
    tabIndex: 0,
    title: title,
    accessKey: accessKey,
    onClick: onClick,
    children: (0, _jsxRuntime.jsxs)("div", {
      className: clDiv,
      style: divStyle,
      children: [caption ? (0, _jsxRuntime.jsx)(_CaptionInput.default, {
        className: CL_BT_SPAN,
        caption: caption,
        accessKey: accessKey
      }) : null, children]
    })
  });
};
var _default = FlatButton;
exports.default = _default;
//# sourceMappingURL=FlatButton.js.map