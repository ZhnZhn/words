"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _CaptionInput = _interopRequireDefault(require("./CaptionInput"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT_FLAT = "bt-flat",
  CL_BT_SPAN = `${CL_BT_FLAT}__span`;
const FlatButton = _ref => {
  let {
    ariaLabel,
    ariaHaspopup,
    refBt,
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
    "aria-label": ariaLabel,
    "aria-haspopup": ariaHaspopup,
    ref: refBt,
    type: "button",
    className: (0, _styleFn.crCn)(CL_BT_FLAT, className),
    style: rootStyle,
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
var _default = exports.default = FlatButton;
//# sourceMappingURL=FlatButton.js.map