"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var S = {
  KEY: {
    textDecoration: 'underline'
  }
};
var EMPTY = '';

var _toCaptionIn = function _toCaptionIn(caption, accessKey) {
  var captionIn = caption == null ? EMPTY : EMPTY + caption,
      _index = captionIn.toLowerCase().indexOf(accessKey);

  if (accessKey && _index !== -1) {
    return {
      before: captionIn.substring(0, _index),
      key: captionIn.substring(_index, _index + 1),
      after: captionIn.substring(_index + 1)
    };
  }

  return {
    captionIn: captionIn
  };
};

var CaptionInput = function CaptionInput(_ref) {
  var className = _ref.className,
      rootStyle = _ref.rootStyle,
      caption = _ref.caption,
      accessKey = _ref.accessKey,
      children = _ref.children;

  var _toCaptionIn2 = _toCaptionIn(caption, accessKey),
      captionIn = _toCaptionIn2.captionIn,
      after = _toCaptionIn2.after,
      key = _toCaptionIn2.key,
      before = _toCaptionIn2.before;

  if (typeof captionIn !== 'undefined') {
    return /*#__PURE__*/_react["default"].createElement("span", {
      className: className,
      style: rootStyle
    }, captionIn, children);
  }

  return /*#__PURE__*/_react["default"].createElement("span", {
    className: className,
    style: rootStyle
  }, /*#__PURE__*/_react["default"].createElement("span", null, before), /*#__PURE__*/_react["default"].createElement("span", {
    style: S.KEY
  }, key), /*#__PURE__*/_react["default"].createElement("span", null, after), children);
};

var _default = CaptionInput;
exports["default"] = _default;
//# sourceMappingURL=CaptionInput.js.map