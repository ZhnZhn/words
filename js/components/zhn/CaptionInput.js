"use strict";

exports.__esModule = true;
exports.default = void 0;
var _has = require("../has");
var _jsxRuntime = require("preact/jsx-runtime");
const S_KEY = {
  textDecoration: 'underline'
};
const _crCaptionEl = (caption, accessKey) => {
  const captionIn = caption || '',
    _index = (0, _has.hasAccessKey)(accessKey) ? captionIn.toLowerCase().indexOf(accessKey) : -1;
  return _index === -1 ? captionIn : (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)("span", {
      children: captionIn.slice(0, _index)
    }), (0, _jsxRuntime.jsx)("span", {
      style: S_KEY,
      children: captionIn.slice(_index, _index + 1)
    }), (0, _jsxRuntime.jsx)("span", {
      children: captionIn.slice(_index + 1)
    })]
  });
};
const CaptionInput = _ref => {
  let {
    className,
    style,
    caption,
    accessKey,
    children
  } = _ref;
  const _captionEl = _crCaptionEl(caption, accessKey);
  return (0, _jsxRuntime.jsxs)("span", {
    className: className,
    style: style,
    children: [_captionEl, children]
  });
};
var _default = exports.default = CaptionInput;
//# sourceMappingURL=CaptionInput.js.map