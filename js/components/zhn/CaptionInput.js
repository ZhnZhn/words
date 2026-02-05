"use strict";

exports.__esModule = true;
exports.default = void 0;
var _has = require("../has");
var _styleFn = require("../styleFn");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_UNDERLINE = (0, _styleFn.crUnderline)();
const _crCaptionEl = (caption, accessKey) => {
  const captionIn = caption || '',
    _index = (0, _has.hasAccessKey)(accessKey) ? captionIn.toLowerCase().indexOf(accessKey) : -1;
  return _index === -1 ? captionIn : (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)("span", {
      children: captionIn.slice(0, _index)
    }), (0, _jsxRuntime.jsx)("span", {
      className: CL_UNDERLINE,
      children: captionIn.slice(_index, _index + 1)
    }), (0, _jsxRuntime.jsx)("span", {
      children: captionIn.slice(_index + 1)
    })]
  });
};
const CaptionInput = props => {
  const _captionEl = _crCaptionEl(props.caption, props.accessKey);
  return (0, _jsxRuntime.jsxs)("span", {
    className: props.className,
    style: props.style,
    children: [_captionEl, props.children]
  });
};
var _default = exports.default = CaptionInput;
//# sourceMappingURL=CaptionInput.js.map