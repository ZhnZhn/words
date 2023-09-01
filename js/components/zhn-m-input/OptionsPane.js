"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _ModalPane = _interopRequireDefault(require("../zhn-moleculs/ModalPane"));
var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_SELECT_OPTIONS = "m-select__options",
  S_BT = {
    display: 'block',
    width: '100%',
    textAlign: 'left'
  },
  S_ITEM = {
    color: '#80c040'
  };
const OptionsStack = _ref => {
  let {
    options,
    currentCaption,
    currentValue,
    clItem,
    itemStyle,
    onSelect
  } = _ref;
  return (options || []).map(item => {
    const {
        caption,
        value
      } = item || {},
      _style = value === currentValue && caption === currentCaption ? S_ITEM : void 0;
    return (0, _jsxRuntime.jsx)("button", {
      className: clItem,
      style: {
        ...S_BT,
        ...itemStyle,
        ..._style
      },
      onClick: (0, _uiApi.bindTo)(onSelect, item),
      children: caption
    }, caption);
  });
};
const OptionsPane = _ref2 => {
  let {
    isShow,
    rootStyle,
    options,
    item,
    clItem,
    itemStyle,
    onSelect,
    onClose
  } = _ref2;
  const {
    caption,
    value
  } = item || {};
  return (0, _jsxRuntime.jsx)(_ModalPane.default, {
    style: rootStyle,
    isShow: isShow,
    onClose: onClose,
    children: (0, _jsxRuntime.jsx)(_ShowHide.default, {
      isShow: isShow,
      className: CL_SELECT_OPTIONS,
      style: rootStyle,
      children: (0, _jsxRuntime.jsx)(OptionsStack, {
        options: options,
        currentCaption: caption,
        currentValue: value,
        clItem: clItem,
        itemStyle: itemStyle,
        onSelect: onSelect
      })
    })
  });
};
var _default = OptionsPane;
exports.default = _default;
//# sourceMappingURL=OptionsPane.js.map