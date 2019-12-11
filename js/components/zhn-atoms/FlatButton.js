"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _CaptionInput = _interopRequireDefault(require("./CaptionInput"));

var CL = {
  BT: 'bt-flat',
  BT_SPAN: 'bt-flat__span'
};

var FlatButton = function FlatButton(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      rootStyle = _ref.rootStyle,
      clDiv = _ref.clDiv,
      divStyle = _ref.divStyle,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      caption = _ref.caption,
      accessKey = _ref.accessKey,
      children = _ref.children,
      onClick = _ref.onClick;
  return _react["default"].createElement("button", {
    className: CL.BT + " " + className,
    style: rootStyle,
    tabIndex: 0,
    title: title,
    accessKey: accessKey,
    onClick: onClick
  }, _react["default"].createElement("div", {
    className: clDiv,
    style: divStyle
  }, caption ? _react["default"].createElement(_CaptionInput["default"], {
    className: CL.BT_SPAN,
    caption: caption,
    accessKey: accessKey
  }) : null, children));
};

var _default = FlatButton;
exports["default"] = _default;
//# sourceMappingURL=FlatButton.js.map