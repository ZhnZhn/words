"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _itemStore = require("../../flux/itemStore");
var _jsxRuntime = require("preact/jsx-runtime");
const S_LABEL = {
  position: 'relative',
  float: 'right',
  top: 9,
  display: 'inline-block',
  color: '#2f7ed8',
  paddingRight: 10,
  fontSize: '16px',
  fontWeight: 'bold'
};
const LimitLabel = _ref => {
  let {
    style
  } = _ref;
  const [value, setValue] = (0, _uiApi.useState)('');
  (0, _itemStore.useLimitRemaining)(limitRemaining => {
    if (limitRemaining != null) {
      setValue(limitRemaining);
    }
  });
  return (0, _jsxRuntime.jsx)("span", {
    style: {
      ...S_LABEL,
      ...style
    },
    children: value
  });
};
var _default = LimitLabel;
exports.default = _default;
//# sourceMappingURL=LimitLabel.js.map