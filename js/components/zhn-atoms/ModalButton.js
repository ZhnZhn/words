"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _CaptionInput = _interopRequireDefault(require("./CaptionInput"));
var _jsxRuntime = require("react/jsx-runtime");
var CL_BT = 'bt-flat',
  CL_BT_SPAN = 'bt-flat__span';
var ModalButton = function ModalButton(_ref2) {
  var style = _ref2.style,
    clDiv = _ref2.clDiv,
    title = _ref2.title,
    caption = _ref2.caption,
    accessKey = _ref2.accessKey,
    children = _ref2.children,
    onClick = _ref2.onClick,
    onReg = _ref2.onReg;
  var _ref = (0, _uiApi.useRef)();

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    if (typeof onReg === 'function') {
      onReg(_ref.current);
    }
  }, []);
  // onReg
  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    ref: _ref,
    className: CL_BT,
    style: style,
    tabIndex: 0,
    title: title,
    accessKey: accessKey,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: clDiv,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CaptionInput["default"], {
        className: CL_BT_SPAN,
        caption: caption,
        accessKey: accessKey,
        children: children
      })
    })
  });
};
var _default = ModalButton;
exports["default"] = _default;
//# sourceMappingURL=ModalButton.js.map