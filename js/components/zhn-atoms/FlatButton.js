"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _CaptionInput = _interopRequireDefault(require("./CaptionInput"));

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_BT = 'bt-flat',
    CL_BT_SPAN = 'bt-flat__span';

var FlatButton = function FlatButton(_ref) {
  var className = _ref.className,
      rootStyle = _ref.rootStyle,
      clDiv = _ref.clDiv,
      divStyle = _ref.divStyle,
      title = _ref.title,
      caption = _ref.caption,
      accessKey = _ref.accessKey,
      children = _ref.children,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: (0, _crCn["default"])(CL_BT, className),
    style: rootStyle,
    tabIndex: 0,
    title: title,
    accessKey: accessKey,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: clDiv,
      style: divStyle,
      children: [caption ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_CaptionInput["default"], {
        className: CL_BT_SPAN,
        caption: caption,
        accessKey: accessKey
      }) : null, children]
    })
  });
};

var _default = FlatButton;
exports["default"] = _default;
//# sourceMappingURL=FlatButton.js.map