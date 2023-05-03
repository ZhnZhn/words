"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _has = require("../has");
var _jsxRuntime = require("react/jsx-runtime");
var S_KEY = {
  textDecoration: 'underline'
};
var _crCaptionEl = function _crCaptionEl(caption, accessKey) {
  var captionIn = caption || '',
    _index = (0, _has.hasAccessKey)(accessKey) ? captionIn.toLowerCase().indexOf(accessKey) : -1;
  return _index === -1 ? captionIn : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: captionIn.slice(0, _index)
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_KEY,
      children: captionIn.slice(_index, _index + 1)
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: captionIn.slice(_index + 1)
    })]
  });
};
var CaptionInput = function CaptionInput(_ref) {
  var className = _ref.className,
    style = _ref.style,
    caption = _ref.caption,
    accessKey = _ref.accessKey,
    children = _ref.children;
  var _captionEl = _crCaptionEl(caption, accessKey);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    className: className,
    style: style,
    children: [_captionEl, children]
  });
};
var _default = CaptionInput;
exports["default"] = _default;
//# sourceMappingURL=CaptionInput.js.map