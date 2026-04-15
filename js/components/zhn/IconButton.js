"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.BtCloseAll = exports.BtAddBookmark = void 0;
var _FlatButton = _interopRequireDefault(require("./FlatButton"));
var _SvgCloseAll = _interopRequireDefault(require("./svg/SvgCloseAll"));
var _SvgAddBookmark = _interopRequireDefault(require("./svg/SvgAddBookmark"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_BT = {
  width: 36
};
const BtCloseAll = props => (0, _jsxRuntime.jsx)(_FlatButton.default, {
  ariaLabel: "Close items",
  title: "Close items",
  className: props.className,
  style: {
    ...S_BT,
    ...props.style
  },
  onClick: props.onClick,
  children: (0, _jsxRuntime.jsx)(_SvgCloseAll.default, {})
});
exports.BtCloseAll = BtCloseAll;
const BtAddBookmark = props => (0, _jsxRuntime.jsx)(_FlatButton.default, {
  ariaLabel: props.title,
  title: props.title,
  className: props.className,
  style: {
    ...S_BT,
    ...props.style
  },
  onClick: props.onClick,
  children: (0, _jsxRuntime.jsx)(_SvgAddBookmark.default, {})
});
exports.BtAddBookmark = BtAddBookmark;
//# sourceMappingURL=IconButton.js.map