"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _CaptionInput = _interopRequireDefault(require("./CaptionInput"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT = 'bt-flat',
  CL_BT_SPAN = 'bt-flat__span';
const ModalButton = _ref2 => {
  let {
    style,
    clDiv,
    title,
    caption,
    accessKey,
    children,
    onClick,
    onReg
  } = _ref2;
  const _ref = (0, _uiApi.useRef)();

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    if (typeof onReg === 'function') {
      onReg(_ref.current);
    }
  }, []);
  // onReg
  /*eslint-enable react-hooks/exhaustive-deps */

  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    ref: _ref,
    className: CL_BT,
    style: style,
    tabIndex: 0,
    title: title,
    accessKey: accessKey,
    onClick: onClick,
    children: (0, _jsxRuntime.jsx)("div", {
      className: clDiv,
      children: (0, _jsxRuntime.jsx)(_CaptionInput.default, {
        className: CL_BT_SPAN,
        caption: caption,
        accessKey: accessKey,
        children: children
      })
    })
  });
};
var _default = exports.default = ModalButton;
//# sourceMappingURL=ModalButton.js.map