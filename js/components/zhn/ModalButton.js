"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _CaptionInput = _interopRequireDefault(require("./CaptionInput"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT_FLAT = 'bt-flat',
  CL_BT_SPAN = `${CL_BT_FLAT}__span`;
const ModalButton = props => (0, _jsxRuntime.jsx)("button", {
  ref: props.refEl,
  type: "button",
  className: CL_BT_FLAT,
  style: props.style,
  title: props.title,
  accessKey: props.accessKey,
  onClick: props.onClick,
  children: (0, _jsxRuntime.jsx)(_CaptionInput.default, {
    className: CL_BT_SPAN,
    caption: props.caption,
    accessKey: props.accessKey,
    children: props.children
  })
});
var _default = exports.default = ModalButton;
//# sourceMappingURL=ModalButton.js.map