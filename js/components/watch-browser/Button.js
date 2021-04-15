"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _FlatButton = _interopRequireDefault(require("../zhn-atoms/FlatButton"));

var _RaisedButton = _interopRequireDefault(require("../zhn-atoms/RaisedButton"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_DIV = 'bt-flat__div';
var S = {
  BT_ROOT: {
    color: 'rgb(35, 47, 59)'
  }
};

var Clear = function Clear(_ref) {
  var style = _ref.style,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
    rootStyle: (0, _extends2["default"])({}, S.BT_ROOT, style),
    clDiv: CL_DIV,
    caption: "Clear",
    title: "Clear Input",
    onClick: onClick
  });
};

var Close = function Close(_ref2) {
  var style = _ref2.style,
      onClick = _ref2.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
    rootStyle: (0, _extends2["default"])({}, S.BT_ROOT, style),
    clDiv: CL_DIV,
    caption: "Close",
    title: "Close Dialog",
    onClick: onClick
  });
};

var Primary = function Primary(_ref3) {
  var style = _ref3.style,
      caption = _ref3.caption,
      title = _ref3.title,
      onClick = _ref3.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
    rootStyle: (0, _extends2["default"])({}, S.BT_ROOT, style),
    clDiv: CL_DIV,
    caption: caption,
    title: title //isPrimary={true}
    ,
    onClick: onClick
  });
};

var _default = {
  Primary: Primary,
  Clear: Clear,
  Close: Close,
  Flat: _FlatButton["default"],
  Raised: _RaisedButton["default"]
};
exports["default"] = _default;
//# sourceMappingURL=Button.js.map